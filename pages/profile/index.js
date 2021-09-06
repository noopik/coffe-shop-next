import styled from 'styled-components';
import { Breakpoints } from '../../src/utils';
import PrivateRoute from '../../src/components/hoc/PrivateRoute';
import { Button } from '../../src/components/atoms';

const ProfileUser = () => {
  return (
    <StyledProfileUserPage>
      <div className="container">
        <h1 className="heading-page">User Profile</h1>
        <div className="body-top">
          <div className="top-left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ava.png" alt="" />
            <h3>Zulaikha</h3>
            <h4>zulaikha@gmail.com</h4> <br />
            <br />
            <h5>Has been ordered 15 products</h5>
          </div>
          <div className="top-right">
            <div className="top">
              <h1>Contact</h1>
              <button className="edit">
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6168 1.8356C14.8552 1.57068 15.1383 1.36054 15.4498 1.21716C15.7613 1.07379 16.0952 1 16.4324 1C16.7696 1 17.1035 1.07379 17.415 1.21716C17.7265 1.36054 18.0095 1.57068 18.248 1.8356C18.4864 2.10051 18.6755 2.41501 18.8046 2.76114C18.9336 3.10727 19 3.47825 19 3.8529C19 4.22755 18.9336 4.59853 18.8046 4.94466C18.6755 5.29079 18.4864 5.60529 18.248 5.87021L5.99283 19.487L1 21L2.36168 15.4524L14.6168 1.8356Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="body">
              <div className="body-left">
                <div className="left-top">
                  <label>Email Address</label>
                  <input type="text" placeholder="Email" />
                </div>
                <div className="left-bottom">
                  <label>Delivery Address</label>
                  <input type="text" placeholder="Delivery address" />
                </div>
              </div>

              <div className="body-right">
                <div className="right-top">
                  <label>Mobile number</label>
                  <input type="text" placeholder="Mobile number" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="body-bottom">
          <div className="bottom-left">
            <div className="top">
              <h1>Details</h1>
              <button className="edit-detail">
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6168 1.8356C14.8552 1.57068 15.1383 1.36054 15.4498 1.21716C15.7613 1.07379 16.0952 1 16.4324 1C16.7696 1 17.1035 1.07379 17.415 1.21716C17.7265 1.36054 18.0095 1.57068 18.248 1.8356C18.4864 2.10051 18.6755 2.41501 18.8046 2.76114C18.9336 3.10727 19 3.47825 19 3.8529C19 4.22755 18.9336 4.59853 18.8046 4.94466C18.6755 5.29079 18.4864 5.60529 18.248 5.87021L5.99283 19.487L1 21L2.36168 15.4524L14.6168 1.8356Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="body">
              <div className="body-left">
                <div className="left-top">
                  <p>Display name</p>
                  <input type="text" placeholder="Display name" />
                </div>
                <div className="left-top">
                  <p>First name</p>
                  <input type="text" placeholder="First name" />
                </div>
                <div className="left-bottom">
                  <p>Last name</p>
                  <input type="text" placeholder="last name" />
                </div>
              </div>

              <div className="body-right">
                <div className="right-top">
                  <p>DD / MM / YY</p>
                  <input type="text" placeholder="DD/MM/YY" />
                </div>
                <div className="right-bottom">
                  <div className="male">
                    <input type="radio" value="male" name="gender" /> Male
                  </div>
                  <div className="female">
                    <input type="radio" value="female" name="gender" /> Female
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-right">
            <p>Do you want to save the</p>
            <p>change?</p>
            <Button className="save">Save</Button>
            <Button className="cancel">Cancel</Button>
            {/* <Button className="edit-password">Edit Password <span> > </span> </Button> */}
            {/* <Button className="logout">Log Out <span> > </span> </Button> */}
          </div>
        </div>
      </div>
    </StyledProfileUserPage>
  );
};

export default PrivateRoute(ProfileUser);

// START === STYLING CURRENT PAGE

