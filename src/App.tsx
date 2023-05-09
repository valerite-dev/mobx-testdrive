import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import LocalViewStore from './stores/LocalStore';

function Modal() {
  return <div>The Modal</div>;
}

const Page = observer(() => {
  const [modalStore] = useState(() => new LocalViewStore('ModalViewStore'));

  useEffect(
    // stop writing to the store when component unmounted
    () => () => modalStore.stopStore(),
    [modalStore],
  );

  return (
    <main>
      <h1>Page title</h1>
      <button onClick={modalStore.toggleModal} type="button">Toggle Modal</button>
      {modalStore.modal.visibility ? <Modal /> : null}
    </main>
  );
});

function App() {
  return <Page />;
}

export default App;
