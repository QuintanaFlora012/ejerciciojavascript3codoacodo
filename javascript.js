
//declaro a las funciones: 
function evaluaMayor(mayor){
   
    var mensajeMayor= "Bienvenido al sistema"; 
    var mensajeMenor="Lo sentimos, los menores no pueden ingresar al sistema"
    if(mayor>=18){
        alert("El Usuario cuya edada es la mayor de las tres edades ingresadas, es Mayor de Edad")
        document.write(mensajeMayor);
    }
    else {
        alert("El usuario cuya edad es la mayor de las tres ingresadas, es Menor de Edad")
        document.write(mensajeMenor);
    }
    
}

function evaluaEdad(callback){
    var mayor;
    edad1=Number(prompt ("Usuario 1, por favor ingrese su edad")); 
    edad2=Number(prompt ("Usuario 2, por favor ingrese su edad")); 
    edad3=Number(prompt ("Usuario 3, por favor ingrese su edad"));

    if(edad1>edad2 && edad1>edad3){
        mayor=edad1;
    }   
     else if (edad2>edad1 && edad2>edad3){
        mayor=edad2;
    }  
     else if(edad3>edad2 && edad3>edad1){
        mayor=edad3;
    }
     else{
        alert("Las edades son iguales");
        mayor=edad1;
    }
    alert("La edad mayor de las tres ingresadas es: "+mayor);
        callback(mayor)
        return mayor;
   

}

// llamo a la funcion:
evaluaEdad(evaluaMayor)