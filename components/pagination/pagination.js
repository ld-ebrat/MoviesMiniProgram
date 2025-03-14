Component({
  mixins: [],
  data: {},
  props: {
    onNextPagination:()=>{},
    onPrevPagination:()=>{}
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    nextPagination(){
      this.props.onNextPagination()
    },
    prevPagination(){
      this.props.onPrevPagination()
    }
  },
});
