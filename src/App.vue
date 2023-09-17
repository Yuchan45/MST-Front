<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style>
:root {
  --primary-font: 'Inter', sans-serif;
}

html {
  height: 100%;
  display: flex;
}
body {
  width: 100%;
}
#app {
  font-family: var(--primary-font);
  height: 100%;
  display: flex;
}
</style>
