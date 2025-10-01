const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const hexP = document.getElementById('hex');

// Button 1: make purple
btn1.addEventListener('click', () => {
  document.body.style.backgroundColor = '#00b3ffff';
  hexP.textContent = '#00b3ffff';
});

// Button 2: random color
btn2.addEventListener('click', () => {
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  const hex = '#' + [r,g,b].map(x => x.toString(16).padStart(2,'0')).join('');
  document.body.style.backgroundColor = hex;
  hexP.textContent = hex;
});
