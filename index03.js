let {readFile, writeFile} = require('fs');

readFile('arquivo03.txt', "utf8", (error, texto) => {
    if(error){
        throw error;
    } else {
        console.log(texto);
    }
});

writeFile('arquivo03.txt', 'Messi foi adicionado ao texto', (error) =>{
    if(error){
        throw error;
    } else{
        console.log("Adicionado com sucesso!")
    }
})