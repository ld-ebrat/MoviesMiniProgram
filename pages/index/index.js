import { getAllTrending } from "/utils/api";
import { searchMovies } from "/utils/api";
Page({
  data: {
    movies:[],
    pagination:1
  },

  //Mostrar Detalles de la Pelicula Seleccionada
  onHandleDetails(id,type){
    my.navigateTo({
      url:`/pages/details/details?id=${id}&type=${type}`
    })
  },

  async onHandleSearch(value){
    if(value == ""){
      getAllTrending("https://api.themoviedb.org/3/trending/all/day?language=en-US&page=1")
    .then(res =>{
      this.setData({
        movies:res.data.results
      })
    })
    }else{
      const response = await searchMovies(`https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`)

      this.setData({
        movies:response.data.results
      })
    }
  },

  onHandleFavorite(){
    my.navigateTo({
      url:"/pages/favorites/favorites"
    })
  },

  onNextPagination(){
    getAllTrending(`https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${this.data.pagination+1}`)
    .then(res =>{
      this.setData({
        movies:res.data.results,
        pagination:this.data.pagination+1
      })
      console.log(res)
    })
  },
  onPrevPagination(){
    if(this.data.pagination != 1){
      getAllTrending(`https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${this.data.pagination-1}`)
      .then(res =>{
        this.setData({
          movies:res.data.results,
          pagination:this.data.pagination-1
        })
        console.log(res)
      })
    }
  },
  //Cargar Peliculas al Cargar La Pagina
  onLoad(query) {
    getAllTrending(`https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${this.data.pagination}`)
    .then(res =>{
      this.setData({
        movies:res.data.results
      })
    })
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // Page loading is complete
  },
  onShow() {
    // Page display
  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {
    // Page is pulled down
  },
  onReachBottom() {
    // Page is pulled to the bottom
  },
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
