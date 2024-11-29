export class Aluno {
    private nome: string
    private idade: number
    private nacionalidade: string
    private casa: string | null
    private classeMagica: string

    constructor(nome: string, idade: number, nacionalidade: string, classeMagica: string) {
        this.nome = nome
        this.idade = idade
        this.nacionalidade = nacionalidade
        this.casa = null
        this.classeMagica = classeMagica
    }
    public getNome(): string {
        return this.nome
    }
    public setNome(nome: string) {
        this.nome = nome
    }
    public getIdade(): number {
        return this.idade
    }
    public setIdade(idade: number) {
        this.idade = idade
    }
    public getNacionalidade(): string {
        return this.nacionalidade
    }
    public setNacionalidade(nacionalidade: string) {
        this.nacionalidade = nacionalidade
    }
    public getCasa(): string | null {
        return this.casa
    }
    public setCasa(casa: string | null) {
        this.casa = casa
    }
    public getClasseMagica(): string {
        return this.classeMagica
    }
    public setClasseMagica(classeMagica: string) {
        this.classeMagica = classeMagica
    }
    sortearCasa() {
        const casas = ['Grifinória', 'Sonserina', 'Lufa-Lufa', 'Corvinal']
        let sorteio = Math.floor(Math.random() * casas.length)
        this.casa = casas[sorteio]
    }
    exibirInformacoes() {
        return `
      Nome: ${this.getNome}
      Idade: ${this.getIdade}
      Nacionalidade: ${this.getNacionalidade}
      Casa: ${this.getCasa}
      Classe Mágica: ${this.getClasseMagica}`
    }
}