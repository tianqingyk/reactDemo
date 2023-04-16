import React from "react"
import PropTypes from 'prop-types'

const TextDiv = ({ className, content, boldWords, align, lineHeight, width }) => {
  const words = content.split(' ')

  return (
    <p className={className} style={{ textAlign: align, lineHeight: lineHeight, width: width }}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          {boldWords.includes(word) ? <strong>{word} </strong> : <span>{word} </span>}
        </React.Fragment>
      ))}
    </p>
  )
}

TextDiv.propTypes = {
  content: PropTypes.string.isRequired,
  boldWords: PropTypes.arrayOf(PropTypes.string),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  lineHeight: PropTypes.number,
}

TextDiv.defaultProps = {
  boldWords: [],
  align: 'left',
  lineHeight: 1.5,
  whiteSpace: 'pre-wrap'
}

export default TextDiv
