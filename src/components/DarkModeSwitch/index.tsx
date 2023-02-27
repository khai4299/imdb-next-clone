"use client";
import { useState } from "react";
import "./styles.scss";
import Switch from "react-switch";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
	const { setTheme } = useTheme();
	const [checked, setChecked] = useState<boolean>(false);
	return (
		<Switch
			checked={checked}
			onChange={checked => {
				setChecked(checked);
				if (checked) {
					setTheme("dark");
				} else {
					setTheme("light");
				}
			}}
			onColor="#f59e0b"
			uncheckedIcon={<BsFillMoonFill />}
			checkedIcon={<BsFillSunFill />}
		/>
	);
};

export default DarkModeSwitch;
