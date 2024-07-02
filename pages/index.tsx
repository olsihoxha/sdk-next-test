import ProductCarousel from "../src/components/product-carousel";
import RootLayout from '../src/app/layout';

export default function Home() {
    return (
        <div>
            <RootLayout>
                <ProductCarousel/>
            </RootLayout>
        </div>
    );
}