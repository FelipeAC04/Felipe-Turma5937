# Desafio de TypeScript: **Street Fighter**

## Objetivo

Neste desafio, você deve criar um sistema de simulação de batalha baseado em *Street Fighter*. Através de classes e interfaces em TypeScript, você irá representar personagens, seus golpes e a mecânica de batalha.

O desafio envolve a criação de uma interface `Personagem`, implementação de personagens específicos, e uma lógica de batalha entre dois jogadores, onde cada um pode realizar ataques com diferentes probabilidades de dano.

---

## 1. Interface `Personagem`

Você deve criar uma interface chamada `Personagem` que servirá de base para todos os personagens do jogo. A interface precisa ter os seguintes atributos e métodos:

### Atributos:
- **nome**: O nome do personagem (tipo `string`).
- **vida**: A quantidade de vida do personagem (tipo `number`).
- **nacionalidade**: O país de origem do personagem (tipo `string`).
- **estiloLuta**: O estilo de luta do personagem (tipo `string`).

### Métodos:
- **Getters e Setters**:
  - `getNome()`: Retorna o nome do personagem.
  - `setNome(nome: string)`: Define o nome do personagem.
  
  - `getVida()`: Retorna a quantidade de vida do personagem.
  - `setVida(vida: number)`: Define a quantidade de vida do personagem.
  
  - `getNacionalidade()`: Retorna a nacionalidade do personagem.
  - `setNacionalidade(nacionalidade: string)`: Define a nacionalidade do personagem.
  
  - `getEstiloLuta()`: Retorna o estilo de luta do personagem.
  - `setEstiloLuta(estilo: string)`: Define o estilo de luta do personagem.
  
- **Golpes**:
  - `golpeLeve()`: Método para aplicar um golpe leve. Este golpe tem uma maior probabilidade de causar dano médio, com baixo risco de dano baixo.
  - `golpePesado()`: Método para aplicar um golpe pesado. Este golpe tem uma probabilidade igual de causar dano baixo ou muito dano.
  - `golpeEspecial()`: Método para aplicar um golpe especial. Este golpe pode causar muito dano, mas só pode ser usado uma vez por batalha.

#### Observação:
- Cada golpe deve retornar um valor de dano gerado aleatoriamente, de acordo com as probabilidades descritas no enunciado. 

---

## 2. Classes dos Personagens

Você deverá criar classes para os seguintes personagens, com seus respectivos golpes leves, pesados e especiais. Cada classe deverá implementar os métodos definidos pela interface `Personagem` e retornar um valor de dano de acordo com o tipo de golpe.

### **Valores de Dano** para cada golpe:

**1. Ryu**:
- **Golpe Leve** (Hadouken): Causa dano entre **5 a 15** pontos.
- **Golpe Pesado** (Shoryuken): Causa dano entre **15 a 30** pontos.
- **Golpe Especial** (Metsu Hadouken): Causa dano entre **30 a 50** pontos.

**2. Ken**:
- **Golpe Leve** (Hadouken): Causa dano entre **5 a 15** pontos.
- **Golpe Pesado** (Shoryuken): Causa dano entre **15 a 30** pontos.
- **Golpe Especial** (Shinryuken): Causa dano entre **25 a 45** pontos.

**3. Blanka**:
- **Golpe Leve** (Electric Thunder): Causa dano entre **5 a 10** pontos.
- **Golpe Pesado** (Rolling Attack): Causa dano entre **10 a 25** pontos.
- **Golpe Especial** (Super Electric Thunder): Causa dano entre **25 a 40** pontos.

**4. Zangief**:
- **Golpe Leve** (Lariat): Causa dano entre **5 a 15** pontos.
- **Golpe Pesado** (Spinning Piledriver): Causa dano entre **15 a 30** pontos.
- **Golpe Especial** (Final Atomic Buster): Causa dano entre **35 a 50** pontos.

