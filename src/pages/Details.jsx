import { Breadcrumbs } from "../parts/Breadcrumbs";
import { Document } from "../parts/Document";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { ProductDetails } from "../parts/Details/ProductDetails";
import { Sitemap } from "../parts/Sitemap";
import { Suggestions } from "../parts/Details/Suggestions";
import { useAsync } from "../helpers/hooks/useAsync";
import { useEffect } from "react";
import { fetchData } from "../helpers/fetch";
import { useParams } from "react-router-dom";

const LoaderProduct = () => {
	return (
		<section className="container mx-auto">
			<div className="flex flex-wrap my-4 md:my-12">
				<div className="w-full md:hidden px-4">
					<div className="w-80 h-16 bg-gray-300 animate-pulse rounded-full" />
					<div className="w-40 h-4 bg-gray-300 animate-pulse rounded-full" />
				</div>
				<div className="flex-1">
					<div className="slider">
						<div className="thumbnail">
							{Array(5)
								.fill()
								.map((_, index) => {
									return (
										<div
											key={index}
											className="px-4 relative card group">
											<div
												className="rounded-xl item bg-gray-300 animate-pulse"
												style={{ width: "106px", height: "106px" }}
											/>
										</div>
									)
								})}
						</div>
						<div className="preview">
							<div className="item rounded-lg h-full overflow-hidden">
								<div className="item bg-gray-300 animate-pulse rounded-lg h-full overflow-hidden" />
							</div>
						</div>
					</div>
				</div>
				<div className="flex-1 px-4 md:p-6">
					<div className="w-80 h-16 bg-gray-300 animate-pulse rounded-full" />
					<div className="w-40 h-4 mt-4 bg-gray-300 animate-pulse rounded-full" />

					<div className="w-44 h-8 mt-8 bg-gray-300 animate-pulse rounded-full" />
					<hr className="my-8" />

					<div className="w-36 h-4 mt-6 bg-gray-300 animate-pulse rounded-full" />
					<div className="w-88 h-4 mt-6 bg-gray-300 animate-pulse rounded-full" />
					<div className="w-40 h-4 mt-6 bg-gray-300 animate-pulse rounded-full" />
					<div className="w-96 h-4 mt-6 bg-gray-300 animate-pulse rounded-full" />
					<div className="w-64 h-4 mt-6 bg-gray-300 animate-pulse rounded-full" />
					<div className="w-88 h-4 mt-6 bg-gray-300 animate-pulse rounded-full" />
				</div>
			</div>
		</section>
	)
}

const LoaderSuggestion = () => {
	return (
		<section className="bg-gray-100 px-4 py-16">
			<div className="container mx-auto">
				<div className="flex flex-start mb-4">
					<h3 className="text-2xl capitalize font-semibold">
						Complete your room <br className="" />
						with what we designed
					</h3>
				</div>
				<div className="flex overflow-x-auto mb-4 -mx-3">
					{Array(4)
						.fill()
						.map((_, index) => {
							return (
								<div
									className="px-3 flex-none"
									style={{ width: "320px" }}
									key={index}>
									<div className="rounded-xl p-4 pb-8 relative bg-white">
										<div className="rounded-xl overflow-hidden card-shadow w-full h-36">
											<div
												className=" bg-gray-300 animate-pulse rounded-lg h-full overflow-hidden"
												style={{ width: 287, height: 150 }}
											/>
										</div>
										<div className="w-56 h-4 mt-6 bg-gray-300 animate-pulse rounded-full" />
										<div className="w-40 h-4 mt-3 bg-gray-300 animate-pulse rounded-full" />
									</div>
								</div>
							)
						})}
				</div>
			</div>
		</section>
	)
}

const Details = () => {
	const { idp } = useParams();
	const { data, isError, isLoading, run } = useAsync();
	useEffect(() => {
		run(fetchData(`/api/products/${idp}`));
	}, [idp, run])

	return (
		<Document>
			<Header theme="black" />
			<Breadcrumbs
				list={[
					{ url: "/", name: "Home" },
					{ url: "/categories/001", name: "Office Room" },
					{ url: "/categories/001/products/001", name: "Details" }
				]}
			/>

			{isError ? (
				<Error body={"Product is not found"} />
			) : (
				<>
					{isLoading ? <LoaderProduct /> : <ProductDetails data={data} />}
					{isLoading ? (
						<LoaderSuggestion />
					) : (
						<Suggestions data={data?.relatedProducts || {}} />
					)}
				</>
			)}
			<Sitemap />
			<Footer />
		</Document>
	)
}

export { Details };