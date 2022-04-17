import {makeObservable, observable, action} from 'mobx'
import {UsersTransport} from "../Services/UsersTransport";
import {IUser} from "./Models/IUser";

class MyInfoStore {
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

    getCurrentUserInfo() {
        UsersTransport.getCurrentUser().then(userInfo => this.setCurrenUser({
            id: userInfo.id,
            name: userInfo.display_name,
            image: userInfo.images[0].url,
        }))
    }

    setCurrenUser(user: IUser) {
        this.currentUser = user;
    }
}

const MyInfoStoreImpl = new MyInfoStore();
export default MyInfoStoreImpl;