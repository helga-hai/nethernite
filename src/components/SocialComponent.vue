<template>
      <div class="social">
        <ul class="social__list">
            <li class="social__link share">
                <a href="#">
                    <span class="icon"><img alt="share" src="../assets/icon_share.png"/></span>
                </a>
            </li>
            <li class="social__link fb">
                <a href="#">
                    <span class="icon"><img alt="fb" src="../assets/icon_fb.png"/></span>
                </a>
            </li>
            <li class="social__link twitter">
                <a href="#">
                    <span class="icon"><img alt="twitter" src="../assets/icon_twitter.png"/></span>
                </a>
            </li>
        </ul> 
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">

.social {
    height: 32px;
    text-align: right;
    width: 50%;
    display:inline-block;
    vertical-align: bottom;
    @include xxs {
        vertical-align: top;
    }
    ul.social__list {
        list-style: none;
        margin:0;
        padding:0;
        li {
            display:inline-block; 
            line-height: 32px;
            padding-left:10px;
        }
        a {         
            .icon {                  
                img {
                    vertical-align: text-bottom;
                    height:30px;
                    width:auto;
                    opacity:.3;
                    height:auto;
                    object-fit: cover;
                    margin-right:10px;
                }
            }
        }
    }
    
    
}
</style>