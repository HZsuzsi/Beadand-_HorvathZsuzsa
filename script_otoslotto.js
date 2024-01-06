function otoslotto() {
    let lottoszamok = [];

    while (lottoszamok.length < 5) {
        let veletlenSzam = Math.floor(Math.random() * 90) + 1;

        if (lottoszamok.indexOf(veletlenSzam) === -1) {
            lottoszamok.push(veletlenSzam);
        }
    }

    lottoszamok.sort((a, b) => a - b);

    return lottoszamok;
}

function generaldEsKiir() {
    const eredmenyElem = document.getElementById('eredmeny');

    // Generáljuk az öt lottószámot
    const lottoszamok = otoslotto();

    // Az eredményt megjelenítjük a HTML-ben
    eredmenyElem.textContent = 'Az Ön számai: ' + lottoszamok.join(', ');
}

// Az oldal betöltésekor generálunk és megjelenítünk egy kezdeti számokat
generaldEsKiir();
