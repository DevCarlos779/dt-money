import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceText, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de Software</td>
                            <td><PriceText variant="income">R$ 1200,00</PriceText></td>
                            <td>Venda</td>
                            <td>12/10/2025</td>
                        </tr>

                        <tr>
                            <td width="50%">Hamburguer</td>
                            <td><PriceText variant="outcome">- R$ 50,00</PriceText></td>
                            <td>Alimentação</td>
                            <td>13/10/2025</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}