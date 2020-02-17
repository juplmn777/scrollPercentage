const bar = document.querySelector(".bar");

addEventListener("scroll", function(){
    console.log(`
        taille de la page: ${document.body.scrollHeight}
        hauteur a afficher: ${innerHeight}
        position du scroll: ${pageYOffset}
    `);
});