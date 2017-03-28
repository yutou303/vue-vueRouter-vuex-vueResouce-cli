<template>
    <div class="container"
         id="orders">
        <p>{{ msg }}</p>
        {{ num }}
    </div>
</template>

<script>
export default {
    name: 'orders',
    data() {
        return {
            msg: 'orders...'
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
    #orders
        color red
        font-size font-size-default
        background-color #CCC
</style>
