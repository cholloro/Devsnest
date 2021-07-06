const obj1 = 
{
    name : ['Arya'],
    game : ' COD',
    printGame()
    {
        console.log(`${this.game}`);
    }
}

const obj2 = 
{
    name : ['Sem',],
    game : 'PUBG',
    greet : function(greeting,message)
    {
        return `${greeting} ,${this.name} ${message}`
    }
}
// call

obj1.printGame.call(obj2);

// apply

obj2.greet.apply(obj1,['Hey','How are you'])

// Bind
const getGame = obj1.printGame;

const print = getGame.bind(obj1);

print();