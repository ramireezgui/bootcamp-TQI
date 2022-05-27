const pessoa1 = {
    nome: 'Antonia',
    idade: 54
}

const pessoa2 = {
    nome: 'Victor',
    idade: 66
}

const animal = {
    nome: 'Max',
    idade: 3,
    raca: 'Fox'
};

console.log(calculaIdade.apply(animal, [5]));

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade+ anos} anos de idade`;
}