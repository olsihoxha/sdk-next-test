import ProductCard from '@/atoms/cards/ProductCard';

export const labels = ['BestSeller', 'HotSale', 'Presale', 'OutOfStock', null];
export const backgrounds = ['#E1EFFE', '#FDE8E8', '#FDF6B2', '#F3F4F6'];
export const colors = ['#1E429F', '#9B1C1C', '#723B13', '#111928'];
export const icons = ['FireSolid', 'GiftSolid', 'HeartSolid', 'ShoppingCartSolid', null];

const Cards = ({ products, onClick }) => {
  return (
    <>
      <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 md:gap-6 xs:gap-3 ">
        {Object.keys(products).map((key) => {
          const product = products[key];
          return (
            <ProductCard
              automation-id={`product-card-${key}`}
              key={key}
              badge={{
                label: labels[Math.ceil(Math.random() * labels.length - 1)],
                background: backgrounds[Math.ceil(Math.random() * backgrounds.length - 1)],
                color: colors[Math.ceil(Math.random() * colors.length - 1)],
                icon:
                  icons[Math.ceil(Math.random() * icons.length - 1)] !== null
                    ? icons[Math.ceil(Math.random() * icons.length - 1)]
                    : null,
              }}
              product={product}
              onClick={onClick}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cards;
