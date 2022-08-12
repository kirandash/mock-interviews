import React, { ChangeEventHandler } from "react";
import Styled from "./Dropdown.styles";
import { v4 as uuidv4 } from "uuid";

interface Options {
  label: string;
  value: string;
}

interface IProps {
  dropdownLabel: string;
  options: Options[];
  onChange: (e: ChangeEventHandler<HTMLSelectElement>) => void;
  selected: Options["value"];
}

const Dropdown = (props: IProps) => {
  const { dropdownLabel, options, onChange, selected } = props;

  const renderOptions = (rOptions: IProps["options"]) =>
    rOptions.map((item) => (
      <Styled.DropdownOption value={item.value} key={uuidv4()}>
        {item.label}
      </Styled.DropdownOption>
    ));

  return (
    <Styled.DropdownWrapper>
      <Styled.DropdownLabel htmlFor="country-selector">
        {dropdownLabel}
      </Styled.DropdownLabel>
      <Styled.DropdownSelect id="country-selector" onChange={onChange} value={selected}>
        {renderOptions(options)}
      </Styled.DropdownSelect>
    </Styled.DropdownWrapper> 
  );
};

export default Dropdown;
