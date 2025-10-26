// window.addEventListener('scroll', function () {
//     const targetDiv = document.getElementById('fundo'); // sua div
//     const rect = targetDiv.getBoundingClientRect();

//     const links = document.querySelectorAll(".linksNav")

//     // Detecta se o topo da div ainda está visível
//     if (rect.top <= window.innerHeight && rect.bottom > 0) {
//         links.forEach(link => {
//             link.style.color = "#fff"
//         })
//     } else {
//         links.forEach(link => {
//             link.classList.add('rolagem')
//             link.style.color = "";
//         })
//     }
// })