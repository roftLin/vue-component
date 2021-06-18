<template functional>
  <div>
    <span v-if="!props.row[props.column.prop]"></span>
    <span v-if="props.column.format && typeof props.column.format == 'function'">{{props.column.format(props.row)}}</span>
    <span v-else>{{props.row[props.column.prop]}}</span>
  </div>
</template>
<script>
export default {
  props: {
    column: {
      type: Object,
      default: () => ({}),
    },
    row: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
