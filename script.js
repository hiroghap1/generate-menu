Vue.createApp({
    setup() {
        const result = Vue.ref('');
        const searchTitle = Vue.ref('');
        const searchOnly = Vue.ref(false);
        const searchResultURL = Vue.ref('');
        const setCategory = Vue.ref('');
        const setTag = Vue.ref('');
        const addSubCategories = Vue.ref([]);
        const tabGroups = Vue.ref([{ name: '', tabs: [{ name: '', imageURL: '' }] }]);

        const menuList = Vue.ref([{name: '',url: '', blank: false}]);

        function addTabGroup() {
            this.tabGroups.push({ name: '', tabs: [{ name: '', imageURL: '' }] });
        }
        function removeTabGroup(index) {
            if (this.tabGroups.length > 1) {
                this.tabGroups.splice(index, 1);
            } else {
                alert('これ以上削除できません');
            }
        }
        function addSubCategory() {
            this.addSubCategories.push('');
            // this.$set(this.addSubCategories,'');
        }
        function removeSubCategory(categoryIndex) {
            if (this.addSubCategories.length > 0) {
                this.addSubCategories.splice(categoryIndex, 1);
            }
        }
        function addTab(tabGroupIndex) {
            console.log('addTab called');
            if (!this.tabGroups[tabGroupIndex].tabs) {
                console.log('tabs property does not exist, creating it');
                this.$set(this.tabGroups[tabGroupIndex], 'tabs', []);
            }
            this.tabGroups[tabGroupIndex].tabs.push({ name: '', imageURL: '' });
            console.log('tabGroups:', this.tabGroups);
        }
        function removeTab(tabGroupIndex, tabIndex) {
            if (this.tabGroups[tabGroupIndex].tabs.length > 1) {
                this.tabGroups[tabGroupIndex].tabs.splice(tabIndex, 1);
            } else {
                alert('これ以上削除できません');
            }
        }
        function fileGenerate () {
            const searchSettings = {
                searchTitle: searchTitle.value,
                searchOnly: searchOnly.value,
                searchResultURL: searchResultURL.value,
                setCategory: setCategory.value,
                setTag: setTag.value,
                addSubCategory: addSubCategories.value,
                tags: {
                },
            };
            tabGroups.value.forEach((group) => {
                searchSettings.tags[group.name] = group.tabs.map(tab => ({ name: tab.name, image: tab.imageURL }));
            });

            result.value = `<script>
  // こだわり検索セッティング
  const searchSettings = ${JSON.stringify(searchSettings, null, 2)};
</script>`;
        }
        return {
            tabGroups,
            result,
            searchTitle,
            searchOnly,
            searchResultURL,
            setCategory,
            setTag,
            addSubCategories,
            addTabGroup,
            removeTabGroup,
            addSubCategory,
            removeSubCategory,
            addTab,
            removeTab,
            fileGenerate,
            menuList
        };
    }
}).mount('#app');