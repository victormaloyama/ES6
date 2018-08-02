class NegociacaoController {
    constructor() {
        /*
        Creating a MICROFRAMEWORK, using the dolar symbol. jQuery like
        to select the INPUTS BY THEIR ID.
        Obs: .bind() must be used to connect this property to the document.
        */
        let $ = document.querySelector.bind(document);
        /*
        Once it used these classes it stores their properties 
        It's similar to a cache memory
        */
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event){
        event.preventDefault();
        
        /* Creating a new negociacao */
        let negociacao = new Negociacao(
            data,//data
            this._inputQuantidade.value,
            this._inputValor.value
        );

        this._listaNegociacoes.adicionaLista(negociacao);

        console.log(DataHelper.dataParaTexto(negociacao.data));
        console.log(this._listaNegociacoes.negociacoes);
    }

}