export default {
    state: {
        pagina_atual : '/'
    },
    getters:{
        gettersPaginaAtual(state){
            return state.pagina_atual
        }
    },
    mutations:{
        mutationsPaginaAtual(state,payload){
            state.pagina_atual = payload
        }
    },
    actions:{} 

}