<template>
  <div id="home">
    <Mapa />
  </div>
</template>

<script>
// @ is an alias to /src
import Mapa from '@/components/Mapa.vue';

export default {
	name: 'home',
	components: {
		Mapa
	}
};
</script>

<style lang="stylus">
	@import '../assets/stylus/home.styl';
</style>
