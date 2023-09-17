<script>
import Button from './global/Button.vue';
export default {
  name: 'ConfirmActionModal',
  components: { Button },
  props: {
    title: String,
    message: String,
    confirmingMsg: { type: String, default: 'Continue' },
    cancelMsg: { type: String, default: 'Cancel' },
  },
  methods: {
    onCloseModal() {
      this.$emit('onCloseModal');
    },
    onConfirm() {
      this.$emit('onConfirm');
    },
  },
};
</script>

<template>
  <div
    class="ua-fixed ua-top-0 ua-left-0 ua-w-full ua-h-full ua-z-50 ua-flex ua-items-center ua-justify-center ua-bg-black ua-bg-opacity-70"
  >
    <div class="ua-relative ua-rounded-xl ua-bg-white">
      <button
        @click="onCloseModal"
        class="ua-absolute ua-top-6 ua-right-0 ua-mr-4 ua-w-5 ua-h-5 ua-flex ua-items-center ua-justify-center ua-rounded-full ua-text-grey-300 hover:ua-bg-grey-200 hover:ua-text-grey-400"
      >
        <BIconXLg class="ua-w-4 ua-h-4 ua-text-mid-grey"></BIconXLg>
      </button>
      <div class="ua-w-96 ua-p-6">
        <div class="ua-w-12 ua-h-12">
          <slot></slot>
        </div>
        <p class="ua-text-base ua-font-medium ua-text-grey-500 ua-mt-7 ua-mb-2">
          {{ title }}
        </p>
        <p class="ua-text-sm ua-font-normal ua-text-grey-400 ua-mb-4">
          {{ message }}
        </p>
        <div class="ua-w-full ua-h-10 ua-flex ua-gap-3">
          <Button :label="cancelMsg" theme="silver" @onClick="onCloseModal" />
          <Button :label="confirmingMsg" theme="darkRed" @onClick="onConfirm" />
        </div>
      </div>
    </div>
  </div>
</template>
