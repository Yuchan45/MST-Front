<script>
import Checkbox from './CheckboxItem.vue';
import Button from './Button.vue';
export default {
  name: 'MultiselectMenu',
  components: { Checkbox, Button },
  props: {
    id: String,
    value: Array,
    options: { type: Array, default: () => [] },
    isLoading: Boolean,
    checkedSelectAll: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    onChangeSelectAll() {
      this.$emit('onChangeSelectAll', !this.checkedSelectAll);
    },
    onChangeCheckbox(val) {
      this.$emit('onChangeCheckbox', val);
    },
    onClear() {
      this.$emit('onClear');
    },
    label(prefix, label) {
      if (prefix) return `${prefix} ${label}`;
      return label;
    },
    hideList() {
      this.$emit('hideList');
    },
  },
  computed: {
    itemClass() {
      return 'ua-flex ua-h-9 ua-items-center ua-text-sm ua-text-grey-500 ua-pl-2.5';
    },
  },
};
</script>
<template>
  <ul
    :id="id"
    class="ua-w-full ua-p-2 ua-bg-white ua-rounded-lg ua-shadow-strong"
  >
    <div v-if="isLoading" :class="`${itemClass} ua-animate-pulse`">
      Loading...
    </div>
    <div v-else class="ua-h-fit">
      <div class="ua-justify-between" :class="itemClass">
        <Checkbox
          label="Select all"
          id="menu-select-all"
          :checked="checkedSelectAll"
          size="s"
          @onChangeCheckbox="onChangeSelectAll"
        />
        <div class="ua-w-14">
          <Button label="Clear" size="xs" @onClick="onClear"></Button>
        </div>
      </div>
      <div class="ua-max-h-52 ua-overflow-auto ua-scroll-bar">
        <div
          v-for="(item, i) in options"
          :key="item.label + i"
          :class="`${itemClass} ua-pr-2.5`"
        >
          <Checkbox
            :label="item.label"
            :id="item.id"
            :checked="value?.some((i) => i.id === item.id)"
            size="m"
            @onChangeCheckbox="onChangeCheckbox"
          />
        </div>
      </div>
      <div class="ua-p-2.5">
        <div class="ua-h-10">
          <Button label="Confirm" theme="darkRed" @onClick="hideList"></Button>
        </div>
      </div>
    </div>
  </ul>
</template>
