import { BannerItem } from '@/build-types';

interface Props {
  item: BannerItem;
}

const SwiperItem = ({ item }: Props) => (
  <div
    className={`relative overflow-hidden bg-cover rounded-2xl bg-center	 bg-no-repeat text-center flex-shrink-0 object-cover w-full h-full`}
  >
    <div class="absolute left-5 bottom-[19px] h-full w-full overflow-hidden bg-fixed">
      <div class="flex h-full w-full items-end">
        <div className="">{item.component}</div>
      </div>
    </div>
  </div>
);

export default SwiperItem;
