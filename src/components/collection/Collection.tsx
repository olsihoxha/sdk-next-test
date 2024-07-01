import { FunctionalComponent } from 'preact';
import { CollectionProps } from '@/build-types';
import { loc, useClient } from '@/signals';
import { useEffect, useMemo, useState } from 'preact/hooks';
import { IFilterValue, LiquidTaxonomy } from '@liquidcommercedev/sdk';
import { mapCategoryName, pluralizeCategoryName } from '@/functions/categoryName';
import { Suspense, useCallback } from 'preact/compat';
import ProductCarousel from '@/components/product-carousel';

const Collection: FunctionalComponent<CollectionProps> = ({
  category,
  onSeeAllClick,
  onCardClick,
}) => {
  const { client } = useClient();
  const [allCategories, setAllCategories] = useState<IFilterValue[]>([]);
  const [categories, setCategories] = useState<IFilterValue[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!category) return;

    setLoading(true);
    client
      .catalog({
        filters: [{ key: 'categories', values: [category] }],
        loc: loc.value,
      })
      .then((catalog) => {
        const newCategories = catalog.navigation.filters.find(
          (filter) => filter.bucket === 'categories',
        ).values;
        newCategories.shift();
        setAllCategories(newCategories);
        setCategories(newCategories.slice(0, 3));
        setHasMore(newCategories.length > 3);
      })
      .finally(() => setLoading(false));
  }, [category, client]);

  const categoryName = useMemo(() => {
    if (!category) return '';
    return pluralizeCategoryName(mapCategoryName(category));
  }, [category]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !loading && hasMore) {
      setLoading(true);
      const startIndex = categories.length;
      const endIndex = startIndex + 3;
      setCategories((prevCategories) => [
        ...prevCategories,
        ...allCategories.slice(startIndex, endIndex),
      ]);
      setHasMore(endIndex < allCategories.length);
      setLoading(false);
    }
  }, [allCategories, categories.length, hasMore, loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore, allCategories, categories, handleScroll]);

  return (
    <section className="flex flex-col gap-12">
      <h1 className="text-lg md:text-2xl font-bold">Browse All {categoryName}</h1>
      <Suspense fallback={<div className="text-center text-gray-500">Loading...</div>}>
        {categories.map((cat) => (
          <ProductCarousel
            key={cat.value}
            category={cat.value as LiquidTaxonomy}
            onSeeAllClick={() => onSeeAllClick?.(cat.value as LiquidTaxonomy)}
            onCardClick={onCardClick}
          />
        ))}
      </Suspense>
    </section>
  );
};

export default Collection;
