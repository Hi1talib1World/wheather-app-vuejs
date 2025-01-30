<template>
    <div class="alert">
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: 'Alerts',
    props: {
        message: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.alert {
    padding: 10px;
    background-color: #f44336;
    color: white;
    margin-bottom: 15px;
}
</style>