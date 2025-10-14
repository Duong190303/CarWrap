import { DEFAULT_THEME, createTheme, virtualColor } from "@mantine/core";
import { roboto } from "./fonts";

export const theme = createTheme({
	breakpoints: {
		xs: "30em",
		sm: "48em",
		md: "64em",
		lg: "74em",
		xl: "90em",
		xxl: "120em",
	},
	primaryColor: "primary",
	defaultRadius: "sm",
	cursorType: "pointer",
	autoContrast: true,
	fontFamily: roboto.style.fontFamily,
	fontFamilyMonospace: roboto.style.fontFamily,
	headings: {
		fontFamily: `${roboto.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
		fontWeight: "bold",
	},
	white: "#fff",
	black: "#1f1f1f",
	colors: {
		primary: virtualColor({
			name: "primary",
			dark: "main",
			light: "secondary",
		}),

		main: [
			"#F666AE",
			"#F666AE",
			"#F666AE",
			"#F666AE",
			"#F666AE",
			"#F666AE",
			"#F666AE",
			"#F666AE",
			"#F666AE",
			"#F666AE",
		],
	},
});
