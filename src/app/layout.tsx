import { Header, Navbar } from "@/components";
import SearchBox from "@/components/SearchBox";
import "./globals.css";
import Provider from "./Provider";

export const metadata = {
	title: "IMDb Clone",
	description: "This is the IMDb Clone",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Provider>
					<Header />
					<Navbar />
					<SearchBox />
					{children}
				</Provider>
			</body>
		</html>
	);
}
