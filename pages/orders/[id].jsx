import styled from 'styled-components';
import PublicRoute from '../../src/components/hoc/PublicRoute';

const orderDetail = () => {
  return (
    <StyledOrderDetail>
      <div className="wrapper">
        <div className="header">Order Detail</div>
        <div className="table-wrapper">
          <table>
            <tbody>
              <tr>
                <td className="property">Invoice Number</td>
                <td className="value">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, facilis.</td>
              </tr>
              <tr>
                <td className="property">Payment</td>
                <td className="value">Bank transfer</td>
              </tr>
              <tr>
                <td className="property">Status</td>
                <td className="value">Completed</td>
              </tr>
              <tr>
                <td className="property">Total price</td>
                <td className="value">Rp. 34000000</td>
              </tr>
              <tr>
                <td className="property">Created at</td>
                <td className="value">Sunday, 20 june 2021</td>
              </tr>
              <tr>
                <td className="property">Product</td>
                <td className="value">
                  <div className="img-wrapper">
                    <img src="https://placeimg.com/640/580/people" alt="" />
                  </div>
                  <span className="product-name">Baju baru 1x</span>
                </td>
              </tr>
              <tr>
                <td className="property">Address</td>
                <td className="value">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel esse at nostrum cupiditate tempora
                  officia nemo accusamus autem labore accusantium.
                </td>
              </tr>
              <tr>
                <td className="property">Action</td>
                <td className="value">
                  <button>btn1</button>
                  <button>btn2</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </StyledOrderDetail>
  );
};

const StyledOrderDetail = styled.div`
  background-image: url('/BGPaymentsPage.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  padding-bottom: 10vh;
  padding-top: 15vh;
  /* min-height: 100vh; */
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 768px) {
    padding-bottom: 10vh;
    padding-top: 15vh;
    /* min-height: 100vh; */
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (min-width: 992px) {
    padding-bottom: 10vh;
    padding-top: 20vh;
    /* min-height: 100vh; */
    padding-left: 160px;
    padding-right: 160px;
  }

  .wrapper {
    width: 100%;
    background-color: #fff;
    border-radius: 10px;

    .header {
      width: 100%;
      height: 60px;
      border-bottom: 1px solid grey;
      font-family: Rubik;
      text-align: center;
      padding-top: 10px;
      font-weight: bold;
      font-size: 30px;
    }

    .table-wrapper {
      overflow-x: auto;
      padding: 50px 30px 50px 30px;
    }

    table {
      table-layout: auto;
      border-collapse: collapse;
      width: 100%;
      tbody {
        tr {
          td {
            max-width: 100%;
            white-space: -o-pre-wrap;
            word-wrap: break-word;
            white-space: pre-wrap;
            white-space: -moz-pre-wrap;
            white-space: -pre-wrap;
          }
          .property {
            vertical-align: text-top;
            font-weight: bold;
          }
          span {
            font-weight: bold;
          }
          td {
            border: 1px solid gray;
            padding: 15px;
          }
          button {
            width: 80px;
            height: 50px;
            background-color: #ffba33;
            margin: 5px;
            border-radius: 10px;
            font-weight: bold;
          }
        }
      }

      .img-wrapper {
        width: 200px;
        height: 250px;
        img {
          width: 100%;
          height: 100%;
          background-position: center;
          size: cover;
        }
      }
    }
  }
`;

export default PublicRoute(orderDetail);
