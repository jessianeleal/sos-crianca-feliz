let forms = $('.contato-sos');
console.log(forms);

forms.validate({
    errorElement: "span",
    rules: {
        nome: "required",
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        mensagem: "required"
    },
    messages: {
        nome: "Por favor, digite seu nome",
        email: {
          required: "Por favor, digite seu email",
          email: "Por favor, digite um email com o formato name@email.com"
        },
        telefone: {
            required: "Por favor, digite seu celular com o DDD + número"
        },
        mensagem: "Por favor, digite sua mensagem"
      }

})