**5. Honda**:
- **Golpe Leve** (Hyakuretsu Harite): Causa dano entre **5 a 10** pontos.
- **Golpe Pesado** (Sumo Headbutt): Causa dano entre **10 a 20** pontos.
- **Golpe Especial** (Oicho Throw): Causa dano entre **20 a 40** pontos.

**6. Bison**:
- **Golpe Leve** (Psycho Crusher): Causa dano entre **10 a 20** pontos.
- **Golpe Pesado** (Scissor Kick): Causa dano entre **15 a 30** pontos.
- **Golpe Especial** (Psycho Impact): Causa dano entre **30 a 50** pontos.

**7. Cammy**:
- **Golpe Leve** (Spiral Arrow): Causa dano entre **5 a 15** pontos.
- **Golpe Pesado** (Cannon Spike): Causa dano entre **15 a 25** pontos.
- **Golpe Especial** (Hooligan Combination): Causa dano entre **20 a 40** pontos.

**8. Dee Jay**:
- **Golpe Leve** (Air Slasher): Causa dano entre **5 a 10** pontos.
- **Golpe Pesado** (Machine Gun Upper): Causa dano entre **10 a 20** pontos.
- **Golpe Especial** (Jackknife Maximum): Causa dano entre **30 a 50** pontos.

Cada personagem possui seus próprios ataques, que devem ser representados pelos métodos de golpe na classe correspondente. O valor de dano deve ser gerado aleatoriamente dentro dos intervalos indicados.

---

## 3. Função de Cálculo de Dano Aleatório

A função que gera o dano de cada golpe deve ser implementada de maneira que:
- O **golpe leve** tenha maior probabilidade de gerar dano médio, com uma pequena chance de causar um dano baixo.
- O **golpe pesado** deve ter uma probabilidade igual de gerar dano baixo ou muito alto.
- O **golpe especial** deve ter uma chance maior de causar um dano muito alto, mas esse golpe só pode ser usado uma vez por batalha.

A função deve gerar um valor aleatório dentro do intervalo de dano de cada golpe, e esse valor será subtraído da vida do oponente durante a batalha.

---

## 4. Função Principal (Main)

Na função principal, será necessário implementar um menu de escolha de personagens para ambos os jogadores. Depois que os jogadores escolherem seus personagens, a batalha deve ser iniciada.

### Fluxo da Batalha:
1. **Escolha dos Personagens**:
   - O programa deverá permitir que o usuário escolha dois personagens, um para cada jogador. O menu pode ser simples, oferecendo uma lista dos personagens disponíveis.
   
2. **Início da Batalha**:
   - Os jogadores se alternam para atacar um ao outro. O primeiro jogador escolhe um golpe (leve, pesado ou especial), e o segundo jogador faz o mesmo.
   
3. **Turnos de Ataque**:
   - Durante a batalha, os jogadores devem atacar alternadamente. Cada jogador poderá usar qualquer um dos golpes disponíveis (leve, pesado ou especial) até que a vida de um dos jogadores chegue a zero.
   
4. **Condição de Vitória**:
   - O jogo termina quando um dos jogadores perde toda a sua vida. O jogador que restar com vida será o vencedor.

### Regras Especiais:
- O **golpe especial** de cada personagem só pode ser usado uma vez por batalha. Após ser usado, ele não estará disponível para o restante da luta.
- O **dano dos golpes** será calculado aleatoriamente, com base nas probabilidades descritas anteriormente.

---

## Requisitos Técnicos

- Você deve utilizar **TypeScript** para implementar este desafio.
- As classes dos personagens devem **implementar** a interface `Personagem`.
- A função de batalha deve permitir que os jogadores escolham entre os diferentes tipos de golpes, e o jogo deve ser capaz de simular a batalha e determinar o vencedor.
- A geração de dano deve ser aleatória, mas com base nas probabilidades descritas para cada tipo de golpe.
