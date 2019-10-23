let basepage=Vue.component("basepage",{
    template:`
    <div class="basepage">

        <div class="homepage">
            <homepage @create-userpage="createUserpage" v-show="!hidden"/>
        </div>
        <div class="userpage">
            <userpage @return-to-homepage="showHomepage" :user="currentUser" v-show="hidden"/>
        </div>

    </div>
        
    `,
    data(){
        return{
            hidden: false,
            currentUser: {}
        }
    },
    methods:{
        showHomepage(){
            if(this.hidden){
                this.hidden=false;
            }
            else{
                this.hidden=true;
            }
        },
        createUserpage(user){
            this.currentUser=user;
            this.showHomepage();
        }
    },
    computed:{

    }
    
});