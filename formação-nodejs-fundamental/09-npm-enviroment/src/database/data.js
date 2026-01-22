async function conectToDataBase(user, password) {
    if (user === 'pass' && password === 'pass') {
         console.log("conexão com o db estabelecida");         
    }else{
        console.log("falha na conexão com o db");
    }
    
}

export {conectToDataBase};