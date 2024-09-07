
import '@testing-library/react'
import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/react';


//Renderizando um componente virtualmente para teste, se estiver usando o REDUX tem que passar a tag <Provider> pois envolve todo o conteúdo do App.jsx e também as propriedades caso a tag do provider ou outra tag dentro dela que vai ser renderizada recebe propriedades. ISSO SE NÃO FOR USAR O MOCK

//Mock: Para tornar algo fake, serve para testar apenas se as coisas estão sendo chamadas e renderizadas na tela, ignorando o fluxo completo. Muito usando esse Mock nos testes unitários para ser mais leve. O teste completo (teste de integração) é feito posteriormente com Cypress por exemplo.

//jest.mock('react-redux')

//O HTML permite criar atributos 'data-<qualquer coisa>' que pode ser selecionado no js, facilitando selecionar nos testes. com isso você passa o getBy<nome do data> e seleciona o elemento e dentro das () passa o valor que foi definido no HTML do JSX.


//Testes no React: Jest e React Libraryes Test já vem instalados por padrão no React
//No package.json é possível ver que o Jest e o React Libraryes estão instalados, além do comando para rodar os testes "yarn test"
//SEMPRE TEM QUE IMPORTAR A LIB '@testing-library/jest-dom'

//Se mesmo assim o Jest não estiver instalado tem que instalar manualmente com "npm install --save-dev jest"
//e com "npm install --save-dev @testing-library/react @testing-library/jest-dom"

// Padrão de criação de arquivos de teste: 'nomedoarquivo.test.extensão(jsx ou tsx)' o VsCode já destaca esse arquivo com um icone de teste. Esse arquivo é bom ser criado dentro da pasta do componente que vai ser testado, pois desse modo fica separado nas pastas dos componentes o componente em si, os estilos e o arquivo teste

//Técnica TDD consiste em criar os testes antes de desenvolver a feature, pois nesse caso você já vai saber o quando estiver dando erro sem executar no navegador

//Com os testes podemos pegar o componente e redenrizar no navegador fazendo uma verificação para analisar se nesse componente tem por exemplo uma tag h1, um botão ou uma div especifica

//test() é para definir que está criando o teste, essa função espera dois parametros, o primeiro uma string que é o nome do teste e o segundo uma função de callback com a lógica do teste. A palavra 'it()' também serve para definir que é um teste.

//expect() é para definir o resultado esperado dos testes para ver se deu certo. tem que colocar no final o 'toBe() ou outro parametro de acordo com o resultado esperado'

//render() é para renderizar o componente no DOM virtual para fazer as análises, esse render vem de dentro da lib '@testing-library-react'

// screen é a tela virtual que a render cria, deve ser importado tambem da lib '@testing-library-react'

// Atraves do getBy você consegue pegar diversas coisas do screen como o texto getByText, placeholder, label, title e etc. A MELHOR FORMA DE OBTER ELEMENTO É ATRAVES DO getByRole() que seleciona por roles( elementos).
//getByRole("heading", {level: 1}) : vai selecionar os elementos de cabeçalho (h1,h2 e etc) de nivel 1 ou seja  a tag 'h1'. dentro das {} podemos também passar o atributo exact que significa que o texto tem que ser exatamente aquilo que está dentro dos parenteses EX: screen.getByText("1", {exact: true}), nesse caso se o valor for -1, ou 1 com casas decimais apresenta erro

//getAllByRole() pega todos os elementos pela tag

//getByRole("button", {name: "aumentar"}) vai pegar o botão que contém o texto aumentar

//.toBeInTheDocument() usado apos o expect(variavel), para ver se a condição do getBy está dentro do documento de texto esse metodo só vai ser reconhecido se a lib "@testing-library/jest-dom" for importada

//.toHeaveTextContent() para verificar se dentro de um elemento selecionado tem um texto em específico

//userEvent serve para capturar eventos do usuário como clique por exemplo. userEvente.click()

//Describe("descrição do que os testes fazem" ()=>{}) serve para você agrupar testes com funções semelhantes, só pega-los e colocar na arrow function do describe

//findByRole() metodo usado para capturar elementos que demoram alguns segundos para aparecer na tela, ou seja, elementos que vão ser redenrizados quando algum evento for chamado. Tem que usar o await antes porque é um evento assincrono. E usar o 'async' na arrow function que indica a criação de um teste('test' ou 'it')

// await screen.findByRole("button", name: "Aumentar")

//queryByRole --> O elemento pode existir ou não, se o elemento existir retorna o elemento, senão ele retorna nulo. Serve para verificar elementos que existem ou não.
// Se o elemento não existir e você quiser verificar essa condição, pode usar o .toBeNull() no expect() da função, fazendo o teste passar e mostrando que realmente retorna nulo.

//.toBeEmptyDOMElement(), para testar se uma tag selecionada no expect está vazia

//screen.debug(variavel), para selecionar e ver o html de qualquer elemento selecionado

//userEvent.click(variavel) para automatizar um clique no botão e verificar se uma função é executada.

//Lembrar de chamar as funções que vão ser necessárias no botão por exemplo para verificar a funcionalidade, atraves de uma arrow function no jest.mock('react-redux', ()=>{
// return useDispatch: () =>{
// return jest.fn()    }    })

//jest.fn() para simular uma função vazia.

//.toHavenBeenCalled() para verificar se uma função foi chamada no teste


//Deploy de aplicação


//Usamos o ambiente do VERCEL que é um ambiente de deploy de aplicações front-end. Essa empresa que desenvolveu o NextJs. Tem um ambiente e estrutura para ser executada e testada de forma gratuita.
/*
Preparação do ambiente --> instalação de libs e tokens

Build--> Processo de pegar todos os css, html e js e transformar em um único arquivo de cada que vai ser consumido pelo usuário final. Compilação(Webpack por ex)

Testes--> Rodar alguma pipeline( construção da linha de produção para implantar a aplicação, geralmente o DevOps que faz isso nas empresas) de testes para garantir que ta funcionando.

Configuração -> Injetar váriaveis de ambiente importante para a aplicação funcionar, para evitar subir tokes e chaves secretas evitando vunerabilidades no código

Implantação-> Implantar a aplicação, colocar para rodar

Monitoramento-> Monitorar latência, taxa de erro e etc

*/