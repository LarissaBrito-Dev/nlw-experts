const perguntas = [
    {
      pergunta: "Qual foi a cidade onde Jesus nasceu?",
      respostas: [
        "Belém",
        "Jerusalém",
        "Nazaré",
      ],
      correta: 0
    },
    {
      pergunta: "Quantos discípulos principais Jesus teve?",
      respostas: [
        "Doze",
        "Dez",
        "Sete",
      ],
      correta: 0
    },
    {
      pergunta: "Qual foi o milagre de Jesus relatado na Bíblia em que ele caminhou sobre a água?",
      respostas: [
        "Multiplicação dos pães",
        "Curou um leproso",
        "Acalmou a tempestade",
      ],
      correta: 2
    },
    {
      pergunta: "Quem traiu Jesus antes de sua crucificação?",
      respostas: [
        "Pedro",
        "Judas Iscariotes",
        "João",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do jardim onde Jesus costumava orar antes de ser preso?",
      respostas: [
        "Jardim do Éden",
        "Jardim das Oliveiras",
        "Jardim Botânico",
      ],
      correta: 1
    },
    {
      pergunta: "Qual das seguintes parábolas não foi contada por Jesus?",
      respostas: [
        "O Bom Samaritano",
        "A Ovelha Perdida",
        "A Criação do Mundo",
      ],
      correta: 2
    },
    {
      pergunta: "Quantos anos Jesus tinha quando começou seu ministério público?",
      respostas: [
        "20",
        "25",
        "30",
      ],
      correta: 2
    },
    {
      pergunta: "Qual dos apóstolos de Jesus é conhecido como 'o discípulo amado'?",
      respostas: [
        "Pedro",
        "Tiago",
        "João",
      ],
      correta: 2
    },
    {
      pergunta: "O que Jesus disse antes de morrer na cruz, de acordo com os Evangelhos?",
      respostas: [
        "Perdoa-lhes, porque não sabem o que fazem",
        "Pai, em tuas mãos entrego o meu espírito",
        "Mulher, eis aí o teu filho; e, ao discípulo, eis aí tua mãe",
      ],
      correta: 1
    },
    {
      pergunta: "Quantos dias após sua crucificação Jesus ressuscitou dos mortos?",
      respostas: [
        "Dois dias",
        "Três dias",
        "Quatro dias",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalPerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas
  
   // loop ou laço de repetição das perguntas
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    // loop ou laço de repetição das respostas
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas
  
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    // remove Resposta A
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  } 