// variáveis?

const answerElement = document.getElementById("answer");
const questionInputElement = document.getElementById("questionInput");
const valueInput = questionInputElement.value;
const answers = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "Ao meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
];

// clicar em fazer pergunta

function askQuestion() {
  if (questionInputElement.value == "") {
    alert("Espaço em branco, digite a sua pergunta");
    return;
  }

  const showQuestion = "<div>" + questionInputElement.value + "</div>";

  // gerar numero aleatório
  const totalAnswers = answers.length;
  const aleatoryNumber = Math.floor(Math.random() * totalAnswers);

  // colocar na página
  answerElement.innerHTML = showQuestion + answers[aleatoryNumber];
}
