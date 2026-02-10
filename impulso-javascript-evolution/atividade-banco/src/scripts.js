class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(saldo) {
        this._saldo = saldo;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return "Operação negada";
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, saldo);
        this.cartaoCredito = cartaoCredito;
        this.tipo = "corrente";
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(cartaoCredito) {
        this._cartaoCredito = cartaoCredito;
    }

    sacar(valor) {
        const taxa = 1.1;
        return (this._saldo -= valor * taxa);
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo);
        this.tipo = "poupança";
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo);
        this.tipo = "universitária";
    }
    sacar(valor) {
        if (valor > 500) {
            return "Operação negada";
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}
