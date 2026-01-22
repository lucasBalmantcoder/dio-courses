async function conectToDataBase(user, password) {
    if (user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE) {
         console.log("conexão com o db estabelecida");         
    }else{
        console.log("falha na conexão com o db");
    }
    
}

export {conectToDataBase};