
let homepage=Vue.component("homepage",{
    template:`
        <div class="homepage">
            
            <div class="welcomeThings">
                <h1>Welcome To Hinder Homepage</h1>
                <img v-bind:src="image">
            </div>
            <div class="userCards">
                <h1>User Cards Here</h1>
                <user-card/>
            </div>

            <script src="./homepage.js"></script>

        </div>
    `,
    data(){
        return{
            image: "../assets/hinder.jpg",
            users: [
                {
                    userName: "Susan",
                    image: "../assets/image.jpg"
                },
                {
                    userName: "Beth",
                    image: "../assets/image.jpg"
                }
            ]
        }
    },
    methods:{

    },
    computed:{

    }
    
});