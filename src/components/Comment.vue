<template>
    <div class="page__comments__one">
        <img src="../assets/user-01.png" alt="{{}}">
        <div class="page__comments__txt">
        <p class="page__user">Svetlakov <span class="data"> 22 May</span></p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Comment'
}
</script>

<style lang="scss">
.page__comments__one {
  display:flex;
  margin-top:30px;
  position:relative;
  padding-bottom: 12px;
  padding-right: 20px;
  &:after {
    content: '';
    width:100%;
    bottom: 0;
    color: $bg-layout;
    height:2px;
    background:$bg-layout;
    position:absolute;
  }
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  p {
    text-align: left;
    padding-left: 15px;
    font-size:$degault-txt;
    line-height: 24px;
  }
  .page__user {
    font-size: $news-title;
    color: $textColor;
    margin-top: 5px;
  }
  .data {
    color: $textColor;
    opacity: .5;
    font-size: $page-font;
  }
}
</style>