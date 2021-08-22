import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imatem de um átomo e React Avançado escrito ao lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      Typescript, ReactJS, NextJs e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor de frente para a tela com código"
    />
  </S.Wrapper>
)

export default Main
