<template>
    <ParentLayout >
        <Disqus slot="page-bottom" class="content"/>
    </ParentLayout>
</template>

<style>
    .content {
        padding-top: 3vw;
        padding-left: 9vw;
        padding-right: 9vw;
    }
</style>

<script>
    import ParentLayout from '@parent-theme/layouts/Layout.vue'
    import Disqus from '../components/Disqus'
    export default {
        components: {
            ParentLayout,
            Disqus
        }
    }
</script>