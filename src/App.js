import './styles/App.css';
import SorryContext from './contexts/SorryContext';
import AppRouter from './routers/AppRouter';

function App() {

  return (
    <div className="App">
      <SorryContext >
        <AppRouter />
      </SorryContext>
    </div>
  );
}

export default App;
