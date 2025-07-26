//Snack 1 Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

const bici1 = {
    nome: 'Bartali',
    peso:  3
}
const bici4= {
    nome: 'Pantani',
    peso:  0
};
const bici2 = {
    nome: 'Coppi',
    peso:  2
};
const bici3= {
    nome: 'Nibali',
    peso:  1
};

const bici = [bici1,bici2,bici3,bici4];

let biciLeggera = bici[0]; 

for (let i = 1; i < bici.length; i++) {
    if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];
    }
}

console.log(`La bici più leggera è ${biciLeggera.nome} con peso ${biciLeggera.peso} kg`);

