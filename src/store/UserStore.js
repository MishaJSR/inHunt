import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = true
        this._user = {
            active_id: 22,
            session: "dsdsfwscw2v24292os",
            active_page_userID: 22,
            users: [
                {
                id_user: "62c98d3952c7810524f0f5ba",
                Myuser: null,
                train: "dsd",
                name: "Andrey",
                surname: "Orlov",
                status: "empty status",
                about: "Nothing",
                email: "mixan_45@mail.ru",
                avaImg: "https://thumbs.dreamstime.com/b/%D0%B7%D0%B0%D0%BA%D1%80%D0%BE%D0%B9%D1%82%D0%B5-%D0%B2%D0%B2%D0%B5%D1%80%D1%85-%D0%BF%D0%BE-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%D1%83-hamdsome-%D0%BE%D1%85%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%B0-%D0%BE%D1%85%D0%BE%D1%82%D0%BD%D0%B8%D0%BA-%D1%81-%D0%BE%D1%80%D1%83%D0%B6%D0%B8%D0%B5%D0%BC-138594665.jpg",
                profile: {
                    lastName: "Andrey",
                    lastSurname: "Orlov",
                    lastStatus: "empty status",
                    lastAbout: "Nothing",
                    lastEmail: "mixan_45@mail.ru",
                    passwd: "123",
                    fieldIsChanged: false,
                    isGiftsOld: false,
                    gifts: [
                        {
                            id: 1,
                            senderID: 4,
                            img: "https://static.ohotniki.ru/upload/ohotniki/475/42/8a/ca/DETAIL_PICTURE_178388_71836462.jpg"
                        }, {
                            id: 2,
                            senderID: 3,
                            img: "https://static.ohotniki.ru/upload/ohotniki/475/42/8a/ca/DETAIL_PICTURE_178388_71836462.jpg"
                        }
                    ],
                    friends: [
                        {
                            id: 1,
                            name: "Oleg",
                            surname: "Yarofeev",
                            ava: "https://static.ohotniki.ru/upload/ohotniki/475/42/8a/ca/DETAIL_PICTURE_178388_71836462.jpg"
                        },
                        {
                            id: 2,
                            name: "Petr",
                            surname: "Anisimov",
                            ava: "https://ebftour.ru/images/load/Image/1(334).jpg"
                        },
                        {
                            id: 3,
                            name: "Maksin",
                            surname: "Petrov",
                            ava: "https://009.ru/assets/images/tickets/duck_2.JPG"
                        },
                        {
                            id: 4,
                            name: "Pasha",
                            surname: "Petropavlov",
                            ava: "https://trofey.ru/upload/medialibrary/5fa/wo6oj8y7luob2etqt2u95d87scs5zmck/Ohotnichja-jetika-ili-moralnyj-kodeks-ohotnika-_6_.jpg"
                        },
                        {
                            id: 5,
                            name: "Maksin",
                            surname: "Galizamov",
                            ava: "https://www.profguide.io/images/article/a/8/O5kaPDNgAr.jpg"
                        },
                        {
                            id: 6,
                            name: "Fedor",
                            surname: "Kozlov",
                            ava: "https://img2.voenpro.ru/images/den-ohotnika-16.jpg"
                        }
                    ],
                    posts: [
                        {
                            id_adder: 22,
                            id_post: 1,
                            likes: 23,
                            comments: 12,
                            text: "Hi. This is my first post!!!"
                        },
                        {
                            id_adder: 2,
                            id_post: 2,
                            likes: 15,
                            comments: 17,
                            text: "Hi, Mu dear Huntes)))"
                        },
                        {
                            id_adder: 4,
                            id_post: 3,
                            likes: 2,
                            comments: 1,
                            text: "Wow? Its work!!!"
                        }
                    ]
                }
            },
            {
                id_user: "62c4848f410419475cad4b2b",
                Myuser: null,
                train: "dsd",
                name: "Oleg",
                surname: "Yarofeev",
                status: "empty status",
                about: "Nothing",
                email: "mixan_45@mail.ru",
                avaImg: "https://static.ohotniki.ru/upload/ohotniki/475/42/8a/ca/DETAIL_PICTURE_178388_71836462.jpg",
                profile: {
                    lastName: "Oleg",
                    lastSurname: "Yarofeev",
                    lastStatus: "empty status",
                    lastAbout: "Nothing",
                    lastEmail: "mixan_45@mail.ru",
                    passwd: "123",
                    fieldIsChanged: false,
                    isGiftsOld: false,
                    gifts: [
                        {
                            id: 1,
                            senderID: 4,
                            img: "https://static.ohotniki.ru/upload/ohotniki/475/42/8a/ca/DETAIL_PICTURE_178388_71836462.jpg"
                        }, {
                            id: 2,
                            senderID: 3,
                            img: "https://static.ohotniki.ru/upload/ohotniki/475/42/8a/ca/DETAIL_PICTURE_178388_71836462.jpg"
                        }
                    ],
                    friends: [
                        {
                            id: 1,
                            name: "Oleg",
                            surname: "Yarofeev",
                            ava: "https://static.ohotniki.ru/upload/ohotniki/475/42/8a/ca/DETAIL_PICTURE_178388_71836462.jpg"
                        },
                        {
                            id: 2,
                            name: "Petr",
                            surname: "Anisimov",
                            ava: "https://ebftour.ru/images/load/Image/1(334).jpg"
                        },
                        {
                            id: 3,
                            name: "Maksin",
                            surname: "Petrov",
                            ava: "https://009.ru/assets/images/tickets/duck_2.JPG"
                        },
                        {
                            id: 4,
                            name: "Pasha",
                            surname: "Petropavlov",
                            ava: "https://trofey.ru/upload/medialibrary/5fa/wo6oj8y7luob2etqt2u95d87scs5zmck/Ohotnichja-jetika-ili-moralnyj-kodeks-ohotnika-_6_.jpg"
                        },
                        {
                            id: 5,
                            name: "Maksin",
                            surname: "Galizamov",
                            ava: "https://www.profguide.io/images/article/a/8/O5kaPDNgAr.jpg"
                        },
                        {
                            id: 6,
                            name: "Fedor",
                            surname: "Kozlov",
                            ava: "https://img2.voenpro.ru/images/den-ohotnika-16.jpg"
                        }
                    ],
                    posts: [
                        {
                            id_adder: 22,
                            id_post: 1,
                            likes: 23,
                            comments: 12,
                            text: "Hi. This is my first post!!!"
                        },
                        {
                            id_adder: 2,
                            id_post: 2,
                            likes: 15,
                            comments: 12,
                            text: "Hi, Mu dear Huntes)))"
                        }
                    ]
                }
            },
            {
                id_user: 2,
                Myuser: null,
                train: "dsd",
                name: "Petr",
                surname: "Anisimov",
                status: "empty status",
                about: "Nothing",
                email: "mixan_45@mail.ru",
                avaImg: "https://ebftour.ru/images/load/Image/1(334).jpg",
                profile: {
                    lastName: "Petr",
                    lastSurname: "Anisimov",
                    lastStatus: "empty status",
                    lastAbout: "Nothing",
                    lastEmail: "mixan_45@mail.ru",
                    passwd: "123",
                    fieldIsChanged: false,
                    isGiftsOld: false,
                    gifts: [
                        {
                            id: 1,
                            senderID: 4,
                            img: "https://static.ohotniki.ru/upload/ohotniki/475/42/8a/ca/DETAIL_PICTURE_178388_71836462.jpg"
                        }, {
                            id: 2,
                            senderID: 3,
                            img: "https://static.ohotniki.ru/upload/ohotniki/475/42/8a/ca/DETAIL_PICTURE_178388_71836462.jpg"
                        }
                    ],
                    friends: [
                        {
                            id: 1,
                            name: "Oleg",
                            surname: "Yarofeev",
                            ava: "https://static.ohotniki.ru/upload/ohotniki/475/42/8a/ca/DETAIL_PICTURE_178388_71836462.jpg"
                        },
                        {
                            id: 2,
                            name: "Petr",
                            surname: "Anisimov",
                            ava: "https://ebftour.ru/images/load/Image/1(334).jpg"
                        },
                        {
                            id: 3,
                            name: "Maksin",
                            surname: "Petrov",
                            ava: "https://009.ru/assets/images/tickets/duck_2.JPG"
                        },
                        {
                            id: 4,
                            name: "Pasha",
                            surname: "Petropavlov",
                            ava: "https://trofey.ru/upload/medialibrary/5fa/wo6oj8y7luob2etqt2u95d87scs5zmck/Ohotnichja-jetika-ili-moralnyj-kodeks-ohotnika-_6_.jpg"
                        },
                        {
                            id: 5,
                            name: "Maksin",
                            surname: "Galizamov",
                            ava: "https://www.profguide.io/images/article/a/8/O5kaPDNgAr.jpg"
                        },
                        {
                            id: 6,
                            name: "Fedor",
                            surname: "Kozlov",
                            ava: "https://img2.voenpro.ru/images/den-ohotnika-16.jpg"
                        }
                    ],
                    posts: [
                        {
                            id_adder: 22,
                            id_post: 1,
                            likes: 23,
                            comments: 12,
                            text: "Hi. This is my first post!!!"
                        },
                        {
                            id_adder: 4,
                            id_post: 2,
                            likes: 15,
                            comments: 12,
                            text: "Hi, Mu dear Huntes)))"
                        }
                    ]
                }
            },
            {
                id_user: 3,
                Myuser: null,
                train: "dsd",
                name: "Maksin",
                surname: "Petrov",
                status: "empty status",
                about: "Nothing",
                email: "mixan_45@mail.ru",
                avaImg: "https://009.ru/assets/images/tickets/duck_2.JPG",
                profile: {
                    lastName: "Maksin",
                    lastSurname: "Petrov",
                    lastStatus: "empty status",
                    lastAbout: "Nothing",
                    lastEmail: "mixan_45@mail.ru",
                    passwd: "123",
                    fieldIsChanged: false,
                    isGiftsOld: false,
                    gifts: [
                        {
                            id: 1,
                            senderID: 4,
                            img: "https://static.ohotniki.ru/upload/ohotniki/475/42/8a/ca/DETAIL_PICTURE_178388_71836462.jpg"
                        }, {
                            id: 2,
                            senderID: 3,
                            img: "https://static.ohotniki.ru/upload/ohotniki/475/42/8a/ca/DETAIL_PICTURE_178388_71836462.jpg"
                        }
                    ],
                    friends: [
                        {
                            id: 1,
                            name: "Oleg",
                            surname: "Yarofeev",
                            ava: "https://static.ohotniki.ru/upload/ohotniki/475/42/8a/ca/DETAIL_PICTURE_178388_71836462.jpg"
                        },
                        {
                            id: 2,
                            name: "Petr",
                            surname: "Anisimov",
                            ava: "https://ebftour.ru/images/load/Image/1(334).jpg"
                        },
                        {
                            id: 3,
                            name: "Maksin",
                            surname: "Petrov",
                            ava: "https://009.ru/assets/images/tickets/duck_2.JPG"
                        }
                    ],
                    posts: [
                        {
                            id_adder: 22,
                            id_post: 1,
                            likes: 23,
                            comments: 12,
                            text: "Hi. This is my first post!!!"
                        },
                        {
                            id_adder: 2,
                            id_post: 2,
                            likes: 15,
                            comments: 17,
                            text: "Hi, Mu dear Huntes)))"
                        }
                    ]
                }
            },
            {
                id_user: 4,
                Myuser: null,
                train: "dsd",
                name: "Pasha",
                surname: "Petropavlov",
                status: "empty status",
                about: "Nothing",
                email: "mixan_45@mail.ru",
                avaImg: "https://trofey.ru/upload/medialibrary/5fa/wo6oj8y7luob2etqt2u95d87scs5zmck/Ohotnichja-jetika-ili-moralnyj-kodeks-ohotnika-_6_.jpg",
                profile: {
                    lastName: "Pasha",
                    lastSurname: "Petropavlov",
                    lastStatus: "empty status",
                    lastAbout: "Nothing",
                    lastEmail: "mixan_45@mail.ru",
                    passwd: "123",
                    fieldIsChanged: false,
                    isGiftsOld: false,
                    gifts: [
                        {
                            id: 1,
                            senderID: 4,
                            img: "https://static.ohotniki.ru/upload/ohotniki/475/42/8a/ca/DETAIL_PICTURE_178388_71836462.jpg"
                        }, {
                            id: 2,
                            senderID: 3,
                            img: "https://static.ohotniki.ru/upload/ohotniki/475/42/8a/ca/DETAIL_PICTURE_178388_71836462.jpg"
                        }
                    ],
                    friends: [
                        {
                            id: 1,
                            name: "Oleg",
                            surname: "Yarofeev",
                            ava: "https://static.ohotniki.ru/upload/ohotniki/475/42/8a/ca/DETAIL_PICTURE_178388_71836462.jpg"
                        },
                        {
                            id: 3,
                            name: "Maksin",
                            surname: "Petrov",
                            ava: "https://009.ru/assets/images/tickets/duck_2.JPG"
                        }
                    ],
                    posts: [
                        {
                            id_adder: 22,
                            id_post: 1,
                            likes: 23,
                            comments: 12,
                            text: "Hi. This is my first post!!!"
                        },
                        {
                            id_adder: 2,
                            id_post: 2,
                            likes: 15,
                            comments: 17,
                            text: "Hi, Mu dear Huntes)))"
                        }
                    ]
                }
            }
            
            ]


        }
        makeAutoObservable(this)
    }

    setActiveId(num) {
        this._user.active_id = num
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
        this._user.profile.fieldIsChanged = bool
    }

    setisGiftsOld(bool) {
        this._user.profile.setisGiftsOld = bool
    }
    //last
    setLastName(str) {
        this._user.profile.lastName = str
    }
    setLastSurname(str) {
        this._user.profile.lastSurname = str
    }
    setLastStatus(str) {
        this._user.profile.lastStatus = str
    }
    setLastAbout(str) {
        this._user.profile.lastAbout = str
    }
    setLastEmail(str) {
        this._user.profile.lastEmail = str
    }

    isNameChange() {
        if (this._user.name == this._user.profile.lastName) return false; else return true
    }
    isStatusChange() {
        if (this._user.status == this._user.profile.lastStatus) return false; else return true
    }
    isSurnameChange() {
        if (this._user.surname == this._user.profile.lastSurname) return false; else return true
    }
    isEmailChange() {
        if (this._user.email == this._user.profile.lastEmail) return false; else return true
    }

    // addLike(str) {
    //     this._user.profile.lastEmail = str
    // }



    setUserInfo(name, surname, status, email) {
        this._user.profile.fieldIsChanged = false;
        this.setLastName(name);
        this.setLastSurname(surname);
        this.setLastStatus(status);
        this.setLastEmail(email);
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
    getProfile(numId = this._user.active_id) {
        for (let i = 0; i < this._user.users.length; i++){
            if (this._user.users[i].id_user === numId) {
                return this._user.users[i]
            }
        }

        // return this._user.users[0]
    }

    getProfileInfo(id){
        for (let i = 0; i < this._user.users.length; i++){
            if (this._user.users[i].id_user === id) {
                return this._user.users[i]
            }
        }
    }

    addLike(idPost){
        this._user.users.map(el => {
            if (el.id_user === this._user.active_page_userID) {
                el.profile.posts.map(e => {
                    if (e.id_post === idPost) e.likes++
                })
            }
        }) 
    }


}
