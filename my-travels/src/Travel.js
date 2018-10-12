import React from 'react'

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo} alt={destination} />
    <figcaption>
      <blockquote>{country}</blockquote>
      <blockquote>{distance}</blockquote>
    </figcaption>
  </figure>
)

export default Travel
