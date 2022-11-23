<template>
    <div>
        <div class="container">
            <Hero />
        </div>
        <BannerShop />
        <section class="product spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-5">
                    <div class="sidebar">
                        <div class="sidebar__item">
                            <h4>Department</h4>
                            <ul>
                                <li><a href="#">Fresh Meat</a></li>
                                <li><a href="#">Vegetables</a></li>
                                <li><a href="#">Fruit & Nut Gifts</a></li>
                                <li><a href="#">Fresh Berries</a></li>
                                <li><a href="#">Ocean Foods</a></li>
                                <li><a href="#">Butter & Eggs</a></li>
                                <li><a href="#">Fastfood</a></li>
                                <li><a href="#">Fresh Onion</a></li>
                                <li><a href="#">Papayaya & Crisps</a></li>
                                <li><a href="#">Oatmeal</a></li>
                            </ul>
                        </div>
                        <div class="sidebar__item">
                            <h4>Price</h4>
                            <div class="price-range-wrap">
                                <div class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                    data-min="10" data-max="540">
                                    <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                                    <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                                    <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                                </div>
                                <div class="range-slider">
                                    <div class="price-input">
                                        <input type="text" id="minamount">
                                        <input type="text" id="maxamount">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar__item sidebar__item__color--option">
                            <h4>Colors</h4>
                            <div class="sidebar__item__color sidebar__item__color--white">
                                <label for="white">
                                    White
                                    <input type="radio" id="white">
                                </label>
                            </div>
                            <div class="sidebar__item__color sidebar__item__color--gray">
                                <label for="gray">
                                    Gray
                                    <input type="radio" id="gray">
                                </label>
                            </div>
                            <div class="sidebar__item__color sidebar__item__color--red">
                                <label for="red">
                                    Red
                                    <input type="radio" id="red">
                                </label>
                            </div>
                            <div class="sidebar__item__color sidebar__item__color--black">
                                <label for="black">
                                    Black
                                    <input type="radio" id="black">
                                </label>
                            </div>
                            <div class="sidebar__item__color sidebar__item__color--blue">
                                <label for="blue">
                                    Blue
                                    <input type="radio" id="blue">
                                </label>
                            </div>
                            <div class="sidebar__item__color sidebar__item__color--green">
                                <label for="green">
                                    Green
                                    <input type="radio" id="green">
                                </label>
                            </div>
                        </div>
                        <div class="sidebar__item">
                            <h4>Popular Size</h4>
                            <div class="sidebar__item__size">
                                <label for="large">
                                    Large
                                    <input type="radio" id="large">
                                </label>
                            </div>
                            <div class="sidebar__item__size">
                                <label for="medium">
                                    Medium
                                    <input type="radio" id="medium">
                                </label>
                            </div>
                            <div class="sidebar__item__size">
                                <label for="small">
                                    Small
                                    <input type="radio" id="small">
                                </label>
                            </div>
                            <div class="sidebar__item__size">
                                <label for="tiny">
                                    Tiny
                                    <input type="radio" id="tiny">
                                </label>
                            </div>
                        </div>
                        <div class="sidebar__item">
                            <div class="latest-product__text">
                                <h4>Latest Products</h4>
                                <div class="latest-product__slider owl-carousel">
                                    <div class="latest-prdouct__slider__item">
                                        <VueSlickCarousel v-bind="prdSideB">
                                            <a href="#" class="latest-product__item" v-for="prdSideB in cateList">
                                                <div class="latest-product__item__pic">
                                                    <img :src="prdSideB.imgsrc" alt="">
                                                </div>
                                                <div class="latest-product__item__text">
                                                    <h6>{{prdSideB.title}}</h6>
                                                    <span>{{prdSideB.priceCount}}</span>
                                                </div>
                                            </a>
                                        </VueSlickCarousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 col-md-7">
                    <div class="product__discount">
                        <div class="section-title product__discount__title">
                            <h2>Sale Off</h2>
                        </div>
                        <div class="product__discount__slider owl-Carousel">
                            <VueSlickCarousel  v-bind="owlCarousel">
                            <div class="col-lg-4" v-for="sale in listDiscount">
                                <div class="product__discount__item" >
                                    <div class="product__discount__item__pic set-bg">
                                        <div class="img">
                                        <img :src="sale.imgsrc" alt="">
                                        </div>
                                        <div class="product__discount__percent">{{sale.discount}}</div>
                                        <ul class="product__item__pic__hover">
                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="product__discount__item__text">
                                        <span>{{sale.title}}</span>
                                        <h5><a href="#">{{sale.title}}</a></h5>
                                        <div class="product__item__price">{{sale.price}}<span>{{sale.priceCount}}</span></div>
                                    </div>
                                </div>
                                </div>
                            </VueSlickCarousel>
                        </div>
                    </div>
                    <div class="filter__item">
                        <div class="row">
                            <div class="col-lg-4 col-md-5">
                                <div class="filter__sort">
                                    <span>Sort By</span>
                                    <select>
                                        <option value="0">Default</option>
                                        <option value="0">Default</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="filter__found">
                                    <h6><span>16</span> Products found</h6>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-3">
                                <div class="filter__option">
                                    <span class="icon_grid-2x2"></span>
                                    <span class="icon_ul"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6" v-for="product in cateList">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" >
                                  <div class="img">
                                    <img :src="product.imgsrc" alt="">
                                  </div>
                                    <ul class="product__item__pic__hover">
                                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6><a href="#">{{product.title}}</a></h6>
                                    <h5>{{product.priceCount}}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product__pagination">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#"><i class="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>
