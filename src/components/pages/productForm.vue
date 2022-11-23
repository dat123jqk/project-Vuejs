<template>
    <div class="">
        <div class="pricing-header рх-3 ру-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h2 class="display-4">Product Infomation</h2>
            <p><router-link to="/productList">Back</router-link></p>
        </div>
        <div class="container">
            <form @submit.prevent="save()">
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label">Product name</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" v-model="product.name"  v-bind:class="{'is-invalid': errors.name}"/>
                        <div class="feedback-invalid">{{errors.name}}</div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label">Product price</label>
                    <div class="col-sm-9">
                        <input type="number" class="form-control" v-model="product.price" v-bind:class="{'is-invalid': errors.price}"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for=" 'inputPassword" class="col-sm-3 col-form-label">Product descript</label>
                    <div class="col-sm-9">
                        <textarea class="form-control" rows="3" v-model="product.description"></textarea>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label"></label>
                    <div class="col-sm-9 text-left">
                        <button type="submit" class="btn btn-primary">Save</button> &nbsp;
                        <button type="reset" class="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'productForm',
        data(){
            return{
                errors : { 
                    name:'',
                    price: '',
                    description: ''
                },
                product:{
                    name:'',
                    price: '',
                    description: ''
                }
            }
        },
        methods:{
            validate(){
                this.errors = {
                    name:'',
                    price: '',
                    description: '',
                }
                if(!this.product.name){
                    this.errors.name = 'please name required'
                }
            },
            save(){
                console.log(this.product)
            }
        }
    }
</script>