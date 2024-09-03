const countVotes = (votos) => {
    let resultados = {};
    votos.forEach((voto) => {
        resultados[voto.candidate] = (resultados[voto.candidate] || 0) + 1;
    })

    return resultados;
}

const showResults = (resultados) => {
    alert("Resultados de votacion: ");
    for (let candidato in resultados){
        alert(`${candidato}: ${resultados[candidato]} votos`);
    }
};

const main = () => {
    let votes = [
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' }
    ];
    
    showResults(countVotes(votes));
}




main();
