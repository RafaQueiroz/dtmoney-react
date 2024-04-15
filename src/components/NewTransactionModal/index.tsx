import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./style";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface NewTransactionModalProps {
    isOpen: boolean,
    onModalClose: () => void
}

export function NewTransactionModal({ isOpen, onModalClose } : NewTransactionModalProps){
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    function handleSubmitForm(e: FormEvent){
        e.preventDefault();

        const data = {
            title,
            value,
            type,
            category
        };

        api.post('transactions', data);
    }

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onModalClose}
            className="react-modal-content"
            overlayClassName="react-modal-overlay">
                <button type="button" onClick={onModalClose} className="react-modal-close">
                    <img src={closeImg} alt="Fechar modal" />
                </button>
                <Container onSubmit={handleSubmitForm}>
                    <h2>Cadastrar Transação</h2> 

                    <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Título"/>
                    <input type="number" value={value} onChange={(event) => setValue(Number(event.target.value))} placeholder="Valor"/>

                    <TransactionTypeContainer>
                        <RadioBox 
                            type="button"
                            $isActive={type === 'deposit'}
                            onClick={()=> setType('deposit')}
                            $activeColor="green">
                                <img src={incomeImg} alt="Entrada" />
                                <span>Entrada</span>
                        </RadioBox>
                        <RadioBox 
                            type="button"
                            $isActive={type === 'withdraw'}
                            onClick={()=> setType('withdraw')}
                            $activeColor="red">
                                <img src={outcomeImg} alt="Saída" />
                                <span>Saída</span>
                        </RadioBox>
                    </TransactionTypeContainer>

                    <input type="text" onChange={(event) => setCategory(event.target.value)} value={category} placeholder="Categoria"/>
                    <button type="submit">Cadastrar</button>
                </Container>
        </Modal>
    )

}   