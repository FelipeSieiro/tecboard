
import './App.css'
import { Banner } from './components/Banner'
import { EventForm } from './components/EventForm'
import { Header } from './components/Header'
import { Theme } from './components/Theme'


const themes = [
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
    name: 'Inteligencia Artificial',
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
      <Header />
      <Banner />
      <EventForm />

      {themes.map(function (item) {
        return (
          <section key={item.id}>
            <Theme theme={item} />
          </section>
        )
      })
      }

    </main>
  )
}

export default App
