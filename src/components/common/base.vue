<template>
    <div>
        <p>组件名称 : {{selfName}}</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                selfName: '',
            }
        },
        methods: {
            go: function (url) {
                console.log("wf：");
                window.__lendApp__.$router.go(url);
            }
        }
    }
</script>