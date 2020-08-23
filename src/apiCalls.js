export const getMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then((response) => response.json())
}

export const submitLoginCredentials = state => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: state.username,
      password: state.password
    })
  })
  .then(response => response.json())
}

export const getMovieDetails = movieId => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
  .then((response) => response.json())
} 
