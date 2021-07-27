<script>
import axios from "axios";
import { onMount } from "svelte";
import { navigate } from "svelte-routing";
import { AuthContext } from "../store";
const url = "http://localhost:8080/api";
let tasks = [];


onMount( async () => {
    if(!$AuthContext){
        navigate('/')
    }
    const { data } = await axios.get(`${url}/tasks`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    })
    tasks = data
});

</script>

<svelte:head>
    <title>View Your Dashboard</title>
    <link rel="carnonical" href="https://github.io">
</svelte:head>

<section class="grand-view">
    <div class="container ui_grid rw_gap">
    {#each tasks as task }
        <div class="task--card wd--80">
            <h2>{ task.title }</h2>
            <p>{ task.body }</p>
            {#if task.comment }
                <p>{ task.comment }</p>
            {/if}
        </div>
    {:else}
        <p>loading...</p>
    {/each}
</div>
</section>