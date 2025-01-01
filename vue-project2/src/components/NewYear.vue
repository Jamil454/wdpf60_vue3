<template>
    <div>
        <h1 v-bind:class="ClassName">Happy New Year 2025</h1>
        <img v-bind:src="url" alt="Hello" width="600">
        <hr>
        <p v-if="productsInStock">
             In Stock

        </p>
        <p  v-else>
            Not in Stock

        </p>
        <hr>
        <div v-show="showDiv">This div tag can be hidden</div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                ClassName:"head",
                url:require("@/newyear.jpg"),
                productsInStock:false,
                showDiv:true
            }
        },
    }
</script>

<style>
.head{
    font-size: 35px;
    color: red;
    background-color: aqua;
    
}

</style>