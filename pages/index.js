/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';
import { Breakpoints } from '../src/utils';
import Image from 'next/image'
import PrivateRoute from '../src/components/hoc/PrivateRoute';
import IMG_TeamWork from '../src/assets/images/IMG_TeamWork.png'
import IMG_Global from '../src/assets/images/IMG_Global.png'
import IMG_Sponsored from '../src/assets/images/IMG_Sponsored.png'
import { Button } from '../src/components/atoms';
import person from '../src/assets/icons/person.png'
import location from '../src/assets/icons/location.png'
import love from '../src/assets/icons/love.png'



function Home() {
  return (
    <StyledHomePage>
      <Container>

        <HeaderHomePage>
          <TextHeader>
            <h1>Start Your Day with <br />Coffee and Good Meals</h1>
            <h4>We provide high quality beans, good taste, and healthy <br /> meals made by love just for you. Start your day with us <br /> for a bigger smile!</h4>
            <Button className="btn-start">Get Started</Button>
          </TextHeader>
          <RightHeader>
            <input type="text" placeholder="Search" />
          </RightHeader>

        </HeaderHomePage> 
        <div className="item">
          <div className="detail">
            <div className="left">
              <div className="icon">
                <Image src={person} alt="" />
              </div>
              
              <div className="person">
                <h1>90+</h1>
                <h2>Staffs</h2>
              </div>
            </div>
            <div className="middle">
            <div className="icon">
                <Image src={location} alt="" />
              </div>
              <div className="location">
                <h1>30+</h1>
                <h2>Stores</h2>
              </div>

            </div>
            <div className="right">
            <div className="icon">
                <Image src={love} alt="" />
              </div>
              <div className="like">
                <h1>800+</h1>
                <h2>Customer Likes</h2>
              </div>

            </div>
          </div>
        </div>

        <Body1>
          <Body1Left>
            <Image src={IMG_TeamWork} alt="" />
          </Body1Left>
          <Body1Right>
            <h2>We Provide Good Coffee <br /> and Healthy Meals</h2>
            <h4>You can explore the menu that we provide with fun and <br /> have their own taste and make your day better.</h4>
            <ul>
              <li>High quality beans</li>
              <li>Healthy meals, you can request the ingredients</li>
              <li>Chat with our staff to get better experience for ordering</li>
              <li>Free member card with a minimum purchase of IDR 200.000.</li>
            </ul>
          </Body1Right>
        </Body1>
        <Body2>
          <Body2Title>
            <h1>Here is People’s Favorite</h1>\
            <h3>Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</h3>
          </Body2Title>
          <Body2Card>
            <div className="card-wrap">
              <div className="card">
                <img src="/IMG_Product.png" alt="" />
                <h1>Hazelnut Latte</h1>
                <ul>
                  <li>check 1</li>
                  <li>check 2</li>
                  <li>check 3</li>
                  <li>check 4</li>
                  <li>check 5</li>
                </ul>
                <button className="order">Order now</button>
                <h2>IDR 25.000</h2>
              </div>

              <div className="card">
                <img src="/IMG_Product.png" alt="" />
                <h1>Hazelnut Latte</h1>
                <ul>
                  <li>check 1</li>
                  <li>check 2</li>
                  <li>check 3</li>
                  <li>check 4</li>
                  <li>check 5</li>
                </ul>
                <button className="order">Order now</button>
                <h2>IDR 25.000</h2>
              </div>

              <div className="card">
                <img src="/IMG_Product.png" alt="" />
                <h1>Hazelnut Latte</h1>
                <ul>
                  <li>check 1</li>
                  <li>check 2</li>
                  <li>check 3</li>
                  <li>check 4</li>
                  <li>check 5</li>
                </ul>
                <button className="order">Order now</button>
                <h2>IDR 25.000</h2>
              </div>
            </div>

          </Body2Card>
        </Body2>
        <Body3>
          <Body3Title>
            <h1>Visit Our Store in the </h1>
            <h1> Spot on the Map Below</h1> <br />
            <h3>See our store in every city on the spot and spen your good day there. See </h3>
            <h3> you soon!</h3>
          </Body3Title>
          <Body3Pic>
            <Image src={IMG_Global} alt="" />
          </Body3Pic>
        </Body3>
        <Body4>
          <h1>Our Partners</h1>
          <Image src={IMG_Sponsored} alt="" />
          <h1>Loved by Thousands of</h1>
          <h3>These are the stories of our customers who have visited us with great</h3>
          <h3> pleasure.</h3>
        </Body4>
      </Container>
    </StyledHomePage>
  );
}
export default PrivateRoute(Home);

