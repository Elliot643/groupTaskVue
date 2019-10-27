let homepage=Vue.component("homepage",{
    template:`
        <div class="homepage">
            
            <div class="welcomeThings">
                <button  v-on:click="logOut">Logout</button>
                <h1 style=" margin-top: 1%"><font color="white">Welcome {{ username }}</font></h1>
            </div>
            
            <div style=" margin-top: 15%">
                <div class="userCards" style="display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 5%; padding: 10px; grid-auto-rows: minmax(auto);">
                    <div v-for="user in users">  
                        <user-card :user="user" @clicked-usercard="createUserPage"/>
                    </div>   
                </div>
            </div>
        </div>
    `,
    data(){
        
        return{
            users: [],
            username: sessionStorage.username,
        }
    },
    methods:{
        createUserPage(user){
            this.$emit("create-userpage",user);
        },
        logOut(){
            sessionStorage.removeItem("userID");
            sessionStorage.removeItem("username");
            sessionStorage.setItem('loggedIn', 0);
            this.$emit("user-logged-out");
        }
    },
    computed:{

    },

    mounted() {
        axios
        .get("/getUsers")
        .then((response) => {
            responseData = response.data;
            responseData.map((user) => {
                this.users.push(user);
            })
        })
    }
    
});