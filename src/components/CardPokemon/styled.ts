import styled from 'styled-components';

export const Card = styled.article<{ flip?: boolean }>`
  width: 100%;
  height: 400px;
  perspective: 1000px;
  background-color: transparent;

  > main {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    border-radius: 15px;
    ${({ flip }) => flip && 'transform: rotateY(180deg);'};

    .front,
    .back {
      overflow: hidden;
      height: 100%;
      width: 100%;
      border: 1px solid #aaa;
      border-radius: 15px;
      box-sizing: border-box;
      background-color: #f1f1f1;
      overflow: hidden;
      position: absolute;
      -webkit-backface-visibility: hidden; /* Safari */
      backface-visibility: hidden;

      header {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        height: 30px;

        div {
          display: flex;
          align-content: center;
          padding: 15px 0;
          box-sizing: border-box;

          :first-of-type {
            flex: 0.5;
            align-items: center;
            justify-content: center;
            border-bottom-right-radius: 15px;
            background-color: #ff1f3f;

            p {
              margin: 0;
              font-family: Play-Bold;
              font-size: 0.85em;
              color: #fefefe;
            }
          }

          :nth-child(2) {
            flex: 1;
            justify-content: center;
            align-items: center;

            h1 {
              margin: 0;
              text-transform: capitalize;
              text-align: center;
              font-size: 1em;
              font-family: Play;
              font-weight: 300;
            }
          }

          :last-of-type {
            flex: 0.5;
            flex-direction: row-reverse;
            justify-content: flex-start;
            align-items: center;

            button {
              background-color: transparent;
              border: none;
              border-radius: 100%;
              cursor: pointer;
              color: #666;
              margin-right: 3px;

              :first-of-type {
                margin: 0;
              }
            }
          }
        }
      }
    }

    .front {
      main {
        display: flex;
        flex-direction: column;
        padding: 10px;
        box-sizing: border-box;
        height: calc(100% - 30px);

        figure {
          flex: 1;
          margin: 0;
          overflow: hidden;
          box-sizing: border-box;
          align-self: center;
          padding: 40px;

          img {
            height: 90%;
          }
        }

        .info {
          flex: 0.15;
          display: flex;
          align-items: center;
          align-self: center;
          justify-content: space-around;
          flex-wrap: wrap;
        }
      }
    }

    .back {
      transform: rotateY(180deg);

      main {
        padding: 15px;

        p {
          font-family: Play;
          margin: 0;
          margin-top: 15px;

          b {
            font-family: Play-Bold;
            text-transform: capitalize;
          }
        }
      }
    }
  }
`;

export const Badge = styled.span`
  box-sizing: border-box;
  border-radius: 30px;
  padding: 7px 10px;
  width: 100px;
  text-align: center;
  text-transform: capitalize;
  font-family: Play;
  font-weight: 600;
  font-size: small;
  border: 1px solid #333;
  color: #333;
  margin-left: 10px;

  :first-of-type {
    margin-left: 0;
  }
`;
