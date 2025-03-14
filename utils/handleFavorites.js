
/**
 * Agrega una película o serie a la lista de favoritos en el almacenamiento local.
 * @param {string} id - Identificador único del elemento favorito.
 * @param {string} type - Tipo del elemento (puede ser "movie" o "tv").
 */
function addFavorite(id,type){
  let objectAux = {}
  const favorites = my.getStorageSync({key:"Favorites"}).data || {}

  objectAux = {
    ...favorites
  }
  objectAux[id] = {
    id,
    type
  }

  my.setStorageSync({
    key: "Favorites",
    data: objectAux
  })
}

/**
 * Elimina una película o serie de la lista de favoritos en el almacenamiento local.
 * @param {string} id - Identificador único del elemento a eliminar.
 */
function deleteFavorite(id){
  const favorites = my.getStorageSync({key:"Favorites"}).data
  delete favorites[id]

  my.setStorageSync({
    key:"Favorites",
    data: favorites
  })
}

export default {
  addFavorite,
  deleteFavorite
}