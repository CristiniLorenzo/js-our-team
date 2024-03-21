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
       photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Carrol',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    },
];
const list = document.querySelector('#list')
// MILESTONE 1 
for(let i = 0; i < teamArray.length; i++){
    const thisTeam = teamArray[i];
    console.log(thisTeam);

    console.log(`${thisTeam.name}`,`${thisTeam.role}`,`${thisTeam.image}`)
// MILESTONE 2 
    const newLi =`
    <li>
        <h2>${thisTeam.name}</h2>
        <p>ROLE ${thisTeam.role}</p>
        <p><img src="./img/${thisTeam.photo}" alt=""></p>
    </li>
    `;

    list.innerHTML += newLi;
}