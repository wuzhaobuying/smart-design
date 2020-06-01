import React from "react";
import AutoComplete from "./autocomplete";

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

export const autoComplete = () => (
  <>
    <AutoComplete fetchSuggestion={handleFetch}></AutoComplete>
  </>
);
