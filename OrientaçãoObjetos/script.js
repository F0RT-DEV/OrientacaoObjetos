//Exercicio pratico
class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    getPessoa(){
        console.log("Olá meu nome é: "+this.nome+", minha idade é: "+this.idade+" anos.")
    }
}
let pessoa1 = new Pessoa("Douglas", 1500)
let pessoa2 = new Pessoa("Fort", 3500)
let coletivoPessoas = [pessoa1,pessoa2]
console.log(coletivoPessoas)


// funcionario herda da classe Pessoa
class Funcionario extends Pessoa{
    constructor(nome, idade, salario){
        super(nome, idade); //chama o construtor da classe Pessoa
        this.salario = salario;
    }
    getFuncionario(){
        this.getPessoa()
        console.log("e meu salario é: "+this.salario)
    }
}

let funcionario = new Funcionario("Maria",30,100000)
pessoa1.getPessoa()
console.log(funcionario)
funcionario.getFuncionario()


/*
exemplo1
class Casa{
    constructor(proprietario, rua, bairro, cidade, numero){
        this.proprietario = proprietario;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.numero = numero;
    }
    getCasa(){
        console.log("O proprietario e: "+this.proprietario)
    }
    venda(novoProprietario){
        this.proprietario = novoProprietario;
    }
}
const casa1 = new Casa("Douglas","Avendida Pedro Depiante", "Morada de Camburí", "Paris",626);
casa1.getCasa() 
casa1.venda("ForT");
casa1.getCasa()
*/