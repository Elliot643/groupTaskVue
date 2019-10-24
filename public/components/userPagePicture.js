
let userPagePicture=Vue.component("userpage-picture",{
    props:{
        pictureId: Number,
    },
    template:`
        <div class="user-page-picture">
            <div class="picture">
                <img v-bind:src="imageSrc">
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
            imageSrc: "../assets/cat.jpg",
            comment: "",
            thumbsUp: true,
            commenter: "TempCommenter",
            comments: [],
        }
    },
    methods:{
        addComment(){
            console.log("comment submitted");
            axios.post('/postVerdict', {
                comment: this.comment,
                commenter: this.commenter,
                thumbsUp: this.thumbsUp,
                pictureId: this.pictureId
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
            this.comments = this.getComments();
        },
        getComments(){
            let functionReturn=[];
            axios.get("http://localhost:8080/getAllVerdicts")
            .then((result)=>{
                functionReturn=result.data[0];
                return functionReturn;
            }).then((thing) => {
                console.log(thing);
                return thing;
            })
            
            ;
            
        }
    },
    computed:{

    }
    
});