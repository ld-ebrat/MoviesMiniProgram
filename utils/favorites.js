import { getAllTrending } from "./api";

 /**
 * @typedef {Object} genres
 * @property {boolean} id- ID del genero.
 * @property {string} name - Nombre del genero.
 */

  /**
 * @typedef {Object} production_companies
 * @property {number} id- ID de la Compañia.
 * @property {string} logo_path - Ruta del Logo de la Compañia
 * @property {string} name - Nombre de la Compañia
 * @property {string} origin_country - Pais de la Compañia
 */

/**
 * @typedef {Object} moviesAux
 * @property {boolean} adult - Mostrar Contenido para Adulto.
 * @property {string} backdrop_path - Ruta de la Image de Fondo.
 * @property {string} belongs_to_collection - Nombre de la Coleccion.
 * @property {number} budget - Presupuesto.
 * @property {genres} genres - Array de Generos
 * @property {number} id - Id de la Pelicula
 * @property {string} imdb_id
 * @property {string} original_language - Idioma Original de la Pelicula
 * @property {string} original_title - Titulo Original de la Pelicula
 * @property {string} overview - Sinopsis
 * @property {number} popularity - Popularidad
 * @property {string} poster_path - Ruta del Poster de la Pelicula
 * @property {production_companies} production_companies- Array de Objetos de las Compañias

 */
/**
 * Obtiene la lista de películas favoritas desde el almacenamiento local y busca sus detalles en la API.
 * @async
 * @returns {Promise<{moviesAux: Object[], favorites: Object}>} - Promesa que resuelve con un objeto que contiene la lista de películas y los favoritos.
 */
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