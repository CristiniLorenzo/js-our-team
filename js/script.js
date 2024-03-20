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
        name: 'Angela Carrol',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer'
    },
];
const list = document.querySelector('#list')
// MILESTONE 1 
for(let i = 0; i < teamArray.length; i++){
    const thisTeam = teamArray[i];
    console.log(thisTeam);
// MILESTONE 2 
    const newLi =`
    <li>
        <h2>${thisTeam.name}</h2>
        <p>ROLE ${thisTeam.role}</p>
        <p><a href="#">${thisTeam.photo}</a></p>
    </li>
    `;

    list.innerHTML += newLi;
}