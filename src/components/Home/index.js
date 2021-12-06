import {Component} from 'react'
import {v4} from 'uuid'
import {RiSettings4Line} from 'react-icons/ri'
import {BiChevronDown, BiChevronUp, BiCalendarCheck} from 'react-icons/bi'
import {BsArchive, BsPeople} from 'react-icons/bs'
import {GrAttachment} from 'react-icons/gr'
import {CgProfile, CgPlayListRemove} from 'react-icons/cg'
import {MdSend} from 'react-icons/md'
import {HiOutlineMail} from 'react-icons/hi'
import {FiClock} from 'react-icons/fi'
import {AiOutlineLink} from 'react-icons/ai'
import Switch from 'react-switch'
import ConversationItem from '../ConversationItem'
import TextItem from '../TextItem'
import './index.css'

const conversationsList = [
  {
    name: 'Person1',
    id: '1',
    image: 'https://i.postimg.cc/qvzx0nQ2/blank-profile-picture.webp',
  },
  {
    name: 'Person2',
    id: '2',
    image: 'https://i.postimg.cc/qvzx0nQ2/blank-profile-picture.webp',
  },
  {
    name: 'Person3',
    id: '3',
    image: 'https://i.postimg.cc/qvzx0nQ2/blank-profile-picture.webp',
  },
  {
    name: 'Person4',
    id: '4',
    image: 'https://i.postimg.cc/qvzx0nQ2/blank-profile-picture.webp',
  },
]

const chatList = [
  {
    id: 1,
    text: 'Hi Henry',
    name: 'Bill Bradford',
  },
  {
    id: 2,
    text: 'Hi Brad',
    name: 'Person',
  },
  {
    id: 3,
    text: 'How can I help you?',
    name: 'Bill Bradford',
  },
  {
    id: 4,
    text: 'I am interested in your program',
    name: 'Person',
  },
  {
    id: 5,
    text: 'Sure, will help you in getting into right path',
    name: 'Bill Bradford',
  },
]

class Home extends Component {
  state = {
    showActive: true,
    showConversations: true,
    activeConversation: conversationsList[0].id,
    showArchievedConversations: false,
    msgInput: '',
    textsList: chatList,
  }

  handleChange = checked => {
    this.setState({showActive: checked})
  }

  changeDropDown = () => {
    this.setState(prevState => ({
      showConversations: !prevState.showConversations,
    }))
  }

  changeArchievedDropDown = () => {
    this.setState(prevState => ({
      showArchievedConversations: !prevState.showArchievedConversations,
    }))
  }

  changeActive = id => {
    this.setState({activeConversation: id})
  }

  onChangeMsg = event => {
    this.setState({msgInput: event.target.value})
  }

  onClickSend = () => {
    const {msgInput} = this.state
    const newText = {
      id: v4(),
      text: msgInput,
      name: 'Bill Bradford',
    }
    this.setState(prevState => ({
      textsList: [...prevState.textsList, newText],
      msgInput: '',
    }))
  }

  renderProfileSection = () => {
    const {showActive} = this.state
    return (
      <div className="profile-section">
        <div className="profile-info">
          <CgProfile className="profile-img" />
          <div className="name-and-settings">
            <h1 className="profile-name">Bill Bradford</h1>
            <RiSettings4Line className="settings-icon" />
          </div>
          <p className="profile-role">Full-stack Developer</p>
          <div className="show-active">
            <Switch
              onChange={this.handleChange}
              checked={showActive}
              className="switch"
              onColor="#1f3bc4"
              offColor="#ffffff"
              uncheckedHandleIcon=" "
              checkedIcon=" "
              offHandleColor="#1f3bc4"
              onHandleColor="#ffffff"
            />
            <p className="active">Active</p>
          </div>
        </div>
      </div>
    )
  }

