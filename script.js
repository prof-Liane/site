$(document).ready(function () {
  $('.img-box img').click(function () {
    let altText = $(this).attr('alt');
    let preco = "";

    if (altText === "X-Salada") preco = "R$9,00";
    else if (altText === "Batata") preco = "R$5,00";
    else if (altText === "Refrigerante") preco = "R$4,00";

    if (!$('.info-box').text().includes(altText)) {
      $('.info-box').append(`<h5>${altText} ${preco}</h5>`);
    } else {
      alert(`${altText} já foi adicionado ao pedido.`);
    }
  });

  $('#btn2').click(function () {
    $('.info-box h5').remove();
  });
});
