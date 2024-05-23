
<template>
    <input type="text" @input="insertData($event.target.value)" placeholder="Имя">
    <input type="password" placeholder="Пароль">
    <input type="email" placeholder="Email">
    <p>{{ userName }}</p>
</template>

<script>
    export default{
        data() {
            return{
                userName: "",
                userPass: '',
                userEmail: '',
            }
        },
        methods: {
            insertData(val) {
                this.userName = val
            }
        }
    }

</script>

<style scoped>
h3{
    font-weight: lighter;
}
p{
    color: red;
}
</style>userName: ""userPass: ''userEmail: ''userName: ""userPass: ''userEmail: ''userPass: ''userEmail: ''
