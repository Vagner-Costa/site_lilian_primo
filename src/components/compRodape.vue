<template>
    <footer class="section_dourada">
        <div class="box_redes_sociais">
            <div class="txt_fique_por_dentro">
                <p>Fique por dentro de todas as novidades através das redes sociais.</p>
            </div>
            
            <div class="box_icones_redes_sociais">
                <button class="icones_redes_sociais">
                    <img src="@/assets/icones/facebook.png" alt="">
                </button>
                <button class="icones_redes_sociais">
                    <img src="@/assets/icones/instagram.png" alt="">
                </button>
                <button class="icones_redes_sociais">
                    <img src="@/assets/icones/twitter.png" alt="">
                </button>
                <button class="icones_redes_sociais">
                    <img src="@/assets/icones/linkedin.png" alt="">
                </button>
                <button class="icones_redes_sociais">
                    <img src="@/assets/icones/whatsapp.png" alt="">
                </button>
            </div>  
        </div>

        <div class="container_banner_newsletter">
            <div class="box_banner">
                <img src="@/assets/banners/newsletter.png" alt="imagem">
            </div>

            <div class="box_newsletter_form">
                <p class="titulo_newsletter">NEWSLETTER</p>
   
                <p class="txt_newsletter">Que tal receber todo conteúdo em primeira mão direto no seu e-mail?</p>

                <p class="txt_newsletter">Assine nossa newsletter para receber atualizações e notícias exclusivas.</p>
                
                <form class="formulario" @submit.prevent="methodsEnvioFormuario"> 
                    <label>*Nome:</label>
                    <input type="text" v-model="computedFormulario.nome" max-length="20" ref="nome"/>
                        
                    <label>*E-mail:</label>
                    <input type="email" v-model="computedFormulario.email" ref="email"/>
                
                    <input type="submit" value="QUERO RECEBER O CONTEÚDO!"/>
                    
                </form>
            </div>
        </div>
    </footer>  
</template>

<script>

export default{
    name: 'compRodape',
    data() {
        return{
            formulario:{
                nome:'',
                email:''
            }
        }
    },
    computed:{
        computedFormulario(){
            return this.formulario
        }
    },
    methods:{
        methodsEnvioFormuario(){
            if(!this.formulario.nome){
                const input_nome = this.$refs.nome
                input_nome.focus()
                alert("nome vazio")
                return
            }
            if(!this.formulario.email){
                const input_email = this.$refs.email
                input_email.focus()
                alert('email vazio')
                return
            }
        }
    }
}
</script>

<style scoped>
    .section_dourada{
        background-color: var(--dourado);
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        align-items:center;
        flex-wrap:wrap;
        padding: 67px 166px;
    }
    .box_redes_sociais{
        display:flex;
        flex-direction:column;
        align-items:center;
        width:35%;
        min-width:390px;
    }
    .txt_fique_por_dentro{
        display:flex;
        justify-content:center;
    }
    .txt_fique_por_dentro p{
        font-weight:400;
        font-family: var(--font-principal);
        font-size:30px;
        color:var(--azul-escurao);
        text-align:center;
        flex-wrap:wrap;
    }
    .box_icones_redes_sociais{
        width:100%;
        margin-top:26px;
        display:flex;
        justify-content:space-between;
        padding:0px 20px;
    }
    .icones_redes_sociais{
        width:66px;
        height: 66px;
        background-color:var(--branco);
        border-radius:33px;
        padding:15px;
        display:flex;
        justify-content: center;
        align-items:center;
    }
    .container_banner_newsletter{
        display:flex;
        flex-direction:row;
        align-items:center; 
        width:50%;
        min-width:678px;
        justify-content:flex-end;
    }
    .box_banner{
        width:305px;
        min-width:305px;
        margin-right:78px;
    }
    .box_banner img{
        width:100%;
        height:100%;
        object-fit: contain;
    }
    .box_newsletter_form{
        display:flex;
        flex-direction:column;
        width:400px;
        min-width:280px;
    }
    .titulo_newsletter{
        font-family: var(--font-principal);
        font-weight:bold;
        font-size:36px;
        line-height:36px;
        color:var(--branco);
        margin-bottom:39px;
    }
    .txt_newsletter{
        font-family: var(--font-principal); 
        font-weight:400;
        font-size:26px;
        line-height:26px;
        color:var(--branco);
        margin-bottom:12px;
    }
    .formulario{
        margin-top:12px;
        display:flex;
        flex-direction:column;
    }
    label{
        font-family: var(--font-principal);
        font-weight:400;
        font-size:22px;
        color:var(--branco);
    }
    input[type='text']{
        width:254px;
        height:45px;
        background-color:var(--branco);
        color:var(--azul-escurao);
        font-size:22px;
        border:0px;
        outline:none;
        border-radius:10px;
        font-size:var(--font-principal);
        padding:0px 10px;
        margin-bottom:24px;
    }
    input[type='email']{
        width:100%;
        height:45px;
        background-color:var(--branco);
        color:var(--azul-escurao);
        font-size:22px;
        border:0px;
        outline:none;
        border-radius:10px;
        font-size:var(--font-principal);
        padding:0px 10px;
        margin-bottom:24px;
    }
    input[type='submit']{
        padding:12px 10px;
        background-color:var(--azul-escurao);
        font-family:var(--branco);
        font-weight:500;
        font-size:18px;
        color:var(--branco);
        border-radius:20px;
    }
    @media screen and (min-width:0px) and (max-width:760px){
        .section_dourada{
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            flex-wrap:nowrap;
            padding:30px 10px;
        }
        .box_redes_sociais{
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            min-width:320px;
            margin-bottom:50px;
        }
        .box_icones_redes_sociais{
            padding:0px 0px;
            justify-content:space-evenly;
        }
        .icones_redes_sociais{
            width:50px;
            height:50px;
            border-radius:25px;
            padding:10px;
        }
        .container_banner_newsletter{
            display:flex;
            flex-direction:column;
            align-items:center; 
            width:100%;
            min-width:320px;
            justify-content:flex-start;
        }
        .box_banner{
            margin-right:0px;
            margin-bottom:50px;
        }
        .box_newsletter_form{
            display:flex;
            flex-direction:column;
            width:90%;
            min-width:310px;
        }
    }
    @media screen and (min-width:761px) and (max-width:990px){
        .section_dourada{
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            flex-wrap:nowrap;
            padding:67px 60px;
        }
        .box_redes_sociais{
            display:flex;
            flex-direction:column;
            align-items:center;
            width:539px;
            min-width:539px;
            margin-bottom:80px;
        }
        .container_banner_newsletter{
            display:flex;
            flex-direction:row;
            width:100%;
            justify-content:space-between;
        }
        .box_banner{
            margin-right:40px;
        }
        .box_newsletter_form{
            min-width:280px;
        }
    }
    @media screen and (min-width:991px) and (max-width:1400px){
        .section_dourada{
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            flex-wrap:nowrap;
        }
        .box_redes_sociais{
            display:flex;
            flex-direction:column;
            align-items:center;
            width:539px;
            min-width:539px;
            margin-bottom:80px;
        }
        .container_banner_newsletter{
            display:flex;
            flex-direction:row;
            width:100%;
            justify-content:space-between;
        }
        .box_banner{    
            width:305px;
            min-width:280px;
            margin-right:78px;
        }
        .box_newsletter_form{
            min-width:300px;
        }
    }

</style>
