
import React from 'react'
import * as S from "./style"

export const Main = () =>{
    return(
        <>
            <S.ContainerMainText>
                <S.ContentMainText>
                    <S.PrimaryDiv>Hello, my name is </S.PrimaryDiv>
                    <S.NameDiv>CLEVERSON RESENDE</S.NameDiv>
                    <S.LineDiv></S.LineDiv>
                    <S.ProfessionalDiv>Front-end Software Developer</S.ProfessionalDiv>
                </S.ContentMainText>
            </S.ContainerMainText>
            <S.ButtonMain>Show More</S.ButtonMain>
            
        </>
    );
}