let loginpage=Vue.component("loginpage",{
    props:{

    },
    template:`
        <div class="loginpage">
            <h1>Login Page</h1>

            <form
                id="app"
                @submit.prevent="checkForm" 
                method="post"
            >
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
            <button v-on:click="toggleSignup">Not a user? Sign up here.</button>
            <signuppage v-if="showSignup" @user-signed-up="toggleSignup"/>
        </div>
    `,
    data(){
        
        return{
            username: "",
            password: "",
            errors: [],
            loggedIn: sessionStorage.getItem('loggedIn'),
            showSignup: false
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
                axios.post('/login', {
                    username: e.target.username.value,
                    password: e.target.password.value
                }) .then((response) => {
                    if(response.data.inloggad===true){
                        alert(this.username+" logged in");
                        sessionStorage.setItem('username', this.username);
                        sessionStorage.setItem('userID', response.data.userId);
                        sessionStorage.setItem('loggedIn', 1);
                        this.$emit("user-logged-in");
                    }
                    else{
                        alert("Error when logging in. Wrong username or password.");
                        this.username="";
                        this.password="";
                    }
                    
                }).catch(function (error) {
                    console.log(error);
                });
                
            }

            return true;
        },
        toggleSignup(){
            this.showSignup=!this.showSignup;
        }
    },
    computed:{
        
    },
    
});