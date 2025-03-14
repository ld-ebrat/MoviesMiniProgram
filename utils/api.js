/**
 * Realiza una petición GET a la API para obtener contenido en tendencia.
 * @async
 * @param {string} url - La URL de la API para obtener los datos.
 * @returns {Promise<Object>} - Promesa que devuelve array de peliculas.
 */
const getAllTrending = async (url)=>{

  const response = await my.request({
    url: url,
    method: "GET",
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmY5ZTQyNTc3ZTUyNDkwMjY5MGVhZTFkYzFkNDlhMyIsIm5iZiI6MTc0MTgyMzIxNy4wNDYwMDAyLCJzdWIiOiI2N2QyMWNmMTMyNWU2MmIzZDE2MDgyMDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pvy1XGqu7_AcPf_Hdt6zYgYiG56yVZw5zsi1aMt1g08'
    },
  })

  return response
}

/**
 * Realiza una petición GET a la API para buscar películas.
 * @async
 * @param {string} url - La URL de la API con los parámetros de búsqueda.
 * @returns {Promise<Object>} - Promesa que devuelve array de peliculas.
 */
const searchMovies = async (url)=>{
  const response = await my.request({
    url: url,
    method: "GET",
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmY5ZTQyNTc3ZTUyNDkwMjY5MGVhZTFkYzFkNDlhMyIsIm5iZiI6MTc0MTgyMzIxNy4wNDYwMDAyLCJzdWIiOiI2N2QyMWNmMTMyNWU2MmIzZDE2MDgyMDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pvy1XGqu7_AcPf_Hdt6zYgYiG56yVZw5zsi1aMt1g08'
    },
  })

  return response
}

export default {
  getAllTrending,
  searchMovies
}