let userCard=Vue.component("user-card",{
    props:{
        user: Object,
    },
    template:`
        <div class="user-card" @click="">
            <div class="user-image">
                <img v-bind:src="user.userImage">
            </div>
            <div>
                <h1>{{ user.username }}</h1>
            </div>
        </div>
    `,
    data(){
        return{
            username: user.username,
            userImage: user.userImage
        }
    },
    methods:{

    },
    computed:{

    },
    
});