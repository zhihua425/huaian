<template>
  <div class="left">
    <div class="rect box2">
      <div class="title">境外人员</div>
      <div class="con">
        <div class="table">
          <thead>
            <tr>
              <td>姓名</td>
              <td>来淮时间</td>
              <td>航班号</td>
              <td>来源地</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in tbody" :key="index">
              <td>{{item.name}}</td>
              <td>{{item.time}}</td>
              <td>{{item.flight}}</td>
              <td>{{item.from}}</td>
            </tr>
          </tbody>
        </div>
        <div class="img">
          <img src="require('../assets/avatar.png')" alt />
        </div>
      </div>
    </div>
    <div class="rect box2">
      <div class="title">境内高危人员</div>
    </div>
    <div class="rect box3">
      <div class="title">入淮车辆列表</div>
    </div>
    <div class="rect box3">
      <div class="title">入淮航班列表</div>
    </div>
    <div class="rect box3">
      <div class="title">入淮列车列表</div>
    </div>
    <div class="rect box">
      <div class="width33">
        <div class="title">小区扫码次数</div>
      </div>
      <div class="width33">
        <div class="title">企业进出检测</div>
      </div>
      <div class="width33">
        <div class="title">重要场所进出检测</div>
      </div>
    </div>
    <div class="rect box">
      <div class="width33">
        <div class="title">入淮流量监测</div>
      </div>
      <div>
        <div class="title">异常预警</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tbody: [
        {
          name: "111",
          time: "2020/03/05 19:01:02",
          flight: "CA1911",
          from: "澳大利亚"
        },
        {
          name: "111",
          time: "2020/03/05 19:01:02",
          flight: "CA1911",
          from: "澳大利亚"
        },

        {
          name: "111",
          time: "2020/03/05 19:01:02",
          flight: "CA1911",
          from: "澳大利亚"
        },
        {
          name: "111",
          time: "2020/03/05 19:01:02",
          flight: "CA1911",
          from: "澳大利亚"
        },
        {
          name: "111",
          time: "2020/03/05 19:01:02",
          flight: "CA1911",
          from: "澳大利亚"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./common.scss";
.left {
  width: 30%;
  height: 100%;
  .rect {
    height: 23%;
  }
}
</style>
