function generatePassword(length){
    let min = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let may = "abcdefghijklmnopqrstuvwxyz";
    let simbolos = ".,-+{}[]"
    let numeros = "0123456789"
    let contraseña = '';

    for (var i=0; i<(length/2); i++) {
        let num = Math.floor(Math.random() * may.length);
        contraseña += may.substring(num,num+1);
        num = Math.floor(Math.random() * min.length);
        contraseña += min.substring(num,num+1);
        num = Math.floor(Math.random() * simbolos.length);
        contraseña += simbolos.substring(num,num+1);
        num = Math.floor(Math.random() * numeros.length);
        contraseña += numeros.substring(num,num+1);
    }

    if((length%2)!=0){
        contraseña = contraseña.substring(0, length)
    }

    console.log(contraseña);
}
   
generatePassword(5);