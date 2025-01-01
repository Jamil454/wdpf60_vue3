<template>
    <div>
        <ul style="text-align:left">
            <li v-bind:key="x" v-for="x in fruits">{{ x }}</li>
            <hr>
            <li v-for="(x,index) in fruits" :key="index">{{x}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fruits:[
                    "Apple",
                    "Orange",
                    "Mango",
                    "Banana"
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>