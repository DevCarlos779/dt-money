import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { useContext } from "react";

const SearchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof SearchFormSchema>;

export function SearchForm() {

    const {fetchTransactions} = useContext(TransactionsContext)

    const { 
        register,
        handleSubmit,
        formState: {isSubmitting}
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(SearchFormSchema)
    });
    
    async function handleSearchTransaction(data: SearchFormInputs) {

        await fetchTransactions(data.query);

        console.log(data.query);
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
            <input 
                type="text" 
                placeholder="Busque por transações" 
                {...register('query')}
            />
            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}