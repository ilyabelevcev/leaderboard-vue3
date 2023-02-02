<template>
    <ul v-if="isUsersLoading == true" class="users__list">
        <user-heading/>
        <div class="users__loader">Loading...</div>
    </ul>
    <ul v-else class="users__list">
        <user-heading/>
        <user-item 
            v-for="user in users" :key="user.id"
            :users="users"
            :user="user"
        />
        <button v-if="this.unvisible == false" @click="openAllUsers" class="users__btn">
            <div>
                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="m16.5 11.995c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25z"/></svg>
            </div>
        </button>
        <user-admin-item 
            :users="users"
            v-if="this.unvisible == false"
        />
    </ul>
</template>

<script>
import UserHeading from '@/components/UserHeading.vue'
import UserItem from '@/components/UserItem.vue'
import UserAdminItem from '@/components/UserAdminItem.vue'
export default {
    components: {
        UserHeading,
        UserItem,
        UserAdminItem,
    },
    data() {
        return {
            unvisible: false,
        }
    },
    props: {
        users: {
            type: Array,
            required: true,
        },
        isUsersLoading: {
            type: Boolean,
            required: true
        },
    },
    methods: {
        openAllUsers() {
            for(let user of this.users) {
                user.visible = true
                this.unvisible = true
            }
        }
    }
}
</script>

<style scoped lang="sass">
.users__list
    width: 100%
    display: flex
    flex-direction: column
    align-items: center
    background-color: rgb(0, 0, 0, 30%)
    border-radius: 10px
    padding: 10px
    .users__loader
        width: 10% 
        position: relative
        display: flex
        justify-content: center
        padding-bottom: 15px 
        overflow: hidden
        &::before
            content: ''
            position: absolute
            bottom: 0px
            width: 100%
            height: 5px
            background-color: transparent
        &::after
            content: ''
            position: absolute
            bottom: 0
            left: 0
            width: 20px
            height: 5px
            background-color: #ccc
            animation: load 1.5s infinite linear
    .users__btn
        cursor: pointer
        background-color: transparent
        width: 100%
        display: flex
        align-items: center
        justify-content: center
        div
            width: 30px
            height: 30px
            svg
                path
                    transition: 0.2s linear
        &:hover
            div
                svg
                    path
                        fill: #333
@keyframes load
    0%
        left: -20%
    100%
        left: 120%
</style>