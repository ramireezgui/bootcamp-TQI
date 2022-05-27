const alunos = [
    {
        nome: 'Yago',
        nota: 7,
        turma: '1A'
    },

    {
        nome: 'Marina',
        nota: 9,
        turma: '1C'
    },

    {
        nome: 'Catalina',
        nota: 5,
        turma: '1F'
    },

    {
        nome: 'Matheus',
        nota: 3,
        turma: '1D'
    }

];


function alunosAprovados(array, media) {
    let aprovados = []

    for(let i = 0; i < array.length; i++){

        const {nota, nome} = array[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;

}

console.log(alunosAprovados(alunos, 5));
