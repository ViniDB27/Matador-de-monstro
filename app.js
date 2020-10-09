new Vue({
    el:'#app',
    data:{
        playerlife: 100,
        monsterLife: 100,
    },
    computed:{
        hasResult(){
            return this.playerlife == 0 || this.monsterLife == 0
        }
    },
    watch: {

    }
})