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
            imageSrc: "../assets/cat.jpg",
            comment: "",
            thumbsUp: true,
            commenter: "Commenter",
            comments:[
                {
                    pictureId: 1,
                    comment: "doesnt care",
                    thumbsUp: false,
                    commenter: "Karen"
                },
                {
                    pictureId: 1,
                    comment: "nice",
                    thumbsUp: true,
                    commenter: "Joe"
                }
            ],
        }
    },
    methods:{
        addComment(){
            this.comments.push(
                {
                    pictureId: this.pictureId,
                    comment: this.comment,
                    thumbsUp: this.thumbsUp,
                    commenter: this.commenter
                }
            );
            alert(this.pictureId+this.comment+this.thumbsUp+this.commenter);
        }
    },
    computed:{

    },
    
});