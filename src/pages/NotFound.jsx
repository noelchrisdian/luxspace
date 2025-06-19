import { Error } from "../parts/Error";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { Sitemap } from "../parts/Sitemap";

const NotFound = () => {
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