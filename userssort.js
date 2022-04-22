// Сделать сортировку по уровню ранка юзера и по алфавиту

let arrayOfObjects = [   
    {
        name: 'Diana',
        rank: 4,
        game: 'CSGO'
    },
    {
         name: 'Beyonce',
         rank: 40,
        game: 'CSGO'
    },
    {            
        name: 'Albert',
        rank: 30,
        game: 'CSGO'
    }, 
   {            
        name: 'Yovan',
        rank: 300,
        game: 'CSGO'
    },
    {            
        name: 'Maks',
        rank: 30000,
        game: 'CSGO'
    },
    {            
        name: 'Sasha',
        rank: 10,
        game: 'CSGO'
    },
   
];

// Сортировка юзеров по ранку
arrayOfObjects.sort(function(prev,next){
   if(prev.rank>next.rank)return -1
})
console.log(arrayOfObjects);


// Сортировка юзеров по алфавиту
arrayOfObjects.sort(function(prev,next){
   if(prev.name<next.name)return -1
})
console.log(arrayOfObjects);
