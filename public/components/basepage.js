let basepage=Vue.component("basepage",{
    template:`
    <div class="basepage" :key="keyVariable">
        <div v-if="!loggedIn">
            <loginpage @user-logged-in="login"/>
        </div>

        <div v-if="loggedIn">
            <div class="homepage">
                <homepage @create-userpage="createUserpage" @user-logged-out="logout" v-show="!hidden"/>
            </div>
    
            <div class="userpage">
                <userpage @return-to-homepage="showHomepage" :user="currentUser" v-if="hidden"/>
            </div>
        </div>
        

    </div>
        
    `,
    data(){
        return{
            loggedIn: false,
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
        logout(){
            this.keyVariable++;
            this.loggedIn=false;
            sessionStorage.setItem('loggedIn', false);
            console.log("logout made. this.loggedIn: "+this.loggedIn+", sessionStorage: "+sessionStorage.loggedIn);
        },
        login(){
            this.keyVariable++;
            this.loggedIn=true;
            sessionStorage.setItem('loggedIn', true);
            console.log("login made. this.loggedIn: "+this.loggedIn+", sessionStorage: "+sessionStorage.loggedIn);
        }
    },
    mounted(){
        
        //this.loggedIn=sessionStorage.loggedIn;
        console.log("this.loggedIn: "+this.loggedIn+", sessionStorage: "+sessionStorage.loggedIn);

        
    }
    
});