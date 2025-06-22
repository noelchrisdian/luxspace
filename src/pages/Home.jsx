import { BrowseRoom } from "../parts/Home/BrowseRoom";
import { Clients } from "../parts/Home/Clients";
import { Document } from "../parts/Document";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { Hero } from "../parts/Home/Hero";
import { JustArrived } from "../parts/Home/JustArrived";
import { Sitemap } from "../parts/Sitemap";

const Home = () => {
	return (
		<Document>
			<Header theme='white' position='absolute' />
			<Hero />
			<BrowseRoom />
			<JustArrived />
			<Clients />
			<Sitemap />
			<Footer />
		</Document>
	)
}

export { Home };