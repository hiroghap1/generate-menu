Vue.createApp({
    setup() {
        const menuList = Vue.ref( [
            { name: 'Home', url: 'https://example.com/home', isExternal: false },
            { name: 'About', url: 'https://example.com/about', isExternal: false }
        ]);


        function fileGenerate () {
            const menu = {
            };

            result.value = ``;
        }
        return {
            fileGenerate,
            menuList,
            component: {
                draggable: window['vuedraggable']
            }
        };
    }
}).mount('#app');