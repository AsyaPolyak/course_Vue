new Vue({
    el:'#app',
    data:{
        title:"hello",
        styleCSS: ''
    },
    methods: {
        changeText () {
            this.title ="new text";
        }
    }
});