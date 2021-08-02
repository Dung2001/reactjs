import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,

} from 'react-router-dom';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import NotFoundPage from './pages/404';
import LayoutAdmin from './layouts/admin';

import LayoutWebsite from './layouts/website';
import ProductDetailPage from './pages/product-detail';
import AdminProductPage from './pages/admin/product';
import AdminProductAddPage from './pages/admin/product/add';
import AdminProductEditPage from './pages/admin/product/edit';
import SignUp from './pages/user/SignUp';
import SignIn from './pages/user/SignIn';
import AdminCategoryPage from './pages/admin/category';
import AdminCateAddPage from './pages/admin/category/add';
import AdminCateEditPage from './pages/admin/category/edit';
import ProductPage from './pages/product'
import CategoryPage from './pages/category'


const Routers = (props) => {
    
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/admin/:path?/:path?/:path?">
                        <LayoutAdmin>
                            <Switch>
                                <Route exact path="/admin">
                                    <Redirect to="/admin/dashboard" />
                                </Route>
                                <Route exact path="/admin/dashboard">
                                    Dashboard
                                </Route>
                                <Route exact path="/admin/product">
                                    <AdminProductPage {...props} />
                                </Route>
                                <Route exact path="/admin/product/add">
                                    <AdminProductAddPage {...props} />
                                </Route>
                                <Route exact path="/admin/product/edit/:id">
                                    <AdminProductEditPage {...props} />
                                </Route>
                                <Route exact path="/admin/category">
                                    <AdminCategoryPage {...props} />
                                </Route>
                                <Route exact path="/admin/category/add">
                                    <AdminCateAddPage {...props} />
                                </Route>
                                <Route exact path="/admin/category/edit/:id">
                                    <AdminCateEditPage {...props} />
                                </Route>
                                <Route exact path="/admin/users">
                                    Users Manager
                                </Route>
                            </Switch>
                        </LayoutAdmin>
                    </Route>
                    <Route>
                        <LayoutWebsite {...props}>
                            <Switch>
                                <Route exact path="/">
                                    <HomePage {...props} />
                                </Route>
                                <Route exact path="/signup">
                                    <SignUp />
                                </Route>
                                <Route exact path="/signin">
                                    <SignIn />
                                </Route>
                                <Route exact path="/about">
                                    <AboutPage />
                                </Route>
                                <Route path="/products">
                                    <ProductPage {...props} />
                                </Route>
                                <Route path="/product/:id">
                                    <ProductDetailPage />
                                </Route>
                                <Route path="/category/:id">
                                    <CategoryPage {...props} />
                                </Route>
                                <Route path="*">
                                    <NotFoundPage />
                                </Route>
                            </Switch>
                        </LayoutWebsite>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Routers