<template>
    <nav class="footer-nav">
        <ul>
            <router-link tag="li"
                         to="/"
                         exact>
                <a>
                    <i class="icon"></i>
                    <span>首页</span>
                </a>
            </router-link>
            <router-link tag="li"
                         to="/trade">
                <a>
                    <i class="icon"></i>
                    <span>订单</span>
                </a>
            </router-link>
            <router-link tag="li"
                         to="/service"
                         exact>
                <a>
                    <i class="icon"></i>
                    <span>服务</span>
                </a>
            </router-link>
            <router-link tag="li"
                         to="/msg">
                <a>
                    <i class="icon"></i>
                    <span>消息</span>
                </a>
            </router-link>
            <router-link tag="li"
                         to="/member">
                <a>
                    <i class="icon"></i>
                    <span>我的</span>
                </a>
            </router-link>
            <!--<li @click="goBack">
                                                <a>
                                                    <i class="icon"></i>
                                                    <span>返回</span>
                                                </a>
                                            </li>-->
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'vfooter',
    methods: {
        // goBack() {
        //     this.$router.go(-1);
        // }
    }
};
</script>

<style lang="stylus">
.footer-nav li
    background: #F9F9F9
    padding: 10px
    &.active
        background: #000
        color: #FFF
</style>
