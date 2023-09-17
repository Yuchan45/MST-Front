<script>
import Skeleton from './Skeleton.vue';

export default {
  name: 'TableSkeleton',
  props: {
    headers: { type: Array, default: () => [] },
  },
  components: {
    Skeleton,
  },
  data() {
    return {
      rows: Array(6),
    };
  },
};
</script>

<template>
  <table
    class="ua-table ua-table-auto ua-border-separate [border-spacing:0] ua-w-full ua-relative ua-mb-4 ua-h-auto"
  >
    <thead
      class="ua-table ua-w-full ua-table-fixed ua-h-10 ua-align-middle ua-text-xs ua-font-medium ua-text-secondary-grey ua-bg-light-grey ua-pr-2"
    >
      <tr class="ua-table ua-w-full ua-h-full ua-table-fixed">
        <th
          v-for="header in headers"
          :key="header"
          class="ua-p-2"
          :class="header.class"
        >
          <Skeleton
            class="ua-h-5 ua-rounded-lg"
            :class="
              header.customSkeletonWidth
                ? header.customSkeletonWidth
                : 'ua-w-16'
            "
          />
        </th>
      </tr>
    </thead>
    <tbody
      class="ua-align-middle ua-text-sm ua-bg-white ua-block ua-w-full ua-max-h-[448px] ua-pr-2"
    >
      <tr
        v-for="row in rows"
        :key="row"
        class="ua-table ua-w-full ua-h-14 ua-table-fixed"
      >
        <td
          v-for="(h, i) in headers"
          :key="h + i"
          class="ua-p-2 ua-border-b ua-border-grey-200"
          :class="h.class"
        >
          <Skeleton class="ua-h-5 ua-w-11/12 ua-rounded-lg" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
