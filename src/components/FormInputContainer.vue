<script>
export default {
  name: 'FormInputContainer',
  props: {
    label: String,
    secondaryAction: Object,
    isCustomHeight: Boolean,
  },
  methods: {
    onSecondaryAction() {
      this.$emit('onSecondaryAction');
    },
  },
};
</script>

<template>
  <div class="ua-w-full ua-flex-1">
    <div class="ua-flex ua-justify-between ua-mb-2">
      <p class="ua-text-sm ua-font-medium ua-text-grey-400">
        {{ label }}
      </p>
      <button
        v-if="secondaryAction?.title"
        @click="onSecondaryAction"
        class="ua-text-xs ua-flex ua-items-center"
        :class="
          secondaryAction?.class === 'secondary'
            ? 'ua-text-grey-400 ua-font-normal'
            : 'ua-text-grey-500 ua-font-medium'
        "
      >
        {{ secondaryAction.title }}
        <BIconPlus
          v-show="secondaryAction?.hasPlusIcon"
          class="ua-h-5 ua-w-5"
        ></BIconPlus>
      </button>
    </div>
    <div
      class="ua-w-full ua-flex ua-gap-2"
      :class="isCustomHeight ? 'ua-h-full' : 'ua-h-10'"
    >
      <slot></slot>
    </div>
  </div>
</template>
