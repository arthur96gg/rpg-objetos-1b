class Personagem {
    constructor(nome, vida, ataque, defesa) {
        this.nome = nome,
            this.vida = vida,
            this.vidaMaxima = vida,
            this.ataque = ataque,
            this.defesa = defesa
    }

    curar(quantidade){
        this.vida = this.vida + quantidade

        if(this.vida > this.vidaMaxima){
            this.vida = this.VidaMaxima
        }
    }

    causaDano(personagem) {
        personagem.recebeDano(this.ataque)
    }

    recebeDano(personagem) {
        let dano = quantidade - this.defesa

        if(dano < 0){
            dano = 0
        }

        this.vida = this.vida - dano
        if (this.vida <= 0) {
            this.vida = "morreu(0)"
        }
    }

    estaVivo(){
        return this.vida > 0
    }

    mostraStatus(){
        console.log(this.nome + " | Vida: " + this.vida)
    }
}

class Guerreiro extends Personagem {
    constructor(nome){
        super(nome, 70, 35, 8)
    }
    golpePesado(personagem){
        personagem.recebeDano(this.ataque * 2)
    }
}

const guerreiro = new Guerreiro("Thorin", 60, 20, 18)
const druida = new Personagem("Obin", 150, 15, 10)
const arqueiro = new Personagem("Legolas", 80, 25, 12)
const mago = new Personagem("Gandalfe", 60, 35, 5)
const furtive = new Personagem("Kaelen", 45, 14, 8)
const paladino = new Personagem("Eldrin", 70, 8, 20)
const necromante = new Personagem("Malakor", 35, 16, 6)

const personagens = [
    druida,
    guerreiro,
    mago,
    arqueiro,
    furtive,
    paladino,
    necromante
]
personagens.forEach(function(personagem){
    personagem.mostraStatus()
})

let turno = 1
let jogadorAtual = 0

function proximoTurno(){
    turno = turno + 1
    jogadorAtual = jogadorAtual === 0 ? 1 : 0
}

const VidaGuerreiro = document.getElementById("vida-guerreiro")
VidaGuerreiro.innerText = guerreiro.vida

const ataqueGuerreiro = document.getElementById("ataque-guerreiro")
ataqueGuerreiro.innerText = guerreiro.ataque

const guerreiroAtacar = document.getElementById("guerreiro-atacar")
guerreiroAtacar.addEventListener("click", () => {
    alert("botao pressionado")
})