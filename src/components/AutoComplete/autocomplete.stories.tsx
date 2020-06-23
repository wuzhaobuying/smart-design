import * as React from "react";
import AutoComplete, { DataSourceType } from "./autocomplete";

export default {
	component: AutoComplete,
	title: "AutoComplete",
	decorators: [
		(storyFn) => (
			<div style={{ margin: "0 10px", width: "200px" }}>{storyFn()}</div>
		),
	],
};

const handleFetch = (query: string) => {
	return fetch(`https://api.github.com/search/users?q=${query}`)
		.then((res) => res.json())
		.then(({ items }) => {
			console.log(items);
			return items
				.slice(0, 10)
				.map((item: any) => ({ value: item.login, ...item }));
		});
};

const onSelect = (item: DataSourceType) => {
	console.log(item.value);
};

export const autoComplete = () => (
	<>
		<AutoComplete
			fetchSuggestions={handleFetch}
			onSelect={onSelect}
		></AutoComplete>
	</>
);
