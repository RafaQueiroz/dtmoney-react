import { useContext } from "react";
import { Container } from "./style";
import { currencyFormat, dateFormat } from "../../helpers/converter";
import { TransactionContext } from "../../TransactionContext";

function compareDate(first: Date, second: Date){
    if (first > second)
        return 1;

    return -1;
}

export function TransactionsTable(){

    const transactions = useContext(TransactionContext);

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
                    {
                        transactions
                            .sort((a, b) => compareDate(new Date(a.createdAt), new Date(b.createdAt)))
                            .map(transaction => {
                                return (
                                    <tr key={transaction.id}>
                                        <td>{transaction.title}</td>
                                        <td className={transaction.type}>{currencyFormat.format(transaction.amount)}</td>
                                        <td>{transaction.category}</td>
                                        <td>{ dateFormat.format(new Date(transaction.createdAt))}</td>
                                    </tr>
                                );
                            })
                    }
                    
                </tbody>
            </table>
        </Container>
    )
}