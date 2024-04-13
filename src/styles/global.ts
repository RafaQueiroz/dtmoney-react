import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root{
        --content-width: 1120px;
        --background: #f0f2f5;
        --red: #E52E4D;
        --blue: #5429cc;
        --green: #33cc95;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #ffffff;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1080px){
            font-size: 93.75%;
        }

        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        font-weight: 400;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
    }
    
    h1, h2, h3, h4, h5, strong {
        font-weight: 600;
    }

    button{
        cursor: pointer;
    };

    [disabled]{
        opacity: 0.6;
        cursor: not-alowed;
    }

    .react-modal-overlay{
        position: fixed;
        background: rgb(0,0,0,0.5);
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 546px;
        position: relative;
        background: var(--background);
        padding: 3rem;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent; 
        transition: 0.2s;

        &:hover {
            filter: brightness(0.8);
        }

    }
`