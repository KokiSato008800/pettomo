<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

</script>

<style>
@charset "UTF-8";
/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%
}
body {
  margin: 0
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block
}
audio,
canvas,
progress,
video {
  display: inline-block
}
audio:not([controls]) {
  display: none;
  height: 0
}
progress {
  vertical-align: baseline
}
[hidden],
template {
  display: none
}
a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects
}
a:active,
a:hover {
  outline-width: 0
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted
}
b,
strong {
  font-weight: inherit
}
b,
strong {
  font-weight: bolder
}
dfn {
  font-style: italic
}
mark {
  background-color: #ff0;
  color: #000
}
small {
  font-size: 80%
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline
}
sub {
  bottom: -.25em
}
sup {
  top: -.5em
}
img {
  border-style: none
}
svg:not(:root) {
  overflow: hidden
}
code,
kbd,
pre,
samp {
  font-family: monospace,sans-serif;
  font-size: 1em
}
hr {
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
  height: 0;
  overflow: visible
}
button,
input,
select,
textarea {
  font: inherit;
  margin: 0
}
optgroup {
  font-weight: 700
}
button,
input {
  overflow: visible
}
button,
select {
  text-transform: none
}
[type=reset],
[type=submit],
button,
html [type=button] {
  -webkit-appearance: button
}
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0
}
[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText
}
legend {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal
}
textarea {
  overflow: auto
}
[type=checkbox],
[type=radio] {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0
}
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto
}
[type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px
}
[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none
}
::-webkit-input-placeholder {
  color: inherit;
  opacity: .54
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit
}
blockquote,
code,
dd,
div,
dl,
dt,
fieldset,
figure,
form,
h1,
h2,
h3,
h4,
h5,
h6,
legend,
li,
ol,
p,
pre,
ul {
  margin: 0;
  padding: 0
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 12px
}
li {
  list-style: none
}
pre {
  white-space: pre-wrap;
  word-wrap: break-word
}
q {
  quotes: none
}
img {
  vertical-align: top;
  line-height: 1
}
caption {
  padding: 0
}
td,
th {
  padding: 0
}
fieldset {
  border: 0
}
body,
html {
  height: 100%
}
html {
  background: #fff
}
body {
  font-size: 1.4;
  font-size: 14px;
  background: #fff;
  color: #000;
  font-family: "ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic ProN","メイリオ",Meiryo,sans-serif;
  line-height: 1.6;
  position: relative;
  width: 100%;
  min-height: 100%
}
@media (max-width:640px) {
  body {
    font-size: 1.3;
    font-size: 13px
  }
}
@media (max-width:640px) {
  body {
    overflow-x: hidden
  }
  .screen {
    overflow-x: hidden
  }
  .wrapper {
    overflow-x: hidden
  }
}
.is-show {
  display: inherit!important
}
.is-hide {
  display: none!important
}
.is-visible {
  visibility: visible!important
}
.is-hidden {
  visibility: hidden!important
}
.is-fixed {
  position: fixed!important
}
.is-absolute {
  position: absolute!important
}
.is-overflow-hidden {
  overflow: hidden!important
}
.is-disable a {
  opacity: .4;
  cursor: default
}
.alignLeft {
  text-align: left
}
.alignRight {
  text-align: right
}
.alignCenter {
  text-align: center
}
.left {
  float: left
}
.right {
  float: right
}
.clear {
  clear: both
}
.inline {
  display: inline!important
}
.inlineBlock {
  display: inline-block!important
}
@media (min-width:961px) {
  .is-sp {
    display: none
  }
}
@media (min-width:641px) and (max-width:960px) {
  .is-sp {
    display: none
  }
}
@media (max-width:640px) {
  .is-pc {
    display: none
  }
}
.header {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  -webkit-box-shadow: 0 4px 4px 0 rgba(0,0,0,.25);
          box-shadow: 0 4px 4px 0 rgba(0,0,0,.25);
  border-bottom: solid 2px #000
}
.header__wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 0 10px;
  background-color: #ede3db
}
.header__menu {
  width: 40px;
  height: 40px;
  padding: 10px 0;
  padding-right: 10px;
  border-right: solid 2px #000
}
.header__menu img {
  width: 20px;
  height: 20px
}
.header__mail-list {
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center
}
.header__logo a {
  color: #f24e1e;
  font-weight: 700;
  text-decoration: none;
  font-size: 21px
}
.footer__chat {
  position: fixed;
  bottom: 0;
  width: 90%;
  padding: 20px 5%;
  background: #9e9e9e
}
.footer__chat .footer__wrapper {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center
}
.footer__chat img {
  width: 100%;
  height: 100%;
  margin-right: 10px
}
.footer__chat__button {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center
}
.footer__chat__text {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center
}
.footer__chat__text textarea {
  width: 200px;
  height: 16px;
  padding: 10px;
  font-size: 14px;
  line-height: 14px;
  border: none;
  border-radius: 21px
}
.footer {
  padding: 20px;
  background-color: #657a84
}
.footer__copyright {
  color: #fff;
  text-align: center
}
#detail + .footer {
  padding: 20px;
  background-color: #657a84;
  height: 98.8px
}
#index {
  background-color: #ede3db
}
#index section {
  width: 90%;
  margin: auto
}
.announcement {
  position: relative;
  padding: 15px 15px 15px 60px;
  background-color: #a7d0bf;
  font-size: 12px;
  font-weight: 700;
  border-bottom: solid 2px #000;
  cursor: pointer
}
.announcement::before {
  content: "";
  position: absolute;
  left: 30px;
  width: 20px;
  height: 20px;
  background-image: url(./assets/icon_speaker.svg)
}
.mainVisual {
  margin-top: 30px;
  margin-bottom: 120px
}
.index__section {
  margin-bottom: 120px
}
.index__section:last-of-type {
  margin-bottom: 50px
}
.index__title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin-bottom: 40px
}
.index__title img {
  max-width: -webkit-fit-content;
  max-width: -moz-fit-content;
  max-width: fit-content
}
.index__title img:first-of-type {
  margin-bottom: 15px
}
.index__content a {
  display: block;
  margin-bottom: 25px
}
.good__item {
  margin-bottom: 40px
}
main {
  margin-top: 62px
}
.top__search {
  color: #ca4118;
  padding: 15px 25px
}
.list__title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100%;
  background-color: #edf5fa
}
.list__title h2 {
  font-size: 38px;
  font-weight: 700
}
.list__area {
  padding: 40px 0;
  background-color: #ede3db
}
.list__area .button__contents {
  width: 90%;
  margin: 0 auto 80px
}
.list__area .button__contents .-flex {
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start
}
.list__area .button__contents .search__button {
  margin-left: 10px;
  padding: 8px 16px;
  color: #f24e1e;
  background-color: #fff;
  border: 1px solid #f24e1e;
  border-radius: 20px
}
.list__contents {
  width: 90%;
  margin: auto;
  margin-bottom: 30px;
  border: solid 1px #000
}
.list__contents:last-of-type {
  margin-bottom: 0
}
.list__contents a {
  color: #000;
  text-decoration: none
}
.list__images {
  position: relative
}
.list__user__image {
  position: absolute;
  bottom: 0;
  z-index: 1;
  left: 0
}
.list__text {
  padding: 15px;
  background-color: #fff
}
.list__text-title {
  font-size: 18px
}
.list__text-price {
  font-size: 16px;
  margin-bottom: 15px
}
.list__text-rate::before {
  background-image: url(./assets/icon_hand_gray.svg)
}
.list__text-content {
  font-size: 14px
}
.top__area img {
  width: 100%
}
#detail {
  background-color: #ede3db
}
.detail__area {
  width: 90%;
  margin: 25px auto
}
.detail__area h3 {
  font-size: 20px;
  line-height: 34px
}
.detail__title {
  margin-bottom: 20px
}
.detail__title h2 {
  font-size: 20px;
  text-align: left;
  line-height: 34px;
  margin-bottom: 10px
}
.detail__time {
  position: relative;
  padding-left: 25px;
  color: #5f5f5f;
  font-size: 12px
}
.detail__time::before {
  content: "";
  position: absolute;
  top: -3px;
  left: 0;
  width: 16px;
  height: 16px;
  background-image: url(./assets/icon_date.png);
  background-size: contain
}
.detail__calender h3,
.detail__input h3,
.detail__map h3 {
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px
}
.detail__calender h3::before,
.detail__input h3::before,
.detail__map h3::before {
  content: "";
  position: absolute;
  top: 6px;
  left: 0;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: contain
}
.detail__calender h3::before {
  background-image: url(./assets/icon_schedule.svg)
}
.detail__input h3::before {
  background-image: url(./assets/icon_service.svg)
}
.detail__map h3::before {
  background-image: url(./assets/icon_location.svg)
}
.detail__input {
  padding: 40px 0
}
.detail__input-text {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 90%;
  padding: 20px 5%;
  background: #f5f5f5;
  -webkit-box-shadow: 0 -2px 15px 0 rgba(0,0,0,.14);
          box-shadow: 0 -2px 15px 0 rgba(0,0,0,.14)
}
.detail__input-icon {
  margin-top: 10px
}
.detail__input-icon .animal__icon {
  width: calc(33.3333333333% - 40px);
  padding: 15px;
  padding-bottom: 0;
  background-color: #fff;
  text-align: center;
  border: solid 1px #5f5f5f;
  border-radius: 10px
}
.detail__input-icon .animal__icon img {
  width: 50px;
  height: 50px;
  -o-object-fit: contain;
     object-fit: contain
}
.detail__input-icon .animal__icon p {
  margin-top: 10px
}
.detail__price span {
  font-size: 14px
}
.map__address {
  margin-bottom: 15px;
  font-size: 13px;
  font-weight: 700
}
.swiper-foot {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  padding: 10px 25px;
  background: rgba(0,0,0,.2);
  color: #fff
}
.swiper-price {
  font-size: 16px
}
.swiper-price span {
  font-size: 12px
}
.rate {
  position: relative;
  padding-left: 30px;
  font-size: 20px;
  line-height: 1
}
.rate::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 23px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: contain
}
.swiper-rate {
  background-image: url(./assets/icon_hand_white.svg);
  background-repeat: no-repeat
}
.swiper-pagination-bullet {
  background-color: #fff;
  opacity: .5
}
.swiper-pagination-bullet-active {
  opacity: 1;
  width: 10px;
  height: 10px
}
.-flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between
}
.-flex.-center {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center
}
.detail__enter-button {
  width: 160px;
  height: 40px;
  color: #fff;
  background: #f24e1e;
  border: none;
  border-radius: 70px;
  -webkit-box-shadow: 0 3px 0 0 #be3d17;
          box-shadow: 0 3px 0 0 #be3d17
}
body {
  -webkit-box-sizing: border-box;
          box-sizing: border-box
}
#chat {
  background-color: #f0f0f0;
  min-height: 100vh
}
.chat__area {
  width: 90%;
  margin: 30px auto
}
.chat__partner-name {
  margin-bottom: 25px;
  font-size: 24px;
  text-align: center
}
.chat__item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin-bottom: 30px
}
.chat__message {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  width: calc(80% - 10px);
  padding: 15px;
  background-color: #fff;
  border: solid 1px #e5e5e5;
  border-radius: 8px
}
.chat__img {
  width: 20%
}
img {
  width: 100%
}
/*# sourceMappingURL=style.css.map */

</style>
