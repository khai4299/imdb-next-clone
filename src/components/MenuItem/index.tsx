import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons/lib/esm/iconBase";

interface MenuItemProps {
	title: string;
	address: string;
	Icon: IconType;
}

const MenuItem: FC<MenuItemProps> = ({ title, address, Icon }) => {
	return (
		<div className="mx-4 lg:mx-6 hover:text-amber-600">
			<Link href={address}>
				<Icon className="text-2xl sm:hidden mx-4" />
				<p className="hidden sm:inline">{title}</p>
			</Link>
		</div>
	);
};

export default MenuItem;
