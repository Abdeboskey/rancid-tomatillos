import React from "react";
import PropTypes from "prop-types";
import "../scss/_Billboard.scss";

const Billboard = ({ backdrop, tagline }) => {
  return (
    <section className='MovieDetails-Billboard'>
      <img src={backdrop} alt='Image from Movie' />
      <h2>{tagline}</h2>
    </section>
  )
}

export default Billboard

Billboard.propTypes = {
  backdrop: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired
}