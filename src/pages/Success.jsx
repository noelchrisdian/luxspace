import { Breadcrumbs } from "../parts/Breadcrumbs";
import { Header } from "../parts/Header";
import { Link } from "react-router-dom";
import { Sitemap } from "../parts/Sitemap";
import { Footer } from "../parts/Footer";
import { useScrollTop } from "../helpers/hooks/useScrollTop";

const Success = () => {
	useScrollTop();

	return (
		<>
			<Header />
			<Breadcrumbs
				list={[
					{ url: "/", name: "Home" },
					{ url: "/success", name: "Success Checkout" },
				]}
			/>
			<section className="">
				<div className="container mx-auto min-h-screen">
					<div className="flex flex-col items-center justify-center">
						<div className="w-full md:w-4/12 text-center">
							<img
								src="/assets/images/content/illustration-success.png"
								alt="congrats illustration"
							/>
							<h2 className="text-3xl font-semibold mb-6">
								Ah yes it's success!
							</h2>
							<p className="text-lg mb-12">
								The furniture you purchased will be shipped <br /> right now so please sit tight and be ready for it
							</p>
							<Link
								to="/"
								className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer">
								Back to Shop
							</Link>
						</div>
					</div>
				</div>
			</section>
			<Sitemap />
			<Footer />
		</>
	)
}

export { Success };