<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    import Hero from '../layout/Hero.vue'
    import BannerShop from '../layout/bannerShop.vue'
    export default{
        components:{Hero, BannerShop, VueSlickCarousel},
        data(){
            return{
                owlCarousel: {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: false,
                swipe: true,
                    responsive: [
                        {
                        "breakpoint": 1024,
                            "SlideCateList": {
                                "slidesToShow": 3,
                                "slidesToScroll": 1,
                                "infinite": true,
                                "dots": true
                            }
                        },
                        {   
                        "breakpoint": 600,
                            "SlideCateList": {
                                "slidesToShow": 2,
                                "slidesToScroll": 1,
                                "initialSlide": 2
                            }
                        },
                        {
                        "breakpoint": 480,
                            "SlideCateList": {
                                "slidesToShow": 1,
                                "slidesToScroll": 1
                            }
                        }
                    ]
                },
                prdSideB: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 3,
                    autoplay: false,
                    swipe: true,
                    responsive: [
                        {
                        "breakpoint": 1024,
                            "SlideCateList": {
                                "infinite": true,
                                "dots": true
                            }
                        },
                        {   
                        "breakpoint": 600,
                            "SlideCateList": {
                                "initialSlide": 2
                            }
                        },
                        {
                        "breakpoint": 480,
                            "SlideCateList": {
                                "slidesToShow": 1,
                                "slidesToScroll": 1
                            }
                        }
                    ]
                },
                listDiscount:[
                    {
                    class: 'oranges',
                    id: 1,
                    title: "Crab Pool Security",
                    price: "$36.00",
                    priceCount: "$30.00",
                    discount: "-20%",
                    imgsrc: require("../../assets/product/discount/pd-1.jpg")
                    },
                    {
                    class: 'oranges',
                    id: 2,
                    title: "Crab Pool Security",
                    price: "$36.00",
                    priceCount: "$30.00",
                    discount: "-20%",
                    imgsrc: require("../../assets/product/discount/pd-2.jpg")
                    },
                    {
                    class: 'oranges',
                    id: 3,
                    title: "Crab Pool Security",
                    price: "$36.00",
                    priceCount: "$30.00",
                    discount: "-20%",
                    imgsrc: require("../../assets/product/discount/pd-3.jpg")
                    },
                    {
                    class: 'oranges',
                    id: 4,
                    title: "Crab Pool Security",
                    price: "$36.00",
                    priceCount: "$30.00",
                    discount: "-20%",
                    imgsrc: require("../../assets/product/discount/pd-4.jpg")
                    },
                    {
                    class: 'oranges',
                    id: 5,
                    title: "Crab Pool Security",
                    price: "$36.00",
                    priceCount: "$30.00",
                    discount: "-20%",
                    imgsrc: require("../../assets/product/discount/pd-5.jpg")
                    },
                    {
                    class: 'oranges',
                    id: 6,
                    title: "Crab Pool Security",
                    price: "$36.00",
                    priceCount: "$30.00",
                    discount: "-20%",
                    imgsrc: require("../../assets/product/discount/pd-6.jpg")
                    },
                ],

                cateList:[
                {
                class: 'oranges',
                id: 1,
                title: "Crab Pool Security",
                price: "$36.00",
                priceCount: "$30.00",
                discount: "-20%",
                imgsrc: require("../../assets/product/product-1.jpg")
                },
                {
                class: 'fastfood',
                id: 2,
                title: "Crab Pool Security",
                price: "$36.00",
                priceCount: "$30.00",
                discount: "-20%",
                imgsrc: require("../../assets/product/product-2.jpg")
                },
                {
                class: 'fresh-meat',
                id: 3,
                title: "Crab Pool Security",
                price: "$36.00",
                priceCount: "$30.00",
                discount: "-20%",
                imgsrc: require("../../assets/product/product-3.jpg")
                },
                {
                class: 'oranges',
                id: 7,
                title: "Crab Pool Security",
                price: "$36.00",
                priceCount: "$30.00",
                discount: "-20%",
                imgsrc: require("../../assets/product/product-7.jpg")
                },
                {
                class: 'fresh-meat',
                id: 5,
                title: "Crab Pool Security",
                price: "$36.00",
                priceCount: "$30.00",
                discount: "-20%",
                imgsrc: require("../../assets/product/product-5.jpg")
                },
                {
                class: 'fastfood',
                id: 6,
                title: "Crab Pool Security",
                price: "$36.00",
                priceCount: "$30.00",
                discount: "-20%",
                imgsrc: require("../../assets/product/product-6.jpg")
                },
                {
                class: 'fresh-meat',
                id: 7,
                title: "Crab Pool Security",
                price: "$36.00",
                priceCount: "$30.00",
                discount: "-20%",
                imgsrc: require("../../assets/product/product-7.jpg")
                },
                {
                class: 'vegetables',
                id: 8,
                title: "Crab Pool Security",
                price: "$36.00",
                priceCount: "$30.00",
                discount: "-20%",
                imgsrc: require("../../assets/product/product-8.jpg")
                },
                {
                class: 'vegetables',
                id: 9,
                title: "Crab Pool Security",
                price: "$36.00",
                priceCount: "$30.00",
                discount: "-20%",
                imgsrc: require("../../assets/product/product-6.jpg")
                }
                ],
            }
        }
    }
</script>

<style>
 
</style>

