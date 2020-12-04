import styled from 'styled-components';

interface Iclass {
  mobile?: '',
  width?: '',
  color?: '',
}

export const Container = styled.div`
    font-family: 'Zilla Slab';
    color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 80px 20px 0px 20px;
`

export const Card = styled.div<Iclass>`
    height: 405px;
    max-width: 1170px;
    width: 100%;
    background: #31363F;
    border-radius: 10px;
    margin-bottom: 50px;

    display: grid;
    grid-template-columns: 0.9fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "div1 div2";

    -webkit-animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    @-webkit-keyframes slide-left {
      0% {
        -webkit-transform: translateX(300px);
                transform: translateX(300px);
      }
      100% {
        -webkit-transform: translateX(0px);
                transform: translateX(0px);
      }
    }
    @keyframes slide-left {
      0% {
        -webkit-transform: translateX(300px);
                transform: translateX(300px);
      }
      100% {
        -webkit-transform: translateX(0px);
                transform: translateX(0px);
      }
    }

  .div1 {
    grid-area: div1;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    justify-content: center;
    padding: 20px;
    flex-direction: column;
    margin-top: -80px;

    h1 {
      color: #64d2f2;
    }

    span {
      font-weight: 100;
      font-family: helvetica;
      font-size: 16px;
      b {
        color: #64d2f2;
      }
    }

    a {
      text-decoration: none;
      margin-top: 20px;
      color: #64d2f2;
      display: flex;
      align-items: center;

      svg {
        margin: 4px 0px 0px 8px;
        width: 17px;
        fill: #64d2f2;
        position: relative;
      }
    }

  }

  .div2 {
    grid-area: div2;
    background:#212531;
    background: linear-gradient(to right bottom, #15385E 50%, #76ABE3 50%);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 30px 50px 30px;

    img {
      border-radius: 10px;
      height: 300px;
      width: ${(props) => props.width !== '' ? `${props.width}px` : '100%'};
      box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.6);
    }
  }

  @media only screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 0.7fr 1fr;
      gap: 0px 0px;
      grid-template-areas: "div1" "div2";
      margin-bottom: 240px;
      height: 400px;

      .div1 {
        grid-area: div1;
        margin-top: -25px;
        height: 200px;

        h1 {
          font-size: 24px;
        }

        span {
          font-size: 14px;
        }
      }

      .div2 {
        grid-area: div2;
        border-top-right-radius: 0px;
        border-top-left-radius: 0px;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;

        img {
          border-radius: 10px;
          height: 280px;
          width: ${(props) => props.width !== '' ? `${props.width}px` : '100%'};
          box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.6);
        }
      }
    }

    @media only screen and (max-width: 495px) {
      margin-bottom: 160px;
      .div1 {
        h1 {
          font-size: 18px;
        }

        span {
          font-size: 12px;
        }

        a {
          font-size: 14px;

          svg {
            width: 14px;
          }
        }
      }

      .div2 {
        img {
          height: 210px;
        }

      }
    }
`


export const CardReverse = styled.div<Iclass>`
    height: 405px;
    max-width: 1170px;
    width: 100%;
    background: #31363F;
    border-radius: 10px;
    margin-bottom: 50px;

    display: grid;
    grid-template-columns: 0.9fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "div1 div2";
    -webkit-animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    @-webkit-keyframes slide-right {
      0% {
        -webkit-transform: translateX(-300px);
        transform: translateX(-300px);
      }
      100% {
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
      }
    }
    @keyframes slide-right {
      0% {
        -webkit-transform: translateX(-300px);
        transform: translateX(-300px);
      }
      100% {
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
      }
    }


  .div2 {
    grid-area: div1;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 30px 50px 30px;

    background: linear-gradient(to right bottom, #76ABE3 50%, #15385E 50%);

    img {
      border-radius: 10px;
      height: 300px;
      width: ${(props) => props.width !== '' ? `${props.width}px` : '100%'};
      box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.6);
    }
  }

  .div3 {
    grid-area: div2;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    justify-content: center;
    padding: 20px;
    flex-direction: column;
    margin-top: -80px;


    h1 {
      color: #64d2f2;
    }

    span {
      font-weight: 100;
      font-family: helvetica;
      font-size: 16px;
      b {
        color: #64d2f2;
      }
    }

    a {
      text-decoration: none;
      margin-top: 20px;
      color: #64d2f2;
      display: flex;
      align-items: center;

      svg {
        margin: 4px 0px 0px 8px;
        width: 17px;
        fill: #64d2f2;
        position: relative;
      }
    }
  }

    @media only screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 0.7fr 1fr;
      gap: 0px 0px;
      grid-template-areas: "div3" "div2";
      margin-bottom: 240px;

      .div3 {
        grid-area: div3;
        margin-top: -25px;
        height: 200px;

        h1 {
          font-size: 24px;
        }

        span {
          font-size: 14px;
        }
      }

      .div2 {
        grid-area: div2;
        border-top-right-radius: 0px;
        border-top-left-radius: 0px;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;

        img {
          border-radius: 10px;
          height: 280px;
          width: ${(props) => props.width !== '' ? `${props.width}px` : '100%'};
          box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.6);
        }

      }
    }

    @media only screen and (max-width: 495px) {
      margin-bottom: 160px;
      .div3 {
        h1 {
          font-size: 18px;
        }

        span {
          font-size: 12px;
        }
      }

      .div2 {
        img {
          height: 210px;
        }

      }
    }
`