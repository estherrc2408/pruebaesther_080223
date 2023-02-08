function pal01(){
    var pa1 = prompt("introduce una palabra");
    alert("La segunda letra de la palabra introducida es "+pa1[1]);
}
pal01();

function pal02(){
    var pa2 = prompt("introduce una segunda palabra");
    /*var size = ;*/
    alert("el tamano de la letra de la segunda palabra es: "+size+" px");
}
pal02()

function pal03(){
    var pa3 = prompt("introduce una tercera palabra");
    var cont = 0;
    for(var i=0; i<=pa3.length(); i+=2){
        switch(pa3[cont]){//la idea seria meter cada vocal en posicion impar dentro de un array y mostrarlas todas juntas al final, pero en vez de eso van a salir en forma de alert cada vez que el programa localice una
            case 'a':
                alert("Vocal a en posicion  "+(cont+1));
            case 'e':
                alert("Vocal e en posicion  "+(cont+1));
            case 'i':
                alert("Vocal i en posicion  "+(cont+1));
            case 'o':
                alert("Vocal o en posicion "+(cont+1));
            case 'u':
                alert("Vocal u en posicion  "+(cont+1));
            default:
                console.log("no era una vocal");
        }
        cont+=2;
    }
}

