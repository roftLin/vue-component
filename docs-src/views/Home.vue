<template>
  <div class="page-home page">
    <section class="demo">
      <div class="section-content">
        <EditorTable :config="config" @submit="submit" />
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
import CodeSnippet from "../components/CodeSnippet.vue";
import Collapse from "../components/Collapse.vue";

const mainSnippet = `
data () {
  return {
    config: {
        isDetail: false,
        columns: [
          {
            prop: "prop1",
            label: "文本",
            attr: { width: "180" },
            format: ({ prop1 }) => \`文本\${prop1}\`,
          },
          {
            prop: "prop2",
            label: "输入框",
            attr: { minWidth: "120" },
            edit: true,
          },
          {
            prop: "prop3",
            label: "下拉框",
            attr: { minWidth: "120" },
            edit: true,
            type: "select",
            options: [
              { label: "选项一", value: "1" },
              { label: "选项二", value: "2" },
            ],
          },
          {
            prop: "prop4",
            label: "日期",
            attr: { minWidth: "140" },
            edit: true,
            type: "date",
            required: true,
          },
          { prop: "opt", label: "操作", attr: { minWidth: "120" }, edit: true },
        ],
        data: [
          {
            prop1: "1",
            prop2: "输入框1",
            prop3: "1",
            prop4: "2021-06-17",
          },
          {
            prop1: "2",
            prop2: "输入框2",
            prop3: "2",
            prop4: "2021-06-17",
          },
          {
            prop1: "3",
            prop2: "",
            prop3: "",
            prop4: "",
          },
        ],
      },
  }
},
methods: {
  submit(res) {
    console.log(res);
  },
},
`;

const componentSnippet = `
<EditorTable :config="config" @submit="submit" />
`;

export default {
  name: "Home",
  components: {
    CodeSnippet,
    Collapse,
  },

  data() {
    return {
      mainSnippet,
      componentSnippet,
      config: {
        isDetail:false,
        columns: [
          {
            prop: "prop1",
            label: "文本",
            attr: { width: "180" },
            format: ({ prop1 }) => `文本${prop1}`,
          },
          {
            prop: "prop2",
            label: "输入框",
            attr: { minWidth: "120" },
            edit: true,
          },
          {
            prop: "prop3",
            label: "下拉框",
            attr: { minWidth: "120" },
            edit: true,
            type: "select",
            options: [
              { label: "选项一", value: "1" },
              { label: "选项二", value: "2" },
            ],
          },
          {
            prop: "prop4",
            label: "日期",
            attr: { minWidth: "140" },
            edit: true,
            type: "date",
            required: true,
          },
          { prop: "opt", label: "操作", attr: { minWidth: "120" }, edit: true },
        ],
        data: [
          {
            prop1: "1",
            prop2: "输入框1",
            prop3: "1",
            prop4: "2021-06-17",
          },
          {
            prop1: "2",
            prop2: "输入框2",
            prop3: "2",
            prop4: "2021-06-17",
          },
          {
            prop1: "3",
            prop2: "",
            prop3: "",
            prop4: "",
          },
        ],
      },
    };
  },
  methods: {
    submit(res) {
      console.log(res);
    },
  },
};
</script>
