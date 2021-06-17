<template>
  <el-form :model="form"
           ref="form"
           size="small"
           :rules="rules">
    <el-form-item v-if="!isDetail">
      <el-button type="primary"
                 @click="add">新增</el-button>
    </el-form-item>
    <el-table :data="form.list"
              border>
      <el-table-column v-for="item in columns"
                       :key="item.prop"
                       :label="item.label"
                       :prop="item.prop"
                       v-bind="item.attr">
        <template #default="{row, $index}">
          <t-text v-if="!item.edit"
                  :row="{item, row}" />
          <template v-else>
            <t-text v-if="isDetail"
                    :row="{item, row}" />
            <template v-else>
              <template v-if="item.prop=='opt'">
                <el-link type="primary"
                         :underline="false"
                         @click="save(row, $index)">保存</el-link>
                <el-link type="primary"
                         :underline="false"
                         v-if="row.isAdd"
                         @click="del($index)">删除</el-link>
                <el-link type="primary"
                         :underline="false"
                         @click="resetField($index)">重置</el-link>
              </template>
              <t-input v-else
                       v-model="row[`${item.prop}`]"
                       v-bind="componentAttrs(item, $index)"
                       class="width100" />
            </template>
          </template>
        </template>
      </el-table-column>
    </el-table>
    <el-form-item v-if="!isDetail">
      <template v-if="isSubmit">
        <el-button type="primary"
                   @click="submit">提交</el-button>
        <el-button @click="reset">重置</el-button>
      </template>
    </el-form-item>
  </el-form>
</template>

<script>
import { h } from 'vue'

export default {
  name: 'EditTable',
  props: { config: Object },
  components: {
    TInput: {
      // functional: true,
      props: ['prop', 'rules', 'type', 'options'],
      render: ({
        prop,
        rules,
        type = 'default',
        options = [],
        attrs,
        emit: { input = () => {} },
      }) => {
        debugger
        const children = {
          checkbox: () =>
            h(
              'el-checkbox-group',
              {
                ...attrs,
                on: {
                  input(v) {
                    input(v)
                  },
                },
              },
              options.map((o) =>
                h('el-checkbox', { ...o, label: o.value, key: o.value }, [
                  o.label,
                ])
              )
            ),
          select: () =>
            h(
              'el-select',
              {
                class: 'width100',
                ...attrs,
                on: {
                  change(v) {
                    input(v)
                  },
                },
              },
              options.map((o) => h('el-option', { ...o, key: o.value }))
            ),
          date: () =>
            h('el-date-picker', {
              type: 'date',
              valueFormat: 'yyyy-MM-dd',
              ...attrs,
            }),
          switch: () => h('el-switch', { activeColor: '#13ce66', ...attrs }),
          opt: () => '-',
          default: () => h('el-input', attrs),
        }

        return h('el-form-item', { prop, rules }, [children[type](h)])
      },
    },
    // TText: {
    //   functional: true,
    //   props: ['row'],
    //   render: (
    //     {
    //       props: {
    //         row: { item, row },
    //       },
    //     }
    //   ) => {
    //     if (!row[`${item.prop}`]) return h('span', '-')
    //     else if (item.format && typeof item.format == 'function')
    //       return h('span', item.format(row))
    //     else return h('span', row[`${item.prop}`])
    //   },
    // },
  },
  data() {
    const { columns = [], data = [], isDetail = false, isSubmit = false } =
      this.config || {}

    return {
      form: {
        list:
          data && data.length > 0
            ? data.map((n) =>
                columns.reduce(
                  (r, c) => ({
                    ...r,
                    [c.prop]:
                      n[c.prop] == false
                        ? n[c.prop]
                        : n[c.prop] || (c.type == 'checkbox' ? [] : ''),
                  }),
                  {}
                )
              )
            : [
                columns.reduce(
                  (r, c) => ({
                    ...r,
                    [c.prop]:
                      c.type == 'checkbox'
                        ? []
                        : c.type == 'switch'
                        ? false
                        : '',
                  }),
                  { isAdd: true }
                ),
              ],
      },
      columns,
      rules: columns.reduce(
        (r, c) => ({
          ...r,
          [c.prop]: {
            required: c.required == false ? false : true,
            message: c.label + '必填',
            trigger: 'blur',
          },
        }),
        {}
      ),
      isDetail,
      isSubmit,
    }
  },
  methods: {
    componentAttrs(item, idx) {
      const { type, label } = item,
        attrs = Object.fromEntries(
          Object.entries(item).filter(
            (n) => !/^(prop|edit|label|attr|format)/.test(n[0])
          )
        ),
        placeholder =
          (/^(select|el-date-picker)/.test(type) ? '请选择' : '请输入') + label
      Object.assign(attrs, {
        prop: `list.${idx}.${item.prop}`,
        rules: this.rules[item.prop],
      })
      return { ...attrs, placeholder }
    },
    add() {
      const { columns = [] } = this.config || {},
        obj = columns.reduce(
          (r, c) => ({
            ...r,
            [c.prop]:
              c.type == 'checkbox' ? [] : c.type == 'switch' ? false : '',
          }),
          { isAdd: true }
        )
      this.form.list.push(obj)
    },
    save(row, idx) {
      let ret = Object.keys(row)
          .map((r) => `list.${idx}.${r}`)
          .filter((r) => !/isAdd|opt/g.test(r)),
        {
          $refs: { form },
        } = this,
        num = 0

      form.validateField(ret, (valid) => {
        if (valid) {
          num++
        }
      })

      if (num == 0)
        this.$emit(
          'submit',
          Object.fromEntries(
            Object.entries(row).filter((n) => !/^(isAdd|opt)/.test(n[0]))
          )
        )
    },
    del(idx) {
      this.form.list.splice(idx, 1)
      this.$refs.form.fields.forEach((n) => {
        if (n.prop.split('.')[1] == idx) {
          n.clearValidate()
        }
      })
    },
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$emit(
            'submit',
            this.form.list.map((m) =>
              Object.fromEntries(
                Object.entries(m).filter((n) => !/^(isAdd|opt)/.test(n[0]))
              )
            )
          )
        }
      })
    },
    resetField(idx) {
      this.$refs.form.fields.forEach((n) => {
        if (n.prop.split('.')[1] == idx) {
          n.resetField()
        }
      })
    },
    reset() {
      this.$refs.form.resetFields()
    },
  },
}
</script>
<style scoped>
.width100 {
  width: 100%;
}
</style>