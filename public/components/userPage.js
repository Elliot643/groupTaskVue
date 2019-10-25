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

            <div class="userpage-upload-picture" v-if="ownPage">
                <pictureUpload @picture-uploaded-update="postAndUpdatePictures" @update-userpage-new-picture="updateKeyValue"></pictureUpload>
            </div>
            
            <div class="userpage-pictures" :key="keyvalue">
                <h1 v-if="!pictures.length">This user does not have any pictures</h1>
                <ul>
                    <p v-for="picture in pictures">
                        <userpage-picture :picture="picture" @comment-added-update="updateKeyValue"/>
                    </p>
                </ul>
            </div>
            

        </div>
    `,
    data(){
        return{
            ownPage: this.user.userId==sessionStorage.userID,
            userImage: "../assets/defaultpicture.jpg",
            pictures: [],
            keyvalue: 1,
        }
    },
    methods:{
        returnToHome(){
            this.$emit("return-to-homepage");
        },
        postAndUpdatePictures(picture){ 
            axios.post("/postPicture", picture).then(()=> {
                axios.post("/getPicturesWithUserId",{
                    userId: this.user.userId
                }).then((res)=>{
                    this.pictures=res.data;
                    console.log("updating pictures on userpage");
                });
            });
        },
        updateKeyValue(){
            this.keyvalue++;
        }
    },
    computed:{
        
    },
    mounted() {
        console.log("ownPage: "+this.ownPage);
        axios.post("/getPicturesWithUserId",{
            userId: this.user.userId
        }).then((res)=>{
            this.pictures=res.data;
        });
        
    }
    
});