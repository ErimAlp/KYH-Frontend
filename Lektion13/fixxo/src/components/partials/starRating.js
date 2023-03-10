import React from 'react'
const stars = Array.from((length: 5), (_, index) => {
    <i key={index} className={`fa-sharp fa-star ${index < ratin ? "fa-solid" : "fa-regular"}`}></i>
})

const starRating = () => {
  return (
    <div>{stars}</div>
  )
}

export default starRating