let homepage=Vue.component("homepage",{
    template:`
        <div class="homepage">
            
            <div class="welcomeThings">
                <button align="right" v-on:click="logOut">Logout</button>
                <h1>Welcome To Hinder Homepage {{ username }}</h1>
                <img v-bind:src="'../assets/hinder.jpg'">
                <h3>Be a douche</h3>
            </div>
            <div class="userCards"> 
                <h1>User Cards Here</h1>
                <ul>
                    <p v-for="user in users">
                        <user-card :user="user" @clicked-usercard="createUserPage"></user-card>
                    </p>
                </ul>
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