import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IC_Logo as logo, IC_List as listIcon } from '../../../assets/icons';
import { useState } from 'react';
import style from './navbar.module.css';

const Navbar = (props) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const formatUrl = ([first, ...last]) => {
    return first.toUpperCase() + last.join('');
  };
  return (
    <>
      <Head>
        {router.route.split('/')[1] === '' && <title>Coffe-Shoop | Home</title>}
        {router.route.split('/')[1] !== '' && <title>Coffe-Shoop | {formatUrl(router.route.split('/')[1])}</title>}
      </Head>
      <div className={style.navbar}>
        <div className={`${style['navbar-container']} container`}>
          <div className={style['navbar-menu-left']}>
            <Image src={logo} width="25px" height="25px" alt="icon-logo" />
            <p className={style['navbar-text-brand']}>Coffee Shop</p>
          </div>
          <div className={style['button-show-hide-navbar']}>
            <button onClick={() => setShow(!show)} className={style['btn-navbar']}>
              <Image src={listIcon} alt="icon-list" />
            </button>
          </div>
          <div className={`${style['navbar-menu-right']} ${show ? style['show-navbar'] : ''}`}>
            <ul className={style['navbar-menu']}>
              <li className={`${style['li-menu']}`}>
                <Link href="/">
                  <a className={`${style['li-menu-a']} ${router.pathname === '/' ? style['li-menu-a-active'] : ''}`}>
                    Home
                  </a>
                </Link>
              </li>
              <li className={`${style['li-menu']}`}>
                <Link href="/products">
                  <a
                    className={`${style['li-menu-a']} ${
                      router.pathname === '/products' ? style['li-menu-a-active'] : ''
                    }`}
                  >
                    Product
                  </a>
                </Link>
              </li>
              <li className={`${style['li-menu']}`}>
                <Link href="/cart">
                  <a
                    className={`${style['li-menu-a']} ${router.pathname === '/cart' ? style['li-menu-a-active'] : ''}`}
                  >
                    Your Cart
                  </a>
                </Link>
              </li>
              <li className={`${style['li-menu']}`}>
                <Link href="/history">
                  <a
                    className={`${style['li-menu-a']} ${
                      router.pathname === '/history' ? style['li-menu-a-active'] : ''
                    }`}
                  >
                    History
                  </a>
                </Link>
              </li>
              <li className="li-menu">
                <button onClick={() => router.push('/auth/login')} className={`${style['btn-white']}`}>
                  Login
                </button>
              </li>
              <li className="li-menu">
                <button onClick={() => router.push('/auth/register')} className={style['btn-orange']}>
                  Register
                </button>
              </li>
              {props.menu}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
