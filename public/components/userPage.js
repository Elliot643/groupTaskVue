let userpage=Vue.component("userpage",{
    props:{
        user: Object,
    },
    template:`
        <div class="userpage" :key="userpagekey">
            <button v-on:click="returnToHome">Return</button>
            <div class="userpage-profile-picture" style=" display: grid; grid-template-columns: 15% 15%;">
                <img v-bind:src="user.profilePic" style="height: 80px; border-style: double; border-radius: 5px; border-color: white">
                <h1><font color="white">{{ user.username }}'s page</font></h1> 
            </div>

            
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); grid-gap: 5%; padding: 10px; grid-auto-rows: minmax(auto); margin-top: 10%;" :key="keyvalue">
                <div class="userpage-upload-picture" v-if="ownPage">
                    <pictureUpload @picture-uploaded-update="postAndUpdatePictures" @update-userpage-new-picture="updateUserpage"></pictureUpload>
                </div>

                <div v-if="!pictures.length">
                    <h1><font color="white">This user does not have any pictures yet</font></h1>
                </div>
                
                <div class="userpage-pictures" v-for="picture in pictures">
                    <userpage-picture :picture="picture" @comment-added-rerender-card="updateKeyValue" style="background-color: lightgrey;"/>
                </div>
            </div>

        </div>
    `,
    data(){
        return{
            ownPage: this.user.userId==sessionStorage.userID,
            userImage: "../assets/defaultpicture.jpg",
            pictures: [],
            keyvalue: 1,
            userpagekey: 1
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
            let scrollPos = window.pageYOffset;
            this.keyvalue++;
            window.scrollTo(0,scrollPos);
        },
        updateUserpage(){
            let scrollPos = window.pageYOffset;
            this.userpagekey++;
            window.scrollTo(0,scrollPos); 
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