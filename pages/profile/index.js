/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';
import { Breakpoints, phoneRegExp } from '../../src/utils';
import PrivateRoute from '../../src/components/hoc/PrivateRoute';
import { Button } from '../../src/components/atoms';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { updateProfile } from '../../src/redux/action/userAction';
import { useEffect } from 'react';

const ProfileUser = (props) => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState({});
  useEffect(() => {
    setUsers((old) => ({
      ...old,
      ...props.user,
      avatar: '',
      firstname: props.user.firstname ? props.user.firstname : '',
      lastname: props.user.lastname ? props.user.lastname : '',
      address: props.user.address ? props.user.address : '',
      phone: props.user.phone_number ? props.user.phone_number : '',
      gender: props.user.gender ? props.user.gender : '',
      birth: props.user.date_of_birth ? new Date(props.user.date_of_birth).toISOString().slice(0, 10) : '',
    }));
  }, [props.user]);
  const defaultImageValue = 'https://www.bioid.com/wp-content/uploads/face-database-bioid.jpg';
  const validate = Yup.object({
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    address: Yup.string().required('Address is required'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Phone number is required')
      .min(11, 'Password must be at least 11 charaters')
      .max(13, 'Password must be less than 13 charaters'),
    gender: Yup.string().required('Gender is required'),
    birth: Yup.string().required('Birth is required'),
  });
  return (
    <StyledProfileUserPage>
      <div className="container">
        <Formik
          enableReinitialize
          initialValues={{
            email: users.email,
            firstname: users.firstname,
            lastname: users.lastname,
            address: users.address,
            phone: users.phone_number,
            gender: users.gender,
            birth: users.birth,
          }}
          validationSchema={validate}
          onSubmit={(values, { resetForm }) => {
            dispatch(updateProfile({ ...values, avatar: users.avatar }));
            resetForm();
          }}
        >
          {(formik, resetForm) => (
            <Form>
              <h1 className="heading-page">User Profile</h1>
              <div className="body-top">
                <div className="top-left">
                  <div className="avatar-wrapper">
                    {props.user.avatar && props.user.avatar.length > 10 && !users.avatar && (
                      <img src={`${process.env.NEXT_PUBLIC_API_URL}/${props.user.avatar}`} alt="img-profile" />
                    )}
                    {users.avatar && !props.user.avatar && (
                      <img src={URL.createObjectURL(users.avatar)} alt="img-profile" />
                    )}
                    {!users.avatar && !props.user.avatar && <img src={defaultImageValue} alt="img-profile" />}
                    {users.avatar && props.user.avatar && (
                      <img src={URL.createObjectURL(users.avatar)} alt="img-profile" />
                    )}
                    <div className="edit upload">
                      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.0779 1.54314C10.2368 1.37094 10.4255 1.23435 10.6332 1.14116C10.8409 1.04796 11.0635 1 11.2883 1C11.513 1 11.7356 1.04796 11.9433 1.14116C12.151 1.23435 12.3397 1.37094 12.4986 1.54314C12.6576 1.71533 12.7837 1.91976 12.8697 2.14474C12.9557 2.36973 13 2.61086 13 2.85439C13 3.09791 12.9557 3.33904 12.8697 3.56403C12.7837 3.78901 12.6576 3.99344 12.4986 4.16563L4.32855 13.0166L1 14L1.90779 10.3941L10.0779 1.54314Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <input
                        accept="image/jpeg, image/png"
                        type="file"
                        onChange={(e) => {
                          if (e.target.files[0].type === 'image/png' || e.target.files[0].type === 'image/jpeg') {
                            if (e.target.files[0].size > 1048576 * 2) {
                              setUsers((oldVal) => ({ ...oldVal, avatar: '' }));
                              toast.error('max size file is 2mb');
                            } else {
                              setUsers((oldVal) => ({ ...oldVal, avatar: e.target.files[0] }));
                            }
                          } else {
                            setUsers((oldVal) => ({ ...oldVal, avatar: '' }));
                            toast.error('Only image is allowed');
                          }
                        }}
                      />
                    </div>
                  </div>
                  <h3 className="heading-username">
                    {users?.firstname} {users?.lastname}
                  </h3>
                  <h4>{users?.email}</h4> <br />
                  <br />
                  {/* <h5>Has been ordered 15 products</h5> */}
                </div>
                <div className="top-right">
                  <div className="top">
                    <h1>Contact</h1>
                    <button className="edit">
                      <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      <div className="left-top ">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="text"
                          name="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          disabled={true}
                          placeholder="Email"
                        />
                      </div>
                      <div className={`left-bottom ${formik.errors.address ? 'input-error' : ''}`}>
                        <label>Delivery Address</label>
                        <input
                          type="text"
                          placeholder="Delivery address"
                          name="address"
                          onChange={formik.handleChange}
                          value={formik.values.address}
                        />
                        {formik.errors.address && <p className="input-invalid">{formik.errors.address}</p>}
                      </div>
                    </div>

                    <div className="body-right">
                      <div className={`right-top ${formik.errors.phone ? 'input-error' : ''}`}>
                        <label>Mobile number</label>
                        <input
                          type="text"
                          placeholder="Mobile number"
                          name="phone"
                          onChange={formik.handleChange}
                          value={formik.values.phone}
                        />
                        {formik.errors.phone && <p className="input-invalid">{formik.errors.phone}</p>}
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
                      <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      <div className={`left-top`}>
                        <label>Display name</label>
                        <input
                          type="text"
                          placeholder="Display name"
                          name="fullname"
                          value={
                            (users.firstname ? users.firstname : '') + ' ' + (users.lastname ? users.lastname : '')
                          }
                          disabled={true}
                        />
                      </div>
                      <div className={`left-top ${formik.errors.firstname ? 'input-error' : ''}`}>
                        <p>First name</p>
                        <input
                          type="text"
                          placeholder="First name"
                          name="firstname"
                          onChange={formik.handleChange}
                          value={formik.values.firstname}
                        />
                        {formik.errors.firstname && <p className="input-invalid">{formik.errors.firstname}</p>}
                      </div>
                      <div className={`left-bottom ${formik.errors.lastname ? 'input-error' : ''}`}>
                        <p>Last name</p>
                        <input
                          type="text"
                          name="lastname"
                          placeholder="last name"
                          onChange={formik.handleChange}
                          value={formik.values.lastname}
                        />
                        {formik.errors.lastname && <p className="input-invalid">{formik.errors.lastname}</p>}
                      </div>
                    </div>

                    <div className="body-right">
                      <div className={`right-top ${formik.errors.birth ? 'input-error' : ''}`}>
                        <p>DD / MM / YY</p>
                        <input type="date" name="birth" value={formik.values.birth} onChange={formik.handleChange} />
                        {formik.errors.birth && <p className="input-invalid">{formik.errors.birth}</p>}
                      </div>
                      <div className={`right-bottom ${formik.errors.gender ? 'input-error' : ''}`}>
                        <label className="male">
                          <input
                            type="radio"
                            onChange={formik.handleChange}
                            value="male"
                            name="gender"
                            checked={formik.values.gender === 'male'}
                          />{' '}
                          Male
                        </label>
                        <label className="female">
                          <input
                            type="radio"
                            onChange={formik.handleChange}
                            value="female"
                            name="gender"
                            checked={formik.values.gender === 'female'}
                          />{' '}
                          Female
                        </label>
                        {formik.errors.gender && <p className="input-invalid">{formik.errors.gender}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-right">
                  <p>Do you want to save the</p>
                  <p>change?</p>
                  <Button type="submit" className="save" disabled={!formik.isValid}>
                    Save
                  </Button>
                  <Button
                    type="button"
                    // className="cancel"
                    onClick={resetForm}
                  >
                    Cancel
                  </Button>
                  {/* <Button className="edit-password">Edit Password <span> > </span> </Button> */}
                  {/* <Button className="logout">Log Out <span> > </span> </Button> */}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </StyledProfileUserPage>
  );
};

export default PrivateRoute(ProfileUser, ['member', 'admin']);
// export default ProfileUser;

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
        .avatar-wrapper {
          width: 200px;
          height: 200px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 100%;
            margin-bottom: 20px;
          }
          .edit {
            position: absolute;
            bottom: 10px;
            right: 10px;
            input {
              width: 100%;
              height: 100%;
              position: absolute;
              opacity: 0;
            }
          }
        }
        h3.heading-username {
          font-size: 26px;
          max-width: 200px;
          text-align: center;
          margin: 16px 0;
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
                background-color: transparent;
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
              display: flex;
              flex-direction: column;
              label {
                font-family: Poppins;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 30px;
                color: #9f9f9f;
              }
              input [type='radio'] {
                font-size: 20px;
              }
              input [type='radio']:checked ~ label {
                color: red;
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
          /* background-color: #6a4029; */
          /* color: white; */
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
    /* GLOBAL STYLING IN CURRENT PAGE */
    /* Button Edit */
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
      &:hover {
        cursor: pointer;
      }
    }
    .input-error {
      /* background-color: red; */
      .input-invalid {
        font-size: 1rem !important;
        color: red !important;
        font-weight: 500 !important;
        margin-top: 10px;
        margin-bottom: 0;
      }
      label {
        color: red !important;
      }
      p {
        color: red !important;
      }
      input {
        color: red !important;
        border-bottom: 2px solid red !important;
        background-color: transparent !important;
      }
    }
  }
`;

// const Container = styled.div`
//   width: 100%;
//   height: 1200px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 80px;
// `;

// const BodyWrapper = styled.div``;
