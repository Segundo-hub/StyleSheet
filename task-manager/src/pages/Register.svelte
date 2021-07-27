<script>
    const url = "http://localhost:8080/api/users"
    import axios from 'axios';
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-routing';
    import Modal from '../components/widgets/Modal.svelte';
    import context from '../utils/context';
    import SEO from './../meta';
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
            const { data, status } = await axios.post(`${url}/login`, { username: user.username, password: user.password }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(status == 200){
                context.setAuth(data.token) 
                navigate('/dashboard', { replace: true })
            }
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    let props = {
        active: true
    }
</script>

<svelte:head>
    <title>View Your Tasks</title>
    <meta name="description" content={seoData.description}>
    <link rel="carnonical" href="https://github.io/tasks">
</svelte:head>
<div>
    <Modal enable={props.active}>
        <h2 slot="title" class="title">
            Welcome StyleSheet!! please LOGIN
        </h2>
        <form slot="body" action="#" method="POST" class="form flex-center" on:submit="{sendData}">
            <input class="input-control user--input center" type="text" placeholder="Username" bind:value="{user.username}"/>
            <input class="input-control user--input center" type="email" placeholder="Email" bind:value="{user.email}"/>
            <input class="input-control user--input center" type="password" placeholder="Password" bind:value="{user.password}"/>
            <input class="btn btn-succes btn-block send-btn" type="submit" value="LOGIN"/>
        </form>
    </Modal>
</div>

<style>
.form{
    padding: 0 3rem;
}
.title{
    font-size: 2rem;
    font-weight: 400;
}
.flex-center{
    display: flex;
    align-items: center;
    flex-direction: column;
}
.send-btn{
    margin: .65rem 0 1rem 0;
}
</style>