const baseUrl = 'https://rancid-tomatillos.herokuapp.com/api/v2'

export const getMovies = () => {
  return fetch(`${baseUrl}/movies`)
  .then(response => response.json())
}

export const submitLoginCredentials = state => {
  return fetch(`${baseUrl}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: state.username,
      password: state.password
    })
  })
  .then(response => response.json())
}

const getMovieInfo = movieId => {
  return fetch(`${baseUrl}/movies/${movieId}`)
  .then(response => response.json())
}

const getMovieVideos = movieId => {
  return fetch(`${baseUrl}/movies/${movieId}/videos`)
  .then(response => response.json())
}

export const getMovieDetails = movieId => {
	return Promise.all([getMovieInfo(movieId), getMovieVideos(movieId)])
		.then(data => data)
}

export const getUserRatings = userId => {
	return fetch(`${baseUrl}/users/${userId}/ratings`)
		.then(response => response.json())
}

export const postRating = (userId, userRating, movieId) => {
	return fetch(`${baseUrl}/users/${userId}/ratings`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			movie_id: movieId,
			rating: userRating
		})
	})
	.then(response => response.json())
}

export const deleteRating = (userId, ratingId) => {
	return fetch(`${baseUrl}/users/${userId}/ratings/${ratingId}` , {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			ratingId
		})
	})
}