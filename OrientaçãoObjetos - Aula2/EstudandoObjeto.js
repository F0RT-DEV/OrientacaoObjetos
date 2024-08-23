/*
Exercicio Pratico
class Pessoa{
    #nome;
    #idade;
    constructor(nome, idade){
        this.#nome = nome;
        this.#idade = idade;
    }
    ObterNome(){
        return this.#nome;
    }
    ObterIdade(){
        return this.#idade;
    }
    ObterDescricacao(){
        console.log("Nome: "+this.#nome,"\nIdade: "+this.#idade)
    }
}

class Funcionario extends Pessoa{
    #departamento;
    constructor(nome, idade, departamento){
        super(nome, idade)
        this.#departamento = departamento;
    }
    ObterDepartamento(){
        return this.#departamento;
    }
    ObterDescricacao(){
        console.log("Nome: "+this.ObterNome(),"\nIdade: "+this.ObterIdade()+"\nDepartamento: "+this.#departamento)
    }
}

class Cliente extends Pessoa{
    #dataCadastro;
    constructor(nome, idade, dataCadastro){
        super(nome, idade)
        this.#dataCadastro = dataCadastro;
    }
    obterDataCadastro(){
        return this.#dataCadastro;
    }
    ObterDescricacao(){
        console.log("Nome: "+this.ObterNome(),"\nIdade: "+this.ObterIdade()+"\nData de Cadastro: "+this.#dataCadastro)
    }
}
let pessoa1 = new Pessoa("Fortnity",2)
//pessoa1.ObterDescricacao();
let funcionario = new Funcionario("DougraS",25,"Perito Cybernetico")
//funcionario.ObterDescricacao();
let cliente = new Cliente("Fort",45,"2024-04-23")
//cliente.ObterDescricacao();
let pessoas =[pessoa1, funcionario,cliente]
pessoas.forEach(pessoa => {
    pessoa.ObterDescricacao();
    console.log("--------------------------------")
})


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
        console.log("e Meu salario é: "+this.salario)
    }
}

let funcionario = new Funcionario("Maria",30,100000)
pessoa1.getPessoa()
console.log(funcionario)
funcionario.getFuncionario()

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