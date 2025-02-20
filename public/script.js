const presente = document.getElementById("presente");
const popup = document.getElementById("popup");
const resgatar = document.getElementById("resgatar");

let cliques = 0;

// Garante que o pop-up esteja oculto no carregamento
popup.classList.add("oculto");

presente.addEventListener("click", () => {
    cliques++;

    if (cliques === 3) {
        popup.classList.remove("oculto"); // Mostra o pop-up
        cliques = 0; // Reseta os cliques para evitar cliques extras
    }
});

// Redirecionamento para o WhatsApp ao clicar no botão "Resgatar"
resgatar.addEventListener("click", () => {
    window.location.href = "https://wa.me/5599991916672?text=Olá!%20Quero%20resgatar%20meu%20cupom%20de%2020%25%20de%20desconto!";
});

// Ajuste de tamanho para a versão mobile
const ajustarTamanhoPresente = () => {
    if (window.innerWidth <= 500) {
        presente.style.width = "100px"; // Reduz o tamanho do presente para telas menores
    } else {
        presente.style.width = "150px"; // Mantém o tamanho padrão em telas maiores
    }
};

// Chama a função ao carregar a página e ao redimensionar a tela
window.addEventListener("load", ajustarTamanhoPresente);
window.addEventListener("resize", ajustarTamanhoPresente);
