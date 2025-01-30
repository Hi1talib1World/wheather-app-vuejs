<template>
    <div class="full-screen-image">
        <img src="https://example.com/london.jpg" alt="London">
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
.full-screen-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
}

.full-screen-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>