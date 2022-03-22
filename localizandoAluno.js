const { Console } = require("console")

const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const medias = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, medias]

function localizaAluno(noemDoAluno){
    if(listaDeNotasEAlunos[0].includes(noemDoAluno)){
        indice = listaDeNotasEAlunos[0].indexOf(noemDoAluno)
        return `${listaDeNotasEAlunos[0] [indice]} sua média é  ${listaDeNotasEAlunos[1][indice]}`
    }else{
        return `O aluno ${noemDoAluno} não esta cadastrado`
    }

}

console.log(localizaAluno("Jonas Brothers"))
