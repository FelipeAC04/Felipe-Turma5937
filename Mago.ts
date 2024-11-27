import { Personagem } from "./Personagem";

export class Mago implements Personagem {
    private _nome: string
    private _vida: number
    private _forca: number
    private _defesa: number
    constructor(nome: string) {
        this.nome = nome
        this.vida = 100
        this.forca = 45
        this.defesa = 10
    }
    atacar(inimigo: Personagem): void {
        console.log(`o mago ${this.nome} atacou o guerreiro ${inimigo.nome}`)
        let dano = this.forca - inimigo.defesa
        inimigo.perderVida(dano)
    }
    perderVida(dano: number): void {
        this.vida -= dano
        if (this.vida <= 0) {
            console.log(`o mago ${this.nome} morreu!`)
        } else {
            console.log(`o mago ${this.nome} recebeu ${dano} pontos de dano e tem ${this.vida} pontos de vida restantes!`)
        }
    }
    public get nome(): string {
        return this._nome
    }
    public get vida(): number {
        return this._vida
    }
    public get forca(): number {
        return this._forca
    }
    public get defesa(): number {
        return this._defesa
    }
    public set nome(nome: string) {
        this._nome = nome
    }
    public set vida(vida: number) {
        this._vida = vida
    }
    public set forca(forca: number) {
        this._forca = forca
    }
    public set defesa(defesa: number) {
        this._defesa = defesa
    }
}
