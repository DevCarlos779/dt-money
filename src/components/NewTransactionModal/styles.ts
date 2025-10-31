import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    padding: 2.5rem 3rem;
    border-radius: 6px;
    background-color: ${props => props.theme["gray-800"]};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            border: 0;
            border-radius: 6px;
            padding: 1rem;
            background-color: ${props => props.theme["gray-900"]};
            color: ${props => props.theme["gray-300"]};
            &::placeholder {
            color: ${props => props.theme["gray-500"]};
            }

        }

        button[type="submit"] {
            height: 58px;
            padding: 0 1.25rem;
            margin-top: 1.5rem;
            font-weight: bold;
            border: 0;
            border-radius: 6px;
            background-color: ${props => props.theme["green-500"]};
            color: ${props => props.theme["white"]};
            cursor: pointer;
            transition: background-color 0.2s;

            &:hover {
                background-color: ${props => props.theme["green-700"]};
            }
        }

        
    }

    
`;

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    background-color: transparent;
    border: 0;
    color: ${props => props.theme["gray-500"]};
    cursor: pointer;
    line-height: 0;
`;

export const TransactionTypeContainer = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
    variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
     background-color: ${props => props.theme["gray-700"]};
     border: 0;
     border-radius: 6px;
     padding: 1rem;
     display: flex;
     justify-content: center;
     align-items: center;
     gap: 0.5rem;
     cursor: pointer;
     color: ${props => props.theme["gray-300"]};

     svg {
        color: ${props => props.variant == "income" ? props.theme["green-300"] : props.theme["red-500"]}   
     }

     &[data-state="unchecked"]:hover {
        transition: background-color 0.2s;
        background-color: ${props => props.theme["gray-600"]};
     }

     &[data-state="checked"] {
        color: ${props => props.theme["white"]};
        background-color: ${props => props.variant == "income" ? props.theme["green-500"] : props.theme["red-500"]};

        svg {
            color: ${props => props.theme["white"]};
        }

     }

`;