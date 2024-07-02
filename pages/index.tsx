import DeliveryTime from "../src/components/delivery-time";
import RootLayout from '../src/app/layout';

export default function Home() {
    return (
        <div>
            <RootLayout>
                <DeliveryTime/>
            </RootLayout>
        </div>
    );
}