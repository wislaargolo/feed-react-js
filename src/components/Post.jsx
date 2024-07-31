import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header className={styles.headerPost}>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/wislaargolo.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Wisla Argolo</strong>
                        <span>Estudante</span>
                    </div>
                </div>

                <time 
                    title='30 de Julho às 08:13h'
                    dateTime="2024-07-30 08:13:30">
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p> 
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>
        </article>
    )
}