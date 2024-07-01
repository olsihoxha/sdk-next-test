import { useClient } from '@/signals';
import { useState } from 'preact/hooks';
import { useEffect } from 'react';

interface ITrackingMapProps {
  sx?: string;
  retailerAddress?: string;
  shippingAddress?: string;
}
interface ICoordinates {
  lat: number;
  long: number;
}

const TrackingMap = ({ sx, retailerAddress, shippingAddress }: ITrackingMapProps) => {
  const { client } = useClient();

  const [retailerCoordinates, setRetailerCoordiantes] = useState<ICoordinates | undefined>(
    undefined,
  );
  const [shippingCoordinates, setShippingCoordiantes] = useState<ICoordinates | undefined>(
    undefined,
  );
  const [imageURL, setImageURL] = useState('');

  const getCoordinates = async (address: string) => {
    const places = await client.address({
      input: address,
    });

    const result = await client.address({
      id: places[0].id,
    });
    return result.coords;
  };

  if (!shippingCoordinates) {
    getCoordinates(shippingAddress).then((coords) => setShippingCoordiantes(coords));
  }

  if (!retailerCoordinates) {
    getCoordinates(retailerAddress).then((coords) => setRetailerCoordiantes(coords));
  }

  useEffect(() => {
    setImageURL(
      `https://maps.googleapis.com/maps/api/staticmap?scale=2&zoom=13&size=1280x1280&maptype=terrain&markers=color:blue%7Clabel:A%7C${retailerCoordinates?.lat},${retailerCoordinates?.long}&markers=color:navy%7Clabel:B%7C${shippingCoordinates?.lat},${shippingCoordinates?.long}&key=AIzaSyD_LT-4RhPTrURUZjrrDtB3zIor0WFO6hE`,
    );
  }, [retailerCoordinates, shippingCoordinates]);

  return (
    <div className="flex justify-center align-center">
      <div className={`mx-auto w-full ${sx ? sx : ''}`}>
        {retailerCoordinates && shippingCoordinates && (
          <div
            style={{
              backgroundImage: `url('${imageURL}')`,
            }}
            className="w-full min-h-[400px] bg-cover bg-center bg-no-repeat"
          />
        )}
      </div>
    </div>
  );
};

export default TrackingMap;
