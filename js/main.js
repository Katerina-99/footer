$(document).ready(function () {
  // $('.button').click(function () {
  //   //  console.log('click')
  //   alert('Вы подписаны на рассылку')
  // })
  $('.button').click(function () {
    var inputValue = $('.form-input').val();
    alert(inputValue + ' подписан на рассылку');
});
})