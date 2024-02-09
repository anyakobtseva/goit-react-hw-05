
import Profile from './Profile'
import './App.css'
import userData from '../userData.json'

  const App = () => {
    return (
      <>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </>
    );
  };

export default App

