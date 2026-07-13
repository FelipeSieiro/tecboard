
import './App.css'
import { EventForm } from './components/EventForm'
import { Theme } from './components/Theme'


const themes=[
  {
    id: '1',
    name: 'Front-end',
  },
  {
    id: '2',
    name: 'Back-end',
  },
  {
    id: '3',
    name: 'Devops',
  },
  {
    id: '4',
    name : 'Inteligencia Artificial',
  },
  {
    id: '5',
    name: 'Data Science',
  },
  {
    id: '6',
    name: 'cloud',
  },
]

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
      <EventForm />

      <section>
        <Theme theme={themes[0]}/>
      </section>
      <section>
        <Theme theme={themes[1]}/>
      </section>
      <section>
        <Theme theme={themes[2]}/>
      </section>
      <section>
        <Theme theme={themes [3]}/>
      </section>
      <section>
        <Theme theme={themes[4]}/>
      </section>
      <section>
        <Theme theme={themes[5]}/>
      </section>

    </main>
  )
}

export default App
 