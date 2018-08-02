
/* Getting data from NegociacaoController.js */
class ListaNegociacoes {

        constructor() {
            /*
            Creating the array, to list the negociacoes.
            */
            this._negociacoes = [];
        }
        
        adicionaLista(negociacao) {
            /*
            Inserting a negociacao into an array.
            */
            this._negociacoes.push(negociacao);
        }

        get negociacoes() {
            /*
            Method to get the data.
            */
            return this._negociacoes;
        }
}