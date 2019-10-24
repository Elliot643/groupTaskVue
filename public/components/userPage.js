let userpage=Vue.component("userpage",{
    props:{
        user: Object,
    },
    template:`
        <div class="userpage">
            <button v-on:click="returnToHome">Return</button>
            <h1>{{ user.username }}'s page</h1>
            <div class="userpage-profile-picture">
                <img v-bind:src="user.profilePic">
            </div>
            
            <div class="userpage-pictures">
                <h1 v-if="!pictures.length">This user does not have any pictures</h1>
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