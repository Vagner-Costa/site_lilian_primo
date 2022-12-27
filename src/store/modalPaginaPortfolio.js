export default{
    state: {
        modalPaginaPortfolio : false,
        video:{
            id : '',
            video : '',
            descricao : ''
        }
    },
    getters: {
        gettersModalPaginaPortfolio(state){
            return state.modalPaginaPortfolio
        },
        gettersVideo(state){
            return state.video
        }
    },
    mutations: {
        mutationsModalPaginaPortfolio(state){
            state.modalPaginaPortfolio = !state.modalPaginaPortfolio
        },
        mutationsVideo(state,video){
            state.video={
                id : video.id,
                imagem : video.imagem,
                video : video.video,
                descricao : video.descricao
            }
        }
    },
    actions:{
        actionsModalPaginaPortfolio({commit},payload){
            commit('mutationsModalPaginaPortfolio')
            commit('mutationsVideo',payload)
        }
    }
}