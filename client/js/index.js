/* Getting the inputs as an array */
var campos = [
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor')  
];

console.log(campos);

/* Setting the table body as a global variable */
var tbody = document.querySelector('table tbody');

/* Selecting the form and triggering when submit is called */
document.querySelector('.form').addEventListener('submit', function(event) {
    
  /* Preventing auto refresh from form when the submit is pressed */
  event.preventDefault();
   
  /* Inserting a table row */
  var tr = document.createElement('tr');
   
  /* For each array item, create a td and insert the values */
  campos.forEach(function(campo) {
      var td = document.createElement('td');
      td.textContent = campo.value;

      /* Inserting a table cell into the table row */
      tr.appendChild(td);
    });

  /* Creating another table cell to show the total value(Volume) */
  var tdVolume = document.createElement('td');
  tdVolume.textContent = campos[1].value * campos[2].value; 
  
  /* Inserting the td above into a table row */
  tr.appendChild(tdVolume);

  /* Inserting the table row into the table body(TBODY) */
  tbody.appendChild(tr);
  
  /* resetting the input fields */
  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0;

  /* cursor on the first field(campos[0]) */
  campos[0].focus();
   
});