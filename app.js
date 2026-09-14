class Personagem {
    constructor(nome, vida, ataque, defesa) {
        this.nome = nome,
        this.vida = vida,
        this.vidaMax = vida,
        this.ataque = ataque,
        this.defesa = defesa
    }

curar(quantidade) {
        this.vida = this.vida + quantidade

        if(this.vida > this.vidaMax) {
            this.vida = this.vidaMax
        }
    }

    causaDano(personagem) {
                                                                                                                                                                                                                                                                                                                            personagem.recebeDano(this.ataque)
    }

    recebeDano(quantidade) {
        let dano = quantidade - this.defesa

        if(quantidade < this.vida) {
            dano = 0
        }

        this.vida = this.vida - dano

        if (this.vida <= 0) {
            this.vida = "morreu"
    }        
        }

        estaVivo(){
            return this.vida > 0
        }

        mostraStatus(){
            console.log(this.nome + " | vida: " + this.vida)
        }
}

class  Guerreiro extends Personagem {
    constructor(nome){
super(nome, 70, 35, 8)
    }
    golpePesado(personagem) {
        this.recebeDano(this.ataque * 2)
    }
    }

const druida = new Personagem("Obin", 55, 35, 10)
const guerreiro = new Guerreiro("Thorin", 60, 20, 15)
const mago = new Personagem("Gandalfe", 60, 35, 5)
const arqueiro = new Personagem("Legolas", 80, 25, 10)
const dragao = new Personagem("Kragor", 55, 30, 20)
const feiticeira = new Personagem("Wanda", 70, 35, 15)
const elfa = new Personagem("Thia", 70, 15, 10)

const personagens  = [
    druida,
    guerreiro,
    mago,
    arqueiro,
    dragao,
    feiticeira,
    elfa
]
personagens.forEach(function(personagem){
    personagem.mostraStatus()
})

 console.log(guerreiro)