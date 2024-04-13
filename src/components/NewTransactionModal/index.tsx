import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./style";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { useState } from "react";

interface NewTransactionModalProps {
    isOpen: boolean,
    onModalClose: () => void
}

export function NewTransactionModal({ isOpen, onModalClose } : NewTransactionModalProps){

    const [type, setType] = useState('deposit');

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onModalClose}
            className="react-modal-content"
            overlayClassName="react-modal-overlay">
                <button type="button" onClick={onModalClose} className="react-modal-close">
                    <img src={closeImg} alt="Fechar modal" />
                </button>
                <Container>
                    <h2>Cadastrar Transação</h2> 

                    <input type="text" placeholder="Título"/>
                    <input type="text" placeholder="Valor"/>

                    <TransactionTypeContainer>
                        <RadioBox 
                            type="button"
                            isActive={type === 'deposit'}
                            onClick={()=> setType('deposit')}
                            activeColor="green">
                                <img src={incomeImg} alt="Entrada" />
                                <span>Entrada</span>
                        </RadioBox>
                        <RadioBox 
                            type="button"
                            isActive={type === 'withdraw'}
                            onClick={()=> setType('withdraw')}
                            activeColor="red">
                                <img src={outcomeImg} alt="Saída" />
                                <span>Saída</span>
                        </RadioBox>
                    </TransactionTypeContainer>

                    <input type="text" placeholder="Categoria"/>
                    <button type="submit">Cadastrar</button>
                </Container>
        </Modal>
    )

}   