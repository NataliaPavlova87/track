<template>
    <ul class="py-5">
        <TrackItem v-for="(hour, hourIndex) in trackItems" :key="`track-items--${hourIndex}`" :item="hour" />
    </ul>
</template>

<script setup lang="ts">
    import TrackItem from '@components/trak/TrackItem.vue'
    import { getTrackItems } from '@components/trak/composition/getTrackItems'

    const trackItems = getTrackItems()
</script>
