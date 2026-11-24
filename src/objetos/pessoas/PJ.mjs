import Pessoa from "./Pessoa.mjs"

export default class PJ extends Pessoa{

    #cnpj;
    #razaoSocial;

    setCNPJ(cnpj){
        if(cnpj != null && cnpj.length == 14){
            this.#cnpj = cnpj;
            return true;
        }
        return false;
    }

    getCNPJ(){
        return this.#cnpj;
    }

    setRazaoSocial(razao){
        if(razao){
            this.#razaoSocial = razao;
            return true;
        }
        return false;
    }

    getRazaoSocial(){
        return this.#razaoSocial;
    }
}