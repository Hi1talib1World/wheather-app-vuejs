<template>
    <div class="favorites">
        <h1>Favorites</h1>
        <ul>
            <li v-for="favorite in favorites" :key="favorite.id">
                {{ favorite.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Favorites',
    data() {
        return {
            favorites: [
                { id: 1, name: 'New York' },
                { id: 2, name: 'Los Angeles' },
                { id: 3, name: 'Chicago' }
            ]
        };
    }
};
</script>

<style scoped>
.favorites {
    padding: 20px;
}

.favorites h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

.favorites ul {
    list-style-type: none;
    padding: 0;
}

.favorites li {
    margin: 5px 0;
}
</style>