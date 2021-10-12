
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
          <div className="row">
            <div className="input-container">
              <span className="normal-text">{'<Input helperText="Something interesting text"/>'}</span>
              <Input helperText="Something interesting text"/>
            </div>
            <div className="input-container">
              <span className="normal-text">{'<Input helperText="Something interesting text" error/>'}</span>
              <Input helperText="Something interesting text" error/>
            </div>
          </div>
          <div className="row">
            <div className="input-container">
              <span className="normal-text">{'<Input startIcon/>'}</span>
              <Input startIcon="phone"/>
            </div>
            <div className="input-container">
              <span className="normal-text">{'<Input endIcon/>'}</span>
              <Input endIcon="lock"/>
            </div>
          </div>
          <div className="row">
            <div className="input-container">
              <span className="normal-text">{'<Input value="text"/>'}</span>
              <Input value="Text"/>
            </div>
          </div>
          <div className="row">
            <div className="input-container">
              <span className="normal-text">{'<Input size="sm"/>'}</span>
              <Input size='sm'/>
            </div>
            <div className="input-container">
              <span className="normal-text">{'<Input size="md"/>'}</span>
              <Input size='md'/>
            </div>
          </div>
          <div className="row">
            <div className="input-container">
              <span className="normal-text">{'<Input fullWidth/>'}</span>
              <Input fullWidth/>
            </div>
          </div>
          <div className="row">
            <div className="input-container">
              <span className="normal-text">{'<Input multiline rows=”4” />'}</span>
              <Input multiline rows="4"/>
            </div>
          </div>
      </div>
     
    </div>
  );
}

export default App;
