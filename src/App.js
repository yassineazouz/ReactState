import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: 'Yassine Azzouz ',
        bio: 'Passionate student eager to learn, grow, and make a positive impact in the world through education and innovation.',
        imgSrc: 'profile-image.jpg',
        profession: 'Web Developer'
      },
      shows: false,
      timeSinceMount: 0
    };
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeSinceMount: prevState.timeSinceMount + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1 className='App'> My Profile</h1>
        <button  onClick={this.toggleShow}>Toggle Profile</button>
        {this.state.shows && (

          <div className="Profile">
            
            <div className="upper-container">
              <div className="image-container">
                <img src={this.state.Person.imgSrc} alt={this.state.Person.fullName} height='100px' width='100px' />
              </div>
            </div>
            <div className="lower-container">
              <h3> {this.state.Person.fullName} </h3>
              <h4> {this.state.Person.profession} </h4>
              <p>  {this.state.Person.bio}</p>
            </div>
          </div>


        )}
        <p>Time since last component mount: {this.state.timeSinceMount}</p>
      </div>
    );
  }
}



export default App;
