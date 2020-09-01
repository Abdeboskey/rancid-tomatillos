const baseUrl = 'https://rancid-tomatillos.herokuapp.com/api/v2'
const commentsUrl = 'http://localhost:3001/api/v1/movies'

export const getMovies = () => {
  return fetch(`${baseUrl}/movies`)
		.then(response => {
			if (response.ok) {
				return response.json()
			} else {
				throw response
			}
		})
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
  .then(response => {
		if (response.ok) {
			return response.json()
		} else {
			throw response
		}
	})
}

const getMovieInfo = movieId => {
  return fetch(`${baseUrl}/movies/${movieId}`)
		.then(response => {
			if (response.ok) {
				return response.json()
			} else {
				throw response
			}
		})
}

const getMovieVideos = movieId => {
  return fetch(`${baseUrl}/movies/${movieId}/videos`)
		.then(response => {
			if (response.ok) {
				return response.json()
			} else {
				throw response
			}
		})
}

export const getMovieDetails = movieId => {
	return Promise.all([getMovieInfo(movieId), getMovieVideos(movieId)])
		.then(data => data)
}

export const getUserRatings = userId => {
	return fetch(`${baseUrl}/users/${userId}/ratings`)
		.then(response => {
			if (response.ok) {
				return response.json()
			} else {
				throw response
			}
		})
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
	.then(response => {
		if (response.ok) {
			return response.json()
		} else {
			throw response
		}
	})
}

export const deleteRating = (userId, ratingId) => {
	return fetch(`${baseUrl}/users/${userId}/ratings/${ratingId}` , {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ ratingId })
	})
}

export const getFavoriteMovieIds = () => {
	return fetch('http://localhost:3001/api/v1/favorites')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw response
      }
    })
}
  
export const getComments = movieId => {
	return fetch(`${commentsUrl}/${movieId}/comments`)
		.then(response => {
			if (response.ok) {
				return response.json()
			} else {
				throw response
			}
		})
}

export const postFavorite = movieId => {
	return fetch('http://localhost:3001/api/v1/favorites', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ id: movieId })
	})
	.then(response => {
		if (response.ok) {
			return response.json()
		} else {
			throw response
		}
	})
}
 
export const postComment = (movieId, comment, author) => {
	return fetch(`${commentsUrl}/${movieId}/comments`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
			comment: comment,
      author: author,
    })
	})
	.then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw response;
    }
  })
}