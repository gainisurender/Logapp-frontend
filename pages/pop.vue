<template>
  <el-popover placement="top" width="160" v-model="visible">
    <p>Do you allow notifications to your device?</p>
    <div style="text-align: right; margin: 0">
      <el-button size="mini" type="text" @click="visible = false"
        >cancel</el-button
      >
      <el-button type="primary" size="mini" @click="visible = false"
        >confirm</el-button
      >
    </div>
    <!-- <el-button slot="reference">Success</el-button> -->
  </el-popover>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    }
  },
}
</script>
