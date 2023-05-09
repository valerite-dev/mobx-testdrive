import { action, makeObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import GlobalStore from './AppStore';

interface ILocalViewStore {
  modal: IModal;
}

interface IModal {
  visibility: boolean,
  // other modal props
}

const detaulModal: IModal = {
  visibility: false,
};

export default class LocalViewStore extends GlobalStore implements ILocalViewStore {
  modal: IModal;

  constructor(storeName: string, intialModal: IModal = detaulModal) {
    super();

    this.modal = intialModal;

    makeObservable(this, { modal: observable, toggleModal: action.bound });
    makePersistable(this, {
      name: storeName,
      properties: ['modal'],
    });
  }

  toggleModal() {
    this.modal.visibility = !this.modal.visibility;
  }
}
