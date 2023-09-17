<script>
export default {
  name: 'CheckboxItem',
  props: {
    label: String,
    id: [String, Number],
    checked: { type: Boolean, default: false },
    size: { type: String, default: 'm' },
  },
  data() {
    return {
      path: require('../../assets/img/checkIcon.svg'),
      sizes: {
        s: 'ua-text-xs',
        m: 'ua-text-sm',
        l: 'ua-text-base',
      },
    };
  },
  methods: {
    onClick() {
      this.$emit('onChangeCheckbox', {
        id: this.id,
        label: this.label,
        checked: this.checked,
      });
    },
  },
};
</script>

<template>
  <label :id="id" class="ua-w-fit ua-h-fit ua-flex ua-items-center">
    <input
      type="checkbox"
      :checked="checked"
      @click.stop="onClick"
      class="ua-w-5 ua-min-w-[20px] ua-h-5 ua-mr-2 ua-appearance-none ua-border-2 ua-border-grey-200 ua-border-solid ua-rounded-md ua-bg-no-repeat ua-bg-white ua-bg-center ua-cursor-pointer checked:ua-bg-red-200 checked:ua-border-none"
      :style="{
        backgroundImage: `url(${path}) `,
      }"
    />
    <p class="ua-font-normal ua-text-grey-500" :class="sizes[size]">
      {{ label }}
    </p>
  </label>
</template>
