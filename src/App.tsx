import { TransactionContextProvider } from "./TransactionContext";
import { Dashboard } from "./components/Dashboard";

import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
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
    <TransactionContextProvider>
      <Header onNewTransactionModalOpen={handleNewTransactionOpen}/>
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionOpen} 
        onModalClose={handleNewTransactionClose}/>
      <GlobalStyle />
    </TransactionContextProvider>
  );
}
