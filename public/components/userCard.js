let userCard=Vue.component("user-card",{
    template:`
        <div class="user-card" @click="">
            <div class="user-image">
                <img v-bind:src="userImage">
            </div>
            <div>
                <h1>{{ userName }}</h1>
            </div>
        </div>
    `,
    data(){
        return{
            userImage: "./assets/image.jpg",
            userName: "Susan"
        }
    },
    methods:{

    },
    computed:{

    },
    
});