

$(document).ready(function () {
   $('.banner-email__input').keydown(function (e) {
      if (e.keyCode === 13) {
         // alert("dfds");
         $(".banner-email__input").on('keyup', function () {
            let email = $(this).val();
            if ((email.length > 0 && (email.match(/.+?\@.+/g) || []).length !== 1) || email == '') {
               $(".page-main__btn").prop('disabled', true);
            } else {
               $(".banner-email").slideUp(800);
               $(".page-main__btn").prop('disabled', false);
            }
         });
      }
   });
   $('.js-star-item').mouseover(function () {
      count = 0;
      var i = 0;
      var j = 0;
      var thisParent = $(this).closest('.js-star-block');
      var thisItem = thisParent.find('.js-star-item');

      $(thisItem).each(function () {
         if ($(this).hasClass('active')) {
            count++;
         }
      })
      $(thisItem).each(function () {
         $(this).removeClass('active');
      })
      $(this).addClass('js-prov');
      $(thisItem).each(function () {
         $(this).removeClass('js-hover');
      })
      $(thisItem).each(function (index) {
         if ($(this).hasClass('js-prov')) {
            i = index;
         }
      })
      $(thisItem).each(function (index) {
         if (index < i + 1) {
            $(this).addClass('js-hover');
         }
      })
   })
   $('.js-star-item').mouseout(function () {
      var thisParent = $(this).closest('.js-star-block');
      var thisItem = thisParent.find('.js-star-item');

      $(this).removeClass('js-prov');
      $(thisItem).each(function () {
         $(this).removeClass('js-hover');
      })
      $(thisItem).each(function (index) {
         if (index < count) {
            $(this).addClass('active');
         }
      })
   })
   $('.js-star-item').on('click', function () {
      var count_star = 0;
      count = 0;
      var i = 0;
      var thisParent = $(this).closest('.js-star-block');
      var thisItem = thisParent.find('.js-star-item');
      $(this).addClass('active');
      $(thisItem).each(function (index) {
         if ($(this).hasClass('active')) {
            i = index;
         }
      })
      $(thisItem).each(function () {
         $(this).removeClass('active');
      })
      $(thisItem).each(function (index) {
         if (index < i + 1) {
            $(this).addClass('active');
            count_star++;
         }
      })
      if (count_star > 3) {
         window.location.href = "review.html";
      } else if (count_star < 4) {
         window.location.href = "result.html";
      }
   });
   if ($("#file").prop("disabled", true)) {
      $("#file").closest(".upload__box").find(".upload").addClass("disabled");
   }
   $(".review__link").on("click", function () {
      var btn = $(this);
      var block = btn.closest(".rewiew__steps");
      var input = block.find("#file");

      input.prop("disabled", false);
      block.find(".upload").removeClass("disabled")
   });
   var file = document.querySelector('#file');
   var upload = document.querySelector('.upload');

   file.addEventListener('input', () => {
      if (file.files.length) {
         upload.innerText = file.files[0].name;
         setTimeout(function () {
            window.location.href = "result.html";
         }, 1500);
      }
   });
});