//

//
// let number = 5
// let number2 = number
// number2+=1
// console.log(number,number2)


// let user = {
//     name:"Savva",
//     surname:"Shulgin",
//     gender:{
//         name:"Dima"
//     },
//     sayHi(){
//         console.log(`Привет я ${this.name}`);
//     }
// }
// let array = [1,2,3,4]
// let array2 = [...array]
// let user2 = {}
// Object.assign(user2,user)
//
// let dog = {
//     weight:22,
//     breed:"",
//     name:"",
//     sayHi(){
//         console.log("Gav");
//     }
// }
//
// let cat = {
//     weight:22,
//     breed:"",
//     name:"",
//     sayHi(){
//         console.log("Myau");
//     }
// }
//
// class Animal {
//     constructor(name, breed, weight, voice) {
//         this.name = name
//         this.breed = breed
//         this.weight = weight
//         this.voice = voice
//     }
//
//     sayHi(){
//         console.log(this.voice)
//     }
// }
// let dog = new Animal("Bobik", "Haski",22, "Gav")
// let cat = new Animal("Djinni","Abissian", 34, "May")
//
// cat.sayHi()
//this==window


let papa = document.querySelector(".player")
let btn = document.querySelector(".btn")

function Player(name,element, x, y){
    this.name = name
    this.element = element
    this.x = x
    this.y = y
    this.step = 60
    this.goRight=()=>{
        this.x+=60
        this.element.style.left = this.x+"px"
    }
    this.goLeft=()=>{
        this.x-=60
        this.element.style.left = this.x+"px"
    }
    this.goTop=()=>{
        this.y-=60
        this.element.style.top = this.y+"px"
    }
    this.goBottom=()=>{
        this.y+=60
        this.element.style.top = this.y+"px"
    }
}
let player = null
let gameStarted = false

let startGame = ()=>{
    gameStarted = true
    player=new Player("Papich",papa, 0, 0)
}

btn.addEventListener("click",()=>{
    startGame()
})

document.addEventListener("keydown",(ev)=>{
    if(!gameStarted){
        alert("Press start")
    }else{
        switch (ev.key){
            case "w":
                player.goTop()
                break
            case "s":
                player.goBottom()
                break
            case "a":
                player.goLeft()
                break
            case "d":
                player.goRight()
                break
        }
    }

})





