import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 800px;
    border: 1px solid red;
    background: #312E38;

    input{
        flex: 1;
        outline: none;
        padding: 10px;
        width: 500px;

        & + input{
            margin-top: 10px;
        }
    }

    button{
        margin-top: 10px;
    }
`;