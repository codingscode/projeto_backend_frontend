<template>
    <div class="header"></div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
    .header {
        grid-area: header;
        background: linear-gradient(to riht, rgb(155, 235, 155), white);

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>