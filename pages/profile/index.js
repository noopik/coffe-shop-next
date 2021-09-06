import styled from 'styled-components';
import { Breakpoints } from '../../src/utils';
import PrivateRoute from '../../src/components/hoc/PrivateRoute'
import { Button } from '../../src/components/atoms';

const ProfileUser = () => {
  return (
    <StyledProfileUserPage>
      <Container>
        <BodyWrapper>
          <h1>User Profile</h1>
          <div className="body-top">
            <div className="top-left">
              <img src="/ava.png" alt="" />
              <h3>Zulaikha</h3>
              <h4>zulaikha@gmail.com</h4> <br /><br />
              <h5>Has been ordered 15 products</h5>
            </div>
            <div className="top-right">
              <div className="top">
                <h1>Contact</h1>
                <button className="edit">====</button>
              </div>
              <div className="body">
                <div className="body-left">
                  <div className="left-top">
                    <p>Email Address</p>
                    <input type="text" placeholder="Email" />
                  </div>
                  <div className="left-bottom">
                    <p>Delivery Address</p>
                    <input type="text" placeholder="Delivery address" />
                  </div>
                </div>

                <div className="body-right">
                  <div className="right-top">
                    <p>Mobile number</p>
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
                <button className="edit-detail">====</button>
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
                      <input type="radio" value="male" name="gender" />  Male
                    </div>
                    <div className="female">
                      <input type="radio" value="female" name="gender" />  Female
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
              <Button className="edit-password">Edit Password <span> > </span> </Button>
              <Button className="logout">Log Out <span> > </span> </Button>

            </div>
          </div>
        </BodyWrapper>
      </Container>
    </StyledProfileUserPage>
  )
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
`;

const Container = styled.div`
  width: 100%;
  height: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

`

const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('IMG_BodyProfile.png');
  background-repeat: no-repeat;
  // background-attachment: fixed;
  background-position: center;
  background-size: cover;
  padding-top: 50px;

  h1 {
    font-size: 40px;
    color: white;
    font-weight: bolder;
    padding-right: 83%;
  }

  .body-top {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 400px;
    margin-bottom: 100px;
   
    .top-left {
      width: 30%;
      height: 100%;
      border-radius: 15px;
      background-color: white;
      margin-right: 10%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

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
      width: 60%;
      height: 100%;
      border-radius: 15px;
      background-color: white;

      .top {
        width: 98%;
        display: flex;
        flex-direction: row;
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
          background: #6A4029;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          color: #6A4029;

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

        }
      }
    }
  }

  .body-bottom {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 500px;

    .bottom-left {
      width: 60%;
      height: 100%;
      border-radius: 15px;
      background-color: white;
      margin-right: 10%;

      .top {
        width: 98%;
        display: flex;
        flex-direction: row;
        margin-bottom: 30px;
        padding: 20px;
        
        h1 {
          color: black;
          font-size: 30px; 
        }

        .edit-detail {
          width: 40px;
          height: 40px;
          border-radius: 100%;
          border: none;
          background: #6A4029;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          color: #6A4029;

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

            input [type="radio"] {
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
    
      p {
        font-size: 30px;
        color: white;
        font-weight: bolder;
        margin-bottom: 20px;
      }

      .save {
        background-color: #6A4029;
        color: white;
        margin-bottom: 20px;
      }

      .cancel {
        margin-bottom: 20px;
      }

      .edit-password {
        color: #6A4029;
        background-color: white;
        margin-bottom: 20px;
        text-align: left;
        padding-left: 20px;

        span {
          margin-left: 55%;
        }
      }

      .logout {
        color: #6A4029;
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
`