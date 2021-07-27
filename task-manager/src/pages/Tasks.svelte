<script>
    const url = "http://localhost:8080/api"
    import axios from 'axios';
    import { onMount } from 'svelte';
    import Modal from '../components/widgets/Modal.svelte';
    import SEO from './../meta';
    let seoData = "";
    let task = {
        title: "",
        body: "",
        tag: ""
    }

    onMount( () => {
        seoData = SEO.task;
    })

    const activeModal = () => props.active = true;
    const sendData = async (event) => {
        event.preventDefault()
        const res = await axios.post(`${url}/tasks/add/6031ce3c0822462900911b33`, { title: task.title, body: task.body, comment: task.tag })
        console.log(res.data)
        task.title = ""; task.body = ""; task.tag = "";
        console.log("Hola")
    }

    let props = {
        active: false
    }

    let yourNewTask = true;
</script>

<svelte:head>
    <title>View Your Tasks</title>
    <meta name="description" content={seoData.description}>
    <link rel="carnonical" href="https://github.io/tasks">
</svelte:head>
<div>
    <Modal enable={props.active}>
        <h2 slot="title" class="title">
            add a new task to your route
        </h2>
        <form slot="body" action="#" method="POST" class="form" on:submit="{sendData}">
            <input class="input-control" type="text" placeholder="Title" bind:value="{task.title}"/>
            <input class="input-control" type="text" placeholder="Tags or Comment" bind:value="{task.tag}"/>
            <input class="text-control" type="text" placeholder="Content" bind:value="{task.body}"/>
            <input class="btn btn-succes btn-block" type="submit" value="AGREGE"/>
        </form>
    </Modal>
    {#if yourNewTask}
    <div class="absolute--center">
        <span class="btn btn-primary btn-dashed" on:click="{activeModal}">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-folder-plus" viewBox="0 0 16 16">
                <path d="M.5 3l.04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z"/>
                <path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/>
            </svg>
        </span>
    </div>
    {/if}
</div>

<style>
.form{
    padding: 0 3rem;
}
.title{
    font-size: 2rem;
    font-weight: 400;
}
</style>