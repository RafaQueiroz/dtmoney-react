import { useEffect } from "react";
import { Container } from "./style";
import { api } from "../../services/api";

export function TransactionsTable(){

    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data));
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="income">R$12000.00</td>
                        <td>Desenvolvimento</td>
                        <td>01/02/2024</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="outcome">- R$1200.00</td>
                        <td>Casa</td>
                        <td>05/02/2024</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}