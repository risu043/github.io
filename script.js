const button = document.querySelector('#button');
const image = document.querySelector('#image');

const lists = [
  'omikuji_daikichi.png',
  'omikuji_kichi.png',
  'omikuji_chuukichi.png',
  'omikuji_kichi.png',
  'omikuji_suekichi.png',
  'omikuji_kyou.png',
  'omikuji_daikyou.png',
];

button.addEventListener('click', () => {
  const random = Math.floor(Math.random() * lists.length);
  const content = `<img src="${lists[random]}" alt="" />`;
  image.innerHTML = ('beforeend', content);
});

const keyframes = {
  opacity: [0, 1],
  translate: ['0 20px', 0],
};

image.animate(keyframes, 1000);
