import React, { useState, ChangeEvent } from "react";
import Input, { IInputProps } from "../Input/input";

export interface IAutoCompleteProps extends IInputProps {
  onSelect?: (item: any) => void;
  fetchSuggestion?: (keyword: string) => any[] | Promise<any[]>;
}

const AutoComplete: React.FC<IAutoCompleteProps> = (props) => {
  const { onSelect, fetchSuggestion, ...restProps } = props;
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestion, setSuggestion] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (fetchSuggestion && Array.isArray(fetchSuggestion(inputValue))) {
      setSuggestion(fetchSuggestion(inputValue) as any[]);
    } else if (
      fetchSuggestion &&
      fetchSuggestion(inputValue) instanceof Promise
    ) {
      (fetchSuggestion(inputValue) as Promise<any[]>).then((data) => {
        setSuggestion(data);
      });
    }
    console.log(suggestion);
  };
  return (
    <div className="smart-auto-complete">
      <Input
        value={inputValue}
        onChange={handleChange}
        placeholder="请输入"
        {...restProps}
      ></Input>
    </div>
  );
};

export default AutoComplete;
