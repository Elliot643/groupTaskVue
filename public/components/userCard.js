let userCard=Vue.component("user-card",{
    props:{
        user: Object,
    },
    template:`
        <div class="user-card" @click="clickedCard" style="border-style: double; background-color: lightgrey; border-radius: 5px;">
            <div class="user-image">
                <img v-bind:src="user.profilePic" style="width: 100%">
            </div>
            <div>
                <h1 style="text-align: center;"><b>{{ user.username }}</b></h1>
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