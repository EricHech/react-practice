import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    searchedValue: '',
  };

  updateSearch = value => {
    this.setState({ searchedValue: value });
  };

  render() {
    return (
      <div className="app__container">
        <NavBar updateSearch={this.updateSearch} />
        <div className="body__container">
          <LeftBar />
          <MainContent searchedValue={this.state.searchedValue} />
          <RightBar />
        </div>
      </div>
    );
  }
}

class NavBar extends Component {
  state = {
    input: '',
  };

  selectFriend = event => {
    event.preventDefault();
    this.props.updateSearch(this.state.input);
  };

  updateSearch = event => {
    let stateCopy = this.state;
    stateCopy.input = event.target.value;
    this.setState({ input: stateCopy.input });
  };

  render() {
    return (
      <div className="nav__bar">
        <div className="searchbarImg__wrapper">
          <img
            className="searchbar__img"
            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png"
            alt="alt text"
          />
        </div>
        <div className="search__bar">
          <form onSubmit={this.selectFriend}>
            <input
              className="searchbar__field"
              type="text"
              value={this.state.input}
              onChange={this.updateSearch}
              placeholder="&#x1F50D; Search"
            />
          </form>
        </div>
        <div className="menu__buttons">
          <a href="#">
            <img src="https://i.imgur.com/MsdAgON.png" alt="button1" />
          </a>
          <a href="#">
            <img src="https://i.imgur.com/MsdAgON.png" alt="button1" />
          </a>
          <a href="#">
            <img src="https://i.imgur.com/MsdAgON.png" alt="button1" />
          </a>
          <a href="#">
            <img src="https://i.imgur.com/MsdAgON.png" alt="button1" />
          </a>
          <a href="#">
            <img src="https://i.imgur.com/MsdAgON.png" alt="button1" />
          </a>
          <a href="#">
            <img src="https://i.imgur.com/MsdAgON.png" alt="button1" />
          </a>
          <a href="#">
            <img src="https://i.imgur.com/MsdAgON.png" alt="button1" />
          </a>
          <a href="#">
            <img src="https://i.imgur.com/MsdAgON.png" alt="button1" />
          </a>
        </div>
      </div>
    );
  }
}

const LeftBar = props => {
  return (
    <div className="left__bar">
      <div className="connections__card">
        <div className="number__connections">20</div>
        <div className="your__connections">Your connections</div>
        <div className="connections__link">See all</div>
        <div className="connections__photos" />
        <div className="find__connections">Find connections</div>
      </div>
    </div>
  );
};

class MainContent extends Component {
  state = {
    connections: [
      {
        id: 1,
        username: 'Saitama',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 2,
        username: 'Eric',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 3,
        username: 'Steve',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 4,
        username: 'Joe',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 5,
        username: 'Teleson',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 6,
        username: 'Bob',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 7,
        username: 'Luis',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 8,
        username: 'Pablo',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 9,
        username: 'Samm',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 10,
        username: 'Ramose',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 11,
        username: 'Kepheus',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 12,
        username: 'Courtney',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 13,
        username: 'Matthew',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 14,
        username: 'Saitama',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 15,
        username: 'Saitama',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 16,
        username: 'Saitama',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 17,
        username: 'Saitama',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 18,
        username: 'Saitama',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 19,
        username: 'Saitama',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 20,
        username: 'Saitama',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 21,
        username: 'Saitama',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 22,
        username: 'Saitama',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 23,
        username: 'Saitama',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 24,
        username: 'Saitama',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 25,
        username: 'Saitama',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 26,
        username: 'Saitama',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 27,
        username: 'Saitama',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 28,
        username: 'Saitama',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 29,
        username: 'Saitama',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 30,
        username: 'Saitama',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 31,
        username: 'Saitama',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 32,
        username: 'Saitama',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
      {
        id: 33,
        username: 'Saitama',
        userImage:
          'https://vignette.wikia.nocookie.net/onepunchman/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20161002154538',
        position: 'Defender of Earth',
        connections: 'Genos, Hero Association, Saitama Group',
      },
    ],
    filteredList: [],
  };
  
  componentWillReceiveProps(nextProp) {
    this.filterList(nextProp.searchedValue);
  }

  filterList = (searchedVal) => {
    const filtered = this.state.connections.filter(
      c => c.username === searchedVal
    );
    this.setState({ filteredList: filtered });
  };

  render() {
    const list =
      this.props.searchedValue.length > 0
        ? this.state.filteredList
        : this.state.connections;
    return (
      <div className="main__content">
        <div className="content__heading">People you may know</div>
        <div className="content__cards">
          {list.map(each => {
            let cardStyle = '';
            if (each.username === this.props.searchedValue) {
              cardStyle = 'searched__card';
            } else cardStyle = 'each__card';
            return (
              <div key={each.id} className={cardStyle}>
                <img src={each.userImage} alt="alt text" />
                <div className="contentCard__username">{each.username}</div>
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
    <div className="right__bar">
      <div className="right__footer">
        <ul className="footer__linklist">
          <li>About</li>
          <li>Help Center</li>
          <li>{'Privacy & Terms'}</li>
          <li>Advertising</li>
          <li>Business Services</li>
          <li>Get the LinkedIn app</li>
          <li>More</li>
        </ul>
        <div className="footer__copywrite">
          LinkedIn Corporation &copy; 2018
        </div>
      </div>
    </div>
  );
};

export default App;
