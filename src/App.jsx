
import './App.css'

function FormularioDeEvento(){
  return(
    <form>
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
        <label htmlFor='nome'>Qual o nome do evento?</label>
        <input type='text' name='nome' id='nome' placeholder='Summer dev hits'></input>
      </fieldset>
    </form> 
  )
}

function App() {
  return (
    <main>
      <header>
        <img src='/logo.png' alt='Logo do tecboard'></img>
      </header>
      <section>
        <img src='/banner.png' alt='Banner de uma mulher segurando o oculops de VR'></img>
      </section>
      <FormularioDeEvento />
    </main>
  )
}

export default App
 