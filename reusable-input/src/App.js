
import './App.css';
import Input from './Component/input';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
          <h1 className='title'>Input</h1>
          <div className="row">
            <div className="input-container">
              <span className="normal-text">{'<Input/>'}</span>
              <Input></Input>
            </div>
            <div className="input-container">
              <span className="normal-text">{"&:hover"}</span>
              <Input className="inputActive-hover"></Input>
            </div>
            <div className="input-container">
              <span className="normal-text">{"&:focus"}</span>
              <Input className="inputActive-focus"></Input>
            </div>
          </div>
          <div className="row">
            <div className="input-container">
              <span className="normal-text">{'<Input error/>'}</span>
              <Input error></Input>
            </div>
            <div className="input-container">
              <span className="normal-text">{"&:hover"}</span>
              <Input className="inputActive-hover"></Input>
            </div>
            <div className="input-container">
              <span className="normal-text">{"&:focus"}</span>
              <Input className="errorActive-focus"></Input>
            </div>
          </div>
          <div className="row">
              <div className="input-container">
                <span className="normal-text">{'<Input disabled/>'}</span>
                <Input disabled></Input>
              </div>
          </div>
      </div>
     
    </div>
  );
}

export default App;
