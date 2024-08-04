function letterFinder(word, match){
    for (var i = 0; i <= word.length; i++) {
        if(word[i]==match){
            console.log('Encontrado el', match, 'en', i);
        } else {
            console.log(' ---No se ha encontrado ninguna coincidencia en', i);
        }
    }
}

letterFinder("test","t");