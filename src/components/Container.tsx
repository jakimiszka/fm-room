import { Footer } from "./Footer";
import { Gallery } from "./Gallery";
import { Menu } from "./Menu";

export const Container = () => {
    return (
        <div className="container">
            <Menu />
            <Gallery />
            <Footer />
        </div>
    );
}