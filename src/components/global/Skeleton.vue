<template>
  <div class="skeleton-container"></div>
</template>

<script>
export default {
  name: 'Skeleton',
};
</script>

<style scoped>
.skeleton-container {
  animation: bgColor 2s cubic-bezier(0.81, -0.04, 1, 0.87) infinite;
  background-image: linear-gradient(
    90deg,
    #ebebeb 26.56%,
    #ffffff 50%,
    #eaeaea 74.48%
  );
  background-size: 200% 100%;
}

@keyframes bgColor {
  0% {
    background-position: 100% 0%;
  }
  50% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
}
</style>
