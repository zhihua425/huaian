<template>
  <div class="right">
    <div class="rect box2">
      <div class="title">学生复学</div>
    </div>
    <div class="rect box2">
      <div class="title">疫情监控</div>
    </div>
    <div class="rect box">
      <div class="width50">
        <div class="title">复工复产</div>
      </div>
      <div class="width50">
        <div class="title">场所复业</div>
      </div>
    </div>
    <div class="rect box">
      <div class="width25">
        <div class="title">常住人口分析</div>
      </div>
      <div class="width25">
        <div class="title">流动人口分析</div>
      </div>
      <div class="width25">
        <div class="title">企业单位分析</div>
      </div>
      <div class="width25">
        <div class="title">车辆分析</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./common.scss";
.right {
  .rect {
    height: 32%;
  }
  width: 30%;
  height: 100%;
}
</style>
