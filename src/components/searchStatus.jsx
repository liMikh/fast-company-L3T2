import React from 'react'

const SearchStatus = ({ length }) => {
  let phrase
  const renderPhrase = (number) => {
    if (number === 2 || number === 3 || number === 4) {
      phrase = 'человека тусанут'
    } else if (
      number > 20 &&
      (number % 10 === 2 || number % 10 === 3 || number % 10 === 4)
    ) {
      phrase = 'человека тусанут'
    } else {
      phrase = 'человек тусанёт'
    }
    return phrase
  }

  return (
    <h3>
      <span className={'badge ' + (length > 0 ? 'bg-primary' : 'bg-danger')}>
        {length > 0
          ? `${length} ${renderPhrase(length)} с тобой`
          : 'Никто с тобой не тусанёт'}
      </span>
    </h3>
  )
}

export default SearchStatus
