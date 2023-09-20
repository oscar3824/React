export const validarEmail = (email) =>{
    const valida = email.length
    if(valida > 8 && valida < 25 && email.includes("@")){
        return true;

    }else{
        return false;

    }
}

export const validarContraseña = (contraseña) =>{
    const valida = contraseña.length
    if(valida > 8 && valida < 15){
        return true;

    }else{
        return false;
    }
}