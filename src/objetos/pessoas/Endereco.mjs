export default class Endereco {
    #cep = "";
    #logradouro = "";
    #bairro = "";
    #cidade = "";
    #uf = "";
    #regiao = "";
    #estado = "";
    #ddd = "";

    // Busca os dados no ViaCEP e preenche o objeto (antigo setCep assíncrono).
    async buscarCep(cep) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Erro ao buscar CEP: ${resposta.status}`);
        }

        const dados = await resposta.json();

        if (dados.erro) {
            throw new Error("CEP não encontrado na base do ViaCEP.");
        }

        this.setCep(dados.cep);
        this.setLogradouro(dados.logradouro);
        this.setBairro(dados.bairro);
        this.setCidade(dados.localidade);
        this.setUf(dados.uf);
        this.setEstado(dados.estado);
        this.setRegiao(dados.regiao);
        this.setDdd(dados.ddd);
    }

    mostrarEnderecoCompleto() {
        const linhas = [];

        if (this.#cep) linhas.push(`CEP: ${this.#cep}`);
        if (this.#logradouro) linhas.push(`Logradouro: ${this.#logradouro}`);
        if (this.#bairro) linhas.push(`Bairro: ${this.#bairro}`);
        if (this.#cidade) linhas.push(`Cidade: ${this.#cidade}`);
        if (this.#uf) linhas.push(`UF: ${this.#uf}`);
        if (this.#estado) linhas.push(`Estado: ${this.#estado}`);
        if (this.#regiao) linhas.push(`Região: ${this.#regiao}`);
        if (this.#ddd) linhas.push(`DDD: ${this.#ddd}`);

        return linhas.join("\n");
    }

    setCep(cep) {
        if (cep) { this.#cep = cep; return true; }
        return false;
    }
    getCep() { return this.#cep; }

    setLogradouro(v) {
        if (v) { this.#logradouro = v; return true; }
        return false;
    }
    getLogradouro() { return this.#logradouro; }

    setBairro(v) {
        if (v) { this.#bairro = v; return true; }
        return false;
    }
    getBairro() { return this.#bairro; }

    setCidade(v) {
        if (v) { this.#cidade = v; return true; }
        return false;
    }
    getCidade() { return this.#cidade; }

    setUf(v) {
        if (v) { this.#uf = v; return true; }
        return false;
    }
    getUf() { return this.#uf; }

    setRegiao(v) {
        if (v) { this.#regiao = v; return true; }
        return false;
    }
    getRegiao() { return this.#regiao; }

    setEstado(v) {
        if (v) { this.#estado = v; return true; }
        return false;
    }
    getEstado() { return this.#estado; }

    setDdd(v) {
        if (v) { this.#ddd = v; return true; }
        return false;
    }
    getDdd() { return this.#ddd; }
}