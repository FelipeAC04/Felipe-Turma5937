/*  A JORNADA DO HEROI TALENTOSO DO REINO DOS TALENTOS

Em um reino distante, um jovem aldeão descobre uma espada mágica que revela seu destino como herói. Com coragem e poucos recursos, ele parte em uma jornada para proteger o reino de uma ameaça sombria. A história do herói está apenas começando, 
e o futuro do reino depende de sua bravura e determinação. */


/* O Cenário:
"O jogador é um herói que embarca em uma jornada épica. Ao longo do caminho, ele encontrará inimigos, coletará itens e enfrentará desafios. Vamos criar essa aventura usando JavaScript!"

2. Criando o Inventário do Herói:
"O herói começa sua aventura com alguns itens básicos. Vamos armazenar esses itens em um array."*/

// Inventário inicial do herói

let inventário = ["espada de dima", "armadura de dima", "escudo de madeira", "totem da imortalidade" ]

// Exibindo o inventário inicial

console.log("seu inventario inicial:", inventário)

/*3. Encontrando um Tesouro:
"O herói encontra um baú de tesouro e ganha um novo item!"*/

// Herói encontra um novo item

console.log("você encontrou um novo item, ele foi adicionado ao seu inventario!")
inventário.splice(0, 1, "espada de netherita")

// Exibindo o inventário atualizado

console.log("seu novo inventario:", inventário)

/*4. Enfrentando um Inimigo:
"O herói enfrenta um goblin! Ele pode usar a espada ou o escudo do seu inventário para lutar."*/

// Herói enfrenta um goblin

console.log("um goblin apareceu!")

// Usando itens do inventário para lutar

console.log("usando o item", inventário[1], "e", inventário[2], "para batalhar com o inimigo")

// Usando a espada (primeiro item)

console.log("você usou sua espada:", inventário[0])

/* 5. Usando uma Poção:
"Durante a batalha, o herói perde vida e decide usar uma poção." */

// Usando a poção de vida

console.log("você usou o item", inventário[3])

/* 6. Finalizando o inimigo
"Em um golpe o goblin sentiu o impacto, é a sua hora de finaliza-lo"
*/

// Usando a espada

console.log("você usou sua espada:", inventário[0])

/* Concluindo a Aventura:
"O herói derrotou o goblin e continua sua jornada. Ele pode coletar mais itens e enfrentar outros desafios."*/

// Finalizando a batalha

console.log("você derrotou o goblin, agora você pode continuar a jornada!")