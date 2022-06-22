import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = true
        this._user = {
            Myuser: null,
            train: "dsd",
            name: "Andrey",
            surname: "Orlov",
            status: "empty status",
            about: "Nothing",
            email: "mixan_45@mail.ru",
            avaImg: "https://thumbs.dreamstime.com/b/%D0%B7%D0%B0%D0%BA%D1%80%D0%BE%D0%B9%D1%82%D0%B5-%D0%B2%D0%B2%D0%B5%D1%80%D1%85-%D0%BF%D0%BE-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%D1%83-hamdsome-%D0%BE%D1%85%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%B0-%D0%BE%D1%85%D0%BE%D1%82%D0%BD%D0%B8%D0%BA-%D1%81-%D0%BE%D1%80%D1%83%D0%B6%D0%B8%D0%B5%D0%BC-138594665.jpg"
        }
        this._profile = {
            lastName: "Andrey",
            lastSurname: "Orlov",
            lastStatus: "empty status",
            lastAbout: "Nothing",
            lastEmail: "mixan_45@mail.ru",
            fieldIsChanged: false
        }
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = [...user]
    }
    //real
    setNewAva(str) {
        this._user.avaImg = str
    }
    setName(str) {
        this._user.name = str
    }
    setStatus(str) {
        this._user.status = str
    }
    setSurname(str) {
        this._user.surname = str
    }
    setEmail(str) {
        this._user.email = str
    }
    setFieldIsChanged(bool) {
        this._profile.fieldIsChanged = bool
    }
    //last
    setLastName(str) {
        this._profile.lastName = str
    }
    setLastSurname(str) {
        this._profile.lastSurname = str
    }
    setLastStatus(str) {
        this._profile.lastStatus = str
    }
    setLastAbout(str) {
        this._profile.lastAbout = str
    }
    setLastEmail(str) {
        this._profile.lastEmail = str
    }

    isNameChange(){
        if (this._user.name == this._profile.lastName) return false; else return true
    }
    isStatusChange(){
        if (this._user.status == this._profile.lastStatus) return false; else return true
    }
    isSurnameChange(){
        if (this._user.surname == this._profile.lastSurname) return false; else return true
    }
    isEmailChange(){
        if (this._user.email == this._profile.lastEmail) return false; else return true
    }



    setUserInfo(obj) {

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
    getProfile() {
        return this._profile
    }


}
