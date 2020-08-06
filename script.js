let phrases = [
  { text: 'инструктора по йоге', image: 'https://raw.githubusercontent.com/ekaterinavl/sjmsites/master/1.gif' },
  { text: 'музыкального магазина', image: 'https://raw.githubusercontent.com/ekaterinavl/sjmsites/master/2.gif' },
  { text: 'революционной пиццерии', image: 'https://raw.githubusercontent.com/ekaterinavl/sjmsites/master/3.gif' },
  { text: 'репетитора', image: 'https://raw.githubusercontent.com/ekaterinavl/sjmsites/master/4.gif' },
  { text: 'книжной лавки', image: 'https://raw.githubusercontent.com/ekaterinavl/sjmsites/master/5.gif' },
  { text: 'салона красоты', image: 'https://raw.githubusercontent.com/ekaterinavl/sjmsites/master/6.gif' },
  { text: 'новой кофейни', image: 'https://raw.githubusercontent.com/ekaterinavl/sjmsites/master/7.gif' },
  { text: 'ресторанчика у дома', image: 'https://raw.githubusercontent.com/ekaterinavl/sjmsites/master/8.gif' },
  { text: 'груминга', image: 'https://raw.githubusercontent.com/ekaterinavl/sjmsites/master/9.gif' },
  { text: 'брутального барбершопа', image: 'https://raw.githubusercontent.com/ekaterinavl/sjmsites/master/10.gif' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');
for (let i = 0; i <= 2; i = i + 1) {
  // выводите элементы массива в консоль, используя i
  smoothly (phrase, 'textContent', phrases[i].text);
  smoothly(image, 'src', phrases[i].image);
}
button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});
