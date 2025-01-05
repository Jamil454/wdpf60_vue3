<template>
    <br>

    <div>
        <h1>Registration Form</h1>
        <hr>
        <div ref="infoShow" id="display">....</div>
        <hr>

        <div>Name:{{ fullname }}</div>
        <div>Gender:{{ gender }}</div>
        <div>District:{{ district }}</div>
        <div>Language:{{ languages }}</div>
        <div>Address:{{ address }}</div>

        <form @submit.prevent="FormSubmit">

            Name: <br> <input type="text" v-model="fullname" name="fullname"> <br>
            Gender: <br>
            Male <input type="radio" name="gender" v-model="gender" value="male">
            Female <input type="radio" name="gender" v-model="gender" value="female"> <br>
            District: <br>
            <select name="district" v-model="district">
                <option disabled selected>Select One</option>
                <option>Dhaka</option>
                <option>Khulna</option>
                <option>Faridpur</option>
                <option>Barishal</option>
            </select> <br>

            Interested Languages: <br>
            <input type="checkbox" name="PHP" v-model="languages" value="PHP">PHP
            <input type="checkbox" name="JAVA" v-model="languages" value="JAVA">JAVA
            <input type="checkbox" name="VUE" v-model="languages" value="VUE">VUE
            <input type="checkbox" name="HTML" v-model="languages" value="HTML">HTML
            <br>
            Address: <br>
            <textarea name="address" v-model="address"></textarea> <br>
            <input type="submit" name="submit" value="SUBMIT">

        </form>

    </div>
</template>

<script>
export default {
    data() {
        return {
            fullname: '',
            gender: '',
            district: '',
            languages: [],
            address: '',
            info:''


        }
    },
    methods: {
        FormSubmit() {
            this.info +="Full Name:" + this.fullname; 
            this.info +="<br> Gender:" + this.gender; 
            this.info +="<br> District:" + this.district; 
            this.info +="<br> Language:" + this.languages;
            this.info +="<br> Address:" + this.address;
            this.$refs.infoShow.innerHTML = this.info

        }
    },

}
</script>

<style scoped>
#display{
    color: crimson;
    background-color:yellow;

}
</style>