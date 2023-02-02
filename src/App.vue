<template>
    <div class="app__container">
        <nav class="app__nav">
            <router-link class="app__nav-link" to="/">Overall</router-link>
            <router-link class="app__nav-link" to="/ranks">Ranks</router-link>
        </nav>
        <router-view 
            :users="users"
            :isUsersLoading="isUsersLoading" 
        />
    </div>
</template>

<script>
import usersJSON from '@/json/info.json'
export default {
    data() {
        return {
            users: [],
            isUsersLoading: false, 
        }
    },
    methods: {
        async getUsers() {
            try {
                this.isUsersLoading = true;
                this.users = usersJSON.users;
                this.sortUsers() // сортировка всех пользователей
                for(let i = 0; i < 10; i++) {
                    this.users[i].visible = true
                }
                this.addUserAdmin(198) // добавление пользователя за которого мы просматриваем Лидерборд
            } catch (e) {
                alert('Ошибка')
            } finally {
                this.isUsersLoading = false;
            }
        },
        sortUsers() {
            this.users.sort(function (a, b) {
                if (a.experience > b.experience) {
                    return -1;
                }
                if (a.experience < b.experience) {
                    return 1;
                }
                return 0;
            });
        },
        addUserAdmin(i) {
            this.users[i - 1].isAdmin = true;
        },
    },
    mounted() {
        this.getUsers()
    }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap')
*,*::before,*::after
    font-family: 'Montserrat', sans-serif
    text-decoration: none
    box-sizing: border-box
    margin: 0
    padding: 0
    border: 0
ul,li 
    list-style: none
body
    background: linear-gradient(90deg, #d53369 0%, #6f51da 100%)
.app__container
    color: #fff
    width: 100%
    padding: 10px 20px
    .app__nav
        width: 100%
        display: flex
        align-items: center
        justify-content: center
        margin-bottom: 10px
        .app__nav-link
            font-size: 25px
            font-weight: 500
            color: #fff
            padding: 5px 10px
            border-radius: 10px
            &.router-link-active
                background-color: rgb(0, 0, 0, 30%) 
            &:not(:last-child)
                margin-right: 15px
                
</style>
