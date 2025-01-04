<template>
    <div>
        <ul>
            <li v-for="x in fruits" :key="x">{{ x }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                fruits:[
                    'Apple',
                    'Orange',
                    'Banana',
                    'Mango'
                ]
            }
        }
        
    }
</script>

<style >

</style>