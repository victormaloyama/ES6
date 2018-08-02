
/* Getting data from NegociacaoController.js */
class DataHelper {
      
      static dataParaTexto(data){
            return data.getDate()
            +'/'+(data.getMonth() + 1)
            //+ 1 BECAUSE OF THE MONTH SYSTEM THAT DECREASES THE NUMBER AND () FOR THE HIERARCHY
            +'/'+data.getFullYear();
            console.log(diaMesAno);
      }

      static textoParaData(texto){
            /* 
            Converting texto to a date time form
            These three dots breaks the array to be sent like params for a function
            Example: let "...array1 = [0,1,2].map()"
            It is;                  = map(1,2,3);
            */
            return new Date (...texto.split('-')             
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