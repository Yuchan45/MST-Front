<script>
import CheckboxItem from './CheckboxItem.vue';

export default {
  name: 'Table',
  components: { CheckboxItem },
  props: {
    headers: { type: Array, default: () => [] },
    rows: { type: Array, default: () => [] },
    customHeight: Boolean,
    checkedAllRows: Boolean,
  },
  data() {
    return { checkedColumn: this.checkedAllRows };
  },
  methods: {
    onChangeColumnCheckbox(val) {
      this.checkedColumn = !this.checkedColumn;
      this.$emit('onChangeColumnCheckbox', {
        ...val,
        checked: this.checkedColumn,
      });
    },
  },
  computed: {
    message() {
      return 'No results found';
    },
    className() {
      const scroll =
        this.rows.length < 5 ? 'ua-overflow-visible' : 'ua-overflow-auto';
      const height = this.customHeight
        ? 'ua-max-h-[448px]'
        : 'ua-h-[calc(100%-40px)]';
      return `${scroll} ${height}`;
    },
  },
  watch: {
    checkedAllRows(val) {
      this.checkedColumn = val;
    },
  },
};
</script>

<template>
  <table
    class="ua-table ua-table-auto ua-border-separate [border-spacing:0] ua-w-full ua-relative"
    :class="customHeight ? '' : 'ua-h-full'"
  >
    <thead
      class="ua-table ua-w-full ua-table-fixed ua-h-10 ua-rounded-t-lg ua-align-middle ua-bg-grey-200 ua-pr-2"
    >
      <tr class="ua-table ua-w-full ua-h-full ua-table-fixed">
        <th
          v-for="header in headers"
          :key="header"
          class="ua-p-2 ua-text-sm ua-font-semibold ua-text-grey-400"
          :class="header.class"
        >
          <div v-if="header.showCheckbox" class="ua-flex ua-justify-end">
            <CheckboxItem
              :id="header.refer + '-checkbox'"
              label=""
              :checked="checkedColumn"
              @onChangeCheckbox="onChangeColumnCheckbox"
            />
          </div>
          <p
            v-else
            :style="{
              textAlign: header.center ? 'center' : 'start',
              marginBottom: 0,
            }"
          >
            {{ header.label }}
          </p>
        </th>
      </tr>
    </thead>
    <tbody
      v-if="!!rows.length"
      class="ua-align-middle ua-text-sm ua-block ua-w-full ua-rounded-b-lg ua-scroll-bar ua-font-medium ua-text-grey-400"
      :class="className"
    >
      <tr
        v-for="(row, index) in rows"
        :key="row"
        class="ua-table ua-w-full ua-h-14 ua-table-fixed ua-border-b ua-border-solid ua-border-grey-200 ua-bg-white"
      >
        <td
          v-for="(h, i) in headers"
          :key="h + i"
          class="ua-p-2 ua-border-l ua-border-solid ua-border-grey-200"
          :class="h.class"
        >
          <slot :name="h.refer" :row="row" :index="index">
            {{ row[h.refer] }}
          </slot>
        </td>
      </tr>
    </tbody>
    <div v-else class="ua-flex">
      <p class="">{{ message }}</p>
    </div>
  </table>
</template>
