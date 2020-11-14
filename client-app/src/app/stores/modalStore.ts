import { action, observable } from "mobx";
import { NumberPicker } from "react-widgets";
import { RootStore } from "./rootStore";



export default class ModalStore{
    rootStore: RootStore;

    constructor(rootStore:RootStore){
        this.rootStore = rootStore
    }

    @observable.shallow modal = {
        open: false,
        body: null
    }

    @action openModal = (content: any) => {
        this.modal.open = true;
        this.modal.body = content
    }

    @action closeModal = () => {
        this.modal.open = false;
        this.modal.body = null;
    }
}