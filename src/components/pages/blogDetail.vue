<template>
    <section class="blog-details spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-5 order-md-1 order-2">
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
                            <div class="blog__sidebar__recent" v-for="sidBar in sideBar">
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
                <div class="col-lg-8 col-md-7 order-md-1 order-1">
                    <div class="blog__details__text" v-for="detail in detailData">
                        <img :src="detail.imgsrc" alt="">
                        <p>{{detail.desc}}</p>
                        <h3>{{detail.title}}</h3>
                        <p>{{detail.sub}}</p>
                    </div>
                    <div class="blog__details__content">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="blog__details__author">
                                    <div class="blog__details__author__pic">
                                        <img src="img/blog/details/details-author.jpg" alt="">
                                    </div>
                                    <div class="blog__details__author__text">
                                        <h6>Michael Scofield</h6>
                                        <span>Admin</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="blog__details__widget">
                                    <ul>
                                        <li><span>Categories:</span> Food</li>
                                        <li><span>Tags:</span> All, Trending, Cooking, Healthy Food, Life Style</li>
                                    </ul>
                                    <div class="blog__details__social">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-google-plus"></i></a>
                                        <a href="#"><i class="fa fa-linkedin"></i></a>
                                        <a href="#"><i class="fa fa-envelope"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <blog />
        </div>
    </section>
</template>

<script>
    import blog from '../layout/blog.vue';
    export default {
        components: { blog },
        data(){
            return{
                sideBar:[
                    {
                        id: 1,
                        date: 'May 4, 2019',
                        commentCount: '5',
                        title: '09 Kinds Of Vegetables Protect The Liver',
                        content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
                        imgsrc: require("../../assets/blog/blog-4.jpg")
                    },
                    {
                        id: 2,
                        date: 'May 4, 2019',
                        commentCount: '5',
                        title: '09 Kinds Of Vegetables Protect The Liver',
                        content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
                        imgsrc: require("../../assets/blog/blog-5.jpg")
                    },
                    {
                        id: 3,
                        date: 'May 4, 2019',
                        commentCount: '5',
                        title: '09 Kinds Of Vegetables Protect The Liver',
                        content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
                        imgsrc: require("../../assets/blog/blog-6.jpg")
                    },
                ],
                detailData : [
                    {
                        id: 1,
                        desc: 'Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.',
                        title: 'The corner window forms a place within a place that is a resting point within the large space.',
                        sub: 'The study area is located at the back with a view of the vast nature. Together with the other buildings, a congruent story has been managed in which the whole has a reinforcing effect on the components. The use of materials seeks connection to the main house, the adjacent stables'
                    }
                ]
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