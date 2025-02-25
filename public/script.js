const presente = document.getElementById("presente");
const popup = document.getElementById("popup");
const resgatar = document.getElementById("resgatar");

let cliques = 0;

// Garante que o pop-up esteja oculto no carregamento
popup.classList.add("oculto");

// Função para mostrar o pop-up
function mostrarPopup() {
    popup.classList.remove("oculto");
    dispararConfetes(); // Dispara confetes ao mostrar o pop-up
    document.addEventListener("click", fecharPopupFora); // Fecha o pop-up ao clicar fora
}

// Função para fechar o pop-up ao clicar fora dele
function fecharPopupFora(event) {
    if (!popup.contains(event.target) && event.target !== presente) {
        popup.classList.add("oculto");
        document.removeEventListener("click", fecharPopupFora); // Remove o listener
    }
}

// Função para disparar confetes
function dispararConfetes() {
    confetti({
        particleCount: 100, // Quantidade de confetes
        spread: 70, // Quão espalhados os confetes estarão
        origin: { y: 0.6 }, // Origem dos confetes (0.6 = um pouco acima do centro)
    });
}

// Contador de cliques no presente
presente.addEventListener("click", () => {
    cliques++;

    // Adiciona uma animação ao clicar
    presente.style.transform = "translateY(5px) scale(0.95)";
    setTimeout(() => {
        presente.style.transform = "translateY(0) scale(1)";
    }, 200); // Retorna à posição original após 200ms

    if (cliques === 3) {
        mostrarPopup(); // Mostra o pop-up após 3 cliques
        cliques = 0; // Reseta os cliques
    }
});

// Redirecionamento para o WhatsApp ao clicar no botão "Resgatar"
resgatar.addEventListener("click", () => {
    window.location.href = "https://wa.me/5599991916672?text=Olá!%20Quero%20resgatar%20meu%20cupom%20de%2025%25%20de%20desconto!";
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
