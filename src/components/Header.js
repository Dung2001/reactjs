import React, { useState, useEffect } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { signOut, isAuthenticated } from '../auth/index'

import { useLocation } from 'react-router-dom';


const Header = (props) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [isLogged, setLogged] = useState(false);
  const { user } = isAuthenticated();
  useEffect(() => {
    isAuthenticated() && setLogged(true)
  }, [pathname, isLogged])
  return (
    <div>
      <header class="site-navbar" role="banner" id="header">

        <div className="site-navbar-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                <form action className="site-block-top-search">
                  <span className="icon icon-search2" />
                  <input type="text" className="form-control border-0" placeholder="Search" />
                </form>
              </div>
              <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                <div className="site-logo">
                  <a href="/" className="js-logo-clone">Shoppers</a>
                </div>
              </div>
              <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                <div className="site-top-icons">
                  <ul>
                    <li><a href="#"><span className="icon icon-person" /></a></li>
                    <li><a href="#"><span className="icon icon-heart-o" /></a></li>
                    <li>
                      <a href="cart.html" className="site-cart">
                        <span className="icon icon-shopping_cart" />
                        <span className="count">2</span>
                      </a>
                    </li>
                    <li className="d-inline-block d-md-none ml-md-0"><a href="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="site-navigation text-right text-md-center" role="navigation">
          <div className="container">
            <ul className="site-menu js-clone-nav d-none d-md-block">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="has-children">
                <a>Category</a>
                <ul className="dropdown">
                  {props.categories.map(category => {
                    return <li><a style={{ textDecoration: 'none' }} className="p-2 text-dark" href={`/category/${category._id}`}>{category.name}</a></li>
                  })}
                </ul>
              </li>
              <li><a href="/products">Product</a></li>
              {pathname !== "/signin" && isLogged ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link"
                      activeClassName="active" aria-current="page"
                      to={user.roler == 1 ? "admin/dashboard" : "admin/dashboard"}>Dashboard</NavLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={() => signOut(() => {
                      setLogged(false)
                      history.push('/')
                    })}>Sign Out</a>
                  </li>

                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signin">Sign In</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                  </li>
                </>
              )
              }
            </ul>
          </div>
        </nav>
      </header>
    </div>

  )
}

export default Header