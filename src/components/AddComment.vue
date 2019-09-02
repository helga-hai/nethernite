<template>
    <div class="new-comments-wrap">
        <input class="page__comments_add" type="text" placeholder="Type comment here.."/>
        <input type="button" aria-label="Enter a comment"/>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.new-comments-wrap {
    display: flex;
    flex-direction:row;
    input[type="text"] {
        background: #2a293b;
        color:$textColor;
        font-size:$page-font;
        height:60px;
        line-height:60px;
        border:none;
        border-top-left-radius:7px;
        border-bottom-left-radius:7px;
        padding:0 20px;
        flex-grow: 2;
        &.page__comments_add::placeholder {
        color:$textColor;
        }
    }
    input[type="button"] {
        cursor: pointer;
        height: 60px;
        width:60px;
        border-top-right-radius: 7px;
        border-bottom-right-radius: 7px;
        border: 1px solid transparent;
        background: #2a293b url('../assets/icon_arrow.png') no-repeat center center;
    }
}
</style>