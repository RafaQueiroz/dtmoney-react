import styled from "styled-components";

export const Container = styled.div`
    max-width: var(--content-width);
    margin: 0 auto;

    table {
        width: 100%;
        margin-top: 5rem;
        border-spacing: 0 1rem;

        th {
            color: var(--text-title);
            text-align: left;
            font-weight: 400;
            padding-left: 1rem;
        }

        tr {
            line-height: 3rem;
        }
        
        td {
            background: var(--shape);
            border-radius: 0.25rem;
            padding-left: 1rem;
            color: var(--text-body);

            &:first-child{
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }
        }   
    }
`