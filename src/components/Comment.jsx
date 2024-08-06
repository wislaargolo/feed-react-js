import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {

    const [likeCount, setLikeCount] = useState(0);
    
    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/andrefilho99.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>André Luiz</strong>
                            <time 
                                title='30 de Julho às 08:13h'
                                dateTime="2024-07-30 08:13:30">
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>

                    <footer>
                        <button onClick={handleLikeComment}>
                            <ThumbsUp />
                            Aplaudir <span>{likeCount}</span>
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    );
}