const cats = {
    abyssinian: '😸',
    'american-bobtail' : '🐱',
    'siam': '🙀',
    'bombay' : '😼'
    };

for (let key in cats) {
    if (key.length > 4) {
        console.log(cats[key]);
    }
        
    }   

    