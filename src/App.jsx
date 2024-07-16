import { useState } from 'react'
import Header from "./components/Header"

// Componente de React
function App() {

  //funcion y lo que modifica 
  const [cantidad, setCantidad] = useState(10000);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  // Se recomienda colocar handle Y el nombre del evento
  function handleChange(e) {
    setCantidad(+e.target.value);
  }

  // es reservada para los templates o lo que quiero imprimir en la pantalla
  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />
      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>{cantidad}</p>
    </div>

  )
}

export default App