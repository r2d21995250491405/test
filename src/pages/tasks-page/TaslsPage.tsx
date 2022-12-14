import { useState } from "react"
import { Button } from "../../components/button/Button"
import { Popup } from "../../components/popup/Popup"
import { Tasks } from "../../components/tasks/Tasks"
import { Title } from "../../components/title/Title"
import styles from './TasksPage.module.scss'


export const TasksPage = () => {

    const [open, setOpen] = useState(false);

    return (

        <>
            <div className={styles.title}>
                <Title />
            </div>
            
            <div className={styles.controller}>
                <div>
                    <Button color="green" text='Add' onClick={() => setOpen(true)} />
                    {open ? <Popup close={() => setOpen(false)} /> : null}
                </div>
            </div>

            <Tasks/>
        </>
    )
}