<template>
    <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="header__logo">
                        <router-link to="/"><img src="../../assets/logo.png" alt=""></router-link>
                    </div>
                </div>
                <div class="col-lg-6">
                    <nav class="header__menu">
                        <ul>
                            <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="/Shop">Shop</router-link></li>
                            <li><a>Pages</a>
                                <ul class="header__menu__dropdown">
                                    <li><router-link to="/product-detail">Shop Details</router-link></li>
                                    <li><router-link to="/testPhanTrang">Test Phan Trang</router-link></li>
                                    <li><router-link to="/shopingcart">Shoping Cart</router-link></li>
                                    <li><router-link to="/checkOut">Check Out</router-link></li>
                                    <li><router-link to="/blogDetail">Blog Details</router-link></li>
                                    <li><router-link to="/productList">Product List </router-link></li>
                                    <li><router-link to="/productForm">Product Form</router-link></li>
                                </ul>   
                            </li>
                            <li><router-link to="/Blog">Blog</router-link></li>
                            <li><router-link to="/Contact">Contact</router-link></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-3">
                    <div class="header__cart">
                        <ul>
                            <li><a href="#"><i class="fa fa-heart"></i> <span>1</span></a></li>
                            <li><a href="#"><i class="fa fa-shopping-bag"></i> <span>3</span></a></li>
                        </ul>
                        <div class="header__cart__price">item: <span>$150.00</span></div>
                    </div>
                </div>
            </div>
            <div class="humberger__open">
                <i class="fa fa-bars"></i>
            </div>
  </div>
</template>

<style>
    .hero__categories ul{
        text-align: start;
    }
</style>