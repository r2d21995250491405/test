import { makeAutoObservable } from "mobx";

export default class AuthUser {

    token: string | null


    constructor() {
        this.token = localStorage.getItem('token')
        makeAutoObservable(this);
    }

    get isAuth() {
        return Boolean(this.token)
    }


    setAuth(token: string) {
        this.token = token
        localStorage.setItem('token', token)
       
    }

    cancelAuth() {
        localStorage.removeItem('token')
        this.token = null;
    }

}


export const authorisation = new AuthUser();