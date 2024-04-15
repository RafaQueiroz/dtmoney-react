import { useEffect, useState } from "react";
import { Container } from "./style";
import { api } from "../../services/api";
import { currencyFormat, dateFormat } from "../../helpers/converter";

interface Transaction {
    id : number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string
}

function compareDate(first: Date, second: Date){
    if (first > second)
        return 1;

    return -1;
}

export function TransactionsTable(){

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions));
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