import {makeObservable, observable, action} from 'mobx'
import {UsersTransport} from "../Services/UsersTransport";
import {IUser} from "./Models/IUser";
import {MessageStore} from "./MessageStore";
import {UserConverter} from "./Converters/UserConverter";

export class MyInfoStore {
    private static _instance: MyInfoStore;
    private readonly __messageStore: MessageStore;

    currentUser: IUser = {
        id: '',
        name: '',
        image: ''
    };

    constructor(messageStore: MessageStore) {
        this.__messageStore = messageStore;

        makeObservable(this, {
            currentUser: observable,
            getCurrentUserInfo: action,
            setCurrenUser: action
        });
    }

    static get instance() {
        if (!this._instance)
            this._instance = new MyInfoStore(MessageStore.instance);
        return this._instance;
    }

    getCurrentUserInfo() {
        UsersTransport.getCurrentUser()
            .then(userInfo => this.setCurrenUser(UserConverter.ToUser(userInfo)))
            .catch(() => this.__messageStore.addErrorMessage('Не удалось загрузить информацию о пользователе'));
    }

    setCurrenUser(user: IUser) {
        this.currentUser = user;
    }
}