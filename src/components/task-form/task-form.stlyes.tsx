import styled from "styled-components";

export const TaskInput = styled.textarea`
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid grey;
    resize: none;
    overflow: hidden;
    scrollbar-width: none; /* for Firefox */

    &:focus {
        border: 1px solid darkblue;
        outline: none;
    }
`