"use client";

import { AppShell } from "@mantine/core";
import { PropsWithChildren, useEffect, useState } from "react";
import classes from "./HomeLayout.module.css";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => {
	const [pinned, setPinned] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setPinned(window.scrollY > 99);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<AppShell header={{ height: 100 }} padding="md">
			<AppShell.Header
				className={classes.header}
			>
				<Header pinned={pinned} />
			</AppShell.Header>

			<AppShell.Main p={0} style={{ overflow: "hidden" }}>{children}</AppShell.Main>
			<Footer />
		</AppShell>
	);
};
