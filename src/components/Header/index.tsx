import { Container, Content } from "./style";
import logoImg from "../../assets/logo.svg"


export function Header(){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="logo" />
                <button>Nova transação</button>
            </Content>
        </Container>
    )
}