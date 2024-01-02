$(document).ready(function() {
    $('#feedbackForm').submit(function(event) {
      event.preventDefault();

      const name = $('#name').val();
      const email = $('#email').val();
      const message = $('#message').val();

      const feedbackData = {
        name: name,
        email: email,
        message: message
      };


      let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
      feedbacks.push(feedbackData);


      localStorage.setItem('feedbacks', JSON.stringify(feedbacks));


      $('#feedbackForm')[0].reset();
      alert('Сообщение отправлено!');

    });
  });