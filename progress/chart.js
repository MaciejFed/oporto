
fetch('data.json', { cache: 'no-cache' }).then(response => response.json()).then((data) => {
  const ctx = document.getElementById('myChart').getContext('2d');

  const footer = (tooltipItems) => {
    const newWordsNumbered = tooltipItems[0].raw.newWords.map((newWord, index) => `${index + 1}. ${newWord}`);
    const lostWordsNumbered = tooltipItems[0].raw.lostWords.map((lostWord, index) => `${index + 1}. ${lostWord}`);
    const newWordsDiff = newWordsNumbered.length - lostWordsNumbered.length;
    const signPostfix = newWordsDiff >= 0 ? `+ ${newWordsDiff}` :  `- ${newWordsDiff}`;
    const newWords = newWordsNumbered.length > 0 ? [`Difference ${signPostfix}`, '', `New Words: +${newWordsNumbered.length}`].concat(newWordsNumbered) : [];
    const lostWords = lostWordsNumbered.length > 0 ? [`Lost Words: +${lostWordsNumbered.length}`].concat(lostWordsNumbered) : [];
    return newWords.concat(lostWords);
  };

  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        {
          label: 'Words Learned',
          data: data,
          borderWidth: 1,
          borderColor: 'red',
          backgroundColor: 'red',
          pointStyle: 'circle',
          pointRadius: 7,
          pointHoverRadius: 5,
          parsing: {
            xAxisKey: 'day',
            yAxisKey: 'wordCount'
          },
        },
        {
          label: 'Exercises Done',
          data: data,
          borderWidth: 1,
          borderColor: 'red',
          backgroundColor: 'red',
          pointStyle: 'circle',
          pointRadius: 7,
          pointHoverRadius: 5,
          parsing: {
            xAxisKey: 'day',
            yAxisKey: 'exercisesDone'
          }
        }
      ]
    },
    options: {
      responsive: false,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart'
        },
        tooltip: {
          callbacks: {
            footer: footer,
          }
        }
      }
    }
  });
})
