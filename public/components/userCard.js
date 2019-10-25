let userCard=Vue.component("user-card",{
    props:{
        user: Object,
    },
    template:`
        <div class="user-card" @click="clickedCard" style="border-style: solid; width:200px;">
            <div class="user-image">
                <img v-bind:src="user.profilePic" style=" width:200px; margin:0 auto;">
            </div>
            <div>
                <h1 style="text-align: center;">{{ user.username }}</h1>
            </div>
        </div>
    `,
    data(){
        return{
            //username: user.username,
            userImage: "../assets/defaultpicture.jpg",

        }
    },
    methods:{
        clickedCard(){
            this.$emit("clicked-usercard",this.user);
        }
    },
    computed:{

    },
    
});