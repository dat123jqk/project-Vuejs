<template>
    <section class="from-blog spad">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="section-title from-blog__title">
                          <h2>From The Blog</h2>
                      </div>
                  </div>
              </div>
              <div class="row"  id="blogs">
                  <div class="col-lg-4 col-md-4 col-sm-6" v-for="blog in blogList" >
                      <div class="blog__item">
                          <div class="blog__item__pic">
                              <img :src="blog.imgsrc" alt="">         
                          </div>
                          <div class="blog__item__text">
                              <ul>
                                  <li><i class="fa fa-calendar-o"></i> {{ blog.date }}</li>
                                  <li><i class="fa fa-comment-o"></i> {{ blog.commentCount }}</li>
                              </ul>
                              <h5><a href="#">{{ blog.title }}</a></h5>
                              <p>{{ blog.content }}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
</template>

<script>
    export default {
        data() {
            return {
                blogList:[
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
                ]
            }
        },
    }
</script>