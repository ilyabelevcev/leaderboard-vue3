<template>
    <li v-if="this.user.visible == true" :class="{admin : user.isAdmin}" class="users__list-user">
        <div class="users__user-item users__user-item--position">#{{this.index + 1}}</div>
        <div class="users__user-item users__user-item--name">{{user.name}}</div>
        <div class="users__user-item users__user-item--level">{{user.level}}</div>
        <div class="users__user-item users__user-item--experience">{{user.experience}}</div>
        <div class="users__user-item users__user-item--visit">{{user.lastVisit}}</div>
        <div class="users__user-item users__user-item--time">{{user.timeOnSite}}</div>
    </li>
</template>

<script>
export default {
    data() {
        return {
            index: this.index
        }
    },
    props: {
        users: {
            type: Array,
            required: true
        },
        user: {
            type: Object,
            required: true,
        },
    },
    mounted() {
        this.index = this.users.findIndex(el => el.name === this.user.name);
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