const StyledProfileUserPage = styled.div`
  /* START == BREAKPOINT */
  /* ${Breakpoints.lessThan('2xl')`
      background-color: yellow;
    `}
  ${Breakpoints.lessThan('xl')`
      background-color: blue;
    `}
    ${Breakpoints.lessThan('lg')`
      background-color: cyan;
    `}
    ${Breakpoints.lessThan('md')`
      background-color: pink;
    `}
    ${Breakpoints.lessThan('sm')`
      background-color: green;
    `}
    ${Breakpoints.lessThan('xsm')`
      background-color: pink;
    `} */
  background-image: url('IMG_BodyProfile.png');
  background-position: center;

  .container {
    /* width: 100%; */
    /* height: 100%; */
    /* padding-left: 5%; */
    /* padding-right: 5%; */
    padding-top: 125px;
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* background-repeat: no-repeat; */
    background-size: cover;
    padding-bottom: 80px;
    h1.heading-page {
      font-size: 40px;
      color: white;
      font-weight: bolder;
      margin-bottom: 25px;
    }
    .body-top {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 400px;
      margin-bottom: 100px;
      gap: 23px;
      ${Breakpoints.lessThan('md')` 
        flex-direction: column; 
        height: max-content;
      `}
      ${Breakpoints.lessThan('xsm')`
        margin-bottom: 26px; 
      `}
      .top-left {
        width: 30%;
        height: 100%;
        border-radius: 15px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        ${Breakpoints.lessThan('md')` 
          width: 100%;
          padding: 16px 0;
        `}
        img {
          border-radius: 100%;
          margin-bottom: 20px;
        }

        h3 {
          font-size: 30px;
          font-weight: bolder;
        }
        h4 {
          font-size: 15px;
          font-weight: light;
        }
        h5 {
          font-size: 15px;
          color: gray;
        }
      }
      .top-right {
        flex: 1;
        height: 100%;
        border-radius: 15px;
        background-color: white;
        ${Breakpoints.lessThan('md')` 
          padding-bottom: 26px;
        `}

        .top {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-bottom: 30px;
          padding: 20px;
          h1 {
            color: black;
            font-size: 30px;
          }
          .edit {
            width: 40px;
            height: 40px;
            border-radius: 100%;
            border: none;
            background: #6a4029;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            color: #6a4029;
          }
        }

        .body {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          ${Breakpoints.lessThan('xsm')`
            flex-direction: column;
          `}
          .body-left {
            width: 100%;
            display: flex;
            flex-direction: column;

            .left-top {
              display: flex;
              flex-direction: column;
              margin-bottom: 50px;
              ${Breakpoints.lessThan('xsm')`
                margin-bottom: 16px;
              `}
              padding-left: 20px;
              label {
                font-weight: bolder;
                color: black;
                font-size: 20px;
              }
              input {
                height: 40px;
                width: 90%;
                outline: none;
                border: none;
                border-bottom: 2px solid black;
              }
            }

            .left-bottom {
              display: flex;
              flex-direction: column;
              padding-left: 20px;
              ${Breakpoints.lessThan('xsm')`
                margin-bottom: 16px;
              `}
              label {
                font-weight: bolder;
                color: black;
                font-size: 20px;
              }

              input {
                height: 40px;
                width: 90%;
                outline: none;
                border: none;
                border-bottom: 2px solid black;
              }
            }
          }

          .body-right {
            width: 100%;
            display: flex;
            flex-direction: column;

            .right-top {
              display: flex;
              flex-direction: column;
              margin-bottom: 50px;
              padding-left: 20px;
              label {
                font-weight: bolder;
                color: black;
                font-size: 20px;
              }
              input {
                height: 40px;
                width: 90%;
                outline: none;
                border: none;
                border-bottom: 2px solid black;
              }
            }
          }
        }
      }
    }
    .body-bottom {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 500px;
      ${Breakpoints.lessThan('lg')` 
        height: max-content;
      `}
      ${Breakpoints.lessThan('md')` 
        flex-direction: column;
      `}
      .bottom-left {
        width: 60%;
        height: 100%;
        border-radius: 15px;
        background-color: white;
        margin-right: 10%;
        ${Breakpoints.lessThan('md')` 
          width: 100%;
        `}
        .top {
          width: 98%;
          display: flex;
          flex-direction: row;
          margin-bottom: 30px;
          padding: 20px;
          justify-content: space-between;
          h1 {
            color: black;
            font-size: 30px;
          }

          .edit-detail {
            width: 40px;
            height: 40px;
            border-radius: 100%;
            border: none;
            background: #6a4029;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            color: #6a4029;

            img {
              object-fit: scale-down;
            }
          }
        }

        .body {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          ${Breakpoints.lessThan('lg')`
            flex-direction: column;
            margin-bottom: 20px;
          `}
          .body-left {
            width: 100%;
            display: flex;
            flex-direction: column;

            .left-top {
              display: flex;
              flex-direction: column;
              margin-bottom: 50px;
              padding-left: 20px;

              p {
                font-weight: bolder;
                color: black;
                font-size: 20px;
              }

              input {
                height: 40px;
                width: 90%;
                outline: none;
                border: none;
                border-bottom: 2px solid black;
              }
            }

            .left-bottom {
              display: flex;
              flex-direction: column;
              padding-left: 20px;

              p {
                font-weight: bolder;
                color: black;
                font-size: 20px;
              }

              input {
                height: 40px;
                width: 90%;
                outline: none;
                border: none;
                border-bottom: 2px solid black;
              }
            }
          }

          .body-right {
            width: 100%;
            display: flex;
            flex-direction: column;

            .right-top {
              display: flex;
              flex-direction: column;
              margin-bottom: 50px;
              padding-left: 20px;

              p {
                font-weight: bolder;
                color: black;
                font-size: 20px;
              }

              input {
                height: 40px;
                width: 90%;
                outline: none;
                border: none;
                border-bottom: 2px solid black;
              }
            }

            .right-bottom {
              padding-left: 20px;

              input [type='radio'] {
                font-size: 20px;
              }
            }
          }
        }
      }

      .bottom-right {
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        ${Breakpoints.lessThan('md')` 
          width: 100%; 
          margin-top: 50px;
        `}
        p {
          font-size: 30px;
          color: white;
          font-weight: bolder;
          margin-bottom: 20px;
        }

        .save {
          background-color: #6a4029;
          color: white;
          margin-bottom: 20px;
        }

        .cancel {
          margin-bottom: 20px;
        }

        .edit-password {
          color: #6a4029;
          background-color: white;
          margin-bottom: 20px;
          text-align: left;
          padding-left: 20px;

          span {
            margin-left: 55%;
          }
        }

        .logout {
          color: #6a4029;
          background-color: white;
          margin-bottom: 20px;
          text-align: left;
          padding-left: 20px;

          span {
            margin-left: 55%;
          }
        }
      }
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const BodyWrapper = styled.div``;
