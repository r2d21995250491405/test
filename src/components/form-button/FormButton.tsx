import React from "react"
import styles from './FormButton.module.scss'

interface IProps {
    text: string,
    onClick: (e:React.FormEvent<HTMLButtonElement>) => void
}


export const FormButton: React.FC<IProps> = ({ text, onClick }) =>
    <button className={styles.button} onClick={onClick}>{text}</button>


