import { Breadcrumbs } from "../parts/Breadcrumbs";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { ProductDetails } from "../parts/Details/ProductDetails";
import { Sitemap } from "../parts/Sitemap";
import { Suggestions } from "../parts/Details/Suggestions";

const Details = () => {
	return (
		<>
			<Header theme='black' />
			<Breadcrumbs
				list={[
					{ url: "/", name: "Home" },
					{ url: "/categories/001", name: "Office Room" },
					{ url: "/categories/001/products/001", name: "Details" },
				]}
			/>
			<ProductDetails />
			<Suggestions />
			<Sitemap />
			<Footer />
		</>
	)
}

export { Details };