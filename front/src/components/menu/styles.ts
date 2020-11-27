import styled from 'styled-components';

interface INav {
  open: boolean;
}

export const StyledBurger = styled.div<INav>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  font-family: 'Zilla Slab';

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => props.open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:nth-child(1) {
      transform: ${(props) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${(props) => props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props) => props.open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${(props) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const Nav = styled.nav`
  font-family: 'Zilla Slab';
  height: 70px;
  border-bottom: 2px solid #f1f1f1;
  /* padding: 0 20px; */
  display: flex;
  justify-content: space-between;
  background-color: #0000005c;
  align-items: center;
  span {
    font-size: 30px;
    @media only screen and (max-width: 600px) {
      font-size: 20px;
      :nth-child(2) {
        font-size: 16px !important;
        margin-top: 0px !important;
      }
    }
  }
  .flex {
    margin-left: 20px;
    display: flex;
    justify-content: flex-start;
    width: 100vw;
    color: #FFF;
     @media only screen and (max-width: 600px) {
      margin-left: -33px;
      margin-top: 37px;
    }
  }
`

export const Ul = styled.ul<INav>`
  font-family: 'Zilla Slab';
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  width: 90%;
  top: 0;
  justify-content: flex-end;
  margin-top: 0px;
  a {
    text-decoration: none;
    text-transform: none;
    color: #FFF;
  }
  button {
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
    background: none;
    border: none;
    text-transform: none;
    color: #FFF;
  }
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${(props) => props.open  ? 'translateX(0)' : 'translateX(100%)'};
    top: -16px;
    right: 0;
    height: 100%;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    justify-content: normal;
    li {
      color: #fff;
    }
  }
`