const StyledHomePage = styled.div`
  /* background-color: yellow;
  h1 {
    font-size: 50px;
    ${Breakpoints.lessThan('2xl')`
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
    `}
  } */
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .item {
    width: 900px;
    height: 120px;
    border: none;
    background-color: white;
    border-radius: 15px;
    margin-right: 50px;
    box-shadow: 0px 1px 8px 1px #888888;
    display: flex;
    flex-direction: row;
    padding: 20px;

    .detail {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;

      
    }

    .left {
      display: flex;
      flex-direction: row;

      .icon {
          height: 40px;
          width: 40px;
          border-radius: 100%;
          background-color: #FFBA33;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-right: 20px;
      }

      .person {
        h1 {
          font-weight: bolder;
          font-size: 20px;
        }
        h2 {
          font-size: 15px;
          color: gray
        }
      }
      
    }

    .middle {
      display: flex;
      flex-direction: row;

      .icon {
          height: 40px;
          width: 40px;
          border-radius: 100%;
          background-color: #FFBA33;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-right: 20px;
      }

      .location {
        h1 {
          font-weight: bolder;
          font-size: 20px;
        }
        h2 {
          font-size: 15px;
          color: gray
        }
      }
    }

    .right {
      display: flex;
      flex-direction: row;

      .icon {
          height: 40px;
          width: 40px;
          border-radius: 100%;
          background-color: #FFBA33;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-right: 20px;
      }

      .like {
        h1 {
          font-weight: bolder;
          font-size: 20px;
        }
        h2 {
          font-size: 15px;
          color: gray
        }
      }
      


    
  }}
`

const HeaderHomePage = styled.div`
  width: 100%;
  height: 645px;
  display: flex;
  margin-top: 80px;
  flex-direction: row;
  justify-content: center;
  background-image: url('HeaderHomePage.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  h1 {
    color: white;
    font-size: 40px;
    margin-bottom: 20px
  }
  h4 {
    color: white;
    font-size: 18px;
    margin-bottom: 100px;
  }

  
`

const TextHeader = styled.div`
  width: 40%;
  height: 100%;
  padding-top: 100px;

  .btn-start {
    width: 300px;
  }
`

const RightHeader = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 20px;
  input {
    width: 250px;
    height: 50px;
    background: white;
    color: gray;
    border: none;
    border-radius: 30px;
    outline: none;
    padding-left: 15px;
    opacity: 0.8;
  }
`

const Body1 = styled.div`
  width: 80%;
  height: 500px;
  display: flex;
  flex-direction: row;
`

const Body1Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Body1Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 8%;
  h2 {
    font-size: 40px;
    font-weight: bolder;
    margin-bottom: 10px;
  }
  h4 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  ul {
    list-style: circle;
    /* list-style-image: url('../src/assets/icons/checklist.png'); */
  }
  li {
    font-size: 20px;
  }
`

const Body2 = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F8F8F8;
`

const Body2Title = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 35px;
    font-weight: bolder;
  }
  h3 {
    font-size: 15px;
    color: gray;
  }
`

const Body2Card = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10%;

  .card-wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .card {
    width: 200px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    border: 1px solid black;
    padding-top: 50px;
    margin-right: 30px;

    img {
      width: 100px;
      height: 100px;
      border-radius: 100%;
      margin-bottom: 30px;
    }

    h1 {
      font-size: 20px;
      font-weight: bolder;
      margin-bottom: 30px;
    }

    ul li:before {
      content: '✓'; 
      margin: 10px;
      margin-bottom: 20px;
     }

    ul {
      margin-bottom: 30px;
    }

    .order {
      width: 100px;
      height: 30px;
      border: 1px solid brown;
      border-radius: 30px;
      margin-bottom: 30px;
    }


  }
`

const Body3 = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 10%;
  background-color: #F8F8F8;
`
const Body3Title = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h1 {
    font-size: 35px;
    font-weight: bolder;
  }
  h3 {
    font-size: 15px;
    color: gray;
  }
`
const Body3Pic = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  Image {
    object-fit: contain;
  }
  margin-bottom: 100px;
`

const Body4 = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 10%;
  background-color: #F8F8F8;
  h1 {
    font-size: 35px;
    font-weight: bolder;
  }
  h3 {
    font-size: 15px;
    color: gray;
  }
  Image {
    object-fit: contain;
  }
`