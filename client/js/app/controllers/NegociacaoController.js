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
    }

    adiciona(event){
        event.preventDefault();
        /*
        Getting the date time from
        */
        let data = new Date(
            /* 
            These three dots breaks the array to be sent like params for a function
            Example: let "...array1 = [0,1,2].map()"
            It is;                  = map(1,2,3);
            */
            ...
            /* Getting the date time VALUE from the input data */
            this._inputData.value
            .split('-')             
                /*
                valorArray = ARRAY VALUE
                posicaoArray = ARRAY POSITION 

                .map runs through the array and executes a function.
                So, the first parameter is the array position and
                the second is the value that is inserted into the position selected.

                ---------------------------------------------------------------------
                .map(function(valorArray, posicaoArray){
                    return valorArray - posicaoArray % 2
                })

                BY REMOVING THE "FUNCTION" STATEMENT AND USING THE ARROW SYMBOL "=>",
                YOU CAN COMPACT YOUR CODE, WHEN IT ONLY HAVE ONE INSTRUCTION YOU'LL
                BE ABLE TO REMOVE THE "{}" FROM THE FUNCTION, FURTHERMORE YOU CAN 
                ALSO REMOVE THE "RETURN" STATEMENT, BECAUSE IT'LL ALREADY BE RETURNED
                */

                .map((valorArray, posicaoArray) => valorArray - posicaoArray % 2)

                /*
                Why? because when you create a date, the month 0
                doesn't exist, but when it is read by the Date,
                month 0 = January. So we convert the value.
                Avoiding an IF statement, we make a calculation.
                For example, Month is 1, that is January, but for
                Date, it is February, so posicaoArray 1(second in an array),
                and valorArray = 1(February). 1 - 1 % 2. Is equal ZERO
                So it will be JANUARY.
                */

            );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );
        console.log(DataHelper.dataParaTexto(negociacao.data));
        
    }

}