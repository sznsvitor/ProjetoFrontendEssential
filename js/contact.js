/**
 * contact.js — Interatividade da página de contato do ClimaHoje
 * Deve ser colocado em: js/contact.js
 *
 * Funcionalidades:
 *  1. Validação do formulário com feedback visual
 *  2. Simulação de envio com estado de loading
 *  3. Toast de confirmação após envio bem-sucedido
 *  4. Contador de caracteres na mensagem
 */
 
/* Aguarda o DOM estar completamente carregado */
document.addEventListener('DOMContentLoaded', function () {
 
  /* ----------------------------------------------------------
     SELEÇÃO DOS ELEMENTOS DO DOM
     ---------------------------------------------------------- */
  const form    = document.getElementById('contactForm');
  const btnSend = document.getElementById('btnSend');
  const toastEl = document.getElementById('successToast');
  const textarea = document.getElementById('mensagem');
 
  /* ----------------------------------------------------------
     FUNCIONALIDADE 1: Contador de caracteres na mensagem
     Mostra quantos caracteres foram digitados (máx. 500)
     ---------------------------------------------------------- */
  const maxChars = 500;
 
  /* Cria o elemento de contador dinamicamente */
  const counter = document.createElement('small');
  counter.id = 'charCounter';
  counter.style.cssText = 'display:block; text-align:right; margin-top:.3rem; font-size:.78rem; color: var(--sky-pale); opacity:.7;';
  counter.textContent = '0 / ' + maxChars;
 
  /* Insere o contador logo após o textarea */
  textarea.parentNode.insertBefore(counter, textarea.nextSibling);
 
  /* Atualiza o contador a cada tecla digitada */
  textarea.addEventListener('input', function () {
    const len = textarea.value.length;
 
    /* Limita o número de caracteres */
    if (len > maxChars) {
      textarea.value = textarea.value.substring(0, maxChars);
    }
 
    /* Muda de cor quando está quase no limite */
    if (len >= maxChars * 0.9) {
      counter.style.color = '#f87171'; /* vermelho de aviso */
    } else {
      counter.style.color = '';
    }
 
    counter.textContent = Math.min(len, maxChars) + ' / ' + maxChars;
  });
 
 
  /* ----------------------------------------------------------
     FUNCIONALIDADE 2: Validação + envio do formulário
     ---------------------------------------------------------- */
  form.addEventListener('submit', function (e) {
    e.preventDefault();      /* impede o reload da página */
    e.stopPropagation();
 
    /* Verifica se todos os campos obrigatórios estão corretos */
    if (form.checkValidity()) {
      enviarFormulario();
    } else {
      /* Aciona o feedback visual de erro do Bootstrap */
      form.classList.add('was-validated');
    }
  });
 
 
  /* ----------------------------------------------------------
     FUNCIONALIDADE 3: Simula o envio (loading → sucesso)
     Em produção, substitua o setTimeout por uma chamada fetch/AJAX
     ---------------------------------------------------------- */
  function enviarFormulario() {
    /* Estado de carregamento: desativa botão e muda texto */
    btnSend.textContent = '⏳  Enviando…';
    btnSend.disabled = true;
 
    /*
     * Simula uma requisição assíncrona de 1,5 segundo.
     * Em produção, use fetch() aqui para enviar os dados ao servidor.
     */
    setTimeout(function () {
 
      /* Reseta o formulário após o "envio" */
      form.reset();
      form.classList.remove('was-validated');
 
      /* Reseta o contador de caracteres */
      counter.textContent = '0 / ' + maxChars;
      counter.style.color = '';
 
      /* Restaura o botão */
      btnSend.textContent = '✈️  Enviar Mensagem';
      btnSend.disabled = false;
 
      /* Exibe o toast de sucesso */
      mostrarToast();
 
    }, 1500);
  }
 
 
  /* ----------------------------------------------------------
     FUNCIONALIDADE 4: Exibe o toast de confirmação
     ---------------------------------------------------------- */
  function mostrarToast() {
    /* Exibe o toast */
    toastEl.style.display = 'block';
    toastEl.style.opacity = '1';
    toastEl.style.transition = '';
 
    /* Após 4 segundos, aplica fade-out e depois esconde */
    setTimeout(function () {
      toastEl.style.transition = 'opacity 0.5s ease';
      toastEl.style.opacity = '0';
 
      setTimeout(function () {
        toastEl.style.display = 'none';
        toastEl.style.opacity = '1';
        toastEl.style.transition = '';
      }, 500);
    }, 4000);
  }
 
});