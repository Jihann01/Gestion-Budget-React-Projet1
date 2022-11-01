const incomeColors = ['	#191970', '	#0000FF', '	#4169E1', '	#6495ED', '	#4682B4', '	#1E90FF', '#00BFFF', '#87CEFA', '	#B0E0E6'];
const expenseColors = ['	#FFFF00', '#F0E68C', '#FFA07A', '#FA8072', '#E9967A', '#F08080', '	#CD5C5C', '	#DC143C', '	#FF0000', '	#B22222', '#8B0000'];

export const incomeCategories = [
  { type: 'Affaires', amount: 0, color: incomeColors[0] },
  { type: 'Investissements', amount: 0, color: incomeColors[1] },
  { type: 'Revenu supplémentaire', amount: 0, color: incomeColors[2] },
  { type: 'Dépôts', amount: 0, color: incomeColors[3] },
  { type: 'Loterie', amount: 0, color: incomeColors[4] },
  { type: 'Cadeaux', amount: 0, color: incomeColors[5] },
  { type: 'Salaire', amount: 0, color: incomeColors[6] },
  { type: 'économies', amount: 0, color: incomeColors[7] },
  { type: 'Revenus locatifs', amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
  { type: 'Factures', amount: 0, color: expenseColors[0] },
  { type: 'Voiture', amount: 0, color: expenseColors[1] },
  { type: 'vetements', amount: 0, color: expenseColors[2] },
  { type: 'Voyage', amount: 0, color: expenseColors[3] },
  { type: 'Aliments', amount: 0, color: expenseColors[4] },
  { type: 'Shopping', amount: 0, color: expenseColors[5] },
  { type: 'Maison', amount: 0, color: expenseColors[6] },
  { type: 'Divertissement', amount: 0, color: expenseColors[7] },
  { type: 'Telephone', amount: 0, color: expenseColors[8] },
  { type: 'Animaux domestiques', amount: 0, color: expenseColors[9] },
  { type: 'Autre', amount: 0, color: expenseColors[10] },
];
export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};