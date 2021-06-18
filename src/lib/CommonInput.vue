<script>
export default {
  functional: true,
  props: {
    prop: {
      type: String,
      default: '',
    },
    rules: {
      type: Object,
      default: () => {},
    },
    type: {
      type: String,
      default: 'input',
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  render: (
    h,
    {
      props: { prop, rules, type, options },
      data,
      listeners: { input = () => {} },
    }
  ) => {
    const children = {
      input: (h) => h('el-input', data),
      select: (h) =>
        h(
          'el-select',
          {
            // class: 'width100',
            props: { ...data.attrs },
            on: {
              change(v) {
                input(v)
              },
            },
          },
          options.map((o) => h('el-option', { props: { ...o, key: o.value } }))
        ),
      date: (h) =>
        h('el-date-picker', {
          props: { type: 'date', valueFormat: 'yyyy-MM-dd' },
          ...data,
        }),
      opt: () => '',
    }

    return h('el-form-item', { props: { prop, rules } }, [children[type](h)])
  },
}
</script>
