import styled from "styled-components";

export const TodoInput = styled.textarea`
    padding: 1rem;
    width: 100%;
    border-radius: 8px;
    border: 1px solid lightgray;
    resize: none;
    overflow: hidden;
    scrollbar-width: none; /* for Firefox */
    font-size: large;

    &:focus {
        border: 1px solid darkblue;
        outline: none;
    }
`