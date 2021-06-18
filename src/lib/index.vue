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
      <el-table-column v-for="column in columns"
                       :key="column.prop"
                       :label="column.label"
                       :prop="column.prop"
                       v-bind="column.attr">
        <template slot-scope="{ row, $index }">
          <CommonText v-if="!column.edit"
                      :column='column'
                      :row='row' />
          <template v-else>
            <CommonText v-if="isDetail"
                        :column='column'
                        :row='row' />
            <template v-else>
              <CommonInput v-if="column.prop !== 'opt'"
                           v-model="row[`${column.prop}`]"
                           v-bind="initAttrs(column, $index)"
                           class="width100" />
              <template v-else>
                <div>
                  <el-link type="primary"
                           :underline="false"
                           @click="save(row, $index)"
                           cl>保存</el-link>
                  <el-link type="primary"
                           :underline="false"
                           v-if="row.isAdd"
                           @click="del($index)">删除</el-link>
                  <el-link type="primary"
                           :underline="false"
                           @click="resetField($index)">重置</el-link>
                </div>
              </template>
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
import CommonInput from './CommonInput.vue'
import CommonText from './CommonText.vue'
export default {
  name: 'EditorTable',
  props: {
    config: Object,
    default: () => ({}),
  },
  components: {
    CommonInput,
    CommonText,
  },
  data() {
    const { columns = [], data = [], isDetail = false, isSubmit = false } =
      this.config || {}

    return {
      form: {
        list:
          data && data.length > 0
            ? data.map((item) =>
                columns.reduce(
                  (tol, cur) => ({
                    ...tol,
                    [cur.prop]: item[cur.prop] || '',
                  }),
                  {}
                )
              )
            : [this.createInitItem()],
      },
      columns,
      rules: columns.reduce(
        (tol, cur) => ({
          ...tol,
          [cur.prop]: {
            required: cur.required === false ? false : true,
            message: cur.label + '必填',
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
    createInitItem() {
      const { columns = [] } = this.config || {}
      return columns.reduce(
        (tol, cur) => ({
          ...tol,
          [cur.prop]: '',
        }),
        { isAdd: true }
      )
    },
    initAttrs(column, idx) {
      const { type, label } = column
      const attrs = Object.fromEntries(
        Object.entries(column).filter(
          ([key]) => !/(prop|edit|label|attr|format)/.test(key)
        )
      )
      Object.assign(attrs, {
        prop: `list.${idx}.${column.prop}`,
        rules: this.rules[column.prop],
        placeholder:
          (/(select|el-date-picker)/.test(type) ? '请选择' : '请输入') + label,
      })
      return attrs
    },
    add() {
      this.form.list.push(this.createInitItem())
    },
    save(row, idx) {
      const ret = Object.keys(row)
        .map((key) => `list.${idx}.${key}`)
        .filter((key) => !/isAdd|opt/g.test(key))
      let error = 0

      this.$refs.form.validateField(ret, (valid) => {
        if (valid) {
          error++
        }
      })
      if (error === 0) {
        this.$emit(
          'submit',
          Object.fromEntries(
            Object.entries(row).filter(([key]) => !/^(isAdd|opt)/.test(key))
          )
        )
      }
    },
    del(idx) {
      this.form.list.splice(idx, 1)
      this.$refs.form.fields.forEach((item) => {
        if (item.prop.split('.')[1] === idx) {
          item.clearValidate()
        }
      })
    },
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$emit(
            'submit',
            this.form.list.map((item) =>
              Object.fromEntries(
                Object.entries(item).filter(
                  ([key]) => !/^(isAdd|opt)/.test(key)
                )
              )
            )
          )
        }
      })
    },
    resetField(idx) {
      this.$refs.form.fields.forEach((item) => {
        if (item.prop.split('.')[1] === idx) {
          item.resetField()
        }
      })
    },
    reset() {
      this.$refs.form.resetFields()
    },
  },
}
</script>