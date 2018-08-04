class NegociacaoController {
    constructor() {
        /* Creating a MICROFRAMEWORK, using the dolar symbol. jQuery like
        to select the INPUTS BY THEIR ID.
        Obs: .bind() must be used to connect this property to the document. */
        let $ = document.querySelector.bind(document);
        /* Once it used these classes it stores their properties 
        It's similar to a cache memory */
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        /* Creating a new ListaNegociacoes' ARRAY from ListaNegociacoes.js */
        this._listaNegociacoes = new ListaNegociacoes();
    
        /* Sending to NegociacoesView.js an element, in this case a div called
        negociacoesViews */
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
       
        /* Calling _update from NegociacoesView.js */
        this._negociacoesView._update(this._listaNegociacoes);
    }

    /* Receiving processed data on this METHOD through the fields */
    _criaNegociacao() {
        /* Creating a new negociacao */
        return new Negociacao(
            DataHelper.textoParaData(this._inputData.value),
            /* Sendind data as YYYY-MM-DD to DataHelper.js 
            and returning a converted date time */
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
    
    adiciona(event) { //onsubmit form triggers this METHOD(function).
        event.preventDefault()
        
        /* Sending THREE PARAMS to adicionaLista METHOD. */
        this._listaNegociacoes.adicionaLista(this._criaNegociacao());
        
        /* Updating _listaNegociacoes at NegociacoesView.js, there it is the MODEL */
        this._negociacoesView._update(this._listaNegociacoes);
        
        /* Calling _limpaFormulario METHOD that is below */
        this._limpaFormulario();

        console.log(this._listaNegociacoes.negociacoes);
    }

    _limpaFormulario() {
        /* Clearing inputs from form */
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}