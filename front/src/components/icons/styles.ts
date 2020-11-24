import styled from 'styled-components';

export const ContentIcon = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  transition: all 1s;
`

export const CardIcon = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: #4A4D51;
  cursor: pointer;
  transition: all 0.2s;
  margin-left: 22px;
  
  &:nth-child(1) {
    margin-left: 0px;
  }

  &:hover {
    width: 38px;
    height: 38px;
  }

  svg {
    fill: #FFF;
    transition: all 0.2s;

    &:hover {
      fill: #7DDFFF;
      width: 26px;
      height: 26px;
    }
  }
`
