
let userPagePicture=Vue.component("userpage-picture",{
    props:{
        picture: Object,
    },
    template:`
        <div class="user-page-picture" style="border-style: groove; width:300px;">
            <div class="picture" style="width:300px;">
                <img v-bind:src="picture.picture" style="width:100%;">
                <h3 v-if="picture.caption" style="text-align: center;">{{ picture.caption }}</h3>
            </div>
            <div style="width:300px; ">
                <div>
                    <ul>
                        <h4 v-if="!comments.length" style="text-align: center;">No comments yet</h4>
                        <div v-for="comment in comments" style="border-style: groove; margin-right: 5px; height: auto">
                            
                            <b>{{ comment.commenter }}:</b>
                            <img v-bind:src="'../assets/thumbsup.jpg'" v-if="comment.thumbsUp" align="right" style="width:20px;">
                            <img v-bind:src="'../assets/thumbsdown.jpg'" v-if="!comment.thumbsUp" align="right" style="width:20px;">
                            <br>
                            <p style="word-break: break-all; white-space: normal;">
                                {{ comment.comment }}
                            </p>
                            
                            
                            
                        </div>
                    </ul>
                </div>
                <div>
                    <form class="comment-form" @submit.prevent="addComment">
                        <p>
                            <label for="comment">Comment:</label><br>
                            <input id="comment" v-model="comment" ></input>
                        </p>
                        <p>
                            <label for="thumbsUp">Thumbs Up</label>
                            <input type="radio" id="thumbsUp" value="true" v-model="thumbsUp"></input>
                            <label for="thumbsDown">Thumbs Down</label>
                            <input type="radio" id="thumbsDown" value="false" v-model="thumbsUp"></input>
                        </p>
                        <p>
                            <input type="submit" value="Comment"></input>
                        </p>
                        
                    </form>  
                </div>
            </div>
        </div>
    `,
    data(){
        return{
            comment: "",
            thumbsUp: false,
            commenter: sessionStorage.username,
            comments: [],
        }
    },
    
    methods:{
        addComment(){
            console.log("comment submitted");
            let localComment = {
                comment: this.comment,
                commenter: this.commenter,
                thumbsUp: this.thumbsUp,
                pictureId: this.picture.pictureId
            };
            //this.comments.push(localComment);
            axios.post('/postVerdict', localComment).then(() => {
                axios.post("/getVerdictWithPictureId",{
                    pictureId: this.picture.pictureId
                }).then((result)=>{
                    this.comments = result.data;
                }).then(()=>{ 
                    this.$emit("comment-added-update");
                });
            }).catch(function (error) {
                console.log(error);
            });

            this.comment="";
            
        }
    },
    mounted () {

        axios.post("/getVerdictWithPictureId",{
                pictureId: this.picture.pictureId
            }).then((result)=>{
                this.comments = result.data;
            }
        );
        
    
    }
    
});