import { makeAutoObservable } from "mobx";


export interface ITask {
    id: number;
    title: string;
    done: boolean
}


export default class UserTask {
    constructor(public id: number, public title: string, public done: boolean) {
        makeAutoObservable(this)
    }

    setValue(value: string) {
        this.title = value;
    }

    setDone(done: boolean) {
        this.done = done;
    }
}

