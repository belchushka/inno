const field = document.querySelector(".field")
const apples = document.querySelector(".apples")
const btnPlay = document.querySelector("#btnPlay")
const startGameScreen = document.querySelector(".startGameScreen")
const blockSize = 36
const blocksHorizontal = Math.floor(window.innerWidth / blockSize)-1
const blocksVertical = Math.floor(window.innerHeight / blockSize) //20
const grid = []
let gameStarted = false
let game = null

for (let i=0; i<=blocksVertical; i++){
    let row = []
    for(let j=0; j<=blocksHorizontal;j++){
        let block = new DOMParser().parseFromString("<div class='block'></div>","text/html").body.querySelector(".block")
        row.push(block)
    }
    grid.push(row)
}

grid.forEach(el=>{
    let row = new DOMParser().parseFromString("<div class='row'></div>","text/html").body.querySelector(".row")
    el.forEach(el2=>{
        row.append(el2)
    })
    field.append(row)
})

function Player(){
    this.x = x
    this.y = y
    this.body = document.querySelector(".player")
    this.render = ()=>{
        this.body.style.left = this.x+"px"
        this.body.style.top = this.y + "px"
    }
}

function Game(player){
    this.player = player
    this.apples = []
    this.startGame = ()=>{
        for (let i = 0; i <3; i++) {
            let newAppleX = Math.floor(Math.random()*blocksHorizontal)
            let newAppleY = Math.floor(Math.random()*blocksVertical)
            let apple = new Apple(newAppleX,newAppleY)
            this.apples.push(apple)
            apple.spawn()
        }

    }
}

function Apple(x, y){
    this.x = x
    this.y = y
    this.body = new DOMParser().parseFromString('<div class="apple">\n' +
        '            <img src="assets/apple.png" alt="">\n' +
        '        </div>', "text/html").body.querySelector(".apple")
    this.spawn = ()=>{
        this.body.style.left = this.x*blockSize+"px"
        this.body.style.top = this.y*blockSize + "px"
        apples.append(this.body)
    }
}




btnPlay.onclick = ()=>{
    startGameScreen.style.display = "none"
    gameStarted = true
    game = new Game()
    game.startGame()
}



