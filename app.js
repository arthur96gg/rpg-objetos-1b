class Personagem{
  constructor(nome,vida,ataque){
    this.nome = nome,
    this.vida = vida,
    this.ataque = ataque
  }
 causaDano(personagem){
  personagem.recebeDano(this.ataque)
 }
 recebeDano(quntidade){
  this.vida = this.vida - quntidade
  if(this.vida <=0)
    this.vida ="morreu"
 }
}

const druida = new Personagem("obin", 150 ,15)
const guerreiro = new Personagem("thorfin",60,20)
const arqueiro = new Personagem("legolas",50,40)
const mago = new Personagem("Gandalf",40,70)
const assasino = new Personagem("mortis",30.60)
const clerigo = new Personagem("Ezra", 40,20)
const monge =  new Personagem("tatsu",60,30)

console.log(monge)