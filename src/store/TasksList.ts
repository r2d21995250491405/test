import { makeAutoObservable } from "mobx";
import { getTasks } from "../api";
import UserTask from "./UserTask";


export enum filterState {
    DONE, UNDONE, ALL
}


export default class TasksList {

    tasksList: UserTask[];

    constructor() {
        this.tasksList = [];
        makeAutoObservable(this);
    }

   
    setTasks(tasks: UserTask[]) {
        this.tasksList = tasks;
    }


    async loadTasks(filter: filterState) {
        const response = await getTasks(filter);

        this.setTasks(response.map(task => new UserTask(task.id, task.title, task.done)))

    }

}

export const List = new TasksList();