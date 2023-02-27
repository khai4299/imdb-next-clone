import { FC } from "react";
import MenuItem from "../MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

import Link from "next/link";
import DarkModeSwitch from "../DarkModeSwitch";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
	return (
		<div className="flex justify-between items-center mx-2 max-w-6xl sm:mx-auto py-6">
			<div className="flex">
				<MenuItem title="HOME" address="/" Icon={AiFillHome} />
				<MenuItem
					title="ABOUT"
					address="/about"
					Icon={BsFillInfoCircleFill}
				/>
			</div>
			<div className="flex items-center space-x-5">
				<DarkModeSwitch />
				<Link href="/">
					<h2 className="text-2xl">
						<span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">
							TMDb
						</span>
						<span className="text-xl hidden sm:inline">Clone</span>
					</h2>
				</Link>
			</div>
		</div>
	);
};

export default Header;