import './index.css'

const TextItem = props => {
  const {textDetails} = props
  const {name, text} = textDetails
  let textClassname = ''
  if (name === 'Bill Bradford') {
    textClassname = 'my-text'
  } else {
    textClassname = 'opp-text'
  }
  let classname = ''
  if (name === 'Bill Bradford') {
    classname = 'right-align'
  } else {
    classname = 'left-align'
  }

  return (
    <div className={classname}>
      <p className={textClassname}>{text}</p>
      <img
        src="https://i.postimg.cc/qvzx0nQ2/blank-profile-picture.webp"
        className="text-img"
      />
    </div>
  )
}

export default TextItem
