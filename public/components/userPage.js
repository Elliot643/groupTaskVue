let userpage=Vue.component("userpage",{
    props:{
        user: Object,
    },
    template:`
        <div class="userpage">
            <button v-on:click="returnToHome">Return</button>
            <h1>Userpage</h1>
            <div class="userpage-profile-picture">
                <img v-bind:src="user.profilePic">
            </div>
            <div class="userpage-username">
                <h2>{{ user.username }}</h2>
            </div>
            <div class="userpage-pictures">
                <h1>User page pictures here</h1>
                <ul>
                    <p v-for="picture in pictures">
                        <userpage-picture :picture="picture"/>
                    </p>
                </ul>
            </div>
            

        </div>
    `,
    data(){
        return{
            userImage: "../assets/defaultpicture.jpg",
            pictures: [],
        }
    },
    methods:{
        returnToHome(){
            this.$emit("return-to-homepage");
        }
    },
    computed:{
        
    },
    mounted() {
        console.log("getting pictures for user: "+this.user.userId);
        axios.post("/getPicturesWithUserId",{
            userId: this.user.userId
        }).then((res)=>{
            this.pictures=res.data;
        });
        
    }
    
});