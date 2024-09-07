import styled from "styled-components"

export const ContainerImageMain = styled.div`
    width: 100%;
    height: 209px;
    padding: 10px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    position: absolute;
    top: 30dvh;

`

export const ImageMain = styled.img`
    align-self: center;
    min-width: 200px;
    max-width: 350px;
    height: auto;
    position: relative;

    @media screen and (min-width: 760px) and (max-width: 1024px){
        display: flex;
        min-width: 500px;
        height: auto;
    }

    @media only screen and (min-width: 1024px){
        min-width: 500px;
        height: auto;
    }
`