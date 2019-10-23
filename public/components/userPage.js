let userpage=Vue.component("userpage",{
    props:{
        //user: Object,
    },
    template:`
        <div class="userpage">
            <h1>Userpage</h1>
            <div class="userpage-profile-picture">
                <img v-bind:src="user.userImage">
            </div>
            <div class="userpage-username">
                <h2>{{ user.username }}</h2>
            </div>
            <div class="userpage-pictures">
                <h1>User page pictures here</h1>
                <userpage-picture></userpage-picture>
            </div>
            

        </div>
    `,
    data(){
        return{
            user:{
                username: "Susan",
                userImage: "../assets/image.jpg"
            }
        }
    },
    methods:{

    },
    computed:{

    }
    
});