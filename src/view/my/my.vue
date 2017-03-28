<template>
    <div class="container"
         id="my">
        <p>{{ msg }}</p>
        {{ num }}
    </div>
</template>

<script>
export default {
    name: 'my',
    data() {
        return {
            msg: 'my...'
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
    #my
        color #FFF
        font-size font-size-default
        background-color yellow
</style>
