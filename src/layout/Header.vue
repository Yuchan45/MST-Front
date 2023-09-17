<script>
export default {
  name: 'TopNavbar',
  components: {},
  props: {
    title: String,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<template>
  <header
    class="ua-h-16 ua-w-full ua-fixed ua-z-50 ua-flex ua-justify-between ua-items-center ua-px-6 ua-border-b ua-border-solid ua-border-b-grey-200 ua-bg-white"
  >
    <div class="ua-flex ua-items-center ua-gap-3.5">
      <img src="/logoAlil.png" alt="logo alil" class="ua-h-12 ua-w-auto" />
      <p class="ua-text-base ua-font-medium ua-text-grey-500">
        <span class="ua-text-red-200">Abogada</span>
        Alexandra
      </p>
    </div>
    <p
      v-if="!!title"
      class="ua-absolute ua-left-1/2 ua-text-sm -ua-translate-x-1/2 ua-font-semibold ua-text-grey-500"
    >
      {{ title }}
    </p>
    <div>
      <slot></slot>
    </div>
  </header>
  <div class="ua-h-16 ua-min-h-[64px] ua-w-full"></div>
</template>
