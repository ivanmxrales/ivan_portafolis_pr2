window.onload = function() {
    setInterval(() => {
        // Obtenim l'hora actual, incloent-hi les hores, minuts i segons
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        // Actualitzem l'element amb la classe 'time' amb l'hora en format HH:MM:SS
        document.getElementsByClassName('time')[0].innerHTML = `${hours}:${minutes}:${seconds}`;
    }, 1000);  // Actualitzem cada segon
    
    // Actualitzem el dia actual
    document.getElementsByClassName('day')[0].innerHTML = new Date().toLocaleDateString();
};
