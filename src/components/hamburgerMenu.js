import React from 'react';
import styled from 'styled-components';

const StyledBurger = styled.button`
@media (min-width: 481px) {
  display: none;
}
position: absolute;
top: 27%;
right: 0;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 2rem;
height: 2rem;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
z-index: 10;

&:focus {
  outline: none;
}

div {
  width: 2rem;
  height: 0.25rem;
  background: #484848;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;

  :first-child {
    transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
  }

  :nth-child(2) {
    opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
    transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
  }

  :nth-child(3) {
    transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
  }
}
`;

const Burger = ({ isOpen, handleToggle }) => {

  return (
    <StyledBurger isOpen={isOpen} onClick={handleToggle}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;