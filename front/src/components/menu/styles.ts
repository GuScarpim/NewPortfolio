import styled from 'styled-components';

interface INav {
  open: boolean;
  href?: string;
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
    background-color: ${(props) => props.open ? '#ccc' : '#FFF'};
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
  border-bottom: 2px solid #ffffff;
  display: flex;
  justify-content: space-between;
  background-color: #31363F;
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
    align-items: center;
    width: 95vw;
    color: #FFF;

    span {
      font-size: 24px;
      background: -webkit-linear-gradient(90deg, rgba(100,210,242,0.5662640056022409) 0%, rgba(100,210,242,1) 60%, rgba(100,220,242,0.6951155462184874) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
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
  align-items: center;
  font-size: 18px;
  height: 67px;
  margin-left: 20px;

  a {
    text-decoration: none;
    text-transform: none;
    color: #FFF;

    &:nth-child(1) {
      margin-left: 20px;
    }

    &:hover {
      border-bottom: 4px solid #64d2f2;
      color: #64d2f2;
    }
  }

    .LinkHome {
      border-bottom: ${(props) => props.href === '/' ? '4px solid #64d2f2' : ''};
      color: ${(props) => props.href === '/' ? '#64d2f2' : ''};
    }

    .LinkProjetos {
      border-bottom: ${(props) => props.href === 'projetos' || props.href ===  '/projetos' ? '4px solid #64d2f2' : ''};
      color: ${(props) => props.href === 'projetos' || props.href ===  '/projetos' ? '#64d2f2' : ''};
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
    transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    top: -16px;
    right: 0;
    height: 100%;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    justify-content: normal;
    li {
      color: #fff;
    }
  }
`
