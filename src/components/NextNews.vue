<template>
  <div class="next">
      <div class="next__image">
          <img src="../assets/post-img-02.png" alt=""/>
      </div>
      <div class="blend"></div>
      <div class="next__title">
          <h2>Welcome to Nethernite</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'NextNews',
}
</script>

<style lang="scss">
.next {
    border-radius:15px;
    overflow: hidden;
    position:relative;
    margin-top:42px;
    box-shadow: 0px 10px 16px rgba(36, 35, 51, 0.8);
    transition: all .4s;
    cursor:pointer;
    &:hover {
        box-shadow:0 0 0  #242333;
    }
    &__image{
        img {
            width: 604px;
            height: 254px;
            -o-object-fit: cover;
            object-fit: cover;
            object-position: right 33%;
            border-radius: 15px;
            object-position: center top;
            object-position: -131px -40px;
        }
    }
    .blend {
        position: absolute;
        bottom:0;
        left:0;
        right:0;
        height: 100%;
        background: linear-gradient(to bottom, transparent, transparent 40%, rgba(36, 35, 51, 1) 70%,rgba(36, 35, 51, 1));
        mix-blend-mode: color;
    }
    &__title {
        position: absolute;
        bottom:0;
        left:0;
        right:0;
        background:$bg-news-title;
        text-align:left;
        padding: 2px 23px 10px;
        h2 {
            color:$mainColor;
            font-size:$news-title;
        }
        p {
            color:$textColor;
            font-size:$degault-txt;
            margin-top: 11px;
        }
    }
}
.next-wrap .next:first-of-type {
    margin-top: 0;
}
</style>