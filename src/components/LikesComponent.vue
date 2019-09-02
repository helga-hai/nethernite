<template>
    <div class="like">
        <ul class="like__list">
            <li class="like__thumb">
                <span class="icon"><img alt src="../assets/icon_thumb_grey.png"/></span>
                <span class="text">345</span>
            </li>
            <li class="like__views">
                <span class="icon"><img alt="" width="24px" src="../assets/icon_eye.png"/></span>
                <span class="text">7.649</span>
            </li>
        </ul> 
    </div>
</template>

<script>
export default {
    name:'LikesComponent'
}
</script>

<style lang="scss">

.like {
    width:50%;
    display:inline-block;
    height: 32px;
    text-align:left;
    ul.like__list {
            padding-left:5px;
            list-style: none;
            margin:0;
        li {
            display:inline-block; 
            line-height: 32px;
            padding-right: 35px;
            color:$textColor;
        }
    }
    &__thumb {
        cursor:pointer;
        .icon {                  
            img {
                vertical-align: text-bottom;
                width:24px;
                height:auto;
                object-fit: cover;
                margin-right:10px;
            }
        }
    }
    &__views {              
        .icon {                  
            img {
                vertical-align: text-bottom;
                width:28px;
                opacity:.2;
                height:auto;
                object-fit: cover;
                margin-right:10px;
            }
        }
        &:hover img {
            opacity:.4;
        }
    }
}
</style>