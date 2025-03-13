import { getAllTrending } from "/utils/api";
import { addFavorite, deleteFavorite } from "/utils/handleFavorites";
Page({
  data: {
    movie:{},
    favorite:false,
    id:0,
    type:""
  },

  //Funcion Para Agregar Pelicula a Favoritos
  onHandleAddFavorite(){
    const id = this.data.id
    const type = this.data.type
    addFavorite(id,type)

    this.handleLoadFavorites(id)
  },

  //Funcion Para Eliminar Pelicula a Favoritos
  onHandleDeleteFavorite(){
    const id = this.data.id
    deleteFavorite(id)

    this.handleLoadFavorites(id)
  },

  //Funcion Para Desmarcar Boton de Favoritos
  handleLoadFavorites(id){
    const favorites =my.getStorageSync({key:"Favorites"}).data || {}
    const favoritesValues = Object.keys(favorites)

    this.setData({
      favorite: favoritesValues.includes(`${id}`)
    })
  },

  onLoad(query) {
    const id = query.id
    const type = query.type

    this.handleLoadFavorites(id)
    getAllTrending(`https://api.themoviedb.org/3/${type}/${id}`)
    .then(res => {
      this.setData({
        movie: res.data,
        id:id,
        type:type
      })
    })
  },
});
