<template>
    <div class="container"
         id="services">
        <p>{{ msg }}</p>
        {{ num }}
    </div>
</template>

<script>
export default {
    name: 'services',
    data() {
        return {
            msg: 'services...'
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
    #services
        color #FFF
        font-size font-size-default
        background-color #000
</style>
