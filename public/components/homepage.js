
let homepage=Vue.component("homepage",{
    template:`
        <div class="homepage">
            
            <div class="welcomeThings">
                <h1>Welcome To Hinder Homepage</h1>
                <img v-for="user in users" :src="user.userImage">
            </div>
            <div class="userCards">
                <h1>User Cards Here</h1>
                <user-card />
            </div>

            <script src="./homepage.js"></script>

        </div>
    `,
    data(){
        
        return{
            users: []
        }
    },
    methods:{
        
    },
    computed:{

    },

    mounted() {
        axios
        .get('http://localhost:8080/user')
        .then(response => {
            responseData = response.data.users;
            console.log(responseData);
            responseData.map((user) => {
                this.users.push(...this.users, user);
            })
        })
    }
    
});