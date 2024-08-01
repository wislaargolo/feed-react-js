import { useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Wisla Argolo" 
            content="Oii, gente!"
          />
          <Post author="André Luiz" 
            content="Oii, pessoal! Trabalho na globo"
          />
        </main>

      </div>
    </div>
  );
}

export default App
