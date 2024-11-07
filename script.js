document.addEventListener("DOMContentLoaded", function() {
    const botoes = document.querySelectorAll(".btn");

    botoes.forEach(function(botao) {
        botao.addEventListener("click", function() {
           
            const proximoPasso = this.getAttribute("data-proximo");

           
            document.querySelectorAll(".passo").forEach(function(passo) {
                passo.classList.remove("ativo");
            });

           
            const passoAtual = document.getElementById("passo-" + proximoPasso);
            passoAtual.classList.add("ativo");
        });
    });
});