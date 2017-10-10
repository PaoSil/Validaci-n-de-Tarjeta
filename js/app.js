//Validando tarjeta de credito a traves del algoritmo luhn

var numCreditCard = prompt('Ingrese el numero de su tarjeta de credito');

function isValidCard(array){

  array = parseInt(numCreditCard);

  // newArray es el reverso de array
  var newArray = numCreditCard.reverse();
    for(var i=0; i<newArray.length;i++){
      var element = newArray[i];
      //tiene que cumplir con los siguiente para que sea validado
        if(newArray.indexOf(element)%2 === 0){
            var doubleElement = element*2;// son los valores dobles, que estan en indices pares
            return doubleElement;
        // si doubleElement presenta mas de un digito, este le devolvera un valor que sera la suma de sus digitos
        }else if(doubleElement=>10){
            var str = doubleElement.toString();//conversion de doubleElement a String para que lo pueda recorrer

              for(var j=0;j<str.length;j++){
                var suma += parseInt(str[j]);//parseInt() para que vuelva nuevamente hacer entero
                return suma;// es el nuevo valor que va ir en el newArray para que devuelva un solo numero de una cifra

                var sumNewArray += newArray[i];
              }else if(sumNewArray % 10 === 0 ){
                return 'Tarjeta Valida';
              }else{
                return 'Tarjeta Invalida';
              }
        }
    }


}
document.write(isValidCard(array));
