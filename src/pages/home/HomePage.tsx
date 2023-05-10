import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import LocalViewStore from '../../stores/LocalStore';
import Modal from '../../components/modal/Modal';

const HomePage = observer(() => {
  const [modalStore] = useState(() => new LocalViewStore('ModalViewStore'));

  useEffect(
    // stop writing to the store when component unmounted
    () => () => modalStore.stopStore(),
    [modalStore],
  );

  return (
    <main>
      <button onClick={modalStore.toggleModal} type="button">Toggle Modal</button>
      {modalStore.modal.visibility ? <Modal onClose={modalStore.toggleModal} /> : null}
    </main>
  );
});

export default HomePage;
