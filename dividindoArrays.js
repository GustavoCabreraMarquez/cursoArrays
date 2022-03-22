const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 
'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 
'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = nomes.slice(0, (nomes.length/2)) 
const sala2 = nomes.slice((nomes.length/2), nomes.length)

console.log(`A Sala 1 tem um total de ${sala1.length} alunos, estes sendo: ${sala1}.\n E a sala 2 tem um total de ${sala2.length} alunos, sendo eles: ${sala2}`);
