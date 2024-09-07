
import styled from "styled-components"

export const ContainerMainText = styled.main`
    width: 230px;
    height: 110px;
    flex-direction: column;
    margin-left: 10px;
    gap: 10px;
    display: inline-flex;
    position: absolute;
    top: 30dvh;
    z-index: 10;

    @media screen and (min-width: 760px) and (max-width: 1024px){
        width: 460px;
        height: 160px;
    }

    @media only screen and (min-width: 1024px){
        width: 600px;
        height: 320px;
    }
`

export const ContentMainText = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5px;
    display: flex;
`

export const PrimaryDiv = styled.div`
    color: white;
    font-size: 16px;
    font-family: Poppins;
    font-weight: 400;
    word-wrap: break-word;

    @media screen and (min-width: 760px) and (max-width: 3024px){
        font-size: 32px;
    }

`

export const NameDiv = styled.div`
    color: #02FF04;
    font-size: 20px;
    font-family: Poppins;
    font-weight: 400;
    word-wrap: break-word;

    @media screen and (min-width: 760px) and (max-width: 3024px){
        font-size: 38px;
    }

`

export const LineDiv = styled.div`
    width: 150px;
    height: 0px;
    border: 1px white solid;

    @media screen and (min-width: 760px) and (max-width: 1024px){
        border: 2px white solid;
    }

    @media only screen and (min-width: 1024px){
        width: 300px;
    }
`

export const ProfessionalDiv = styled.div`
    color: white;
    font-size: 14px;
    font-family: Poppins; 
    font-weight: 400;
    word-wrap: break-word;

    @media screen and (min-width: 760px) and (max-width: 3024px){
        font-size: 24px;
    }
`
export const ButtonMain = styled.button`
    width: 100px;
    height: 40px;
    background: #02FF04;
    border-radius: 24px;
    border: none;
    text-align: center;
    color: white;
    font-size: 12px;
    font-family: Poppins;
    font-weight: 700;
    word-wrap: break-word;
    margin: 10px;
    position: absolute;
    top: 60dvh;
    cursor: pointer;
    z-index: 1000;

    &:hover{
        background-color: #04E706;
    }

    @media screen and (min-width: 760px) and (max-width: 3024px){
        width: 120px;
        height: 50px;
        font-size: 18px;
        top: 60dvh;
    }

`
