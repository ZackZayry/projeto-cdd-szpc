//Passo 1 - Pegar a class botões do HTML
const botCar = document.querySelectorAll(".botao");//puxar tds os bot
const imgCar = document.querySelectorAll(".imagem");
const infCar = document.querySelectorAll(".informacoes");



//passo 2 - Identificar o clique
botCar.forEach((botao, indice) => 
{
    botao.addEventListener("click", ()=>
    {
        removeBotao();

        //Passo 4 - Adicionar animação dos botões
        botao.classList.add("selecionado");//add a class

        removeImg(indice);

        //Passo 6 - Adicionar img corespondente
        imgCar[indice].classList.add("ativa");

        removeInf(indice);

        //Passo 8 - Adicionar informações do dragão
        infCar[indice].classList.add("ativa");
    });
}
)

function removeBotao()
{
    //Passo 3 - Remover animação dos botões
    const botSel = document.querySelector(".selecionado");//Buscar o btão com esta class
    botSel.classList.remove("selecionado");//remover a class

    
}

function removeImg(indice)
{
        //Passo 5 - Remover a img
        const imgSel = document.querySelector(".ativa");
        imgSel.classList.remove("ativa");    
}

function removeInf(indice)
{
    //Passo 7 - Remover informações do dragão
    const infSel = document.querySelector(".informacoes.ativa");
    infSel.classList.remove("ativa");
}