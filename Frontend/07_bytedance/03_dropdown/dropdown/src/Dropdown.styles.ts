import styled from "styled-components";

const Styled = {
  DropdownWrapper: styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
  `,
  DropdownLabel: styled.label`
    margin-bottom: 1rem;
  `,
  DropdownSelect: styled.select`
    max-width: 50%;
    height: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
  `,
  DropdownOption: styled.option`
    color: ${(props) => (props.selected ? "lightgrey" : "black")};
  `,
};

export default Styled;
