import styles from './FormInput.module.scss'

interface IProps {
    value: string,
    type: string,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}


export const FormInput: React.FC<IProps> = ({ onChange, value, type }) =>
    <input className={styles.input} onChange={onChange} value={value} type={type} placeholder={type === 'text' ? 'Логин' : 'Пароль'} />


