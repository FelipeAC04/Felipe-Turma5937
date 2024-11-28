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
                //a escolha é feita por numeros para facilitar o cadastro para os usuarios// 
                let classeMagicaDoAluno = Number(ask.question(` 
                ------------Diga a classe magica do aluno--------------
                [1] 'Feiticaria e Encantamentos'
                [2] 'Pocoes'
                [3] 'Transfiguracao'
                [4] 'Defesa Contra as Artes das Trevas'
                [5] 'Herbologia'
                [6] 'Astronomia'
                [7] 'Historia da Magia'
                [8] 'Cuidado de Criaturas Magicas'
                [9] 'Voo'
                [10] 'Magia Experimental'
                [11] 'Divinacao'
                [12] 'Runas Antigas'
                --------------------------------------------------------
                `))

                let novoAluno // variavel para auxiliar no cadastro de novos alunos //
                switch (classeMagicaDoAluno) { //switch case GRANDINHO para ajudar a vida do usuario, e ele nao ter que escrever o nome certinho da matéria toda vez //
                    case 1:
                        novoAluno = new Aluno(nomeDoALuno, idadeDoALuno, nacionalidadeDoAluno, 'Feitiçaria e Encantamentos')
                        novoAluno.sortearCasa()
                        alunosCadastrados.push(novoAluno)
                        console.log('aluno cadastrado!')
                        ask.question('tecle ENTER para voltar:')
                        break;
                    case 2:
                        novoAluno = new Aluno(nomeDoALuno, idadeDoALuno, nacionalidadeDoAluno, 'Poções')
                        novoAluno.sortearCasa()
                        alunosCadastrados.push(novoAluno)
                        console.log('aluno cadastrado!')
                        ask.question('tecle ENTER para voltar:')
                        break;
                    case 3:
                        novoAluno = new Aluno(nomeDoALuno, idadeDoALuno, nacionalidadeDoAluno, 'Transfiguração')
                        novoAluno.sortearCasa()
                        alunosCadastrados.push(novoAluno)
                        console.log('aluno cadastrado!')
                        ask.question('tecle ENTER para voltar:')
                        break;
                    case 4:
                        novoAluno = new Aluno(nomeDoALuno, idadeDoALuno, nacionalidadeDoAluno, 'Defesa Contra as Artes das Trevas')
                        novoAluno.sortearCasa()
                        alunosCadastrados.push(novoAluno)
                        console.log('aluno cadastrado!')
                        ask.question('tecle ENTER para voltar:')
                        break;
                    case 5:
                        novoAluno = new Aluno(nomeDoALuno, idadeDoALuno, nacionalidadeDoAluno, 'Herbologia')
                        novoAluno.sortearCasa()
                        alunosCadastrados.push(novoAluno)
                        console.log('aluno cadastrado!')
                        ask.question('tecle ENTER para voltar:')
                        break;
                    case 6:
                        novoAluno = new Aluno(nomeDoALuno, idadeDoALuno, nacionalidadeDoAluno, 'Astronomia')
                        novoAluno.sortearCasa()
                        alunosCadastrados.push(novoAluno)
                        console.log('aluno cadastrado!')
                        ask.question('tecle ENTER para voltar:')
                        break;
                    case 7:
                        novoAluno = new Aluno(nomeDoALuno, idadeDoALuno, nacionalidadeDoAluno, 'História da Magia')
                        novoAluno.sortearCasa()
                        alunosCadastrados.push(novoAluno)
                        console.log('aluno cadastrado!')
                        ask.question('tecle ENTER para voltar:')
                        break;
                    case 8:
                        novoAluno = new Aluno(nomeDoALuno, idadeDoALuno, nacionalidadeDoAluno, 'Cuidado de Criaturas Mágicas')
                        novoAluno.sortearCasa()
                        alunosCadastrados.push(novoAluno)
                        console.log('aluno cadastrado!')
                        ask.question('tecle ENTER para voltar:')
                        break;
                    case 9:
                        novoAluno = new Aluno(nomeDoALuno, idadeDoALuno, nacionalidadeDoAluno, 'Voo')
                        novoAluno.sortearCasa()
                        alunosCadastrados.push(novoAluno)
                        console.log('aluno cadastrado!')
                        ask.question('tecle ENTER para voltar:')
                        break;
                    case 10:
                        novoAluno = new Aluno(nomeDoALuno, idadeDoALuno, nacionalidadeDoAluno, 'Magia Experimental')
                        novoAluno.sortearCasa()
                        alunosCadastrados.push(novoAluno)
                        console.log('aluno cadastrado!')
                        ask.question('tecle ENTER para voltar:')
                        break;
                    case 11:
                        novoAluno = new Aluno(nomeDoALuno, idadeDoALuno, nacionalidadeDoAluno, 'Divinação')
                        novoAluno.sortearCasa()
                        alunosCadastrados.push(novoAluno)
                        console.log('aluno cadastrado!')
                        ask.question('tecle ENTER para voltar:')
                        break;
                    case 12:
                        novoAluno = new Aluno(nomeDoALuno, idadeDoALuno, nacionalidadeDoAluno, 'Runas Antigas')
                        novoAluno.sortearCasa()
                        alunosCadastrados.push(novoAluno)
                        console.log('aluno cadastrado!')
                        ask.question('tecle ENTER para voltar:')
                        break;
                    default:
                        ask.question('classe magica nâo encontrada, tecle ENTER para voltar')
                        break;
                }

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

                if (!aluno) {
                    console.log(`o aluno ${editarAluno}`)
                }

                console.log(`editando o aluno ${editarAluno}`)
                let novaIdade = Number(ask.question('diga a nova idade do aluno: '))
                let novaNacionalidade = ask.question('diga a nova nacionalidade do aluno: ')
                let novaClasseMgica = ask.question('diga a nova classe magica do aluno: ')

                aluno?.setIdade(novaIdade)
                aluno?.setNacionalidade(novaNacionalidade)
                aluno?.setClasseMagica(novaClasseMgica)

                console.log('o aluno foi editado com sucesso!')
                ask.question('tecle ENTER para voltar:')

                break;
            case 4: // deleta o aluno indicado pelo usuario, caso ele nao esteja nio array o programa vai retornar erro na procura tambem //
                console.clear()
                let deletarAluno = ask.question('Diga o nome do aluno que quer editar: ')
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