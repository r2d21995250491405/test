import { useState } from "react";
import { authorize } from "../../api";
import { FormButton } from "../form-button/FormButton";
import { FormInput } from "../form-input/FomInput";
import { observer } from "mobx-react-lite";
import { authorisation } from "../../store/AuthUser";
import styles from './Form.module.scss'


export const Form = observer(() => {

    const [loginInput, setLogin] = useState('');
    const [passwordInput, setPassword] = useState('');


    return (
        <>
            {!authorisation.isAuth ? <form className={styles.form}>
                <h2 className={styles.title}>Вход</h2>
                <FormInput value={loginInput} type={'text'} onChange={e => setLogin(e.currentTarget.value)} />
                <FormInput value={passwordInput} type={'password'} onChange={e => setPassword(e.currentTarget.value)} />
                <FormButton text="Enter" onClick={async (e) => {
                    e.preventDefault();
                    await authorize(loginInput, passwordInput);
                }} />
            </form> :
                <form className={styles.form}>
                    <h2 className={styles.title}>Exit</h2>
                    <FormButton text="Exit" onClick={async (e) => {
                        e.preventDefault();
                        authorisation.cancelAuth();
                    }} />
                </form>}
        </>

    )
})