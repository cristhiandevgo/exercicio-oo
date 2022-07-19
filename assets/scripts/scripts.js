class ContaBancaria{
    constructor(agencia, numero, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            console.log(`Saldo insuficiente! / Saldo: ${this._saldo} - Valor do Saque: ${valor}`);
            return false;
        }

        this._saldo -= valor;
    }

    depositar(valor){
        if(valor === 0){
            console.log("Insira um saldo maior que 0!");
            return false;
        }

        this._saldo += valor;
    }

    imprimeInformacao(){
        console.log(`\nTipo: ${this.tipo} / Agencia: ${this.agencia} / Número Conta: ${this.numero} / Saldo: ${this._saldo}\n`);
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, saldo);
        this.tipo = "Conta Corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }

    imprimeInformacao(){
        console.log(`\nTipo: ${this.tipo} / Agencia: ${this.agencia} / Número Conta: ${this.numero} / Número Cartão: ${this._cartaoCredito} / Saldo: ${this._saldo}`);
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = "Conta Poupança";
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = "Conta Universitária";
    }

    sacar(valor){
        if(valor > 500){
            console.log(`A conta universitária possui limite de saque de 500 / Saldo: ${this._saldo} - Valor do Saque: ${valor}`);
            return false;
        }

        this._saldo -= valor;
    }
}

let poupanca = new ContaPoupanca(101, 545721266, 7000);
poupanca.imprimeInformacao();

let corrente = new ContaCorrente(100, 5454544564, 10000, 9999999);
corrente.imprimeInformacao();
corrente.sacar(20000);
corrente.depositar(5000);
corrente.imprimeInformacao();

// Universitária
let universitaria = new ContaUniversitaria(102, 841251545, 2000);
universitaria.imprimeInformacao();
universitaria.sacar(600);