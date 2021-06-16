# vue-component

## 设置

### package.json

修改name为你的组件名字

```json
{
  "name": "组件名字"
}
```

### 安装

```js
yarn
```

### 组件打包发布

```js
yarn build:lib
yarn publish
```

### 预览Demo

```js
yarn start
```

### 跑测试

```js
yarn test
```

### 测试开发自动化流程

```js
lib端（组件开发）：yarn yalc:watch 
app端（实时预览）：yarn yalc:link 
```
