Component({
  mixins: [],
  data: {
    "srcUser":"/assest/user-p.png",
    "srcHome":"/assest/home.png",
    "srcCar":"/assest/heart-conto.png",
  },
  props: {
    isDisableScroll:false,
    safeAreaBotton:0,
  },
  didMount() {
    const systemInfo = my.getSystemInfoSync()
    this.setData({
      safeAreaBotton: systemInfo.screen.height - systemInfo.safeArea.bottom,
    })

    console.log(systemInfo)
  },
  didUpdate() {
  },
  didUnmount() {},
  methods: {
    navigateToCar(){
      my.navigateTo({
        url:"/pages/car/car"
      })
    },
    onNavigate(){
      my.navigateTo({
        url:"/pages/index/index"
      })
    },
  },
});
