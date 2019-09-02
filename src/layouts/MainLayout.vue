<template>
  <main class="main">
    <slot name="nav"></slot>
    <div class="content">
      <slot></slot>
    </div>
    <slot name="popup"></slot>
  </main>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  name: "MainLayout",
  components: {
    Nav
  }
};
</script>

<style lang="scss">
.main {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: $bg-layout;
  background-image: url(../assets/bg-img.png);
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center -6vw;
  padding-bottom: 25px;
}
.content {
  flex-grow: 1;
  box-sizing: border-box;
  display:flex;    
  justify-content: space-evenly;
  max-width: 1366px;
  margin: 0 auto;
  @include md {
    flex-direction: column;
    .page {
      width: 97%;
      margin:0 auto;
    }
    aside {
      width: 97vw;
      padding-left: 8px;
      text-align: justify;
      @include xs {
        width: 96vw;
        @include xxs {
          width: 98vw;
        }
      }
      .page__back {
        width: 100%;
      }
      .next-wrap {            
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
      }
      .next {
        margin-top: 0;
        width: 260px;
        display: inline-block;
        white-space: normal;
        margin-right: 2%;
        &:last-child {
          margin-right:0
        }
      }
    }
  }
}
a:-webkit-any-link {
  text-decoration:none;
}
</style>