// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// Array del team 
const teamArray = [
    {
       name: 'Wayne Barnett',
       role: 'Founder & CEO',
       photo: 'wayne-barnett-founder-ceo'
    },
    {
        firtname: 'Angela Carrol',
        role: 'Chief Editor',
       photo: 'angela-caroll-chief-editor'
    },
    {
        firtname: 'Walter Gordon',
        role: 'Office Manager',
       photo: 'walter-gordon-office-manager'
    },
    {
        firtname: 'Angela Lopez',
        role: 'Social Media Manager',
       photo: 'angela-lopez-social-media-manager'
    },
    {
        firtname: 'Scott Estrada',
        role: 'Developer',
       photo: 'scott-estrada-developer'
    },
    {
        firtname: 'Barbara Ramos',
        role: 'Graphic Designer',
       photo: 'barbara-ramos-graphic-designer'
    },
];

// MILESTONE 1 
for(let i = 0; i < teamArray.length; i++){
    const thisTeam = teamArray[i];
    console.log(thisTeam);
}