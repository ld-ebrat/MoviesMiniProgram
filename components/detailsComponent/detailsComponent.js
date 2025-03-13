Component({
  mixins: [],
  data: {},
  props: {
    order:0,
    title:"",
    vote_average:"",
    time:0,
    release_date:"",
    overview:"",
    favorites:false,
    onHandleAddFavorite:()=>{},
    onHandleDeleteFavorite:()=>{}
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleAddFavorite(){
      this.props.favorites ? (this.props.onHandleDeleteFavorite()):(this.props.onHandleAddFavorite())
    }
  },
});
