<template>
    <div class="container"
         id="notifications">
        <p>{{ msg }}</p>
        {{ num }}
    </div>
</template>

<script>
export default {
    name: 'notifications',
    data() {
        return {
            msg: '消息...'
        };
    },
    computed: {
        num() {
            return this.$store.state.totalNum;
        }
    }
};
</script>

<style lang="stylus">
    @import '../../common/stylus/variables.styl'
    #notifications
        color #FFF
        font-size font-size-default
        background-color blue
</style>
