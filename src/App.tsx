import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global"
import { useState } from "react";

export function App() {

  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

    function handleNewTransactionOpen(){
        setIsNewTransactionOpen(true);
    }

    function handleNewTransactionClose(){
        setIsNewTransactionOpen(false);
    }

  return (
    <>
      <Header onNewTransactionModalOpen={handleNewTransactionOpen}/>
      <Dashboard />

      <Modal 
                isOpen={isNewTransactionOpen}
                onRequestClose={handleNewTransactionClose}
            >
                Nova transação 
            </Modal>
      <GlobalStyle />
    </>
  );
}
