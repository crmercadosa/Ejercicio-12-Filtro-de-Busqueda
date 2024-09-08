const searchBox = document.getElementById('searchBox');
const itemList = document.getElementById('itemList');

// Evento para filtrar lo que se busca
searchBox.addEventListener('input', function() {
    const filter = searchBox.value.toLowerCase();
    const items = itemList.getElementsByTagName('li');

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const text = item.textContent || item.innerText;

        if (text.toLowerCase().indexOf(filter) > -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    }
});
