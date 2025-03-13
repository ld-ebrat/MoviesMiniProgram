
import { showFavorites } from "/utils/favorites.js";
Page({
  data: {
    movies:[],
    favorites:{}
  },

  //Mostrar Detalles de la Pelicula Seleccionada
  onHandleDetails(id,type){
    my.navigateTo({
      url:`/pages/details/details?id=${id}&type=${type}`
    })
  },

  //Mostrar Peliculas Al Cargar La Pagina
  async onLoad() {
    let moviesAux = []
    let favorites = {}

    const response = await showFavorites()
    moviesAux = response.moviesAux
    favorites = response.favorites

    this.setData({
      movies:moviesAux,
      favorites:favorites
    })
  },

  //Actualizar Peliculas al ver la pagina
  async onShow() {
    let moviesAux = []
    let favorites = {}

    const response = await showFavorites()
    moviesAux = response.moviesAux
    favorites = response.favorites

    this.setData({
      movies:moviesAux,
      favorites:favorites
    })
  },
});
