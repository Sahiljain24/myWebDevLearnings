

setTimeout(function  (){
    console.log('Jaldi jaldi padhlo')
},5000)


console.log('le moot diya')

let lovee= new Promise(function(resolve,rejects){
    setTimeout(function(){
        console.log('vidhya datati vinayam')
    },3000)
    resolve(143);
})

lovee.then((value)=>{setTimeout(function(){console.log('loo chaat lo')},8000)})

async function help(){

    let bhopal= new Promise(function(resolve,rejects){
        setTimeout(function(){
            resolve('Bhopal hai desh ki shan')
        },5000)
    })
    let indore = new Promise(function(resolve,reject){
        setTimeout(function(){
           resolve('Indore me poha milta h ')
        },3000)
    })
    let b= await bhopal;
    let i =await indore;
    return [b,i];
}
