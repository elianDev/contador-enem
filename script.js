// Define a data do ENEM 2023 (dia/mês/ano)
const enemDate = new Date("2023-11-05T13:00:00Z");

// Função para atualizar o contador regressivo
function updateCountdown() {
  // Calcula o tempo restante até o ENEM 2023
  const now = new Date();
  const diff = enemDate - now;

  // Calcula os dias, horas, minutos e segundos restantes
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Atualiza o texto do contador regressivo
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = `<span>${days}</span>d, <span>${hours}</span>h, <span>${minutes}</span>m e <span>${seconds}</span>s.`;
}

// Atualiza o contador regressivo a cada segundo
setInterval(updateCountdown, 1000);
