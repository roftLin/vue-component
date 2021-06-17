<template>
  <div class="page-home page">
    <section class="demo">
      <div class="section-content">
        <EditTable :config="config" @submit="submit" style="margin:20px;" />
        <!-- <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table> -->
      </div>
    </section>

    <section class="snippets">
      <Collapse>
        <div class="section-content">
          <CodeSnippet class="snippet" :code="componentSnippet" lang="html" />
          <div class="plus">+</div>
          <CodeSnippet class="snippet" :code="mainSnippet" lang="js" />
        </div>
      </Collapse>
    </section>
  </div>
</template>

<script>
import CodeSnippet from '../components/CodeSnippet.vue'
import Collapse from '../components/Collapse.vue'

const mainSnippet = `
data () {
  return {
    msg: 'vue component'
  }
}
`

const componentSnippet = `
<v-component :msg="msg" />
`

const repayTypeList = {
   averageCapital: '等额本金',
   averageInterest: '等额本息'
},
columns = [
  { prop: 'repaymentMethod', label: '还款方式', attr: {width: '180'}, format: ({ repaymentMethod }) => repayTypeList[repaymentMethod]},
  { prop: 'productPer', label: '期数', attr: {width: '180'}, format: ({ productPer }) => `${+ productPer + 1}期(${productPer}个月)` },
  { prop: 'costRate', label: '成本利率', attr: {minWidth: '110'}, edit: true, type: 'select', options: [{label: '5%', value: '5'}, {label: '10%', value: '10'}] },
  { prop: 'price', label: '单价', attr: {minWidth: '110'}, edit: true },
  { prop: 'company', label: '所属公司', attr: {minWidth: '110'}, edit: true },
  { prop: 'product', label: '产品', attr: {minWidth: '110'}, edit: true, type: 'checkbox', options: [{label: '橘子', value: 'orange'}, {label: '苹果', value: 'apple'}] },
  { prop: 'date', label: '日期', attr: {minWidth: '110'}, edit: true, type: 'date', required: false },
  { prop: 'lock', label: '锁定', attr: {minWidth: '110'}, edit: true, type: 'switch' },
  { prop: 'opt', label: '操作', attr: {minWidth: '110'}, edit: true },
]

export default {
  name: 'Home',
  components: {
    CodeSnippet,
    Collapse
  },

  data() {
    return {
      mainSnippet,
      componentSnippet,
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          config: {
        columns,
        data: [],
      },

    }
  },
  created(){
    this.config.data = [
      {repaymentMethod: 'averageCapital', productPer: '1', price: '5', company: '谷歌上海', date: '2021-01-03', opt: false},
      {repaymentMethod: 'averageInterest', productPer: '3', costRate: '10', price: '', company: '雅虎北京', opt: true},
      {repaymentMethod: 'averageInterest', productPer: '5', costRate: '5', price: '100', company: '上海你真美', opt: false},
    ]
  },
  methods: {
    submit(res){
      console.log(res)
    }
  }
}
</script>
