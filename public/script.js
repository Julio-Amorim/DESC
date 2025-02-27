const presente = document.getElementById("presente");
const popup = document.getElementById("popup");
const resgatar = document.getElementById("resgatar");
const body = document.body;

let cliques = 0;

// Garante que o pop-up esteja oculto no carregamento
popup.classList.add("oculto");

// Função para mostrar o pop-up
function mostrarPopup() {
    popup.classList.remove("oculto");
    body.classList.add("sem-rolagem"); // Bloqueia a rolagem
    dispararConfetes(); // Dispara confetes ao mostrar o pop-up
    document.addEventListener("click", fecharPopupFora); // Fecha o pop-up ao clicar fora
}

// Função para fechar o pop-up ao clicar fora dele
function fecharPopupFora(event) {
    // Verifica se o clique foi fora do pop-up e não no presente
    if (!popup.contains(event.target)) {
        popup.classList.add("oculto");
        body.classList.remove("sem-rolagem"); // Libera a rolagem
        document.removeEventListener("click", fecharPopupFora); // Remove o listener
    }
}

// Função para disparar confetes
function dispararConfetes() {
    confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#FFC0CB", "#87CEEB", "#FFD700", "#FFA07A"],
    });
}

// Contador de cliques no presente
presente.addEventListener("click", (event) => {
    event.stopPropagation(); // Impede que o clique se propague para o documento
    cliques++;

    if (cliques === 3) {
        mostrarPopup(); // Mostra o pop-up após 3 cliques
        cliques = 0; // Reseta os cliques
    }
});

// Redirecionamento para o WhatsApp ao clicar no botão "Resgatar"
resgatar.addEventListener("click", () => {
    window.location.href = "https://wa.me/5599982452707?text=Olá!%20Quero%20resgatar%20meu%20cupom%20de%2025%25%20de%20desconto!";
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