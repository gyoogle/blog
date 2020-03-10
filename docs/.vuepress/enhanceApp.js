export default ({
    // Vue, // the version of Vue being used in the VuePress app
    // options, // the options for the root Vue instance
    router, // the router instance for the app
    // siteData // site metadata
  }) => {
    // ...apply enhancements to the app
    router.afterEach((to, from) => {
      if (from.path !== to.path) {
        if (typeof window !== 'undefined' && window.DISQUS) {
          setTimeout(() => {
            console.log('DISQUS is exists and try to load!')
            window.DISQUS.reset({ reload: true })
          }, 0)
        }
      } else {
        // same page but hash changed
      }
    })
  }