import { BrowseRoom } from "../parts/Home/BrowseRoom";
import { Clients } from "../parts/Home/Clients";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { Hero } from "../parts/Home/Hero";
import { JustArrived } from "../parts/Home/JustArrived";
import { Sitemap } from "../parts/Sitemap";
import { useModal } from "../helpers/hooks/useModal";
import { useScrollAnchor } from "../helpers/hooks/useScrollAnchor";

const Home = () => {
	useModal();
	useScrollAnchor();

	return (
		<>
			<Header theme='white' position='absolute' />
			<Hero />
			<BrowseRoom />
			<JustArrived />
			<Clients />
			<Sitemap />
			<Footer />
		</>
	)
}

export { Home };