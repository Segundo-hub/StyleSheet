<script>
    const url = "http://localhost:8080/api/users"
    import axios from 'axios';
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-routing';
    import Link from 'svelte-routing/src/Link.svelte';
    import AuthForm from '../../components/widgets/AuthForm.svelte';
    import { AuthContext } from '../../store';
    import SEO from './../../meta';
    let seoData = "";
    let user = {
        username: "",
        email: "",
        password: ""
    }
    onMount( () => {
        seoData = SEO.task;
    })

    const sendData = async (event) => {
        try {
            event.preventDefault()
            const { data, status } = await axios.post(url + '/register', { 
                    username: user.username,
                    email: user.email, 
                    password: user.password 
                }, 
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            if(status == 200){
                AuthContext.isAuth(data.token) 
                navigate('/dashboard', { replace: true })
            }
        } catch (error) {
            console.log(error)
        }
    }
</script>

<svelte:head>
    <title>Register for continue road StyleSheet</title>
    <meta name="description" content={seoData.description}>
    <link rel="carnonical" href="https://github.io/tasks">
</svelte:head>
<div>
    <AuthForm>
        <h2 slot="title" class="title">
            StyleSheet
        </h2>
        <form action="#" method="POST" class="form flex-center column" on:submit="{sendData}" autocomplete="off">
            <input class="input-control user--input input-block" type="text" placeholder="Username" bind:value="{user.username}"/>
            <input class="input-control user--input input-block" type="email" placeholder="Email" bind:value="{user.email}"/>
            <input class="input-control user--input input-block" type="password" placeholder="Password" bind:value="{user.password}"/>
            <input class="btn btn-succes btn-block send-btn" type="submit" value="SIGN IN"/>
        </form>
        <div slot="bottom" class="optional-section flex-center">
            <p>Do you already have an account <Link class="link-info" to="/login">Login</Link> </p>
            
        </div>
    </AuthForm>
</div>

<style>
.form{
    padding: 0 3rem;
}
.title{
    color: var(--orange-primary);
    font-weight: 600;
    font-size: 1.8rem;
}
.flex-center{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.column{
    flex-direction: column;
}
.optional-section{
    padding: 1rem 0;
    color: silver;
}
.send-btn{
    margin: .65rem 0 1rem 0;
}
</style>