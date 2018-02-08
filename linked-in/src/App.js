import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app__container'>
        <NavBar />
        <div className='body__container'>
          <LeftBar />
          <MainContent />
          <RightBar />
        </div>
      </div>
    );
  }
}

class NavBar extends Component {
  state = {
    input: '',
  }

  updateSearch = (event) => {
    let stateCopy = this.state;
    stateCopy.input = event.target.value;
    this.setState({ input: stateCopy.input });
  }

  render () {
    return (
      <div className='nav__bar'>
        <div className='searchbarImg__wrapper'>
          <img
            className='searchbar__img'
            src='https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png'
            alt='alt text'
          />
        </div>
        <div className='search__bar'>
          <form>
            <input
              className='searchbar__field'
              type='text'
              value={this.state.input}
              onChange={this.updateSearch}
              placeholder='&#x1F50D; Search'
            />
          </form>
        </div>
        <div className='menu__buttons'>
          <a href='#'><img src='https://i.imgur.com/MsdAgON.png' alt='button1'/></a>
          <a href='#'><img src='https://i.imgur.com/MsdAgON.png' alt='button1'/></a>
          <a href='#'><img src='https://i.imgur.com/MsdAgON.png' alt='button1'/></a>
          <a href='#'><img src='https://i.imgur.com/MsdAgON.png' alt='button1'/></a>
          <a href='#'><img src='https://i.imgur.com/MsdAgON.png' alt='button1'/></a>
          <a href='#'><img src='https://i.imgur.com/MsdAgON.png' alt='button1'/></a>
          <a href='#'><img src='https://i.imgur.com/MsdAgON.png' alt='button1'/></a>
          <a href='#'><img src='https://i.imgur.com/MsdAgON.png' alt='button1'/></a>
        </div>
      </div>
    );
  }
}

const LeftBar = (props) => {
  return (
    <div className='left__bar'>
      <div className='connections__card'>
        <div className='number__connections'>
        20
        </div>
        <div className='your__connections'>
        Your connections
        </div>
        <div className='connections__link'>
        See all
        </div>
        <div className='connections__photos'>
        </div>
        <div className='find__connections'>
        Find connections
        </div>
      </div>
    </div>
  );
}

class MainContent extends Component {
  state = [
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
    {
      username: 'Saitama',
      userImage: 'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
      position: 'Defender of Earth',
      connections: 'Genos, Hero Association, Saitama Group',
    },
  ];

  render () {
    return (
      <div className='main__content'>
        <div className='content__heading'>
        People you may know
        </div>
        <div className='content__cards'>
          {this.state.map((each) => {
            return (
              <div className="each__card">
                <img src={each.userImage} />
                <div className='contentCard__username'>{each.username}</div>
                <div>{each.position}</div>
                <div>{each.connections}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const RightBar = () => {
  return (
    <div className='right__bar'>
      <div className='right__footer'>
        <ul className='footer__linklist'>
          <li>About</li>
          <li>Help Center</li>
          <li>Privacy & Terms</li>
          <li>Advertising</li>
          <li>Business Services</li>
          <li>Get the LinkedIn app</li>
          <li>More</li>
        </ul>
        <div className='footer__copywrite'>
        LinkedIn Corporation &copy; 2018
        </div>
      </div>
    </div>
  );
}


export default App;