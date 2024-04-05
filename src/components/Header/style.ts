import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--blue);
    
`

export const Content = styled.div`
    max-width: 1120px;
    padding: 2rem 1rem 10rem;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;   

    button {
        background: var(--blue-light);
        color: #fff;
        padding: 0 1rem;
        font-size: 1rem;
        height: 3rem;
        border: none;
        border-radius: 0.25rem;
        transition: 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`
