<template>
    <div id="disqus_thread"></div>
</template>

<script>
    export default {
        mounted() {
                try {
                    let disqus_config = function () {
                        this.page.url = location.origin;
                        this.page.identifier = location.pathname;
                    };
                    (function () {
                        let d = document, s = d.createElement('script');
                        s.src = 'https://gyoogle.disqus.com/embed.js';
                        s.setAttribute('data-timestamp', +new Date());
                        (d.head || d.body).appendChild(s);
                    })();
                } catch (e) {
                    // some error
                }
        }
    }
</script>
<script data-ad-client="ca-pub-5225400119493497" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>