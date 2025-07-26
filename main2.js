// Snack 2: Array di squadre di calcio

// 1. Crea array di oggetti squadre
const squadre = [
    { nome: 'Juventus', punti: 0, falli: 0 },
    { nome: 'Milan', punti: 0, falli: 0 },
    { nome: 'Inter', punti: 0, falli: 0 },
    { nome: 'Roma', punti: 0, falli: 0 }
];

// 2. Genera numeri random per punti e falli
for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = Math.floor(Math.random() * 100);
    squadre[i].falli = Math.floor(Math.random() * 50);
}




const nomiEFalli = [];
for (let i = 0; i < squadre.length; i++) {
    nomiEFalli.push({
        nome: squadre[i].nome,
        falli: squadre[i].falli
    });
}

// 4. Stampa 
console.log('Squadre:', squadre);
console.log('Nomi e falli subiti:', nomiEFalli);
