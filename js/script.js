const bar = document.querySelector(".bar");

addEventListener("scroll", function(){
const max = document.body.scrollHeight - innerHeight;
const percentage = pageYOffset / max * 100;

bar.style.width  = percentage + "%";

    // console.log(`
    //     taille de la page: ${document.body.scrollHeight}
    //     hauteur a afficher: ${innerHeight}
    //     position du scroll: ${pageYOffset}
    // `);
});