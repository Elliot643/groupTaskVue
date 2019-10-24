
let userPagePicture=Vue.component("userpage-picture",{
    props:{
        picture: Object,
    },
    template:`
        <div class="user-page-picture">
            <div class="picture">
                <img v-bind:src="picture.picture">
                <h3>Caption here: {{ picture.caption }}</h3>
            </div>
            <div>
                <ul>
                    <li v-for="comment in comments">
                        <p>{{ comment.commenter }} says: {{ comment.comment }}</p>
                        <p><img v-bind:src="'../assets/thumbsup.jpg'" v-if="comment.thumbsUp"></p>
                        <p><img v-bind:src="'../assets/thumbsdown.jpg'" v-if="!comment.thumbsUp"></p>  
                    </li>
                </ul>
                <p>
                    <form class="comment-form" @submit.prevent="addComment">
                        <p>
                            <label for="comment">Comment:</label>
                            <input id="comment" v-model="comment"></input>
                        </p>
                        <p>
                            <label for="thumbsUp">Thumbs Up</label>
                            <input type="radio" id="thumbsUp" value="true" v-model="thumbsUp"></input>
                            <label for="thumbsDown">Thumbs Down</label>
                            <input type="radio" id="thumbsDown" value="false" v-model="thumbsUp"></input>
                        </p>
                        <p>
                            <input type="submit" value="Submit"></input>
                        </p>
                        
                    </form>  
                </p>
            </div>
        </div>
    `,
    data(){
        return{
            verdict: {},
            comment: "",
            thumbsUp: false,
            commenter: "------Get name from session later------",
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
                axios.get("/getAllVerdicts").then((result)=>{
                    this.comments = result.data;
                });
            }).catch(function (error) {
                console.log(error);
            });

            this.comment="";
            
        }
    },
    mounted () {

        axios.get("/getAllVerdicts")
            .then((result)=>{
                this.comments = result.data;
            }
        );
        
    
    }
    
});