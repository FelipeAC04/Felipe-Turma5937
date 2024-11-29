// os imports e outras necessidades para o funcionamento do codigo//
import { Aluno } from "./Aluno"

const ask = require('readline-sync')


function Main() {//função principal, esse é o fluxo do sistema//
    let alunosCadastrados: Array<Aluno> = []
    let sustentaMenu = true

    while (sustentaMenu) {
        console.clear() // menu principal //
        console.log(` 
--------------------------------------
          MENU DE CADASTROS
--------------------------------------
[1] Cadastrar novo aluno
[2] Ver alunos cadastrados
[3] Editar dados de um aluno
[4] Deletar um aluno da lista
[5] sair
--------------------------------------
`)
        let opcao = Number(ask.question('escolha uma opcao: ')) // input do usuario para as opçôes //

        switch (opcao) { // switch para o input do usuario//
            case 1: // caso 1, adiciona um novo aluno ao array de objetos //
                console.clear()
                let nomeDoALuno = ask.question('Diga o nome do aluno: ')
                let idadeDoALuno = Number(ask.question('Diga a idade do aluno: '))
                let nacionalidadeDoAluno = ask.question('Diga a nacionalidade do aluno: ')

                //pergunta ao usuario qual a classe magica do novo aluno//
                console.log(` 
                ------------Diga a classe magica do aluno--------------
                [0] 'Feitiçaria e Encantamentos'
                [1] 'Poções'
                [2] 'Transfiguração'
                [3] 'Defesa Contra as Artes das Trevas'
                [4] 'Herbologia'
                [5] 'Astronomia'
                [6] 'História da Magia'
                [7] 'Cuidado de Criaturas Mágicas'
                [8] 'Voo'
                [9] 'Magia Experimental'
               [10] 'Divinação'
               [11] 'Runas Antigas'
                --------------------------------------------------------
                `)
let classeMagicaDoAluno = Number(ask.question('escolha uma opçao: '))

//arrey com todas classes magicas disponiveis//
let classesMagicas = ['Feitiçaria e Encantamentos','Poções','Transfiguração','Defesa Contra as Artes das Trevas','Herbologia', 'Astronomia','História da Magia','Cuidado de Criaturas Mágicas', 'Voo', 'Magia Experimental', 'Divinação', 'Runas Antigas']

if(classeMagicaDoAluno >= 0 && classeMagicaDoAluno < 12){
let novoAluno = new Aluno(nomeDoALuno, idadeDoALuno, nacionalidadeDoAluno, classesMagicas[classeMagicaDoAluno])
novoAluno.sortearCasa()
alunosCadastrados.push(novoAluno)
git
console.log('aluno cadastrado!')
ask.question('tecle ENTER para voltar:')

} else {ask.question("numero da classe magica nao reconhecido, tecle ENTER para voltar: ")}
break;

            case 2: // caso 2, mostra as informaçôes de todos alunos cadastrados //
                if (alunosCadastrados.length <= 0) {
                    console.log('sem alunos cadastrados ainda!')
                } else {
                    alunosCadastrados.forEach(aluno => {
                        console.log(aluno.exibirInformacoes())
                        console.log('----------------------------------')
                    })
                }

                ask.question('tecle ENTER para voltar:')
                break;

            case 3: // caso 3, edita o aluno indicado pelo usuario com as as novas informaçôes passadas, caso o aluno nao esteja na lista o programa vai retornar erro na busca //
                console.clear()
                let editarAluno = ask.question('Diga o nome do aluno que quer editar: ')
                let aluno = alunosCadastrados.find(a => a.getNome() === editarAluno)

                console.log(`editando o aluno ${editarAluno}`)
                let novaIdade = Number(ask.question('diga a nova idade do aluno: '))
                let novaNacionalidade = ask.question('diga a nova nacionalidade do aluno: ')
                let novaClasseMgica = ask.question('diga a nova classe magica do aluno: ')

                aluno?.setIdade(novaIdade)
                aluno?.setNacionalidade(novaNacionalidade)
                aluno?.setClasseMagica(novaClasseMgica)

                console.log('o cadastro do aluno foi editado com sucesso!')
                ask.question('tecle ENTER para voltar:')
                break;

            case 4: // deleta o aluno indicado pelo usuario, caso ele nao esteja nio array o programa vai retornar erro na procura tambem //
                console.clear()
                let deletarAluno = ask.question('Diga o nome do aluno que quer deletar: ')
                let alunoDeletado = alunosCadastrados.findIndex(a => a.getNome() === deletarAluno)

                if (alunoDeletado !== -1) {
                    alunosCadastrados.splice(alunoDeletado, 1)
                    console.log('aluno deletado com succeso!')
                } else {
                    console.log('aluno nao encontrado!')
                }

                ask.question('tecle ENTER para voltar:')
                break;

            case 5: // caso o usuario escolha sair, termina o programa e retorna a mensagem de saida //
                console.clear()
                sustentaMenu = false
                console.log("saindo....")
                break;

            default:
                console.clear()
                ask.question("comando nao encontrado, tecle ENTER para voltar:")
                break;
        }
    }
}

// chamando a função //

Main()