import { getAllTrending } from "./api";

async function showFavorites(){
  const favorites = my.getStorageSync({key:"Favorites"}).data || {}
  const arrayValues = Object.values(favorites)

  let moviesAux = []

  for (const iterator of arrayValues) {
    const response = await getAllTrending(`https://api.themoviedb.org/3/${iterator.type}/${iterator.id}`)
    moviesAux.push(response.data)
  }

  return {moviesAux, favorites}
}

export default {
  showFavorites
}