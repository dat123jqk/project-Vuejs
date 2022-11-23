<template>
    <div>
        <div class="hero container">
            <hero />
        </div>
        <BannerShop />
        <section class="shoping-cart spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="shoping__cart__table">
                            <table>
                                <thead>
                                    <tr>
                                        <th class="shoping__product">Products</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="shopping in listshop">
                                        <td class="shoping__cart__item">
                                            <img :src="shopping.imgsrc" alt="">
                                            <h5>{{shopping.title}}</h5>
                                        </td>
                                        <td class="shoping__cart__price">
                                            {{shopping.price}}
                                        </td>
                                        <td class="shoping__cart__quantity">
                                            <div class="quantity">
                                                <div class="pro-qty"><span class="dec qtybtn">-</span>
                                                    <input type="text" value="1">
                                                <span class="inc qtybtn">+</span></div>
                                            </div>
                                        </td>
                                        <td class="shoping__cart__total">
                                            {{shopping.total}}
                                        </td>
                                        <td class="shoping__cart__item__close">
                                            <span class="icon_close"></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="shoping__cart__btns">
                            <a href="#" class="primary-btn cart-btn">CONTINUE SHOPPING</a>
                            <a href="#" class="primary-btn cart-btn cart-btn-right"><span class="icon_loading"></span>
                                Upadate Cart</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="shoping__continue">
                            <div class="shoping__discount">
                                <h5>Discount Codes</h5>
                                <form action="#">
                                    <input type="text" placeholder="Enter your coupon code">
                                    <button type="submit" class="site-btn">APPLY COUPON</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="shoping__checkout">
                            <h5>Cart Total</h5>
                            <ul>
                                <li>Subtotal <span>$454.98</span></li>
                                <li>Total <span>$454.98</span></li>
                            </ul>
                            <a href="#" class="primary-btn">PROCEED TO CHECKOUT</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import BannerShop from '../layout/bannerShop.vue'
    import Hero from '../layout/Hero.vue';
    export default {
        components:{BannerShop, Hero},
        data() {
            return {
                listshop: [
                    {
                        id: 1,
                        title: 'Vegetables Package',
                        price: '$55.00',
                        total: '$110.00',
                        imgsrc:  require("../../assets/cart/cart-1.jpg")
                    },
                    {
                        id: 2,
                        title: ' Fresh Garden Vegetable',
                        price: '$39.00',
                        total: '$39.99',
                        imgsrc:  require("../../assets/cart/cart-2.jpg")
                    },
                    {
                        id: 3,
                        title: ' Fresh Garden Vegetable',
                        price: '$69.00',
                        total: '$69.99',
                        imgsrc:  require("../../assets/cart/cart-3.jpg")
                    },
                ]
            }
        }
    }
</script>

<style>
    .shoping__cart__btns{
        display: flex;
        justify-content: space-between;
    }
    .shoping__continue,
    .shoping__checkout{
        text-align: start;
    }
</style>