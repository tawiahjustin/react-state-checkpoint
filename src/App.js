import React from 'react'
import image from './image/my-profile.jpeg'
import './App.css'
import Profile from './my_profile/profile'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Person: {
        fullName: 'Tehua Justin',
        bio: 'I am a creative Software Developer. I am an expert with Html, CSS, Javascript and React. I have two years experience working with these technologies and I have developed for a fair number of clients.',
        imgSrc: image,
        profession: 'Software Developer',
      },
      shows: true,
      count: 0,
    }
  }
  /* shows state handler  */
  handleEvent = () => {
    if (this.state.shows) {
      this.setState({ shows: false })
    } else {
      this.setState({ shows: true })
    }
  }
  /* component lifecycle method  */
  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  render() {
    return (
      <>
        <div className='App'>
          <div>
            {this.state.shows ? (
              <Profile
                fullName={this.state.Person.fullName}
                imgSrc={this.state.Person.imgSrc}
                bio={this.state.Person.bio}
                profession={this.state.Person.profession}
              />
            ) : (
              <h1 className='text'>Click to show profile</h1>
            )}
          </div>
        </div>
        <span className='elapsed--time'>
          Time interval : {this.state.count}
        </span>
        <button className='btn' onClick={this.handleEvent}>
          show
        </button>
      </>
    )
  }
}

export default App
