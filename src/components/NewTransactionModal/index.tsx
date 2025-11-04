import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionTypeButton, TransactionTypeContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

const CreateNewTransactionSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

type CreateNewTransactionInputs = z.infer<typeof CreateNewTransactionSchema>;


export function NewTransactionModal() {

  const updateTransactions = useContextSelector(TransactionsContext, (context) => {
    return context.updateTransactions;
  })

  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: {isSubmitting}
  } = useForm<CreateNewTransactionInputs>({
    resolver: zodResolver(CreateNewTransactionSchema)
  })

  function createNewTransaction(data: CreateNewTransactionInputs) {
    const {description, category, price, type} = data;

    updateTransactions({description, price, category, type});

    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>

        <CloseButton>
            <X size={24} />
        </CloseButton>

        <Dialog.Title>Nova Transação</Dialog.Title>

        <form onSubmit={handleSubmit(createNewTransaction)}>
            <input 
              type="text"
              placeholder="Descrição"
              {...register("description")}
              required
            />
            <input 
              type="number" 
              placeholder="Preço" 
              {...register("price", {valueAsNumber: true})}
              required
            />
            <input 
              type="text" placeholder="Categoria" 
              {...register("category")}
              required
            />

            <Controller 
              control={control}
              name="type"
              render={({field}) => {
                return (
                  <TransactionTypeContainer onValueChange={field.onChange} value={field.value}>
                    <TransactionTypeButton variant="income" value="income">
                        <ArrowCircleUp size={24} />
                        Entrada
                    </TransactionTypeButton>

                    <TransactionTypeButton variant="outcome" value="outcome">
                        <ArrowCircleDown size={24} />
                        Entrada
                    </TransactionTypeButton>
                  </TransactionTypeContainer>
                )
              }}
            />

            

            <button type="submit" disabled={isSubmitting}>Cadastrar</button>
        </form>

      </Content>
    </Dialog.Portal>
  );
}
