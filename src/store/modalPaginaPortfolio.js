export default{
    state: {
        modalPaginaPortfolio : false
    },
    getters: {
        gettersModalPaginaPortfolio(state){
            return state.modalPaginaPortfolio
        }
    },
    mutations: {
        mutationsModalPaginaPortfolio(state){
            state.modalPaginaPortfolio = !state.modalPaginaPortfolio
        }
    },
    actions:{
        actionsModalPaginaPortfolio({commit},payload){
            commit('mutationsModalPaginaPortfolio')
            console.log(payload)
        }
    }
}