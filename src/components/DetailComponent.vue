<template>
    <main id="detail">
      <div class="wrapper">
        <section>
          <div class="top__area swiper">
            <ul class="swiper-wrapper">
              <li class="swiper-slide">
                <img src="https://picsum.photos/600/400" alt="">
              </li>
              <li class="swiper-slide">
                <img src="https://picsum.photos/600/400" alt="">
              </li>
              <li class="swiper-slide">
                <img src="https://picsum.photos/600/400" alt="">
              </li>
              <li class="swiper-slide">
                <img src="https://picsum.photos/600/400" alt="">
              </li>
              <li class="swiper-slide">
                <img src="https://picsum.photos/600/400" alt="">
              </li>
            </ul>
            <div class="swiper-foot -flex">
              <div class="swiper-price">¥3,000<span>/日</span></div>
              <div class="swiper-pagination"></div>
              <div class="swiper-rate rate">5.0</div>
            </div>
          </div>
          <div class="detail__area">
            <div class="detail__title">
              <h2>ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。</h2>
              <time class="detail__time" datetime="2023-06-15 10:25">2023-06-15 10:25</time>
            </div>
            <div class="detail__calender">
              <h3>スケジュール</h3>
              <div class="detail__calender__area">
                <img src="../images/detail_calendar.svg" alt="カレンダー">
              </div>
            </div>
            <div class="detail__input">
              <div class="detail__input-icon -flex">
                <div class="animal__icon">
                  <img src="../images/icon_dog.png" alt="犬OK">
                  <p>犬OK</p>
                </div>
                <div class="animal__icon">
                  <img src="../images/icon_cat.png" alt="猫OK">
                  <p>猫OK</p>
                </div>
                <div class="animal__icon">
                  <img src="../images/icon_food.png" alt="ペットフード有り">
                  <p>ペットフード<br>有り</p>
                </div>
              </div>
            </div>
            <div class="detail__map">
              <h3>所在地</h3>
              <p class="map__address">東京都葛飾区</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12965.635424997885!2d139.70905915541988!3d35.66693349999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b7aef32c9c3%3A0x8d47cb2688d2f8df!2z5qCq5byP5Lya56S-TU9OU1RFUiBESVZF77yI44Oi44Oz44K544K_44O844OA44Kk44OW77yJ44CQTU9OU1RFUiBTVFVESU8g5LmD5pyo5Z2C44CR!5e0!3m2!1sja!2sjp!4v1688470263843!5m2!1sja!2sjp" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="detail__input-text -flex -center">
              <div class="detail__price">
                <span>3,000</span><small>/日</small>
              </div>
              <button class="detail__enter-button active" onclick="location.href='../chat/'">やりとりを始める</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  </template>
  
  <script>
  export default {
    props: {
      details: Object // 後でサーバーから取得するデータ
    }
  }
  </script>