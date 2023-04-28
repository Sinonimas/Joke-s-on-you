import './App.scss';
import JokeStorage from './components/joke-storage';

export default function App() {


    return (
      <div className='container'>
        <div className='topic'><h1>Joke's on you</h1></div>
      <JokeStorage/>
      </div>
    );
}
