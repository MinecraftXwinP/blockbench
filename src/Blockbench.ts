import Vue from 'vue'

export default class Blockbench {

    private vue

    constructor ()
    {
        this.vue = new Vue({
            el: '#root',
            data: {
                message: 'Hello vue'
            }
        })
    }
}