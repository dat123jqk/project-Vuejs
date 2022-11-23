<template>

    <div class="product">
        <div class="pricing-header рх-3 ру-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h2 class="display-4">Product Management</h2>
            <p><router-link to="productForm">Add new</router-link></p>
        </div>
        <div class="container">
            <div class="card-deck mb-3 text-center">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product name</th>
                            <th scoper="col">Price</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>    
                            <th scope=" row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope=" row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope=" row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>