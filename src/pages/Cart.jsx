import { Breadcrumbs } from "../parts/Breadcrumbs";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { ShippingDetails } from "../parts/Cart/ShippingDetails";
import { ShoppingCart } from "../parts/Cart/ShoppingCart";
import { Sitemap } from "../parts/Sitemap";

const Cart = () => {
	return (
		<>
			<Header theme="black" />
			<Breadcrumbs
				list={[
					{ url: "/", name: "Home" },
					{ url: "/cart", name: "Shopping Cart" }
				]}
            />
            
            <section class="md:py-16">
                <div class="container mx-auto px-4">
                    <div class="flex -mx-4 flex-wrap">
                        <ShoppingCart />
                        <ShippingDetails />
                    </div>
                </div>
            </section>
            <Sitemap />
			<Footer />
		</>
	)
}

export { Cart };