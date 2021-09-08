/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';
import { Breakpoints } from '../src/utils';
import Image from 'next/image';
import PublicRoute from '../src/components/hoc/PublicRoute';
import IMG_TeamWork from '../src/assets/images/IMG_TeamWork.png';
import IMG_Global from '../src/assets/images/IMG_Global.png';
import IMG_Sponsored from '../src/assets/images/IMG_Sponsored.png';
import { Button, CardWraper } from '../src/components/atoms';
import person from '../src/assets/icons/person.png';
import location from '../src/assets/icons/location.png';
import love from '../src/assets/icons/love.png';
import {
  ICAvatar,
  ICChecklistGreen,
  ICLocation,
  ICLove,
  IC_Search,
  IMGDummyProduct1,
  IMGDummyProduct2,
  IMGDummyProduct3,
  IMGGLobe,
  IMG_AvatarDefault,
  IMG_DummyProduct,
  LogoAmazon,
  LogoDiscord,
  LogoNetflix,
  LogoReddit,
  LogoSpotify,
} from '../src/assets';
import router from 'next/router';

function Home() {
  return (
    <StyledHomePage>
      <div className="header-section">
        <div className="container">
          <div className="search-wrapper">
            <div className="search-icon">
              <Image src={IC_Search} alt="icon search" width={24} height={24} />
              <div className="input-wrapper">
                <input type="text" placeholder="Search" />
              </div>
            </div>
          </div>
          <div className="content">
            <div className="wrapper">
              <h1 className="heading-page">
                Start Your Day with Coffee and Good Meals
              </h1>
              <h4 className="sub-heading">
                We provide high quality beans, good taste, and healthy meals
                made by love just for you. Start your day with us for a bigger
                smile!
              </h4>
              <Button
                className="button"
                onClick={() => router.push('/products')}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <section className="service-section">
          <div className="card-summary">
            <div className="item">
              <div className="icon avatar">
                <Image src={ICAvatar} alt="checklist" width={55} height={55} />
              </div>
              <div className="desc">
                <p className="text-bold">90+</p>
                <p className="text">Staff</p>
              </div>
            </div>
            <div className="item">
              <div className="icon location">
                <Image
                  src={ICLocation}
                  alt="checklist"
                  width={55}
                  height={55}
                />
              </div>
              <div className="desc">
                <p className="text-bold">30+</p>
                <p className="text">Stores</p>
              </div>
            </div>
            <div className="item last">
              <div className="icon customers">
                <Image src={ICLove} alt="checklist" width={55} height={55} />
              </div>
              <div className="desc">
                <p className="text-bold">900+</p>
                <p className="text">Customers</p>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="image-wrapper">
              <Image src={IMG_TeamWork} alt="globe" layout="fill" />
            </div>
            <div className="service-description">
              <h2 className="heading-section">
                We Provide Good Coffee and Healthy Meals
              </h2>
              <p className="text">
                You can explore the menu that we provide with fun and have their
                own taste and make your day better.
              </p>
              <div className="list-service">
                <div className="item-list">
                  <Image
                    src={ICChecklistGreen}
                    alt="checklist"
                    width={24}
                    height={24}
                  />
                  <span className="text">High quality beans</span>
                </div>
                <div className="item-list">
                  <Image
                    src={ICChecklistGreen}
                    alt="checklist"
                    width={24}
                    height={24}
                  />
                  <span className="text">
                    Healthy meals, you can request the ingredients
                  </span>
                </div>
                <div className="item-list">
                  <Image
                    src={ICChecklistGreen}
                    alt="checklist"
                    width={24}
                    height={24}
                  />
                  <span className="text">
                    Chat with our staff to get better experience for ordering
                  </span>
                </div>
                <div className="item-list">
                  <Image
                    src={ICChecklistGreen}
                    alt="checklist"
                    width={24}
                    height={24}
                  />
                  <span className="text">
                    Free member card with a minimum purchase of IDR 200.000.
                  </span>
                </div>
                <div className="item-list">
                  <Image
                    src={ICChecklistGreen}
                    alt="checklist"
                    width={24}
                    height={24}
                  />
                  <span className="text">High quality beans</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="menu-favorite-section">
          <h2 className="heading-section">Here is People’s Favorite</h2>
          <p className="sub-heading">
            Let’s choose and have a bit taste of poeple’s favorite. It might be
            yours too!
          </p>
          <div className="menus">
            <div className="menu-item">
              <div className="image-product-wrapper">
                <Image src={IMGDummyProduct1} alt="product" layout="fill" />
              </div>
              <div className="description-product-wrapper">
                <h5 className="product-name">Hazelnut Latte</h5>
                <ul>
                  <li>
                    <Image
                      src={ICChecklistGreen}
                      alt="checklist"
                      width={24}
                      height={24}
                    />
                    <span className="text">HazelnutSyrup</span>
                  </li>
                  <li>
                    <Image
                      src={ICChecklistGreen}
                      alt="checklist"
                      width={24}
                      height={24}
                    />
                    <span className="text">Wanilla Whipped Cream</span>
                  </li>
                  <li>
                    <Image
                      src={ICChecklistGreen}
                      alt="checklist"
                      width={24}
                      height={24}
                    />
                    <span className="text">Ice / Hot</span>
                  </li>
                  <li>
                    <Image
                      src={ICChecklistGreen}
                      alt="checklist"
                      width={24}
                      height={24}
                    />
                    <span className="text">Sliced Banana on Top</span>
                  </li>
                </ul>
              </div>
              <div className="price-wrapper">
                <p className="price-bold">IDR 25.000</p>
                <button
                  className="btn-checkout"
                  onClick={() => router.push('/products')}
                >
                  Order Now
                </button>
              </div>
            </div>
            <div className="menu-item">
              <div className="image-product-wrapper">
                <Image src={IMGDummyProduct2} alt="product" layout="fill" />
              </div>
              <div className="description-product-wrapper">
                <h5 className="product-name">Pinky Promise</h5>
                <ul>
                  <li>
                    <Image
                      src={ICChecklistGreen}
                      alt="checklist"
                      width={24}
                      height={24}
                    />
                    <span className="text">1 Shot of Coffee</span>
                  </li>
                  <li>
                    <Image
                      src={ICChecklistGreen}
                      alt="checklist"
                      width={24}
                      height={24}
                    />
                    <span className="text">Vanilla Whipped Cream</span>
                  </li>
                  <li>
                    <Image
                      src={ICChecklistGreen}
                      alt="checklist"
                      width={24}
                      height={24}
                    />
                    <span className="text">Chocolate Biscuits</span>
                  </li>
                  <li>
                    <Image
                      src={ICChecklistGreen}
                      alt="checklist"
                      width={24}
                      height={24}
                    />
                    <span className="text">Strawberry Syrup</span>
                  </li>
                  <li>
                    <Image
                      src={ICChecklistGreen}
                      alt="checklist"
                      width={24}
                      height={24}
                    />
                    <span className="text">Sliced strawberry on Top</span>
                  </li>
                </ul>
              </div>
              <div className="price-wrapper">
                <p className="price-bold">IDR IDR 30.000</p>
                <button
                  className="btn-checkout "
                  onClick={() => router.push('/products')}
                >
                  Order Now
                </button>
              </div>
            </div>
            <div className="menu-item">
              <div className="image-product-wrapper">
                <Image src={IMGDummyProduct3} alt="product" layout="fill" />
              </div>
              <div className="description-product-wrapper">
                <h5 className="product-name">Chicken Wings</h5>
                <ul>
                  <li>
                    <Image
                      src={ICChecklistGreen}
                      alt="checklist"
                      width={24}
                      height={24}
                    />
                    <span className="text">Wings</span>
                  </li>
                  <li>
                    <Image
                      src={ICChecklistGreen}
                      alt="checklist"
                      width={24}
                      height={24}
                    />
                    <span className="text">Drum Sticks</span>
                  </li>
                  <li>
                    <Image
                      src={ICChecklistGreen}
                      alt="checklist"
                      width={24}
                      height={24}
                    />
                    <span className="text">Mayonaise and Lemon</span>
                  </li>
                  <li>
                    <Image
                      src={ICChecklistGreen}
                      alt="checklist"
                      width={24}
                      height={24}
                    />
                    <span className="text">Hot Fried</span>
                  </li>
                </ul>
              </div>
              <div className="price-wrapper">
                <p className="price-bold">IDR 25.000</p>
                <button
                  className="btn-checkout"
                  onClick={() => router.push('/products')}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="store-section">
          <h2 className="heading-page">
            Visit Our Store in the Spot on the Map Below
          </h2>
          <p className="sub-heading">
            See our store in every city on the spot and spen your good day
            there. See you soon!
          </p>
          <div className="image-wrapper">
            <div className="image-location">
              <Image src={IMGGLobe} layout="fill" alt="our store" />
            </div>
          </div>
        </section>
        <section className="partner-section">
          <h2 className="heading-section">Our Partner</h2>
          <div className="images-wrapper">
            <div className="partner">
              <Image src={LogoNetflix} alt="netlix" />
            </div>
            <div className="partner">
              <Image src={LogoReddit} alt="reddit" />
            </div>
            <div className="partner">
              <Image src={LogoAmazon} alt="amazon" />
            </div>
            <div className="partner">
              <Image src={LogoDiscord} alt="discord" />
            </div>
            <div className="partner">
              <Image src={LogoSpotify} alt="spotify" />
            </div>
          </div>
        </section>
        <section className="testimony-section">
          <h2 className="heading-section">
            Loved by Thousands of Happy Customer
          </h2>
          <p className="sub-heading">
            These are the stories of our customers who have visited us with
            great pleasure.
          </p>
          <div className="testimony-wrapper">
            <div className="customer">
              <div className="profile">
                <Image
                  src={IMG_AvatarDefault}
                  alt="user"
                  width={50}
                  height={50}
                />
                <div className="desc">
                  <h5 className="username">Viezh Robert</h5>
                  <p className="text">Shanxi, China</p>
                </div>
              </div>
              <p className="text">
                “Wow... I am very happy to spend my whole day here. the Wi-fi is
                good, and the coffee and meals tho. I like it here!! Very
                recommended!
              </p>
            </div>
            <div className="customer">
              <div className="profile">
                <Image
                  src={IMG_AvatarDefault}
                  alt="user"
                  width={50}
                  height={50}
                />
                <div className="desc">
                  <h5 className="username">Viezh Robert</h5>
                  <p className="text">Shanxi, China</p>
                </div>
              </div>
              <p className="text">
                “Wow... I am very happy to spend my whole day here. the Wi-fi is
                good, and the coffee and meals tho. I like it here!! Very
                recommended!
              </p>
            </div>
            <div className="customer">
              <div className="profile">
                <Image
                  src={IMG_AvatarDefault}
                  alt="user"
                  width={50}
                  height={50}
                />
                <div className="desc">
                  <h5 className="username">Viezh Robert</h5>
                  <p className="text">Shanxi, China</p>
                </div>
              </div>
              <p className="text">
                “Wow... I am very happy to spend my whole day here. the Wi-fi is
                good, and the coffee and meals tho. I like it here!! Very
                recommended!
              </p>
            </div>
          </div>
          <CardWraper className="promo">
            <div className="left">
              <h1 className="heading-section">Check our promo today!</h1>
              <p className="text">Lets see the deals and pick yours!</p>
            </div>
            <div className="right">
              <Button>See Promo</Button>
            </div>
          </CardWraper>
        </section>
      </div>
    </StyledHomePage>
  );
}
export default PublicRoute(Home);

