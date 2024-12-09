import React, { useState } from 'react';
import Header from './components/Header';
import TaskContainer from './components/TaskContainer';

function App() {
  const [buttonText, setButtonText] = useState('Clique aqui!');

  const handleClick = () => {
    alert('Botão clicado!');
    setButtonText('Clicado!');
  };

  return (
    <div className="App">
      <Header />
      <TaskContainer />
      <button onClick={handleClick} style={styles.button}>
        {buttonText}
      </button>
    </div>
  );
}

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default App;