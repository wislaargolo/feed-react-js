import { useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/wislaargolo.png',
      name: 'Wisla Argolo',
      role: 'Estudante'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-08-01 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/wislaargolo.png',
      name: 'Maria Alves',
      role: 'Front'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-10-01 21:00:00'),
  },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  author = {post.author}
                  content = {post.content}
                  publishedAt = {post.publishedAt}
                />
            )
          }
          )}
        </main>

      </div>
    </div>
  );
}

export default App
