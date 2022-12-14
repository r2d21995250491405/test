import styles from './Task.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import UserTask from '../../../store/UserTask'
import { observer } from 'mobx-react-lite'
import { filterState, List } from '../../../store/TasksList'

import { deleteTask, getTasks, updateTask } from '../../../api'


interface IProps {
    task: UserTask,

}


export const Task: React.FC<IProps> = observer(({ task }) => {

    return (
        <div className={styles.task}>
            <label>
                <input className={styles.checkbox} type='checkbox' checked={task.done} onChange={(e) => {
                    updateTask(task.id, e.currentTarget.checked)
                    task.setDone(e.currentTarget.checked);
                }} />
            </label>

            <h2 className={styles.title}>{task.title}</h2>
            <button className={styles.delete}>
                <FontAwesomeIcon onClick={async () => {
                    await deleteTask(task.id);
                    List.loadTasks(filterState.ALL)
                }} className={styles.awesome} size='2x' icon={faXmark} />
            </button>
        </div>
    )
})