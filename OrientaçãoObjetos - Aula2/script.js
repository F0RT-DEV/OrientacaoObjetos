//Exercicio pratico
class Produto {
    #nome;
    #preco;
    constructor(nome, preco,) {
        this.#nome = nome;
        this.#preco = preco;
    }
    ObterNome(){
        return this.#nome;
    }
    ObterPreco(){
        return this.#preco;
    }
    ObterDescricao(){
        console.log("Nome do produto: "+this.#nome+"\nPreço do produto: "+this.#preco)
    }
}
class Roupas extends Produto{
    #cor;
    #tamanho
    constructor(nome, preco, cor, tamanho){
        super(nome, preco);
        this.#cor = cor;
        this.#tamanho = tamanho;
    }
    obterCor(){
        return this.cor;
    }
    obterTamanho(){
        return this.tamanho;
    }
    ObterDescricao(){
        console.log("Nome do produto: "+this.ObterNome()+"\nPreço do produto: "+this.ObterPreco()+" reais"+"\nCor da camisa: "+this.#cor+"\nTamanho da peça: "+this.#tamanho)
    }
}

class Eletronico extends Produto{
    #memoria;
    #processador;
    constructor(nome, preco, memoria, processador){
        super(nome, preco);
        this.#memoria = memoria;
        this.#processador = processador;
    }
    obterMemoria(){
        return this.memoria;
    }
    obterProcessador(){
        return this.processador;
    }
    ObterDescricao(){
        console.log("Nome do produto: "+this.ObterNome()+"\nPreço do produto: "+this.ObterPreco()+"\nMemoria: "+this.#memoria+"\nProcessador do produto: "+this.#processador)
    }
}

let produto1 = new Produto("Chocolate",20)
//produto1.ObterDescricao()
let produto2 = new Roupas("Camisa Polo",150,"Preto e Laranja","G")
//produto2.ObterDescricao()
let produto3 = new Eletronico("Pc Gamer",3500,"16GB","AMD Ryzen 5")
//produto3.ObterDescricao()

let produtos = [produto1,produto2,produto3]
produtos.forEach(produto => {
    produto.ObterDescricao();
    console.log("--------------")
});
