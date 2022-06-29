$(document).ready(function() {
  $('.drawer').drawer();

  jQuery('a[href^="#"]').click(function() {
    // 移動速度を指定（ミリ秒）
    let speed = 300;
    // hrefで指定されたidを取得
    let id = jQuery(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = jQuery("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得
    let position = jQuery(target).offset().top;
    // ターゲットの位置までspeedの速度で移動
    jQuery("html, body").animate(
      {
        scrollTop: position - $( '#js-header' ).outerHeight()
     },
      speed
    );
    return false;
  });

  new WOW().init()

  let $form = $( '#js-form' )
  $form.submit(function(e) {
    $.ajax({
     url: $form.attr('action'),
     data: $form.serialize(),
     type: "POST",
     dataType: "xml",
     statusCode: {
        0: function() {
          //送信に成功したときの処理
          $form.slideUp()
          $( '#js-success').slideDown()
        },
        200: function() {
          //送信に失敗したときの処理
          $form.slideUp()
          $( '#js-error').slideDown()
        }
      }
    });
    return false;
  });

  //formの入力確認
  let $submit = $( '#js-submit')
  $( '#js-form input, #js-form textarea' ).on( 'change', function() {
    if(
      $( '#js-form input[type="text"]' ).val() !== "" &&
      $( '#js-form input[type="email"]' ).val() !== "" &&
      $( '#js-form input[name="entry.1673664421"]' ).prop( 'checked' ) === true
    ) {
      $submit.prop( 'disabled' , false)
      $submit.addClass( '-active' )
    } else {
      $submit.prop( 'disabled' , true)
      $submit.removeClass( '-active' )
    }
  })
});

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 1.3,
  spaceBetween: 20,

  breakpoints: {
    767: {
      slidesPerView: 2.78,
      spaceBetween: 40
    }
  }
});

jQuery('.qa-q').on('click', function() {
  jQuery(this).next().slideToggle();
  jQuery(this).children('.qa-icon1').toggleClass('is-open');
})
