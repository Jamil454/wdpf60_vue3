<template>
    <div>
        <button @click="showData">Click Here</button>
        <h1 ref="h1cont"></h1>
    </div>
    <div>
        <hr>
        <p ref="msg">Today is the first Sunday of the year 2025.</p>
        <button @click="copyPaste">Click Here</button>
        <h1 ref="msgShow">...</h1>
    </div>

     <form action="">
        <input type="text" name="fullname" ref="fullname" @input="inputData">

     </form>
     <h1 ref="nameShow"></h1>


</template>

<script>
    export default {
        methods:{
            showData(){
               this.$refs.h1cont.innerHTML = "Hello World";
            },
            copyPaste(){
                this.$refs.msgShow.innerHTML = this.$refs.msg.innerHTML;
            },
            inputData(){
                this.$refs.nameShow.innerHTML = this.$refs.fullname.value;
            },
        },
    }
</script>

<style scoped>

</style>