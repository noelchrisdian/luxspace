import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Breadcrumbs = ({ list }) => {
	return (
		<section className="bg-gray-100 py-8 px-4">
			<div className="container mx-auto">
				<ul className="breadcrumb">
					{list?.map((item, index) => {
						const arias =
							index === list?.length
								? { "aria-label": "current-page" }
								: {};

						return (
							<li key={index}>
								<Link to={item.url} {...arias}>
									{item.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	)
}

export { Breadcrumbs };

Breadcrumbs.propTypes = {
	list: PropTypes.array.isRequired,
}