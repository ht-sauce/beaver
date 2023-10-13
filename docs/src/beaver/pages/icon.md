<script setup>
    import AllSvg  from '../components/icon/AllSvg.vue'
</script>
# icon 按钮

## 基础用法
- 内置svg图标全部可以通过设置 `icon` 属性展示icon
- 支持svg源码导入展示
::: warning 提示
svg内部代码需要去除`width`、`height`、`fill`设置，否则影响svg图片的大小和颜色设置
:::
<CodeBlock path="icon/icon.vue" />

## 内置图标库
所有图标展示，如果需要获取svg源码请通过F12开发者工具来复制获取

点击图标复制代码
<AllSvg />
