
class NegociacoesView{
    constructor(elemento){
        this._elemento = elemento;
    }

    _update(model){
        /* Inserting the template into the _elemento that in this case,
        elemento is a div*/
        this._elemento.innerHTML = this._template(model);
    }

    _template(model) {
        /* Using the template string we can create the table dynamically */
        return `
            <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.negociacoes.map(n => {//asd
                    return `
                    <tr>
                        <td>${DataHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                    `
                }).join('')
            /* Inserting the data into TRs and TDs, to create our table
            everytime you submit the form */
            
            }
            </tbody>

            <tfoot>
                <td colspan="3"></td>
                <td>
                ${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)
                /* REDUCE process the an ARRAY and gives only a single result
                Adding all volume values that came from Negociacao.js */
                }
                </td>
            </tfoot>
        </table>
        `;
    }
}