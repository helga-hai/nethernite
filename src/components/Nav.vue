<template>
  <nav class="nav">
    <div class="wrapper">
      <slot name="hamburger"></slot>
      <menu-component/>

      <ul class="info">
        <li class="cup">
          <img src="../assets/icon_cup.png" alt="user">
        </li>
        <li class="bell">
          <img class="bell-img" src="../assets/icon_notification.png" alt="notification">
        </li>
        <li class="money">        
          <img src="../assets/icon_gem.png" alt="money">
          {{142}}
        </li>
        <li class="user">
          <img class="user-img" src="../assets/user.png" alt="user">
          <img class="mark" src="../assets/user_mark.png" alt="user">
        </li>      
      </ul>

    </div>

  </nav>
</template>

<script>
import Popup from "@common/Popup";
import MenuComponent from "@common/MenuComponent";
export default {
    name:'Nav',
    components: {
      Popup,
      MenuComponent
    }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'GeomanistBook';
  src: url('../fonts/Geomanist-Book.eot');
  src: url('../fonts/Geomanist-Book.eot?iefix') format('eot'), url('../fonts/Geomanist-Book.woff') format('woff'), url('../fonts/Geomanist-Book.ttf') format('truetype'), url('../fonts/Geomanist-Book.svg#webfont') format('svg');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'GeomanistMedium';
  src: url('../fonts/Geomanist-Medium.eot');
  src: url('../fonts/Geomanist-Medium.eot?iefix') format('eot'), url('../fonts/Geomanist-Medium.woff') format('woff'), url('../fonts/Geomanist-Medium.ttf') format('truetype'), url('../fonts/Geomanist-Medium.svg#webfont') format('svg');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'GeomanistRegular';
  src: url('../fonts/Geomanist-Regular.eot');
  src: url('../fonts/Geomanist-Regular.eot?iefix') format('eot'), url('../fonts/Geomanist-Regular.woff') format('woff'), url('../fonts/Geomanist-Regular.ttf') format('truetype'), url('../fonts/Geomanist-Regular.svg#webfont') format('svg');
  font-weight: normal;
  font-style: normal;
}
.wrapper {
  max-width: 1366px;
  margin:0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.nav {
  height: 72px;
  background-color: $bg-dark-elems;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  button.menu {
    display:none;
    outline: none;
    @include md {
      display:block;
      position:absolute;
      left:0;
      height:72px;
      width:60px;
      background: url('../assets/hamburger.svg') no-repeat center center;
      background-size: 34px;
      border:none;
      cursor: pointer;
    }
  }
  &__list {
    @include md {
      display:none;
    }
    margin: 0;
    padding: 0;
    width:60%;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 12px 20px rgba(39, 38, 55, 0.5);
    &.popup-menu {
      position:relative;
      flex-direction: column;
      display:block;
      width:100%;
      font-size: $news-title;
      a {
        width: 220px;
      }
      .play a {
        width:100px;
      }
      .play {
        width:100px;
        margin: 20px auto;
      }
    }
  }
  &__link {
    text-align: center;
    a {
      color:$mainColor;
      line-height: 72px;
      height: 72px;
      display: inline-block;
      padding: 0 30px;
      &.active {
        color: $mainColor;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-image: $active-border-comment 20% stretch;
        background:$active-bg;
      }
    }
  }
  &__text {
    display: inline-block;
    text-decoration: none;
    width: 100%;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 10px;
    left: 50%;
    height: 5px;
    width: 134px;
    border-radius: 5px;
    transform: translateX(-50%);
  }
}
.info {
  width: 324px;
  padding:0;
  list-style:none;
  margin: 0 20px 0 0;
  height:72px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all .3s;
  @include xxs {
    width:230px;
    margin:0;
    li {
      margin: 0px 6px !important;
    }
  }
  li {
    margin: 0 18px;
    &.cup img {
      width: 24px;
      height:auto;
    }
    &.bell img {
      width: 21px;
      height:auto;
    }
    &.cup {
      position:relative;
      &:after {
        content: '';
        position: absolute;
        top: -6px;
        right: -8px;
        background: url('../assets/mark_cup.png');
        width:16px;
        height:16px
      }
    }
    &.bell {
      position:relative;
      &:after {
        content: '';
        position: absolute;
        top: -6px;
        right: -8px;
        background: url('../assets/mark_bell.png');
        width:16px;
        height:16px
      }
    }
    &.money {
      height: 32px;
      padding: 0 17px 1px 7px;
      color: #cecbff;
      font-size:$degault-txt;
      background:url('../assets/gem-bg.png');
      border-radius:20px;
      background-position: 7px -12px;
      border: 2px solid #1c1b1f;
      box-shadow: 0 0 0 2px $money;
      position:relative;
      img {
        vertical-align: middle;
        padding:4px 6px 6px;
        filter: drop-shadow(0px 2px 8px rgba(231, 157, 255, 0.4));
      }
      &:after {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        background-image: $money;
        width: 110%;
        height: 127%;
        border-radius: 21px;
        z-index: -1;
        box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.3);
      }
    }
    &.user {
      margin-top: 4px 0 0 0;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position:relative;
      padding:0;
      &:after {
        content: '';
        position: absolute;
        top: -4px;
        left: -2px;
        background-image: $user-outline;
        width: 53px;
        height: 51px;
        border-radius: 50%;
        z-index: -1;
        box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.4);
      }
      &.user.active:after {
        background-image: $active-border-comment;
      }
      img.user-img {
        width: 45px;
        height: 43px;
        border-radius: 50%;
        box-shadow: 0px 0px 0px 2px #242333;
      }
      img.mark {
        position: absolute;
        bottom: 1px;
        right: -1px;
      }
    }
  }
}

.play {
  height: 32px;
  background-image: $user-gradient;
  border-radius:20px;
  border: 2px solid #1c1b1f;
  box-shadow: 0 0 0 2px $money;
  position:relative;
  a {
    height: 28px;
    line-height: 27px;
  }
  &:after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    background-image: $user-outline;
    width: 109%;
    height: 127%;
    border-radius: 21px;
    z-index: -1;
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.3);
  }
}
</style>