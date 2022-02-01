document.addEventListener('click', event => {
    if (event.target.dataset.type === 'remove') {
        const id = event.target.dataset.id;

        remove(id).then(() => {
            event.target.closest('li').remove();
        });
    }
    if (event.target.dataset.type === 'change') {
        const id = event.target.dataset.id;
        const newTitle = prompt('Введите новое название таска', '');

        change(id, {title: newTitle}).then(() => {
          event.target.closest('li').firstChild.nodeValue = newTitle;
        });
    }
});


async function remove(id) {
    await fetch(`/${id}`, {method: 'DELETE'});
}

async function change(id, title) {
    await fetch(`/${id}`, {
      method: 'PUT',
      body: JSON.stringify(title),
      headers: {
        'Content-Type': 'application/json'
      }
    });
}
