import styled from 'styled-components';

export const ContentIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 260px;
  transition: all 1s;

.tooltip {
  position: relative;
  transition: all 1s;
  display: flex;
  align-items: center;
}

.tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #242c34;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  bottom: 140%;
  left: 50%;
  background: #f3f3f3;
  margin-left: -60px;

  &::after {
    content: "";
    left: 50px;
    bottom: -8px;
    z-index: 9999;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #f3f3f3;
  }
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
`
export const CardIcon = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #FFF;
  transition: all 0.2s;
  cursor: pointer;
  margin: 20px 10px 0px 10px;

  img {
    width: 35px;
    height: 35px;
    border-radius: 0px;
  }

  &:hover {
    transition: all 0.2s;
    margin-top: 18px;
  }
`