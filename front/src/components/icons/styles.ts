import styled from 'styled-components';

export const ContentIcon = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  transition: all 1s;
`

export const CardIcon = styled.div`
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: #4A4D51;
  transition: all 0.2s;
  margin-left: 22px;
  cursor: pointer;

  .linkedin {
    fill: #FFF;
    transition: all 0.2s;

    &:hover {
      fill: #7DDFFF;
      width: 18px !important;;
      height: 18px !important;;
    }
  }

  &:nth-child(1) {
    margin-left: 0px;
  }

  &:hover {
    /* width: 38px;
    height: 38px; */

    svg {
      fill: #7DDFFF;
      width: 22px;
      height: 22px;
    }

    .linkedin {

      &:hover {
        fill: #7DDFFF;
        width: 18px !important;;
        height: 18px !important;;
      }
    }
  }

  svg {
    fill: #FFF;
    transition: all 0.2s;
  }
`
