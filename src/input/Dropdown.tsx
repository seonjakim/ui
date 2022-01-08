import React from 'react';
import styled from 'styled-components'

const Dropdown = ({options}) => {
  return (
    <StyledSelect>
      {options.map((option: string | undefined, index: number) => 
        <option key={index} value={option}>{option}</option>
      )}
    </StyledSelect>
  );{}
};

export default Dropdown;

const StyledSelect = styled.select`
  padding: .8em 0;
  width: 100%;
`