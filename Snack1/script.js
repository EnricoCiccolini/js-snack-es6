//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.




const cicles = [
    {   model : 'gold',
        weight : 1000
    },
    {   model : 'silver',
        weight : 1200
    },
    {   model : 'wood',
        weight : 600
    },
    {   model : 'bronze',
        weight : 700
    },
    {   model : 'paper',
        weight : 10
    }
 ]

 console.log(cicles)
   let minusweight = cicles[0]['weight']
   minusweight = parseInt(minusweight)
   let result = cicles[0]

 for(let i = 0; i< cicles.length; i++){
    let check = (cicles[i]['weight'])
    const ciclesMinusWeight =(cicles[i])
    
    if (check < minusweight ) {
        minusweight = check
        result =  ciclesMinusWeight
       
    }

 }


console.log(` la bici che pesa di meno é ${result.model} e pesa ${result.weight}`)


const resultElement = document.getElementById('result')
console.log(resultElement)

resultElement.innerHTML = ` la bici che pesa di meno é ${result.model} e pesa ${result.weight}`