<template>
  <div class="left">
    <div class="rect box2"></div>
    <div class="rect box2"></div>
    <div class="rect box3"></div>
    <div class="rect box3"></div>
    <div class="rect box3"></div>
    <div class="rect box"></div>
    <div class="rect box"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {  };
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./common.scss";
.left{
 
  width:30%;
  height:100%;
  .rect{
    height:23%;
  }
}
</style>
