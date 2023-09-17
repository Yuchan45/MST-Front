<script>
import Checkbox from './CheckboxItem.vue';
export default {
  name: 'Checkboxes',
  components: { Checkbox },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Array,
      default: () => [{ value: null, label: '' }],
    },
    showXIcon: Boolean,
  },
  data() {
    return {
      selectedOptions: [...this.value],
    };
  },
  methods: {
    setCompletedOptions(value) {
      if (this.selectedOptions.find((i) => i.id === value.id)) {
        this.selectedOptions = this.selectedOptions.filter(
          (i) => i.id !== value.id
        );
        return;
      }
      this.selectedOptions.push({ id: value.id, label: value.label });
    },
    onChange(value) {
      this.setCompletedOptions(value);
      this.$emit('onChangeCheckboxes', this.selectedOptions);
    },
    onRemove(index, id) {
      this.$emit('onRemove', { index, id });
    },
  },
  watch: {
    value(val) {
      this.selectedOptions = val;
    },
  },
};
</script>

<template>
  <div>
    <div
      v-for="(item, i) in options"
      :key="i + '-checkbox'"
      class="ua-flex ua-justify-between"
    >
      <Checkbox
        :label="item.label"
        :id="item.id"
        :checked="!!selectedOptions.find((i) => i.id === item.id)"
        @onChangeCheckbox="onChange"
        class="ua-mb-2"
      />
      <button
        v-show="showXIcon"
        @click="onRemove(i, item.id)"
        class="ua-w-7 ua-h-7 ua-flex ua-justify-center ua-items-center ua-rounded-full hover:ua-bg-grey-200 ua-text-grey-200 hover:ua-text-grey-400"
      >
        <BIconX class="ua-w-5 ua-h-5"></BIconX>
      </button>
    </div>
  </div>
</template>