const StyledHomePage = styled.div`
  .header-section {
    background-image: url('/HeaderHomePage.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    padding-top: 125px;
    height: 100vh;
    /*  */
    ${Breakpoints.lessThan('xsm')`
      height: max-content;
      padding-bottom: 50px;
    `}

    .container {
      display: flex;
      height: 100%;
      flex-direction: column;
      .search-wrapper {
        display: flex;
        justify-content: flex-end;
        ${Breakpoints.lessThan('md')`
          width: 100%;
        `}
        .search-icon {
          background: #efeeee;
          border-radius: 30px;
          display: flex;
          gap: 10px;
          padding: 8px 16px;
          .input-wrapper {
            position: relative;
            width: max-content;
            input {
              height: 100%;
              right: 0;
              background-color: transparent;
              &:focus {
                outline: none;
              }
            }
          }
        }
      }
      .content {
        flex: 1;
        margin-top: 100px;
        .wrapper {
          max-width: 650px;
          font-family: Rubik;
          font-style: normal;
          font-weight: bold;
          .heading-page {
            font-size: 50px;
            line-height: 70px;
            color: #ffffff;
            margin-bottom: 20px;
          }
          .sub-heading {
            font-size: 20px;
            line-height: 30px;
            color: #ffffff;
            margin-bottom: 30px;
          }
          .button {
            width: 250px;
          }
        }
      }
    }
  }
  /* START = GLOBAL STYLING */
  section {
    margin-bottom: 100px;
    ${Breakpoints.lessThan('lg')`
      margin-bottom: 50px; 
    `}
  }
  /* img {
    object-fit: cover;
  } */
  .text {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #4f5665;
  }
  .heading-section {
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 50px;
    color: #0b132a;
    margin-bottom: 20px;
  }
  /* END = GLOBAL STYLING */
  .service-section {
    position: relative;
    padding-top: 100px;
    ${Breakpoints.lessThan('md')` 
      padding-top: 10px; 
    `}
    .card-summary {
      top: -80px;
      width: 100%;
      height: 150px;
      position: absolute;
      background: #ffffff;
      border-radius: 10px;
      display: flex;
      justify-content: space-around;
      padding: 25px;
      box-shadow: 0px 6px 20px rgba(196, 196, 196, 0.67);
      ${Breakpoints.lessThan('md')` 
        position: relative;
        top: 0px;
        margin-bottom: 50px;
        flex-direction: column;
        height: max-content;
        margin-top: 25px;
      `}
      .item {
        width: 100%;
        display: flex;
        gap: 22px;
        justify-content: center;
        align-items: center;
        border-right: 2px solid #eeeff2;
        ${Breakpoints.lessThan('md')` 
          border: 0;
        `}
        .desc {
          ${Breakpoints.lessThan('md')` 
            width: 100%; 
          `}
          .text-bold {
            font-family: Rubik;
            font-style: normal;
            font-weight: 500;
            font-size: 35px;
            line-height: 50px;
            color: #0b132a;
          }
        }
        &.last {
          border: 0;
        }
      }
    }
    .content {
      display: flex;
      ${Breakpoints.lessThan('lg')`
        flex-direction: column;
      `}
      .image-wrapper {
        padding: 50px;
        width: 50%;
        position: relative;
        img {
          object-fit: cover;
        }
        ${Breakpoints.lessThan('lg')`
          width: 100%;
          height: 250px;
        `}
      }
      .service-description {
        padding: 50px;
        ${Breakpoints.lessThan('lg')`
          padding: 20px;
        `}
        .text {
          margin-bottom: 16px;
        }
        .list-service {
          .item-list {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 16px;
            span {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
  .menu-favorite-section {
    /* background: linear-gradient(180deg, #F8F8F8 -45.04%, rgba(248, 248, 248, 0) 88.56%); */
    padding: 40px 0;
    .heading-section,
    .sub-heading {
      text-align: center;
    }
    .menus {
      margin-top: 20px;
      display: flex;
      justify-content: space-around;
      gap: 50px;
      ${Breakpoints.lessThan('lg')`
        flex-direction: column; 
        gap: 20px;
      `}
      .menu-item {
        width: 330px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px 0;
        background: #ffffff;
        border: 2px solid #dddddd;
        box-sizing: border-box;
        border-radius: 10px;
        gap: 20px;
        ${Breakpoints.lessThan('lg')`
          flex-direction: row; 
          width: 100%;
          padding: 50px;
        `}
        ${Breakpoints.lessThan('sm')`
          flex-direction: column;
        `}
        .image-product-wrapper {
          position: relative;
          width: 120px;
          height: 120px;
          img {
            border-radius: 100%;
          }
        }
        .description-product-wrapper {
          ${Breakpoints.lessThan('lg')`
            flex: 1;
          `}
          .product-name {
            font-family: Rubik;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 30px;
            text-align: center;
            color: #0b132a;
          }
          ul {
            li {
              display: flex;
              align-items: center;
              gap: 10px;
            }
          }
        }
        .price-wrapper {
          .price-bold {
            font-family: Rubik;
            font-style: normal;
            font-weight: 500;
            font-size: 25px;
            line-height: 30px;
            text-align: center;
            color: #0b132a;
          }
          .btn-checkout {
            padding: 13px 0;
            width: 100%;
            margin-top: 16px;
            border: 2px solid #ffba33;
            box-sizing: border-box;
            border-radius: 50px;
            font-weight: bold;
            font-size: 16px;
            line-height: 19px;

            color: #6a4029;
            &:hover {
              background: #ffba33;
              border-radius: 50px;
              box-shadow: 0px 6px 20px rgba(196, 196, 196, 0.67);
            }
          }
        }
      }
    }
  }
  .store-section {
    height: max-content;

    .heading-page {
      font-weight: 500;
      font-size: 35px;
      line-height: 50px;
      text-align: center;
      color: #0b132a;
    }
    .sub-heading {
      font-size: 16px;
      line-height: 30px;
      text-align: center;
      color: #4f5665;
    }
    .image-wrapper {
      height: 500px;
      display: flex;
      justify-content: center;
      img {
        ${Breakpoints.lessThan('md')`
            object-fit: cover; 
        `}
      }
      .image-location {
        margin-top: 30px;
        width: 100%;
        position: relative;
      }
    }
  }
  .partner-section {
    .heading-section {
      text-align: center;
      margin-top: 50px;
    }
    .images-wrapper {
      display: flex;
      justify-content: center;
      gap: 50px;
      ${Breakpoints.lessThan('sm')`
        
      `}
      flex-wrap: wrap;
    }
  }
  .testimony-section {
    position: relative;
    padding-bottom: 120px;
    ${Breakpoints.lessThan('xl')`
      padding-bottom: 20px;
    `}

    .heading-section {
      text-align: center;
    }
    .sub-heading {
      text-align: center;
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      text-align: center;
      line-height: 30px;
      color: #4f5665;
    }
    .testimony-wrapper {
      margin-top: 20px;
      display: flex;
      gap: 26px;
      ${Breakpoints.lessThan('md')`
        flex-direction: column;
      `}
      .customer {
        padding: 10px;
        background: #ffffff;
        border: 2px solid #6a4029;
        box-sizing: border-box;
        border-radius: 10px;
        ${Breakpoints.lessThan('md')`
           padding: 16px;
        `}
        .profile {
          display: flex;
          gap: 16px;
          margin-bottom: 1rem;
          .desc {
            .username {
              font-family: Rubik;
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 30px;
              color: #0b132a;
            }
          }
        }
      }
    }
    .promo {
      display: flex;
      padding: 50px;
      justify-content: space-between;
      position: absolute;
      width: 100%;
      bottom: -180px;
      ${Breakpoints.lessThan('lg')`
        bottom: -130px; 
        `}
      ${Breakpoints.lessThan('xl')`
        position: relative;
        flex-direction: column;
        padding: 20px;
        justify-content: start;
      `}
      
      .right {
        display: flex;
        button {
          width: 250px;
          ${Breakpoints.lessThan('xl')`
            width: 100%; 
            margin-top: 25px;
          `}
        }
      }
    }
  }
`;
