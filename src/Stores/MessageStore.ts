import {IMessage} from "./Models/IMessage";
import {action, autorun, makeObservable, observable, computed} from "mobx";
import {MessageType} from "./Models/MessageType";
import {v4 as createUuid} from 'uuid';

export class MessageStore {
    private static _instance: MessageStore;

    messagesDict: Map<string, IMessage> = new Map<string, IMessage>();

    constructor() {
        makeObservable(this, {
            messagesDict: observable,
            addErrorMessage: action,
            removeMessage: action,
            messages: computed
        });

        autorun(() => {
            while (this.messages.length > 4) {
                this.removeMessage(this.messages.shift()!.id);
            }
        });
    }

    static get instance() {
        if (!this._instance)
            this._instance = new MessageStore();
        return this._instance;
    }

    addErrorMessage(content: string) {
        const message: IMessage = {
            id: createUuid(),
            type: MessageType.Error,
            content: content
        };
        this.messagesDict.set(message.id, message);
    }

    removeMessage(id: string) {
        this.messagesDict.delete(id);
    }

    get messages() {
        return [...this.messagesDict.values()];
    }
}