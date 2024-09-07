import { GlobalStyles } from './GlobalStyles/styles'

import { Header } from './Components/Header/Header';
import { MainAssets } from './Components/MainAssets/MainAssets';
import { Main } from './Components/Main/Main';
import { About } from './Components/About/About';
import { Curriculum } from './Components/Curriculum/Curriculum';


function App() {
  return (
    <>
    <GlobalStyles></GlobalStyles>
    <Header></Header>
    <Main></Main>
    <MainAssets></MainAssets>
    <About></About>
    <Curriculum></Curriculum>
    </>
  );
}

export default App;



