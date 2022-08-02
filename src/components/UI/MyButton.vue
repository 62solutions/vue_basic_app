<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button'
    }
</script>

<style scoped>
    .btn{
       
        min-width: 120px;
        padding: 10px 15px;
        margin: 10px 10px;
        border: 2px solid teal;
        color: teal;
    }
</style>