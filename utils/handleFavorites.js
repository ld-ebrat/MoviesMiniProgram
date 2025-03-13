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