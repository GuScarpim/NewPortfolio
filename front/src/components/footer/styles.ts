import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #31363F;
  height: 40px;
  position: absolute;
  margin-top: 80px;
  width: 100%;
  font-family: 'Zilla Slab';
  color: #FFF;
  animation: show .5s cubic-bezier(.1,.82,.25,1);

  span {
    margin-right: 10px;
    display: flex;
    align-items: center;
    font-size: 16px;

    b {
      color: #64d2f2;
      margin: 0px 5px 0px 5px;
    }

    img {
      width: 30px;
      height: 20px;
    }
  }



    @keyframes show {
      0% {
        transform: scale(1.4);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
`