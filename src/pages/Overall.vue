<template>
    <user-list 
        :users="users"
        :isUsersLoading="isUsersLoading"
    />
</template>

<script>
import UserList from '@/components/UserList.vue'
export default {
    components: {
        UserList
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
    }
}
</script>