  renderConversationsSection = () => {
    const {showActive, showConversations, activeConversation} = this.state
    return (
      <div className="active-section">
        <div className="active-heading-section">
          <h1 className="ac-heading">Active Conversations</h1>
          <h1 className="conversations-count">4</h1>
          <button className="drop-down-btn" onClick={this.changeDropDown}>
            {showConversations ? <BiChevronUp /> : <BiChevronDown />}
          </button>
        </div>
        <div>
          {showConversations ? (
            <div className="active-list-section">
              {conversationsList.map(conversation => (
                <ConversationItem
                  conversationDetails={conversation}
                  key={conversation.id}
                  activeConversation={activeConversation}
                  changeActive={this.changeActive}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    )
  }

  render() {
    const {
      showActive,
      showArchievedConversations,
      msgInput,
      textsList,
    } = this.state
    return (
      <div className="app-container">
        <div className="chat-screen">
          <div className="left-section">
            <div className="app-logo-section">
              <img
                src="https://i.postimg.cc/s2gT3Mn5/unnamed.png"
                className="app-logo"
              />
              <h1 className="app-title">QuickChat</h1>
            </div>
            <div>{this.renderProfileSection()}</div>
            <div className="active-conversations">
              {this.renderConversationsSection()}
            </div>
            <div className="archive-section">
              <div className="archieved-conversations">
                <h1 className="archieved-heading">Archived Conversations</h1>
                <h1 className="arc-conversations-count">7</h1>
                <button
                  className="drop-down-btn"
                  onClick={this.changeArchievedDropDown}
                >
                  {showArchievedConversations ? (
                    <BiChevronUp />
                  ) : (
                    <BiChevronDown />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="chat-section">
            <div className="texts-section">
              <div className="msgs-list">
                {textsList.map(text => (
                  <TextItem textDetails={text} key={text.id} />
                ))}
              </div>
              <div className="sending-msg-section">
                <GrAttachment className="attach-icon" />
                <input
                  type="search"
                  placeholder="Enter your message here"
                  value={msgInput}
                  className="msg-input"
                  onChange={this.onChangeMsg}
                />
                <button className="send-btn" onClick={this.onClickSend}>
                  <p>Send</p>
                  <MdSend className="send-icon" />
                </button>
              </div>
            </div>
          </div>
          <div className="right-section">
            <div className="conversation-profile">
              <h1 className="initial">HB</h1>
              <div>
                <div className="mail-section">
                  <HiOutlineMail className="icon" />
                  <p className="p-text">henryboyd@gmail.com</p>
                </div>
                <div className="name-section">
                  <CgProfile className="icon" />
                  <p className="p-text">Henry Boyd</p>
                </div>
              </div>
              <button className="archive-btn">
                <p>Archive</p>
                <BsArchive className="archive-icon" />
              </button>
            </div>
            <div className="calendar-section">
              <div className="time-attendee">
                <div className="time">
                  <div className="clock-icon">
                    <FiClock />
                  </div>
                  <div className="time-content">
                    <h1 className="time-heading">13h</h1>
                    <p className="time-para">Time</p>
                  </div>
                </div>
                <div className="attendee">
                  <div className="ppl-icon">
                    <BsPeople />
                  </div>
                  <div className="attendee-content">
                    <h1 className="attendee-heading">188</h1>
                    <p className="attendee-para">Attendeed</p>
                  </div>
                </div>
              </div>
              <div className="meet-reject">
                <div className="meet">
                  <div className="meet-icon">
                    <BiCalendarCheck />
                  </div>
                  <div className="meet-content">
                    <h1 className="meet-heading">119</h1>
                    <p className="meet-para">Meetings</p>
                  </div>
                </div>
                <div className="reject">
                  <div className="reject-icon">
                    <CgPlayListRemove />
                  </div>
                  <div className="reject-content">
                    <h1 className="reject-heading">41</h1>
                    <p className="reject-para">Rejected</p>
                  </div>
                </div>
              </div>
              <div className="current-heading-section">
                <h1 className="current-heading">Current week</h1>
                <p className="activity-heading">Activity</p>
              </div>
              <div className="activity-graph">
                <div className="weekday">
                  <div className="bar">.</div>
                  <div className="dot">.</div>
                  <p className="title">MON</p>
                </div>
                <div className="weekday">
                  <div className="bar">.</div>
                  <div className="dot">.</div>
                  <p className="title">TUE</p>
                </div>
                <div className="weekday">
                  <div className="bar">.</div>
                  <div className="dot">.</div>
                  <p className="title">WED</p>
                </div>
                <div className="weekday">
                  <div className="bar">.</div>
                  <div className="dot">.</div>
                  <p className="title">THU</p>
                </div>
                <div className="weekday">
                  <div className="bar">.</div>
                  <div className="dot">.</div>
                  <p className="title">FRI</p>
                </div>
                <div className="weekday">
                  <div className="bar">.</div>
                  <div className="dot">.</div>
                  <p className="title">SAT</p>
                </div>
                <div className="weekday">
                  <div className="bar">.</div>
                  <div className="dot">.</div>
                  <p className="title">SUN</p>
                </div>
              </div>
            </div>
            <div className="client-section">
              <h1 className="client-heading">Onboard Clients</h1>
              <p className="client-content">
                Share the link with prospects and discuss all the stuff
              </p>
              <button className="copy-btn">
                Copy Link
                <AiOutlineLink />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
