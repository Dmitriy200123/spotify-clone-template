import {makeObservable, observable, action} from 'mobx'
import {UsersTransport} from "../Services/UsersTransport";
import {IUser} from "./Models/IUser";

export class MyInfoStore {
    private static _instance: MyInfoStore;

    currentUser: IUser = {
        id: '',
        name: '',
        image: ''
    };

    constructor() {
        makeObservable(this, {
            currentUser: observable,
            getCurrentUserInfo: action,
            setCurrenUser: action
        });
    }

    static get instance() {
        if (!this._instance)
            this._instance = new MyInfoStore();
        return this._instance;
    }

    getCurrentUserInfo() {
        UsersTransport.getCurrentUser().then(userInfo => {
            this.setCurrenUser({
                id: userInfo.id,
                name: userInfo.display_name,
                image: userInfo.images[0].url,
            });
        });
    }

    setCurrenUser(user: IUser) {
        this.currentUser = user;
    }
}