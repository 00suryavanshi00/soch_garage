
import Greeting from './components/Greeting';
import Navbar from './components/Navbar';
import Trials from './components/Trials';
import Storybox from './components/Storybox';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting/>
      <Trials/>
      <Storybox/>
    </div>
  );
}

export default App;
