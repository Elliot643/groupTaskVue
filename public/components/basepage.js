let basepage=Vue.component("basepage",{
    template:`
    <div class="basepage" :key="keyVariable">
        <div v-if="!loggedIn">
            <loginpage @user-logged-in="refreshPage"/>
        </div>

        <div v-if="loggedIn">
            <div class="homepage">
                <homepage @create-userpage="createUserpage" @user-logged-out="refreshPage" v-show="!hidden"/>
            </div>
    
            <div class="userpage">
                <userpage @return-to-homepage="showHomepage" :user="currentUser" v-if="hidden"/>
            </div>
        </div>
        

    </div>
        
    `,
    data(){
        return{
            
            hidden: false,
            keyVariable: 1,
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
            window.scrollTo(0,0);
        },
        createUserpage(user){
            this.currentUser=user;
            this.showHomepage();
        },
        refreshPage(){
            this.keyVariable++;
            console.log("refreshPage called, loggedIn="+this.loggedIn);
        }
    },
    computed:{
        loggedIn(){
            this.keyVariable++;
            return sessionStorage.getItem('loggedIn')==1; 
        }
    },
    mounted(){
        
        
        console.log("loggedIn = "+this.loggedIn);

        
    }
    
});