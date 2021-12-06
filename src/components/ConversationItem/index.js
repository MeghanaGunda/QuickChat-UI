import './index.css'

const ConversationItem = props => {
  const {conversationDetails, activeConversation, changeActive} = props
  const {name, image, id} = conversationDetails
  let classname = ''

  if (activeConversation === id) {
    classname = 'active-conversation'
  } else {
    classname = 'normal-conversation'
  }

  const onClickConversation = () => {
    changeActive(id)
  }

  return (
    <button className={classname} onClick={onClickConversation}>
      <img src={image} alt="profile" className="profile-image" />
      <h1 className="conversation-name">{name}</h1>
    </button>
  )
}

export default ConversationItem
