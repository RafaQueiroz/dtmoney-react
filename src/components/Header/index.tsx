import { Container, Content } from "./style";
import logoImg from "../../assets/logo.svg"

interface HeaderProps {
    onNewTransactionModalOpen: () => void
}

export function Header({onNewTransactionModalOpen}: HeaderProps){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="logo" />
                <button onClick={onNewTransactionModalOpen}>Nova transação</button>
            </Content>
        </Container>
    )
}