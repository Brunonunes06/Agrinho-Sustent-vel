const form = document.querySelector('#water-form');
const resultEl = document.querySelector('#result');

const litersPerMinuteShower = 12;
const litersPerFlush = 6;
const litersPerWashLoad = 80;

const formatter = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 0,
});

function formatNumber(value) {
  return formatter.format(value);
}

function calculateWaterConsumption(values) {
  const dailyShower = values.people * values.showers * values.showerMinutes * litersPerMinuteShower;
  const dailyFlush = values.flushes * litersPerFlush;
  const weeklyWash = values.washing * litersPerWashLoad;
  const weeklyGarden = values.garden;
  const dailyGarden = weeklyGarden / 7;
  const dailyWash = weeklyWash / 7;

  const totalDaily = dailyShower + dailyFlush + dailyWash + dailyGarden;
  const monthlyTotal = totalDaily * 30;
  const recommendedDaily = values.people * 100;

  return {
    totalDaily,
    monthlyTotal,
    recommendedDaily,
  };
}

function createFeedback(data) {
  if (data.totalDaily <= data.recommendedDaily) {
    return {
      text: '🌱 Parabéns! Seu consumo está dentro do recomendado.',
      className: 'feedback good',
    };
  }

  return {
    text: '⚠️ Seu consumo está acima do recomendado. Tente reduzir o tempo do banho e reaproveitar água.',
    className: 'feedback alert',
  };
}

function showResult(data) {
  const percentage = Math.min((data.totalDaily / data.recommendedDaily) * 100, 100);
  const recommendedMonthly = data.recommendedDaily * 30;
  const saving = Math.max(data.monthlyTotal - recommendedMonthly, 0);
  const feedback = createFeedback(data);

  resultEl.innerHTML = `
    <h3>💧 Resultado do Consumo</h3>

    <p><strong>Consumo diário estimado:</strong> ${formatNumber(data.totalDaily)} litros</p>
    <p><strong>Consumo mensal estimado:</strong> ${formatNumber(data.monthlyTotal)} litros</p>
    <p><strong>Meta sustentável sugerida:</strong> ${formatNumber(data.recommendedDaily)} litros por dia</p>
    <p><strong>Meta mensal recomendada:</strong> ${formatNumber(recommendedMonthly)} litros</p>
    <p><strong>Economia possível:</strong> ${formatNumber(saving)} litros por mês</p>

    <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(percentage)}">
      <div class="progress-bar" style="width:${percentage}%"></div>
    </div>

    <div class="${feedback.className}">${feedback.text}</div>
  `;
}

function showError(message) {
  resultEl.innerHTML = `<div class="feedback alert">${message}</div>`;
}

function clearResult() {
  resultEl.innerHTML = '';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const values = {
    people: Number(document.querySelector('#people').value),
    showers: Number(document.querySelector('#showers').value),
    showerMinutes: Number(document.querySelector('#showerMinutes').value),
    flushes: Number(document.querySelector('#flushes').value),
    washing: Number(document.querySelector('#washing').value),
    garden: Number(document.querySelector('#garden').value),
  };

  if (values.people < 1 || values.showerMinutes < 1) {
    showError('Preencha todos os campos corretamente antes de calcular.');
    return;
  }

  const data = calculateWaterConsumption(values);
  showResult(data);
});

form.addEventListener('reset', () => {
  window.requestAnimationFrame(clearResult);
});
