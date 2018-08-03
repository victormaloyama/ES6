/* Getting data from NegociacaoController.js */
class DataHelper {

      constructor() {
            throw new Error('Esta classe não pode ser instanciada');
      }

      static dataParaTexto(data) {
            /* 
            In ES6 there is a property called 'template string'
            that allows you to write a var into a string without
            having to concatenate them. Simply using `` and ${}.
            */
            return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
      }

      static textoParaData(texto) {
            /* 
            Se data DIFERENTE(!) de aaaa-mm-dd, exibir erro.
            */
            if (!/\d{4}-\d{2}-\d{2}/.test(texto)) {
                  throw new Error('O formato da data deve ser: aaaa-mm-dd!')
            }

            /* 
            Converting texto to a date time form
            These three dots breaks the array to be sent like params for a function
            Example: let "...array1 = [0,1,2].map()"
            It is;                  = map(1,2,3);
            */

            return new Date(...texto.split('-')
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
      }


}