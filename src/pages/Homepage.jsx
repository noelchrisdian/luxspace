import { BrowseRoom } from "../parts/BrowseRoom";
import { Clients } from "../parts/Clients";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { Hero } from "../parts/Hero";
import { JustArrived } from "../parts/JustArrived";
import { Sitemap } from "../parts/Sitemap";

const Homepage = () => {
	return (
		<>
			<Header />
			<Hero />
			<BrowseRoom />
			<JustArrived />
			<Clients />
			<Sitemap />
			<Footer />
		</>
	)
}

export { Homepage };