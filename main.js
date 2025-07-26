


const bici = [
  { nome: 'Bartali', peso: 3 },
  { nome: 'Coppi', peso: 2 },
  { nome: 'Nibali', peso: 1 },
  { nome: 'Pantani', peso: 0 }
];

 //somma iniziale
let pesoTotale = 0;

// 2. Ciclo sull’array
for (let i = 0; i < bici.length; i++) {
  pesoTotale += bici[i].peso; // aggiungo il peso della bici attuale
}

// 3. Stampo il risultato
console.log(`Il peso totale di tutte le bici è ${pesoTotale} kg`);
