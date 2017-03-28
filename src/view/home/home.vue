<template>
    <div class="container home">
        <h1>{{ msg }}</h1>
        <p>{{ num }}</p>
        <input type="button"
               @click="_getSouce"
               value="点我">
        <input type="button"
               @click="_addTotalNum"
               value="加1">
        <input type="button"
               @click="_delTotalNum"
               value="减1">
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            msg: 'Welcome home App',
            souce: ''
        };
    },
    computed: {
        num() {
            return this.$store.state.totalNum;
        }
    },
    methods: {
        _getSouce() {
            this.$http.get('/api/repos/typecho-fans/plugins/readme').then((response) => {
                response = response.body;
                console.log(response);
            }, (response) => {
                response = response.body;
                console.log('错误信息：' + response.message);
            });
        },
        _delTotalNum() {
            this.$store.dispatch('delTotalNum');
        },
        _addTotalNum() {
            this.$store.dispatch('addTotalNum');
        }
    }
};
</script>

<style lang="stylus">
    .home
        background: red
        color: #FFF
    h1
        font-size 20px
        color red
        margin 20px 0
</style>
