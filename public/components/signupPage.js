let signuppage=Vue.component("signuppage",{
    props:{

    },
    template:`
        <div class="signuppage">
            <h1>Signup Page</h1>

            <form
                id="app" @submit.prevent="checkForm" method="post">

                <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                    <li v-for="error in errors">{{ error }}</li>
                    </ul>
                </p>

                <p>
                    <label for="username">Username</label>
                    <input
                    id="username"
                    v-model="username"
                    type="text"
                    name="username"
                    >
                </p>

                <p>
                    <label for="password">Password</label>
                    <input
                    id="password"
                    v-model="password"
                    type="password"
                    name="password"
                    >
                </p>

                <p>
                    <input
                    type="submit"
                    value="Submit"
                    >
                </p>
            </form>

        </div>
    `,
    data(){
        return{
            username: "",
            password: "",
            errors: []
        }
        
    },
    methods:{
        checkForm: function(e) {
            this.errors = [];
            if (!e.target.username.value) {
                this.errors.push("Username required");
            }

            if (!e.target.password.value) {
                this.errors.push("Password required");
            }

            if (!this.errors.length) {
                axios.post("/postUser",{
                    username: this.username,
                    password: this.password,
                })
                .then(response => {
                    if (e.target.username.value === response.data.username) {
                        if (e.target.password.value === response.data.password) {
                            this.loggedIn = true;
                            localStorage.setItem(`username: ${response.data.username}`);
                        }
                    }
                });
            }

            return true;
        }
    },
    computed:{
        
    },
    
});