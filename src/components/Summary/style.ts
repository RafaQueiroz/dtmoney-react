import styled from "styled-components";

export const Container = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-top: -5rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        &.background-highlight {
            background: var(--green);
            color: #fff;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
        }
    }
`