import React from "react";
import { action } from "@storybook/addon-actions";
import Input from "./input";

export default {
	component: Input,
	title: "Input",
	decorators: [
		(storyFn) => (
			<div style={{ margin: "0 10px", width: "200px" }}>{storyFn()}</div>
		),
	],
};

export const defaultInput = () => (
	<>
		<Input onClick={action("clicked")} placeholder="default"></Input>
	</>
);

export const disabledInput = () => (
	<>
		<Input
			style={{ margin: "0 10px" }}
			disabled
			placeholder=" Disabled"
		></Input>
	</>
);

export const iconInput = () => (
	<>
		<Input
			style={{ margin: "0 10px" }}
			inputIcon="search"
			placeholder="Icon"
		></Input>
	</>
);

export const sizeInput = () => (
	<>
		<Input
			style={{ margin: "0 10px" }}
			inputSize="lg"
			placeholder="large"
		></Input>
		<Input
			style={{ margin: "0 10px" }}
			inputSize="sm"
			placeholder="small"
		></Input>
	</>
);

export const pendInput = () => (
	<>
		<Input
			style={{ margin: "0 10px" }}
			prepend="https://"
			placeholder="prepend"
		></Input>
		<Input
			style={{ margin: "0 10px" }}
			append=".com"
			placeholder="append"
		></Input>
	</>
);
