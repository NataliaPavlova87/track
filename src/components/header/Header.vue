<template>
    <header class="header">
        <img src="~assets/images/logo.jpg" alt="" class="header__logo header-logo">
        <Progress class="header__progress" />
    </header>
</template>
<script setup lang="ts">
    import Progress from '@components/progress/Progress.vue'

</script>

<style scoped lang="scss">
  @import "@components/header/styles/header";
</style>
