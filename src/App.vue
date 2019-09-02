<template>
<div id="app">
  <main-layout>
    <Nav slot="nav">
      <button slot="hamburger" class="menu" @click="isPopupVisible=!isPopupVisible"/>
    </Nav>
    
    <section class="page">
      <div class="page__back"><a href="#"><span> < </span> Back</a></div>
      <pagination/>
      <post-component/>
      <div class="page__actions">
        <likes-component/>
        <social-component/>
      </div>
      
      <div class="page__comments__top">
        <div class="page__comments--head">
          <comments-head/>
          <ul class="comments__nav">
            <li class="active">Popular</li>
            <li>Recent</li>
          </ul>
        </div>
      </div>
      <div class="page__comments">
        <add-comment/>
        <comment/>
        <comment/>
      </div>
    </section>
    <aside>
      <div class="page__back"><a href="#">Related News</a></div>
      <div class="next-wrap">
        <next-news/>
        <next-news/>
        <next-news/>
      </div>
    </aside>
  
  <Popup :visible="isPopupVisible" @onClose="onCloseAction" class="popup__nav">
    <menu-component class="popup-menu"/>
  </Popup>
  </main-layout>
  
</div>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue';
import Nav from "@/components/Nav";
import Pagination from './components/Pagination.vue';
import PostComponent from './components/PostComponent.vue';
import LikesComponent from './components/LikesComponent.vue';
import SocialComponent from './components/SocialComponent.vue';
import NextNews from './components/NextNews.vue';
import CommentsHead from './components/CommentsHead.vue';
import AddComment from './components/AddComment.vue';
import Comment from './components/Comment.vue';
import Popup from "@common/Popup";
import MenuComponent from "@common/MenuComponent";

export default {
  name: 'app',
  components: {
    MainLayout,
    Nav,
    Pagination,
    PostComponent,
    LikesComponent,
    SocialComponent,
    NextNews,
    CommentsHead,
    AddComment,
    Comment,
    Popup,
    MenuComponent
  },
  data() {
    return {
      isPopupVisible: false
    }
  },
  methods: {
    onCloseAction(){
      this.isPopupVisible = false;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'GeomanistRegular', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $mainColor;
  margin-top: 70px;
}
aside {
  width: 33%;
  display:inline-block;
}
.page {
    width: 60%;
    display:inline-block;
    &__back {
      text-align: left;
      a {
        line-height:70px;
        color: $mainColor;
        span {
          width:20px;
          display: inline-block;
        }
      }
    }
    &__pagination {
      width:100%;
      background: $bg-pagination;
      border-radius: 15px;
      padding:0 23px;

      .pagination--a {
        color:$textColor;
        line-height:70px;
        width:50%;
        display:inline-block;
        &:first-child {
          text-align:left;
        }
        &:last-child {
          text-align:right;
        }
        span {
          width:20px;
          display: inline-block;
        }
      }
    }
    &__current {
      border-top-right-radius: 15px;  
      border-top-left-radius: 15px;
      width:100%;
      background: $bg-dark-elems;
      padding: 25px 23px;
      margin-top:20px;

      .page__image {
        border-radius:15px;
        overflow: hidden;
        img {
          width:100%;
          height:310px;
          object-fit: cover;
          object-position: top;
          border-radius: 15px;
          transition: all .3s;
          @include xs {
            height:200px;
          }
        }
      }
      .post__text {
        text-align:left;
        h1 {
          font-size:$h1-font;
          letter-spacing: 1.5px;
        }
        .post__date {
          color:$subTextColor;
          font-size:$page-font;
        }
        .post__description {
          line-height:25px;
          font-size:16px;
          color:$textColor;
        }
      }
    }
    .page__actions {
      margin-top:2px;
      width:100%;
      background: $bg-dark-elems;
      border-bottom-right-radius: 15px;
      border-bottom-left-radius: 15px;
      padding: 25px 23px 23px;
      font-size:16px; 
    }
    .page__comments {
      width:100%;
      background: $bg-dark-elems;
      border-bottom-right-radius: 15px;
      border-bottom-left-radius: 15px;
      padding: 23px 23px 45px;
      font-size:16px;

      &__top {
        width:100%;
        background: $bg-dark-elems;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
        padding: 7px 23px 0px;
        font-size:16px;
        margin-top:20px;
        position:relative;
        &:after {
          content:'';
          background: #9d9acc;
          opacity: .1;
          margin-top: 0;
          position: absolute;
          bottom: 0px;
          width: 100%;
          left: 0px;
          right: 0;
          height: 2px;
          border: none;
          margin-block-end: 0;
          margin-block-start: 0;

        }
      }//__top
      &--head {
        font-size:$news-title;
        color:$textColor;
        text-align:left;
        display: flex;
        justify-content: space-between;
        p {
          background: url(assets/icons_comments.png) no-repeat left center;
          width:50%;
          display:inline-block;
          margin: 0;
          line-height: 70px;
          padding-left:40px;
        }
        .count {
          color:$mainColor;
        }
        .comments__nav {
          padding-left:0;
          font-size:$page-font;
          text-align: right;
          margin: 0;
          line-height: 70px;

          li {
            text-align:right;
            list-style:none;
            display:inline-block;
            cursor:pointer;
            padding:0 20px;
            color:$textColor;
            &.active {
              color: $mainColor;
              border-bottom-width: 2px;
              border-bottom-style: solid;
              border-image: $active-border-comment 20% stretch;
            }
          }
          .page__comments__add {
            width:100%;
            background: $bg-dark-elems;
            border-top-right-radius: 15px;
            border-top-left-radius: 15px;
            padding: 7px 23px 0px;
            font-size:16px;
            margin-top:20px;
          }
        }
        @include xxs {
          flex-direction: column;
          p {
            width:100%;
            line-height: 50px;
          }
          .comments__nav {
            line-height: 50px;
             li {
               width:50%;
               text-align:center;
             }
          }
        }
      }//--head
    }
}

</style>
