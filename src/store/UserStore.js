import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = true
        this._user = []
        this.Myuser = null
        this._train = "dsd"
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = [...user]
    }

    setMyUser(login) {
        this._user.map(el => {
            if (el.email == login) {
                debugger;
                this.Myuser = el
                this._isAuth = true
            }
        })
    }

    get isAuth() {
        return this._isAuth
    }
    get getTrain() {
        return this._train
    }
    get getUser() {
        return this._user
    }
}
