jogadores = []

for(i = 0; i < 3; i++) {
    nome = prompt('Qual nome do ' + (i + 1) + ' jogador?');
    gols = []
    for(x = 0; x < 3; x++) {
        gol = prompt('Quantos gols foi na ' + (x + 1) + ' partida?');
        gol = parseInt(gol)
        gols.push(gol)
    }

    jogador = {}
    jogador.nome = nome
    jogador.gol = gols
    jogadores.push(jogador)
}

for(i = 0; i < jogadores.length; i++) {
    jogador = jogadores[i]
    document.write('O jogador ' + jogador.nome + ' teve: <br><br>');
    somadosgols = 0
    for(x = 0; x < jogador.gol.length; x++) {
        gol = jogador.gol[x]
        document.write('Gols da ' + (x + 1) + ' partida: ' + gol + '<br>');
        somadosgols = somadosgols + gol
    }
    
    document.write('<br>')
    document.write('A média de gols é: ' + (somadosgols / jogador.gol.length).toFixed(1) + '<br>');
    document.write('<hr>');
}
