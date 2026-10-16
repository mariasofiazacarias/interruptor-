import { useState } from 'react';

function App() {
  // 1. Criar um estado 'ativo' (booleano)
  const [ativo, setAtivo] = useState(false);

  // Função para alternar o estado ao clicar
  const alternarInterruptor = () => {
    setAtivo(!ativo);
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'sans-serif'
    }}>
      {/* 2. Criar um botão na tela */}
      <button
        onClick={alternarInterruptor}
     
        style={{
          backgroundColor: ativo ? '#4CAF50' : '#F44336',
          color: 'white',
          border: 'none',
          padding: '15px 32px',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}
      >
        {/* 4. Operador ternário no texto do botão (ON se ativo, OFF se inativo) */}
        {ativo ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default App;