<script>
    import mapStyles from "../../common/data/map-styles"; // optional
    export let latitude;
    export let longitude;
    let container;
    let map;
    let zoom = 8;
    let center = { lat: latitude, lng: longitude };

    import { onMount } from "svelte";

    onMount(async () => {
        map = new google.maps.Map(container, {
            zoom,
            center,
            styles: mapStyles, // optional
        });
    });
</script>

<div class="full-screen" bind:this={container} />

<style>
    .full-screen {
        width: 100%;
        height: 100%;
    }
</style>
