
import './App.css'
import { FormularioDeEvento } from './components/FormularioDeEvento'

function App() {
  return (
    <main>
      <header>
        <img 
          src='/logo.png' 
          alt='Logo do tecboard'>
        </img>
      </header>

      <section className='section'>
        <img 
          src='/banner.png' 
          alt='Banner de uma mulher segurando o oculops de VR'>
        </img>
      </section>
      <FormularioDeEvento />
    </main>
  )
}

export default App
 