import React, { useState } from 'react';
import './App.css';

function App() {
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [quilometros, setQuilometros] = useState('');
  const [litros, setLitros] = useState('');
  const [resultadoCombustivel, setResultadoCombustivel] = useState('');
  const [mediaConsumo, setMediaConsumo] = useState('');
  const [erro, setErro] = useState('');

  const validarEntrada = (valor) => {
    return valor !== '' && !isNaN(valor) && parseFloat(valor) > 0;
  };

  const calcularCombustivel = () => {
    if (!validarEntrada(precoGasolina) || !validarEntrada(precoAlcool)) {
      setErro('Por favor, insira valores válidos para os preços.');
      return;
    }

    const relacao = parseFloat(precoAlcool) / parseFloat(precoGasolina);
    setResultadoCombustivel(relacao < 0.7 ? 'Álcool' : 'Gasolina');
    setErro(''); // Limpa qualquer erro anterior
  };

  const calcularMediaConsumo = () => {
    if (!validarEntrada(quilometros) || !validarEntrada(litros)) {
      setErro('Por favor, insira valores válidos para quilômetros e litros.');
      return;
    }

    const media = parseFloat(quilometros) / parseFloat(litros);
    setMediaConsumo(media.toFixed(2));
    setErro(''); // Limpa qualquer erro anterior
  };

  return (
    <div className="bomba-gasolina">
      <h2>Comparador de Combustível</h2>
      <div className="bomba-display">
        <label>Preço da Gasolina:</label>
        <input
          type="number"
          value={precoGasolina}
          onChange={(e) => setPrecoGasolina(e.target.value)}
          placeholder="R$"
        />
        <label>Preço do Álcool:</label>
        <input
          type="number"
          value={precoAlcool}
          onChange={(e) => setPrecoAlcool(e.target.value)}
          placeholder="R$"
        />
        <button onClick={calcularCombustivel}>Calcular Combustível</button>
        <p>Combustível mais vantajoso: {resultadoCombustivel}</p>
      </div>

      <h2>Cálculo de Consumo</h2>
      <div className="bomba-display">
        <label>Quilômetros Percorridos:</label>
        <input
          type="number"
          value={quilometros}
          onChange={(e) => setQuilometros(e.target.value)}
          placeholder="Km"
        />
        <label>Litros Consumidos:</label>
        <input
          type="number"
          value={litros}
          onChange={(e) => setLitros(e.target.value)}
          placeholder="L"
        />
        <button onClick={calcularMediaConsumo}>Calcular Média de Consumo</button>
        <p>Média de Consumo: {mediaConsumo} km/L</p>
      </div>

      {erro && <p className="error">{erro}</p>} {/* Exibe mensagem de erro, se houver */}
      
      <div className="hose"></div>
    </div>
  );
}

export default App;
