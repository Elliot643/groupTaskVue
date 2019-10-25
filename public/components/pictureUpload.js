let pictureUpload=Vue.component("pictureUpload",{
    props:{

    },
    template:`
        <div class="pictureUpload">
            <h1>Upload picture</h1>

            <form
                id="app" @submit.prevent="checkForm" method="post">

                <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors">{{ error }}</li>
                    </ul>
                </p>

                <p>
                    <label for="picture">Picture</label>
                    <input
                        id="picture"
                        v-model="picture"
                        type="text"
                        name="picture"
                    >
                </p>

                <p>
                    <label for="password">Caption</label>
                    <input
                        id="caption"
                        v-model="caption"
                        type="text"
                        name="caption"
                    >
                </p>
                <div v-if="picture.length">
                    <p>
                        <img v-bind:src="picture" style="width: 300px;height:300px">
                    </p>
                    <p v-if="caption.length">
                        Caption: {{ caption }}
                    </p>
                    
                </div>

                <p>
                    <input
                        type="submit"
                        value="Upload Picture"
                    >
                </p>
            </form>

        </div>
    `,
    data(){
        return{
            picture: "",
            caption: "",
            errors: [],
        }
        
    },
    methods:{
        checkForm: function(e) {
            this.errors = [];
            if (!e.target.picture.value) {
                this.errors.push("Picture link required");
            }

            if (!this.errors.length) {
                let picture = {
                    picture: this.picture,
                    caption: this.caption,
                    userId: sessionStorage.userID
                };
                this.$emit("picture-uploaded-update", picture);
                this.$emit("update-userpage-new-picture");
            }
            this.picture="";
            this.caption="";

            return true;
        }
    },
    
});