import { FunctionalComponent } from 'preact';
import {
  Bars3CenterLeftOutline,
  ClockOutline,
  TruckOutline,
} from '@liquidcommerceteam/preact-heroicons';
import { useStyles } from '../../../../../common/context/ThemeContext/ThemeContext';

const FulfillmentHeader: FunctionalComponent<{
  type: 'on_demand' | 'shipping' | 'engraved' | 'shipped';
}> = ({ type }) => {
  const styles = useStyles();

  return (
    <>
      <div
        className={'flex justify-start items-center text-xl font-bold'}
        style={{
          fontFamily: styles.text.headings.font,
          color: styles.text.headings.color,
        }}
      >
        {type === 'on_demand' ? (
          <div className={'flex justify-start items-center'}>
            <Bars3CenterLeftOutline
              className={'text-sm rotate-180 -mr-[2px]'}
              style={{ strokeWidth: '0.14em' }}
            />
            <ClockOutline style={{ strokeWidth: '0.14em' }} />
          </div>
        ) : (
          <TruckOutline style={{ strokeWidth: '0.14em' }} />
        )}
        <div className={'ml-2'}>{type === 'on_demand' ? 'Same Day Delivery' : 'Shipping'}</div>
      </div>
    </>
  );
};

export default FulfillmentHeader;
