  var app = new Vue({
      el: '#app',
      data: {
          city: '',
          weatherList: [],
      },
      methods: {
          search() {
              //  调用接口
              var that = this;
              axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.city).then((result) => {
                  console.log(result.data.data.forecast);
                  // 保存数据
                  that.weatherList = result.data.data.forecast;
              }).catch((err) => {});

          },
          changeCity(city) {
              this.city = city;
              this.search();

          }
      },
  })