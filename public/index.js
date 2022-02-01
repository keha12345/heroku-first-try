console.log('ok');
let globalPath;

const setPhoto = async () => {
  const resp = await fetch('/galery/photo');
  const card = await resp.json();
  console.log(card);
  globalPath = card.path;
  document.querySelector('#photo').src = card.path;
};

setInterval(setPhoto, 4000);

document.querySelector('#send').addEventListener('click', async (e) => {
  // e.preventDefault();
  const text = document.querySelector('#newPath');
  const path = text.value;
  if (!text) return;
  const send = await fetch('/galery/photo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ path }),
  });
  text.value = '';
  console.log(await send.json());
});

/*
fetch('PATH', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(OBJECT),
  });
  */
del.addEventListener('click', async (e) => {
  const pass = prompt('admin secret phrase');
  fetch(`/admin/${pass}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ path: globalPath }),
  });
});
