import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardOrder = ({ nameProduct, total, price, imageProduct,size }) => {
  // Mata Uang Rupiah
  const formatter = new Intl.NumberFormat(['ban', 'id']);

  return (
    <StyledCardOrder>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imageProduct} alt={nameProduct} className="image-product" />
      <div className="desc-product">
        <p className="paragraph">{nameProduct}</p>
        <p className="paragraph">x {total}</p>
        <p className="paragraph">{size}</p>
      </div>
      <p className="price">IDR {formatter.format(price)}</p>
    </StyledCardOrder>
  );
};

CardOrder.propTypes = {
  nameProduct: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  price: PropTypes.number,
  imageProduct: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
CardOrder.defaultProps = {
  nameProduct: 'Product Name',
  total: 20,
  price: 15000,
  imageProduct: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Homemade_Dalgona_Coffee.jpg',
  size: 'Regular',
};

export default CardOrder;

const StyledCardOrder = styled.div`
  display: flex;
  gap: 1rem;
  .image-product {
    width: 82px;
    height: 90px;
    object-fit: cover;
    border-radius: 20px;
  }
  .desc-product {
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    flex: 1;
    color: #000000;
  }
  .price {
    font-size: 20px;
    color: #000000;
    display: flex;
    align-items: center;
  }
`;
