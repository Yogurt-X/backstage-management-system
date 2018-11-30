<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-time-select
      v-model="value1"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }"
      placeholder="选择时间">
    </el-time-select>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: ''
      };
    }
  }
</script>