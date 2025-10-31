import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionTypeButton, TransactionTypeContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>

        <CloseButton>
            <X size={24} />
        </CloseButton>

        <Dialog.Title>Nova Transação</Dialog.Title>

        <form action="">
            <input type="text" placeholder="Descrição" />
            <input type="number" placeholder="Preço" />
            <input type="text" placeholder="Categoria" />

        <TransactionTypeContainer>
            <TransactionTypeButton variant="income" value="income">
                <ArrowCircleUp size={24} />
                Entrada
            </TransactionTypeButton>

            <TransactionTypeButton variant="outcome" value="outcome">
                <ArrowCircleDown size={24} />
                Entrada
            </TransactionTypeButton>
        </TransactionTypeContainer>

            <button type="submit">Cadastrar</button>
        </form>

      </Content>
    </Dialog.Portal>
  );
}
