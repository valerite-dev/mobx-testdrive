import {
  clearPersistedStore, stopPersisting, isPersisting, isHydrated, configurePersistable,
} from 'mobx-persist-store';

configurePersistable(
  { storage: window.localStorage },
  { delay: 200, fireImmediately: false },
);

// unitily fuctions
export default abstract class GlobalStore {
  get isHydrated() {
    return isHydrated(this);
  }

  get isPersisting() {
    return isPersisting(this);
  }

  stopStore() {
    stopPersisting(this);
  }

  async clearStoreData() {
    await clearPersistedStore(this);
  }
}
