import Endereco from "./Endereco.mjs"

export default class Pessoa {

    #nome;
    #email;
    #endereco;
    #telefone;
 
    setNome(nome) {
      if (nome) {
        this.#nome = nome;
        return true;
      } else {
        return false;
      }
    }
 
    getNome() {
      return this.#nome;
    }
 
    setEmail(email) {
      if (email) {
        this.#email = email;
        return true;
      } else {
        return false;
      }
    }

    getEmail() {
      return this.#email;
    }

    setEndereco(cep){
      this.#endereco.setCep(cep);
    }
    
    getEndereco(){
      return this.#endereco;
    }
}
 