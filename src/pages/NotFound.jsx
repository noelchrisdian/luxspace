import { Error } from "../parts/Error";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { Sitemap } from "../parts/Sitemap";
import { useScrollTop } from "../helpers/hooks/useScrollTop";

const NotFound = () => {
	useScrollTop();

	return (
		<>
            <Header />
            <Error />
			<Sitemap />
			<Footer />
		</>
	)
}

export { NotFound };