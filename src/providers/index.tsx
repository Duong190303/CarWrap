"use client";

import type { MantineColorScheme } from "@mantine/core";
import type { PropsWithChildren } from "react";
import { ThemeProvider } from "../theme/ThemeProvider";

export type ProvidersProps = PropsWithChildren<{
	colorScheme: MantineColorScheme;
}>;

export const Providers: React.FC<ProvidersProps> = ({
	children,
	colorScheme,
}) => {
	return <ThemeProvider colorScheme={colorScheme}>{children}</ThemeProvider>;
};
