//Ver primeiro telefone ao clicar no botão
document.addEventListener("DOMContentLoaded", function () {
    const btnVerTelefone = document.getElementById("btnVerTelefone");
    const numeroTelefone = document.getElementById("numeroTelefone");

    btnVerTelefone.addEventListener("click", function () {
        numeroTelefone.classList.remove("telefone-oculto");
        numeroTelefone.classList.add("telefone-visivel");
    });
});

//Ver segundo telefone ao clicar no botão
document.addEventListener("DOMContentLoaded", function () {
    const btnVerTelefone = document.getElementById("btnVerTelefone2");
    const numeroTelefone = document.getElementById("numeroTelefone2");

    btnVerTelefone.addEventListener("click", function () {
        numeroTelefone.classList.remove("telefone-oculto");
        numeroTelefone.classList.add("telefone-visivel");
    });
});

//formulario
const inputCpf = document.getElementById("inputCpf");
const inputTelefone = document.getElementById("inputTelefone");
const formularioContato = document.getElementById("formularioContato");

//mascara para CPF
function aplicarMascaraCpf(valor) {
    return valor.replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};

//mascara para Telefone
function aplicarMascaraTelefone(valor) {
    return valor.replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2")
};

//exibir mascara cpf em tempo real
if (inputCpf) {
    inputCpf.addEventListener("input", function (e) {
        e.target.value = aplicarMascaraCpf(e.target.value);
    });
};

//exibir mascara telefone em tempo real
if (inputTelefone) {
    inputTelefone.addEventListener("input", function (e) {
        e.target.value = aplicarMascaraTelefone(e.target.value);
    });
};

// alerta de envio de formulario
if (formularioContato) {
    formularioContato.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Mensagem enviada com sucesso!");
        formularioContato.reset();
    });
}

//regra de 3
const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
const inputC = document.getElementById("inputC");
const resultadoRegra3 = document.getElementById("resultadoRegra3");
const btnCalcularRegra3 = document.getElementById("btnCalcularRegra3");
//calcular regra
function calcularRegra3() {
    const valA = parseFloat(inputA.value);
    const valB = parseFloat(inputB.value);
    const valC = parseFloat(inputC.value);

    if (!isNaN(valA) && !isNaN(valB) && !isNaN(valC)) {
        if (valA !== 0) {
            const resultado = (valB * valC) / valA;
            resultadoRegra3.textContent = resultado.toFixed(2);
        } else {
            resultadoRegra3.textContent = "Erro!";
        }
    } else {
        resultadoRegra3.textContent = "?";
    }

}
//calcular regra ao clicar no botão
if (btnCalcularRegra3) {
    btnCalcularRegra3.addEventListener("click", calcularRegra3);
}

// modal
const btnAbrirModal = document.getElementById("btnAbrirModal");
const imageModal = document.getElementById("imageModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalImage = document.getElementById("modalImage");

//abrir modal
if (btnAbrirModal && imageModal && closeModalBtn && modalImage) {
    btnAbrirModal.addEventListener("click", function () {
        imageModal.style.display = "flex";
    });
};
//fechar modal
if (closeModalBtn && imageModal) {
    closeModalBtn.addEventListener("click", function () {
        imageModal.style.display = "none";
    });
};
if (modalImage) {
    modalImage.addEventListener("click", function (event) {
        if (e.target === imageModal) {
            imageModal.style.display = "none";
        }
    });
};

// download imagem
document.getElementById('downloadBtn').addEventListener('click', function () {
    html2canvas(document.getElementById("printArea")).then(canvas => {
        const link = document.createElement('a');
        link.download = 'imagem.png';
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
