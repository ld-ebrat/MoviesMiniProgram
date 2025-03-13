Component({
  mixins: [],
  data: {},
  props: {
    movie:{},
    type:"",
    onHandleDetails:()=>{}
  },
  didMount() {
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleDetails(e){
      this.props.onHandleDetails(this.props.movie.id,this.props.type)
    }
  },
});
