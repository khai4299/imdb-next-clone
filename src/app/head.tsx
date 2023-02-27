import { NextPage } from "next";

const Head: NextPage = (): JSX.Element => {
	return (
		<>
			<title>IMDb Clone</title>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta name="description" content="This is the IMDb Clone" />
			<link rel="icon" href="/icon.png" />
		</>
	);
};

export default Head;
