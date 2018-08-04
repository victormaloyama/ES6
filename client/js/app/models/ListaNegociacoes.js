/* Getting data from NegociacaoController.js */
class ListaNegociacoes {

    constructor() {
        /* Creating the array, to list the negociacoes. */
        this._negociacoes = [];
    }

    adicionaLista(negociacao) {
        /* Inserting a negociacao's THREE PARAMS into an array. */
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        /* Method to get the data.
        This way we cannot overwrite the original negociacoes
        using the concat and creating a copy into an empty array.*/
        return [].concat(this._negociacoes);
    }
}