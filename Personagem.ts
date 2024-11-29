export interface Personagem {
    getNome(): string
    setNome(nome: string): void

    getVida(): number
    setVida(vida: number): void

    getNacionalidade(): string
    setNacionalidade(nacionalidade: string): void

    getEstiloLuta(): string
    setEstiloLuta(estiloluta: string): void

    golpeLeve(
        dano: number
    ): void
    golpePesado(
        dano: number
    ): void
    golpeEspecial(
        dano: number
    ): void
}