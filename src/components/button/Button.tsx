import React from 'react'
import styles from './Button.module.scss'
interface IProps {
    color: string,
    text: string,
    onClick: (e:React.FormEvent<HTMLButtonElement>) => void
}


export const Button: React.FC<IProps> = ({ color, text, onClick }) =>
    <button className={styles.button} style={{
        borderColor: color,
        boxShadow: `2px 3px 8px ${color}`, color
    }}
        onClick={onClick}>
        {text}
    </button>

