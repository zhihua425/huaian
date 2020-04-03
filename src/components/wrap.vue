<template>
  <div class="wrap">
    <div class="bg">
      <div id="worldMap" ref="worldMap"></div>
    </div>
    <div class="content">
      <div class="head">淮上通可视化大屏</div>
      <div class="wrapper">
        <left></left>
        <center></center>
        <right></right>
      </div>
    </div>
  </div>
</template>

<script>
import left from "./left";
import right from "./right";
import center from "./center";
export default {
  data() {
    return {};
  },
  components: {
    left,
    center,
    right
  },
  mounted() {
    this.getMaps();
  },
  methods: {
    //3D地图
    getMap() {
      this.$axios
        .get("../../static/flight.json")
        .then(res => {
          if (res.status == 200) {
            let data = res.data;
            function getAirportCoord(idx) {
              return [data.airports[idx][3], data.airports[idx][4]];
            }
            const routes = data.routes.map(function(airline) {
              return [getAirportCoord(airline[1]), getAirportCoord(airline[2])];
            });
            const worldMap = this.$echarts.init(this.$refs.worldMap);
            worldMap.setOption({
              geo3D: {
                map: "world",
                shading: "color",
                environment: "",
                silent: true,
                groundPlane: {
                  show: false
                },
                light: {
                  main: {
                    intensity: 0
                  },
                  ambient: {
                    intensity: 0
                  }
                },
                viewControl: {
                  distance: 50
                },

                itemStyle: {
                  areaColor: "#111"
                },

                boxHeight: 0.5
              },
              series: [
                {
                  type: "lines3D",

                  coordinateSystem: "geo3D",

                  effect: {
                    show: true,
                    trailWidth: 2,
                    trailLength: 0.2
                  },

                  blendMode: "lighter",

                  lineStyle: {
                    width: 0,
                    color: "rgb(50, 50, 150)",
                    opacity: 0.2
                  },

                  data: routes
                }
              ]
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    //地图
    getMaps() {
      const myChart = this.$echarts.init(this.$refs.worldMap);
      myChart.showLoading();

      this.$axios.get("../../static/flight.json").then(res => {
        if (res.status == 200) {
          console.log(res.data)
          let data = res.data;
          myChart.hideLoading();

          function getAirportCoord(idx) {
            return [data.airports[idx][3], data.airports[idx][4]];
          }
          var routes = data.routes.map(function(airline) {
            return [getAirportCoord(airline[1]), getAirportCoord(airline[2])];
          });

          myChart.setOption({
            bmap: {
              center: [76.46, 39.92],
              zoom: 1,
              roam: true,
              mapStyle: {
                styleJson: [
                  {
                    featureType: "water",
                    elementType: "all",
                    stylers: {
                      color: "#031628"
                    }
                  },
                  {
                    featureType: "land",
                    elementType: "geometry",
                    stylers: {
                      color: "#000102"
                    }
                  },
                  {
                    featureType: "highway",
                    elementType: "all",
                    stylers: {
                      visibility: "off"
                    }
                  },
                  {
                    featureType: "arterial",
                    elementType: "geometry.fill",
                    stylers: {
                      color: "#000000"
                    }
                  },
                  {
                    featureType: "arterial",
                    elementType: "geometry.stroke",
                    stylers: {
                      color: "#0b3d51"
                    }
                  },
                  {
                    featureType: "local",
                    elementType: "geometry",
                    stylers: {
                      color: "#000000"
                    }
                  },
                  {
                    featureType: "railway",
                    elementType: "geometry.fill",
                    stylers: {
                      color: "#000000"
                    }
                  },
                  {
                    featureType: "railway",
                    elementType: "geometry.stroke",
                    stylers: {
                      color: "#08304b"
                    }
                  },
                  {
                    featureType: "subway",
                    elementType: "geometry",
                    stylers: {
                      lightness: -70
                    }
                  },
                  {
                    featureType: "building",
                    elementType: "geometry.fill",
                    stylers: {
                      color: "#000000"
                    }
                  },
                  {
                    featureType: "all",
                    elementType: "labels.text.fill",
                    stylers: {
                      color: "#857f7f"
                    }
                  },
                  {
                    featureType: "all",
                    elementType: "labels.text.stroke",
                    stylers: {
                      color: "#000000"
                    }
                  },
                  {
                    featureType: "building",
                    elementType: "geometry",
                    stylers: {
                      color: "#022338"
                    }
                  },
                  {
                    featureType: "green",
                    elementType: "geometry",
                    stylers: {
                      color: "#062032"
                    }
                  },
                  {
                    featureType: "boundary",
                    elementType: "all",
                    stylers: {
                      color: "#465b6c"
                    }
                  },
                  {
                    featureType: "manmade",
                    elementType: "all",
                    stylers: {
                      color: "#022338"
                    }
                  },
                  {
                    featureType: "label",
                    elementType: "all",
                    stylers: {
                      visibility: "off"
                    }
                  }
                ]
              }
            },
            series: [
              {
                type: "lines",
                coordinateSystem: "bmap",
                polyline: true,
                data: routes,
                effect: {
                show: true,
                trailWidth: 1,
                trailOpacity: 0.5,
                trailLength: 0.2,
                constantSpeed: 5
            },
            blendMode: 'lighter',

            lineStyle: {
                width: 0.2,
                opacity: 0.05
            },
                zlevel: 1
              }
            ]
          });
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrap,
.bg,
.content {
  width: 100%;
  height: 100%;
}
.wrap {
  position: relative;

  .bg {
    position: absolute;
    left: 0;
    top: 0;
    background: url(../assets/bg.png) no-repeat;
    background-size: 100% 100%;
    #worldMap {
      width: 60%;
      height: 90%;
      margin: 2% 20% 3%;
    }
  }
  .content {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;

    .head {
      background: url(../assets/head.png) no-repeat;
      background-size: 100% 100%;
      height: 8rem;
      width: 96%;
      padding: 0 2%;
      color: #fff;
      font-size: 5rem;
      text-align: center;
      line-height: 8rem;
      font-weight: 900;
      letter-spacing: 5rem;
    }
    .wrapper {
      width: 100%;
      height: calc(100% - 20rem);
      display: flex;
      margin: 1rem;
    }
  }
}
</style>
