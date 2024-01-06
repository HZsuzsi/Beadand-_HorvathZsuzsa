function hatvanyoz(szamok, hatvany) {
    // Számokat tartalmazó tömb
    const validSzamok = szamok.filter(szam => !isNaN(szam));

    // Ellenőrizzük a paraméterek típusát
    if (validSzamok.length === 0 || typeof hatvany !== 'number') {
        return [];
    }

    // Hatványozzuk a tömb elemeit
    const eredmeny = validSzamok.map(szam => Math.pow(szam, hatvany));

    return eredmeny;
}

function megjelenitEredmeny() {
    // Számokat és hatványt kinyerjük az űrlapból
    const szamokInput = document.getElementById('szamok');
    const hatvanyInput = document.getElementById('hatvany');

    // Számokat vesszővel elválasztva tömbbé alakítjuk
    const szamok = szamokInput.value.split(',').map(szam => szam.trim());

    // Ellenőrizzük, hogy minden elem szám-e
    if (szamok.some(val => isNaN(parseFloat(val))) || isNaN(parseInt(hatvanyInput.value))) {
        document.getElementById('eredmeny').innerHTML = 'Eredmény:';
        return;
    }

    // Hatványt számmá alakítjuk
    const hatvany = parseInt(hatvanyInput.value);

    // Ha nincs szám a tömbben, ne jelenítsük meg az eredményt
    if (szamok.length === 0 || szamok.every(val => val === '')) {
        document.getElementById('eredmeny').innerHTML = 'Eredmény:';
        return;
    }

    // Ha a számok után szöveg következik, ne jelenítsük meg az eredményt
    if (szamok.some(val => isNaN(parseFloat(val)))) {
        document.getElementById('eredmeny').innerHTML = 'Eredmény:';
        return;
    }

    // Hatványozás
    const eredmeny = hatvanyoz(szamok, hatvany);

    // Az eredményt megjelenítjük a HTML-ben
    const eredmenyElem = document.getElementById('eredmeny');
    eredmenyElem.innerHTML = 'Eredmény: ' + eredmeny.join(', ');
}
