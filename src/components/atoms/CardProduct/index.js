import Image from 'next/image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardProduct = ({
  idProduct,
  image,
  name,
  price,
  className,
  onClickCard,
  access,
  onClickEdit,
}) => {
  // Mata Uang Rupiah
  const formatter = new Intl.NumberFormat(['ban', 'id']);

  return (
    <StyledCardProduct className={className}>
      <div className="content" onClick={onClickCard}>
        <div className="image">
          {/* <Image
      src={IMG_DummyProductCard}
      alt="name product"
      layout="fill"
    /> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={name} />
        </div>
        <h4 className="title-product">{name}</h4>
        <p className="price">IDR {formatter.format(price)}</p>
      </div>
      {/* Jika role sebagai admin */}
      {access && (
        <div className="btn-edit" onClick={onClickEdit}>
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0779 1.54314C10.2368 1.37094 10.4255 1.23435 10.6332 1.14116C10.8409 1.04796 11.0635 1 11.2883 1C11.513 1 11.7356 1.04796 11.9433 1.14116C12.151 1.23435 12.3397 1.37094 12.4986 1.54314C12.6576 1.71533 12.7837 1.91976 12.8697 2.14474C12.9557 2.36973 13 2.61086 13 2.85439C13 3.09791 12.9557 3.33904 12.8697 3.56403C12.7837 3.78901 12.6576 3.99344 12.4986 4.16563L4.32855 13.0166L1 14L1.90779 10.3941L10.0779 1.54314Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </StyledCardProduct>
  );
};

CardProduct.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  className: PropTypes.string,
};
CardProduct.defaultProps = {
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmiqR_gB1aE6SmGpJvgdi6j6MZYtLpcSittA&usqp=CAU',
  name: 'Product Name',
  price: 250000,
};

export default CardProduct;

const StyledCardProduct = styled.div`
  height: 225px;
  display: flex;
  position: relative;
  .content {
    background: #ffffff;
    box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
    border-radius: 30px;
    width: 100%;
    padding: 21px;
    font-family: Poppins;

    .image {
      position: relative;
      margin: 0 auto;
      margin-top: -50px;
      width: 100px;
      height: 100px;
      img {
        object-fit: cover;
        border-radius: 100%;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .title-product {
      width: 100%;
      font-style: normal;
      font-weight: 900;
      font-size: 22px;
      line-height: 101.34%;
      text-align: center;
      color: #000000;
      margin: 10px 0;
    }
    .price {
      font-weight: bold;
      font-size: 17px;
      line-height: 25px;
      text-align: center;
      color: #6a4029;
    }
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
  .btn-edit {
    z-index: 9;
    width: 40px;
    height: 40px;
    background-color: #6a4029;
    position: absolute;
    bottom: -10px;
    right: -10px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
`;
