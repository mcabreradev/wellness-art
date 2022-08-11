import React from 'react'
import styled from 'styled-components';

const CustomHeader = styled.div`
  grid-area: header;
  height: 50vh; 
`;

function Header() {
  return (
    <CustomHeader>Header</CustomHeader>
  )
}

export default Header