import { Button } from '../button/Button';
import { useState } from 'react';
import { filterState, List } from '../../store/TasksList';
import { observer } from 'mobx-react-lite';
import { createTask } from '../../api';
import styles from './Popup.module.scss'


interface IProps {
    close: () => void
}


export const Popup: React.FC<IProps> = observer(({ close }) => {

    const [input, setImput] = useState('');

    return (
        <div className={styles.popupContainer}>
            <div className={styles.popupBody}>
                <h1>Enter Task</h1>
                <input className={styles.addInput}
                    type="text"
                    placeholder="enter task"
                    onChange={e => {
                        setImput(e.target.value)
                    }} />
                <Button color='red' text='Close PopUp' onClick={close} />
                <Button color='orange' text='Add Task' onClick={async (e) => {
                    e.preventDefault();
                    await createTask(input);
                    List.loadTasks(filterState.ALL);
                    close();
                }} />
            </div>
        </div>
    );
});