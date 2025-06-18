import { Breadcrumbs } from "../parts/Breadcrumbs";
// import { BrowseRoom } from "../parts/Home/BrowseRoom";
import { Clients } from "../parts/Home/Clients";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
// import { JustArrived } from "../parts/Home/JustArrived";
import { Sitemap } from "../parts/Sitemap";

const Details = () => {
	return (
		<>
			<Header />
			<Breadcrumbs
				list={[
					{ url: "/", name: "Home" },
					{ url: "/categories/001", name: "Office Room" },
					{ url: "/categories/001/products/001", name: "Details" },
				]}
			/>
			<Clients />
			<Sitemap />
			<Footer />
		</>
	);
};

export { Details };
