import {
	Button,
	ButtonProps,
	ElementProps,
} from "@mantine/core";
import classes from "./ButtonDaisy.module.css";
import { PropsWithChildren } from "react";
import Link from "next/link";

interface MyButtonProps
	extends ButtonProps,
		ElementProps<"a", keyof ButtonProps> {
	type: "primary" | "secondary";
	href?: string;
	iconRight?: React.ReactNode;
	iconLeft?: React.ReactNode;
}

export const ButtonDaisy: React.FC<PropsWithChildren<MyButtonProps>> = ({
	children,
	type,
	href = "/",
	iconRight,
	iconLeft,
	...props
}) => {
	return type === "primary" ? (
		<Button
			component={Link}
			href={href}
			className={`${classes.btn} ${classes.buttonFiled}`}
			{...props}
		>
			<div className={classes.block}>
				<span>{iconLeft}</span>
			</div>
			<span data-name="hover">{children}</span>
			<span data-name="me">{iconRight}</span>
		</Button>
	) : (
		<Button
			component={Link}
			href={href}
			className={`${classes.btn} ${classes.buttonDefault}`}
			{...props}
		>
			{children}
		</Button>
	);
};
