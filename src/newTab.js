import Vue from 'vue';

const ExtensionContainer = require('./Index.vue').default;

window.vueInstance = new Vue({
    el: `#vue_container`,
    render: (h) => h(ExtensionContainer),
});