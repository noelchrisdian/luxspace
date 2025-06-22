import { Breadcrumbs } from "../parts/Breadcrumbs";
import { Document } from "../parts/Document";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { ShippingDetails } from "../parts/Cart/ShippingDetails";
import { ShoppingCart } from "../parts/Cart/ShoppingCart";
import { Sitemap } from "../parts/Sitemap";

const Cart = () => {
	return (
		<Document>
			<Header theme="black" />
			<Breadcrumbs
				list={[
					{ url: "/", name: "Home" },
					{ url: "/cart", name: "Shopping Cart" }
				]}
            />
            
            <section className="md:py-16">
                <div className="container mx-auto px-4">
                    <div className="flex -mx-4 flex-wrap">
                        <ShoppingCart />
                        <ShippingDetails />
                    </div>
                </div>
            </section>
            <Sitemap />
			<Footer />
		</Document>
	)
}

export { Cart };