<template>
    <div>
        <div class="container">
            <Hero /> 
        </div>
        <BannerShop />
        <div class="container">
        <section class="blog spad">
            <div class="row">
                <div class="col-lg-4 col-md-5">
                    <div class="blog__sidebar">
                        <div class="blog__sidebar__search">
                            <form action="#">
                                <input type="text" placeholder="Search...">
                                <button type="submit"><span class="icon_search"></span></button>
                            </form>
                        </div>
                        <div class="blog__sidebar__item">
                            <h4>Categories</h4>
                            <ul>
                                <li><a href="#">All</a></li>
                                <li><a href="#">Beauty (20)</a></li>
                                <li><a href="#">Food (5)</a></li>
                                <li><a href="#">Life Style (9)</a></li>
                                <li><a href="#">Travel (10)</a></li>
                            </ul>
                        </div>
                        <div class="blog__sidebar__item">
                            <h4>Recent News</h4>
                            <div class="blog__sidebar__recent"  v-for="sidBar in sideBar">
                                <a href="#" class="blog__sidebar__recent__item">
                                    <div class="blog__sidebar__recent__item__pic">
                                        <img :src="sidBar.imgsrc" alt="">
                                    </div>
                                    <div class="blog__sidebar__recent__item__text">
                                        <h6>{{sidBar.title}}</h6>
                                        <span>{{sidBar.date}}</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="blog__sidebar__item">
                            <h4>Search By</h4>
                            <div class="blog__sidebar__item__tags">
                                <a href="#">Apple</a>
                                <a href="#">Beauty</a>
                                <a href="#">Vegetables</a>
                                <a href="#">Fruit</a>
                                <a href="#">Healthy Food</a>
                                <a href="#">Lifestyle</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-8 col-md-7">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6" v-for="blog in blogList">
                        <div class="blog__item">
                            <div class="blog__item__pic">
                                <img :src="blog.imgsrc" alt="">
                            </div>
                            <div class="blog__item__text">
                                <ul>
                                    <li><i class="fa fa-calendar-o"></i>{{blog.date}}</li>
                                    <li><i class="fa fa-comment-o"></i> 5</li>
                                </ul>
                                <h5><a href="#">{{blog.title}}</a></h5>
                                <p>{{blog.content}}</p>
                                <a href="#" class="blog__btn">READ MORE <span class="arrow_right"></span></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="product__pagination blog__pagination">
                            <a href="#">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#"><i class="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
        </div>
    </div>
</template>

<script>

    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    import BannerShop from '../layout/bannerShop.vue'
    import Hero from '../layout/Hero.vue'
    export default{
        components:{ Hero, BannerShop, VueSlickCarousel },
        data(){
            return{
                sideBar:[
                    {
                        id: 1,
                        date: 'May 4, 2019',
                        commentCount: '5',
                        title: '09 Kinds Of Vegetables Protect The Liver',
                        content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
                        imgsrc: require("../../assets/blog/blog-1.jpg")
                    },
                    {
                        id: 2,
                        date: 'May 4, 2019',
                        commentCount: '5',
                        title: '09 Kinds Of Vegetables Protect The Liver',
                        content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
                        imgsrc: require("../../assets/blog/blog-2.jpg")
                    },
                    {
                        id: 3,
                        date: 'May 4, 2019',
                        commentCount: '5',
                        title: '09 Kinds Of Vegetables Protect The Liver',
                        content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
                        imgsrc: require("../../assets/blog/blog-3.jpg")
                    },
                ],
                blogList: [
                    {
                        id: 1,
                        date: 'May 4, 2019',
                        commentCount: '5',
                        title: 'Cooking tips make cooking simple',
                        content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
                        imgsrc: require("../../assets/blog/blog-1.jpg")
                    },
                    {
                        id: 2,
                        date: 'May 4, 2019',
                        commentCount: '5',
                        title: '6 ways to prepare breakfast for 30',
                        content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
                        imgsrc: require("../../assets/blog/blog-2.jpg")
                    },
                    {
                        id: 3,
                        date: 'May 4, 2019',
                        commentCount: '5',
                        title: 'Cooking tips make cooking simple',
                        content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
                        imgsrc: require("../../assets/blog/blog-3.jpg")
                    },
                    {
                        id: 4,
                        date: 'May 4, 2019',
                        commentCount: '5',
                        title: 'Cooking tips make cooking simple',
                        content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
                        imgsrc: require("../../assets/blog/blog-4.jpg")
                    },
                    {
                        id: 5,
                        date: 'May 4, 2019',
                        commentCount: '5',
                        title: 'Cooking tips make cooking simple',
                        content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
                        imgsrc: require("../../assets/blog/blog-5.jpg")
                    },
                    {
                        id: 6,
                        date: 'May 4, 2019',
                        commentCount: '5',
                        title: 'Cooking tips make cooking simple',
                        content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
                        imgsrc: require("../../assets/blog/blog-6.jpg")
                    },
                ],
            }
        }
    }
</script>

<style>
    .blog__sidebar__recent__item__pic{
        width: 26%;
    }
    .blog__sidebar__recent{
        margin-bottom: 1rem;
    }
    .blog__item__text,
    .blog__sidebar__item{
        text-align: start;
    } 
</style>