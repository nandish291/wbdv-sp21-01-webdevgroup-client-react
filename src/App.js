import './App.css';
import Profile from './components/profile'
import profile from './imgs/profile.jpg'
import event1 from './imgs/event1.jpg'
import event2 from './imgs/event2.jpg'
import event3 from './imgs/event3.jpg'
import media1 from './imgs/media1.jpg'
import media2 from './imgs/media2.jpg'

function App() {
  return (
    <div className="App">
      <Profile imgPath = {profile} events = {[event1, event2, event3]} media = {[media1, media2]} />
    </div>
  );
}

export default App;
