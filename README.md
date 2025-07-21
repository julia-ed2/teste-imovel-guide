# Teste Front-End | Imóvel Guide

Este projeto é a implementação da Parte 1 de um teste técnico Front-End para a Imóvel Guide, focado em manipulação de DOM, formulários, cálculos, modais, captura de tela e animações CSS.

## Funcionalidades Implementadas

O projeto foi dividido em "Quadros" para facilitar a organização e o desenvolvimento das funcionalidades:

* **QUADRO 1: Ver Telefone Formatado e copia desfocada**
    * Ao clicar no botão "Ver Telefone", exibe um número de telefone formatado (Ex: (99) 99999-9999).
    * As imagens também apresentam uma cópia desfocada de fundo

* **QUADRO 2: Formulário com Máscaras e Alerta**
    * Implementa máscaras de digitação em tempo real para campos de CPF e Telefone.
    * Exibe um "Alert" ao clicar no botão "Enviar Mensagem".

* **QUADRO 3: Cálculo de Regra de 3**
    * Desenvolve uma função de "Regra de 3" que exibe o resultado em um retângulo laranja com base nos inputs fornecidos. O cálculo é atualizado ao clicar no botão "Calcular".

* **QUADRO 4: Modal de Imagem Centralizado**
    * Ao clicar no botão "Abrir Imagem no Modal", um modal é exibido no centro da tela.
    * O modal é responsivo, centralizado vertical e horizontalmente (usando CSS Flexbox) e possui um fundo escurecido.

* **QUADRO 5: Download de Conteúdo como Imagem**
    * Utiliza a biblioteca `html2canvas` para "printar" um quadrado específico (contendo imagem, retângulo e texto) e permite o download como imagem PNG ou JPEG.

* **QUADRO 6: Animação de Zoom da Imagem**
    * Apresenta uma imagem com uma animação de zoom que é acionada ao carregar a página. A animação é controlada puramente via CSS (`@keyframes`).

## Tecnologias Utilizadas

* **HTML5:** Estrutura base da página.
* **CSS3:** Estilização, animações.
* **Botstrap:** responsividade e layout (Flexbox)
* **JavaScript (ES6+):** Lógica interativa dos quadros, manipulação de DOM e integração de bibliotecas.
* **html2canvas:** Biblioteca JavaScript para captura de tela e download de imagens.

## Observações Adicionais

* O projeto foi desenvolvido com foco em responsividade, utilizando técnicas CSS para adaptação a diferentes tamanhos de tela (Desktop, Celular, Tablet).

---

**Data:** 21/07/2025
