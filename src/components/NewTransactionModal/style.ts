import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.form`

    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input[type=text] {
        width: 100%;
        padding: 1rem;
        border: 1px solid #d7d7d7;
        margin-bottom: 1rem;
        background: #e7e9ee;
        display: block;
        border-radius: 0.25rem;
        font-size: 1rem;

        &::placeholder{
            color: var(--text-body);
        }
    }

    button[type=submit]{
        width: 100%;
        padding: 1rem;
        background: var(--green);
        color: #FFFFFF;
        font-weight: 600;
        font-size: 1.25rem;
        border: none;
        border-radius: 0.25rem;
        transition: 0.2s;

        &:hover {
            cursor: pointer;
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    margin: 1rem 0;

    button {
        background: transparent;
        height: 4rem;
        display: flex;
        align-items: center;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;
        justify-content: center;

        transition: 0.2s border-color;

        &:hover {
            border-color: ${darken(0.1, '#a7a7a7')}
        }
    }

    img {
        width: 1.5rem;
        margin: 0.5rem;
    }

    span {
        font-size: 1rem;
        color: var(--text-body);
    }


`;