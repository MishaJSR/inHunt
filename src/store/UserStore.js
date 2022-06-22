import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {
            Myuser: null,
            train: "dsd",
            name: "Andrey",
            surname: "Orlov",
            status: "empty status",
            about: "Nothing",
            avaImg: "https://thumbs.dreamstime.com/b/%D0%B7%D0%B0%D0%BA%D1%80%D0%BE%D0%B9%D1%82%D0%B5-%D0%B2%D0%B2%D0%B5%D1%80%D1%85-%D0%BF%D0%BE-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%D1%83-hamdsome-%D0%BE%D1%85%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%B0-%D0%BE%D1%85%D0%BE%D1%82%D0%BD%D0%B8%D0%BA-%D1%81-%D0%BE%D1%80%D1%83%D0%B6%D0%B8%D0%B5%D0%BC-138594665.jpg"
        }
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = [...user]
    }

    setNewAva(str) {
        this._user.avaImg = str
    }

    setStatus(str) {
        this.user.status = str
    }
    setAbout(str) {
        this.user.about = str
    }
    setName(str) {
        this.user.name = str
    }
    setSurname(str) {
        this.user.surname = str
    }

    // setMyUser(login) {
    //     this._user.map(el => {
    //         if (el.email == login) {
    //             debugger;
    //             this.Myuser = el
    //             this._isAuth = true
    //         }
    //     })
    // }
    getAvaImg() {
        return this._user.avaImg
    }

    get isAuth() {
        return this._isAuth
    }
    get getTrain() {
        return this._train
    }
    getUser() {
        return this._user
    }
}
