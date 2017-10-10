# Validaci-n-de-Tarjeta

<p>A traves de  la pagina web del banco XXXXXXXX, se ingresa el numero de tarjeta de credito y confirma si es VALIDA;
caso contrario sera INVALIDA</p>.

# Pasos a seguir en el JS

# 1:Preguntar por el numero de la tarjeta al usuario.
Descripcion: mediante un prompt(),el usuario ingresara el numero de su tarjeta.

# 2:Pasar los numeros a un array en orden inverso.
Descripcion: una vez ingresado los datos,pasarlos a un array en orden inverso, empleando el metodo reverse.

# 3:Aplicar la operacion a los numeros de las posiciones pares.
Descripcion: A todos los numeros que ocupan las posiciones pares se les debe multiplicar por dos y si el doble de ese
numero es mayor o igual a 10 debemos de sumar los digitos del resultado.

# 4:Comprobar si es una tarjeta valida 
Descripcion: Ahora debera sumar los numeros de las posiciones impares y el nuevo numero que se obtendra de las posiciones
pares. Cuando ya se tenga el resultado deberas obtener el residuo de la division entre 10 y si es igual a 0 significa que
es una tarjeta de credito valida.
