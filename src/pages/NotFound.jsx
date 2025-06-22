import { Document } from "../parts/Document";
import { Error } from "../parts/Error";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { Sitemap } from "../parts/Sitemap";

const NotFound = () => {
	return (
		<Document>
            <Header />
            <Error />
			<Sitemap />
			<Footer />
		</Document>
	)
}

export { NotFound };