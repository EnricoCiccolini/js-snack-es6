/*Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/


const team = [
    {
        names: 'roma',
        punti: 0,
        'falliSubiti': 0
    },
    {
        names: 'lazio',
        punti: 0,
        'falliSubiti': 0
    },
    {
        names: 'juve',
        punti: 0,
        'falliSubiti': 0
    },
    {
        names: 'milan',
        punti: 0,
        'falliSubiti': 0
    },
    {
        names: 'torino',
        punti: 0,
        'falliSubiti': 0
    },
    {
        names: 'napoli',
        punti: 0,
        'falliSubiti': 0
    },
]

console.log(team)



for (let i = 0; i< team.length; i++) {

    team[i].punti = randomNumber()
    team[i]['falliSubiti'] = randomNumber()

}
console.log(team)

/* for(let key in team){
    console.log(team[key]['names'])
    console.log(team[key]['punti'])
    console.log(team[key]['falliSubiti'])
    

}
*/

const removePoints = []
let removePointsinner = ''


for (let i = 0; i< team.length; i++) {

    removePoints.push({
        nome: team[i].names,
        falliSubiti: team[i]['falliSubiti']
    })
  removePointsinner += `<li> Nome ${team[i].names}        Falli Subiti ${team[i]['falliSubiti']} </li> `

}

console.log(removePoints)















function randomNumber() {
    return Math.floor(Math.random() * 70) + 1
}




const resultElement = document.getElementById('result')
console.log(resultElement)

resultElement.innerHTML = removePointsinner