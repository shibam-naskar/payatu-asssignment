import './App.css';
import CommentComp from './components/comment';
import data from './data/data';

function App() {
  return (
    <div className="App">
      {data.map((cmt)=>(
        <CommentComp comment={cmt} />
      ))}
    </div>
  );
}

export default App;
