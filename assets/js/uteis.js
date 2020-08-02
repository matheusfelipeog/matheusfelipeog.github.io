document.addEventListener('DOMContentLoaded', function main(){

    // Bloquear drag das imagens para não prejudicar a experiência
    document.querySelectorAll('.logo').forEach(logo => {
        logo.setAttribute('ondragstart', 'return false')
    });

});