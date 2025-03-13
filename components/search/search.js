
Component({
  mixins: [],
  data: {
    inputValue:""
  },
  props: {
    onHandleSearch:()=>{}
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleInputText(e){
      this.setData({
        inputValue:e.detail.value
      })

      this.props.onHandleSearch(this.data.inputValue)
    },
  },
});
