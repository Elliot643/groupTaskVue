let homepage=Vue.component("homepage",{
    template:`
        <div class="homepage">
            
            <div class="welcomeThings">
                <h1>Welcome To Hinder Homepage</h1>
                <img v-bind:src="'../assets/hinder.jpg'">
            </div>
            <div class="userCards"> 
                <h1>User Cards Here</h1>
                <ul>
                    <li v-for="user in users">
                        <user-card :user="user" @clicked-usercard="createUserPage"></user-card>
                    </li>
                </ul>
            </div>


        </div>
    `,
    data(){
        
        return{
            users: [],
        }
    },
    methods:{
        createUserPage(user){
            this.$emit("create-userpage",user);
        }
    },
    computed:{

    },

    mounted() {
        axios
        .get('http://localhost:8080/user')
        .then(response => {
            responseData = response.data.users;
            responseData.map((user) => {
                this.users.push(user);
            })
        })
    }
    
});