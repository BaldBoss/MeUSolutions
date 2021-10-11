
import './App.css';
import Button from './Component/Button';

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <h1 className='title'>Buttons</h1>
        <div className='row'>
          <div className='button-container'>
            <span className="normal-text">{`<Button />'`}</span>
            <Button></Button>
          </div>
          <div className='button-container'>
            <span className="gray-text">&:hover, &:focus</span>
            <Button className='active-default'></Button>
          </div>
        </div>
        <div className='row'>
          <div className='button-container'>
          <span className="normal-text">{`<Button variant='outline'/>'`}</span>
            <Button variant='outline'></Button>
          </div>
          <div className='button-container'>
            <span className="gray-text">&:hover, &:focus</span>
            <Button variant='outline active-outline'></Button>
          </div>
        </div>
        <div className='row'>
          <div className='button-container'>
          <span className="normal-text">{`<Button variant='text'/>'`}</span>
            <Button variant='text'></Button>
          </div>
          <div className='button-container'>
            <span className="gray-text">&:hover, &:focus</span>
            <Button variant='text active-outline'></Button>
          </div>
        </div>
        <div className="row">
            <div className='button-container'>
              <span className="normal-text">{`<Button disableShadow/>'`}</span>
              <Button variant="blue" disableShadow></Button>
            </div>
        </div>
        <div className='row row-md'>
          <div className='button-container'>
          <span className="normal-text">{`<Button disabled/>'`}</span>
            <Button childrent='Disabled' disabled></Button>
          </div>
          <div className='button-container'>
            <span className="normal-text">{`<Button variant="text" disabled/>'`}</span>
            <Button childrent='Disabled' variant='text' disabled></Button>
          </div>
        </div>
        <div className='row row-mdd'>
          <div className='button-container'>
          <span className="normal-text">{`<Button startIcon='local_grocery_store' />'`}</span>
            <Button variant="blue" startIcon="local_grocery_store" />
          </div>
          <div className='button-container'>
            <span className="normal-text">{`<Button endIcon='local_grocery_store' />'`}</span>
            <Button variant="blue" endIcon="local_grocery_store" />
          </div>
        </div>
        <div className='row row-mdd'>
          <div className='button-container'>
          <span className="normal-text">{`<Button size='sm' />'`}</span>
            <Button variant="blue" size='sm' />
          </div>
          <div className='button-container'>
            <span className="normal-text">{`<Button size='md' />'`}</span>
            <Button variant="blue" size="md" />
          </div>
          <div className='button-container'>
            <span className="normal-text">{`<Button size='lg' />'`}</span>
            <Button variant="blue" size="lg" />
          </div>
        </div>
        <div className='row row-lg'>
          <div className='button-container'>
          <span className="normal-text">{`<Button color="default" />'`}</span>
            <Button variant="blue" color='default' />
          </div>
          <div className='button-container'>
            <span className="normal-text">{`<Button color "primary" />'`}</span>
            <Button childrent='Primary' variant="blue" color='primary' />
          </div>
          <div className='button-container'>
            <span className="normal-text">{`<Button color="secondary" />'`}</span>
            <Button childrent='Secondary' variant="blue" color='secondary' />
          </div>
          <div className='button-container'>
            <span className="normal-text">{`<Button color="danger" />'`}</span>
            <Button childrent="Danger" variant="blue" color='danger' />
          </div>
        </div>
        <div className='row row-lg'>
          <div className='button-container'>
          <span className="gray-text">&:hover, &:focus</span>
            <Button variant="blue" color='default' className='active-default'/>
          </div>
          <div className='button-container'>
            <span className="gray-text">&:hover, &:focus</span>
            <Button childrent='Primary' variant="blue" color='primary' className='active-primary' />
          </div>
          <div className='button-container'>
            <span className="gray-text">&:hover, &:focus</span>
            <Button childrent='Secondary' variant="blue" color='secondary' className='active-secondary' />
          </div>
          <div className='button-container'>
            <span className="gray-text">&:hover, &:focus</span>
            <Button childrent="Danger" variant="blue" color='danger' className='active-danger' />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
