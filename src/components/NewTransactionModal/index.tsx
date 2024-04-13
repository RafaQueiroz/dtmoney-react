import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./style";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"

interface NewTransactionModalProps {
    isOpen: boolean,
    onModalClose: () => void
}

export function NewTransactionModal({ isOpen, onModalClose } : NewTransactionModalProps){

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
                        <button type="button">
                            <img src={incomeImg} alt="Entrada" />
                            <span>Entrada</span>
                        </button>
                        <button type="button">
                            <img src={outcomeImg} alt="Saída" />
                            <span>Saída</span>
                        </button>
                    </TransactionTypeContainer>

                    <input type="text" placeholder="Categoria"/>
                    <button type="submit">Cadastrar</button>
                </Container>
        </Modal>
    )

}