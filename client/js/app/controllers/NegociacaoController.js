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
        //Creating a new ListaNegociacoes from ListaNegociacoes.js
    }

    adiciona(event){ //onsubmit that is in HTML form.
        event.preventDefault();
        
        /* Creating a new negociacao */
        let negociacao = new Negociacao(
            DataHelper.textoParaData(this._inputQuantidade.value),
            //Sendind data to DataHelper.js
            this._inputQuantidade.value,
            this._inputValor.value
        );

        this._listaNegociacoes.adicionaLista(negociacao);
        this._limpaFormulario();
    }

    _limpaFormulario(){
        /* Clearing inputs from form */
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }

}