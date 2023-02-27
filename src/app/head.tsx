import { NextPage } from "next";

const Head: NextPage = (): JSX.Element => {
	return (
		<>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<link rel="icon" href="/icon.png" />
		</>
	);
};

export default Head;
