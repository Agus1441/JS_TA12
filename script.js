function generatePassword(length){
    let min = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz*+-_.,";
    let may = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz*+-_.,";
    let contraseña = '';

    for (var i=0; i<(length/2); i++) {
        let num = Math.floor(Math.random() * may.length);
        contraseña += may.substring(num,num+1);
        num = Math.floor(Math.random() * min.length);
        contraseña += min.substring(num,num+1);
    }

    if((length%2)!=0){
        contraseña = contraseña.substring(0, length)
    }

    console.log(contraseña);
}
   
generatePassword(10);