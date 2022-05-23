// Write your code here

import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const comedyList = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )
  const actionList = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )

  return (
    <div className="prime-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="prime-logo"
        alt="prime video"
      />
      <div className="movies-container">
        <h1 className="title">Action Movies</h1>
        <MoviesSlider moviesList={actionList} />
        <h1 className="title">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyList} />
      </div>
    </div>
  )
}

export default PrimeVideo
