<template>
    <li v-if="this.index >= 10" :class="{admin : this.userIsAdmin.isAdmin}" class="users__list-user">
        <div class="users__user-item users__user-item--position">#{{this.index + 1}}</div>
        <div class="users__user-item users__user-item--name">{{this.userIsAdmin.name}}</div>
        <div class="users__user-item users__user-item--level">{{this.userIsAdmin.level}}</div>
        <div class="users__user-item users__user-item--experience">{{this.userIsAdmin.experience}}</div>
        <div class="users__user-item users__user-item--visit">{{this.userIsAdmin.lastVisit}}</div>
        <div class="users__user-item users__user-item--time">{{this.userIsAdmin.timeOnSite}}</div>
    </li>
</template>

<script>
export default {
    props: {
        users: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            userIsAdmin: {},
            index: this.index
        }
    },
    methods: {
        getUsersIsAdmin() {
            for(let user of this.users) {
                if(user.isAdmin == true) {
                    this.userIsAdmin = user
                }
            }
            this.index = this.users.findIndex(el => el.name === this.userIsAdmin.name);
        }
    },
    mounted() {
        this.getUsersIsAdmin()
    }
}
</script>

<style scoped lang="sass">
.users__list-user
    width: 100%
    font-weight: 300
    display: flex
    align-items: center
    border-bottom: 1px solid #fff 
    padding-bottom: 8px
    &.admin
        border-color: #00eaff
        color: #00eaff
    &:last-child
        margin-top: 8px
    &:not(:last-child)
        margin-bottom: 8px
    .users__user-item
        flex: 1 1 20%
        text-align: center
        &--position,&--level
            max-width: 8%
        &--name,&--visit
            text-align: left
        &--time
            text-align: right
</style>