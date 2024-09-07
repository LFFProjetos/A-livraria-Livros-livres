
function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se o campo for um campo vazio
    if (!campoPesquisa) {
        section.innerHTML = "É necessário preencher o campo 'Pesquisar livros'"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultadoPesquisa = "";
    let titulo = "";
    let autor = "";
    let sinopse = "";
    let genero = "";
    let tags = "";


    // Itera sobre cada livro na lista de livros
    for (let dado of biblioteca) {
            titulo = dado.titulo.toLowerCase();
            autor = dado.autor.toLowerCase();
            sinopse = dado.sinopse.toLowerCase();
            genero = dado.genero.toLowerCase();
            tags = dado.tags.toLowerCase();
        //se campo incluir campoPesquisa
        if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || genero.includes(campoPesquisa) || autor.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //Então faça
            // Cria uma nova div para cada livro e adiciona as informações do livro
            resultadoPesquisa +=
                `
                <div class="item-resultado">
                    <img class="imagem" src=${dado.capa} alt="Texto alternativo">
                    <h2>
                        <a href=${dado.link} target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.sinopse}</p>
                    <p class="descricao-meta"><a href=${dado.link} target="_blank">Acesse aqui</a> a página do skoob deste livro para visualizar mais detalhes do livro</p>
                </div>
            `;

        }
        dado.titulo.includes(campoPesquisa)

    }
    if(!resultadoPesquisa){
        resultadoPesquisa =`<p>Não encontramos o termo digitado</p>`
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultadoPesquisa;
}

