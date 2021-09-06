import {Fragment} from 'react';
import Head from 'next/head';
import img404 from '../src/assets/images/404.png';
import styled from 'styled-components';
import Button from '../src/components/atoms/Button';
import {useRouter} from 'next/router';

const Pages404 = () => {
  const {push} = useRouter();
  return (
    <Fragment>
      <Head>
        <title>404 | Not Found</title>
      </Head>
      <Wrapper>
        <Text404>4</Text404>
        <ImageWrapper>
          <Image src={img404.src} alt="" />
        </ImageWrapper>
        <Text404>4</Text404>
      </Wrapper>
      <TextWrapper>
        <span className="Oops">Oops</span>
        <span>The page you are looking for was not found</span>
      </TextWrapper>
      <BtnWrapper>
        <Button theme="brown" className="ml-2 mr-2" onClick={() => push('/')}>
          Back to Home
        </Button>
      </BtnWrapper>
    </Fragment>
  );
};

const Image = styled.img``;

const ImageWrapper = styled.div`
  width: 150px;
  margin-top: 40px;
  @media (min-width: 768px) {
    width: 200px;
  }

  @media (min-width: 992px) {
    width: 230px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Text404 = styled.span`
  font-size: 120px;
  color: #4d2e1e;
  font-family: Rubik;
  @media (min-width: 768px) {
    font-size: 200px;
  }

  @media (min-width: 992px) {
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  font-family: Poppins;
  margin-bottom: 20px;
  .Oops {
    font-size: 30px;
  }
`;

const BtnWrapper = styled.div`
  padding-left: 0px;
  padding-right: 0px;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    padding-left: 150px;
    padding-right: 150px;
  }

  @media (min-width: 992px) {
    padding-left: 400px;
    padding-right: 400px;
  }
`;

export default Pages404;
