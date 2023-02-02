<template>
    <div class="users__list-heading">
        <div class="users__heading-item users__heading-item--position">Pos.</div>
        <div class="users__heading-item users__heading-item--name">Name</div>
        <div class="users__heading-item users__heading-item--level">Level</div>
        <div class="users__heading-item users__heading-item--experience">Exp.</div>
        <div class="users__heading-item users__heading-item--visit">Last visit</div>
        <div class="users__heading-item users__heading-item--time">Time on site</div>
    </div>
</template>

<style scoped lang="sass">
.users__list-heading
    font-size: 20px
    width: 100%
    font-weight: 400
    display: flex
    align-items: center
    border: 0
    padding-bottom: 8px
    color: rgb(255, 255, 255, 60%)
    &:not(:last-child)
        margin-bottom: 8px
    .users__heading-item
        flex: 1 1 20%
        text-align: center
        &--position,&--level
            max-width: 8%
        &--name,&--visit
            text-align: left
        &--time
            text-align: right
</style>