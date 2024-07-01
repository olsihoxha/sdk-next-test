import type { ComponentChildren } from 'preact';
import { AppContext, ProductDetailConfig } from './AppContext';
import { ICatalogParams, IProduct, IRetailer } from '@liquidcommercedev/sdk';
import {
  loc,
  setProduct,
  setProducts,
  setRetailers,
  setSelectedProduct,
  useClient,
  useCatalogParams,
} from '@/signals';
import { useEffect, useState } from 'preact/hooks';
import { useRef } from 'preact/compat';

function AppProvider({
  children,
  config,
  upc,
}: {
  children: ComponentChildren;
  config?: ProductDetailConfig;
  upc?: string;
}) {
  const updateDebounceRef = useRef<any>();
  const { client: liquid } = useClient();
  const { setCatalogParams } = useCatalogParams();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!liquid || !liquid.cart || !liquid.product) {
      return;
    }
    clearTimeout(updateDebounceRef.current);
    updateDebounceRef.current = setTimeout(async () => {
      try {
        // PRODUCT
        if (upc) {
          const { products, retailers } = await liquid.product({
            upcs: [upc],
            loc: loc.value,
            lean: false,
          });

          setProducts(products as IProduct[]);
          setRetailers(retailers as IRetailer[]);

          const firstProduct = products[0];
          setProduct(firstProduct as IProduct);

          const fulfillmentId = firstProduct.sizes[0].variants[0].fulfillments[0];
          const filteredRetailersIds = firstProduct.sizes[0].variants.map(
            (variant) => variant.retailerId,
          );
          const filteredRetailers = retailers.filter(
            (retailer) => filteredRetailersIds.indexOf(retailer.id) >= 0,
          );
          const retailer = filteredRetailers[0];

          const fulfillment = retailer.fulfillments.find(
            (fulfillment) => fulfillment.id === fulfillmentId,
          );

          setSelectedProduct({
            size: firstProduct.sizes[0],
            variant: firstProduct.sizes[0].variants[0],
            quantity: 1,
            fulfillment,
            retailer: retailer as IRetailer,
            engravingMessage: [],
          });
        }

        setIsReady(true);
      } catch (e) {
        console.error('initError', e);
      }
    }, 100);
  }, [liquid, upc]);

  //Catalog
  const getCatalog = async (params: ICatalogParams) => {
    setCatalogParams(params);
    const catalog = await liquid.catalog(params);
    return catalog;
  };

  if (isReady) {
    return (
      <AppContext.Provider
        value={{
          config,
          getCatalog,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
