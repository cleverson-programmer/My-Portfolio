import styled from "styled-components";

export const Container = styled.aside`
    position: fixed;
    top: 0;
    right: ${(props) => props.showMenu ? '0' : '-100%'};

    width: 100%;
    background-color: #111A1B;
    height: 100dvh;
    padding: 0.5rem;
    box-shadow: -5px 0 15px rgba(0. 0. 0. 0.25);
    transition: 1s;
    border-radius: 5px;
    z-index: 10000;
`

export const ContainerCloseDropdown = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Title = styled.h2`
    color: #02FF04;
    font-size: 20px;
    font-family: Poppins;
    font-weight: 700;
    word-wrap: break-word;
    margin-top: 10px;
`

export const ButtonClose = styled.div`
    color: white;
    font-size: 32px;
    margin-top: 10px;
`

export const Line = styled.div`
    display: flex;
    margin: 0 auto;
    width: 90%;
    height: 0px;
    border: 1px white solid;
`

export const ContainerSections= styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const Sections = styled.section`
    display: flex;
    width: 100%;
    height: 24px;
    margin-top: 80px;
    flex-direction:column;
    justify-content:flex-start;
    align-items: flex-start;
    display: inline-flex;
`

export const ContentSections = styled.div`
    width: 150px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    color: white;
    font-size: 24px; 
    font-family: Poppins;
    font-weight: 500;
    word-wrap: break-word;
    cursor: pointer;

    &:hover{
        color: #02FF04;
        transition: 0.5s ease-in-out;
    }
`

export const LineSections = styled.div`
    width: 150px;
    margin: 0 auto;
    height: 0px;
    border: 1px #02FF04 solid;
`

