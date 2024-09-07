import React from "react"

import * as S from "./style"

export const About = () => {
    return(
        <>
            <S.ContainerAbout>
                <S.BallonAbout></S.BallonAbout>
                <S.ContainerTitle>
                    <S.Title>About me</S.Title>
                    <S.LineAbout></S.LineAbout>

                    <S.ContentText>
                    Front-end Web Developer com projetos pessoais e comerciais no GitHub, estudante de Engenharia de Software na Pontifícia Universidade Católica de Minas Gerais - Coração Eucarístico. Além de cursos e certificados de Soft skills e Hard skills oferecidos pela Santander Open Academy em colaboração com MIT, University of Chicago e Harvard Business School, Ada Tech entre outros. Meus objetivos estão direcionados para contratos e serviços na área de desenvolvimento web e desenvolvimento front-end.Estou em busca de novas oportunidades visando crescimento no âmbito pessoal/profissional, estabelecendo parcerias e causando impactos positivos.Estou a disposição de conectar com sua organização e levar minhas habilidades e perspectivas para um crescimento mútuo e exponencial.
                    </S.ContentText>
                </S.ContainerTitle>
            </S.ContainerAbout>
        </>
    )
}