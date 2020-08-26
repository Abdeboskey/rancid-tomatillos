export const getMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => response.json())
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

const getMovieInfo = movieId => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
  .then(response => response.json())
}

const getMovieVideos = movieId => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}/videos`)
  .then(response => response.json())
}

export const getMovieDetails = movieId => {
	return Promise.all([getMovieInfo(movieId), getMovieVideos(movieId)])
		.then(data => data)
}

export const getUserRatings = userId => {
	return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings`)
		.then(response => response.json())
}

export const postRating = (userId, userRating, movieId) => {
	return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings`, {
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			movie_id: movieId,
			rating: userRating
		})
	})
	.then(response => response.json())
}