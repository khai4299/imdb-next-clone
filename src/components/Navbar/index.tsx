import { NextPage } from "next";
import NavbarItem from "../NavbarItem";

interface NavbarProps {}

const Navbar: NextPage<NavbarProps> = ({}): JSX.Element => {
	return (
		<div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
			<NavbarItem title="Trending" param="fetchTrending" />
			<NavbarItem title="Top Rated" param="fetchTopRated" />
		</div>
	);
};

export default Navbar;
