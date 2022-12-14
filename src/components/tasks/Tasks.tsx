import { Task } from './task/Task'
import styles from './Tasks.module.scss'
import { observer } from 'mobx-react-lite'
import { filterState, List } from '../../store/TasksList'
import {  useEffect } from 'react'
import { Button } from '../button/Button'



export const Tasks = observer(() => {

    useEffect(() => {
        List.loadTasks(filterState.ALL);
    }, [])

    return (
        <>
            <div className={styles.btnContainder}>

                <Button color='blue' text='all' onClick={() => {
                    List.loadTasks(filterState.ALL)
                }} />
                <Button color='blue' text='done' onClick={() => {
                    List.loadTasks(filterState.DONE)
                }} />
                <Button color='blue' text='undone' onClick={() => {
                    List.loadTasks(filterState.UNDONE)
                }} />
            </div>
            <ul className={styles.list}>
                {List.tasksList.map(task => <Task key={task.id} task={task} />)}
            </ul>
        </>

    )


})