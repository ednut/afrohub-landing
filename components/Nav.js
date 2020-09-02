import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import ContainerStyles from './styles/ContainerStyles';
import NavStyles from './styles/NavStyles';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};




const Nav = () => (
  <NavStyles>
    <ContainerStyles>
      <div className="header-wrap">
          <div className="header-wrap--logo-section">
          <Link href="/"><a><img src="static/logo.png" alt="" /></a></Link>
          </div>
          <div className="header-wrap--link-section">
              <ul>
                  <li className="hide-on-mobile"><Link href="/"><a>Home</a></Link></li>
                  <li className="hide-on-mobile"><Link href="/"><a>About Us</a></Link></li>
                  <li className="hide-on-mobile"><Link href="/"><a>Services</a></Link></li>
                  <li className="hide-on-mobile"><Link href="/"><a>Contact Us</a></Link></li>
                  {/* <li className="hide-on-mobile"><Link href="https://afrohub.typeform.com/to/rgfeMI"><a className="button button-header" target="_blank">Join the Waitlist</a></Link></li> */}
                  <li className="bugger-menu hide-on-desktop">
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                  </li>
              </ul>
          </div>
      </div>
    </ContainerStyles>
  </NavStyles>
);

export default Nav;