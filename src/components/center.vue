<template>
  <div class="center">
    <div class="top">
      <div class="rect"></div>
      <div class="rect"></div>
    </div>
    <div class="bottom">
      <div class="circle circleRed"></div>
      <div class="circle circleYellow"></div>
      <div class="circle circleGreen"></div>
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
.center {
  width: 39.5%;
  height: 100%;
  .top {
    top: 0;
    text-align: center;
    display: flex;
    .rect {
      background: url(../assets/rect1.png) no-repeat;
      background-size: 100% 100%;
    }
  }
  .bottom {
    bottom: 0;
    text-align: center;
    display: flex;
    .circle {
      background-size: 100% 100%;
    }
    .circleRed{
      background: url(../assets/circleRed.png) no-repeat;

    }
    .circleYellow{
      background: url(../assets/circleYellow.png) no-repeat;

    }
    .circleGreen{
      background: url(../assets/circleGreen.png) no-repeat;

    }
  }
}
</style>
