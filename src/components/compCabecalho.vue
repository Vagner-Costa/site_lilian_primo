<template>
    <header>
        <div class="box_logo">
            <img src="@/assets/LOGO-VERTICAL1.png" alt="imagem Logotipo">
        </div>


        <button class="btn_abrir_nav" @click="methodsToggleNav()">
            <img src="@/assets/icones/cardapio.png" alt="">
        </button>


        <nav :class="{nav_fechado : !computedMenuNav}">
            <router-link to="/" class="btn_links btn_home" 
                :class="{btn_ativo : computedBtnAtivo === 'HOME'}" 
                @click="methodsBtnAtivo('HOME')">
                    HOME
            </router-link>
            <router-link to="/about-me" class="btn_links" 
                :class="{btn_ativo : computedBtnAtivo === 'ABOUT'}"
                @click="methodsBtnAtivo('ABOUT')">
                    ABOUT ME
            </router-link>
            <router-link to="/portfolio" class="btn_links" 
                :class="{btn_ativo : computedBtnAtivo === 'PORTIFOLIO'}" 
                @click="methodsBtnAtivo('PORTIFOLIO')">
                    PORTFÓLIO
            </router-link>
            <router-link to="#" class="btn_links" 
                :class="{btn_ativo : computedBtnAtivo === 'BLOG'}" 
                @click="methodsBtnAtivo('BLOG')">
                    BLOG
            </router-link>
            <router-link to="#" class="btn_links btn_contato" 
                :class="{btn_ativo : computedBtnAtivo === 'CONTATO'}" 
                @click="methodsBtnAtivo('CONTATO')">
                    CONTATO
            </router-link>
        </nav>
         
    </header>
</template>

<script>
    export default{
        name: 'compCabecalho',
        data() {
            return{
                menu_nav : false,
                btn_ativo : 'HOME'
            }
        },
        computed:{
            computedMenuNav(){
                return this.menu_nav
            },
            computedBtnAtivo(){
                return this.btn_ativo
            }
        },
        methods:{
            methodsToggleNav(){
                this.menu_nav = !this.menu_nav
            },
            methodsBtnAtivo(payload){
                let tela = window.innerWidth
                this.btn_ativo = payload
                if(tela <= 600){
                    this.menu_nav = false
                }
            }
        }
    }
</script>

<style scoped>
    header{
        width:100%;
        display:flex;
        flex-direction:row;
        align-items:center;
        padding:64px 170px;
        justify-content:space-between;
    }
    .box_logo{
        width:339px;
        height:112px;
        margin-right:50px;
    }
    .box_logo img{
        width:100%;
        height:100%;
        object-fit: contain;
    }
    .btn_abrir_nav{
        display:none;
    }
    nav{
        width:900px;
        display:flex;
    }
    .btn_links{
        padding:12px 10px;
        background-color: var(--azul-escurao);
        border: solid 1px #fff;
        display:flex;
        flex-grow:1;
        flex-basis:0;
        flex-shrink: 0;
        justify-content:center;
        color:var(--branco);
        text-decoration:none;
        font-family:var(--font-principal);
        font-size:22px;
        line-height:30px;
        cursor: pointer;
        font-weight:400;
        transition:all 0.5s;
    }
    .btn_home{
        border-radius:22px 0px 0px 22px;
    }
    .btn_contato{
        border-radius:0px 22px 22px 0px;
    }
    .btn_ativo{
        transition:all 0.5s;
        background-color:var(--dourado);
    }
    @media screen and (min-width:0px) and (max-width:760px){
        header{
            flex-direction:column;
            flex-wrap:nowrap;
            align-items:center;
            padding:10px 0px;
        }
        .box_logo{
            width:270px;
            height:90px;
            margin-right:0px;
        }
        .btn_abrir_nav{
            width:50px;
            height:50px;
            display:block;
            background-color:var(--azul-escurao);
            border:0px;
            margin-top:15px;
        }
        .btn_abrir_nav img{
            width:100%;
            height:100%;
            object-fit: contain;
        }
        nav{
            width:100%;
            flex-direction:column;
            opacity:1;
            margin-top:10px;
            transition:all 0.5s;
            height:250px;    
        }
        .nav_fechado{
            height:0px;
            opacity:0;
            margin-top:0px;
        }       
        .btn_links{
            font-size:20px;
            line-height:30px;
            flex-grow:1;
            flex-basis:0;
            flex-shrink: 1;
            font-weight:400;
            border:0px;
        }
        .btn_home{
            border-radius:0px;
        }
        .btn_contato{
            border-radius:0px;
        }
    }
    @media screen and (min-width:761px) and (max-width: 990px){
        header{
            flex-direction:column;
            align-items:center;
            padding:10px 20px;
            justify-content:center;
        }
        .box_logo{
            width:300px;
            margin-bottom:20px;
        }
        nav{
            width:750px;
            display:flex;
            flex-wrap:wrap;
        }
        .btn_links{
            padding:10px 2px;
            font-size:20px;
            line-height:30px;
        }
    }
    @media screen and (min-width:991px) and (max-width: 1400px){
        header{
            height:100%;
            flex-direction:column;
            align-items:center;
            padding:10px 10px;
            justify-content:space-between;
        }
        .box_logo{
            width:300px;
            margin-bottom:20px;
        }
        nav{
            width:750px;
            display:flex;
        }
        .btn_links{
            padding:10px;
            font-size:20px;
            line-height:30px;
        }
        
    }
</style>