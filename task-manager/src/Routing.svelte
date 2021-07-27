<script>
	import { Route } from "svelte-routing";
    import AuthLogin from "./pages/Auth/AuthLogin.svelte";
	import AuthRegister from "./pages/Auth/AuthRegister.svelte";
	import Dashboard from "./pages/Dashboard.svelte";
	import Home from "./pages/Home.svelte";
	import Tasks from "./pages/Tasks.svelte";
	import MyWay from "./pages/AuthPages/MyWay.svelte";
    import AuthRoute from "./components/utils/AuthRoute.svelte";

</script>

<!-- -- -->
<Route exact path="/">
    <Home/>
</Route>
<Route path="login">
    <AuthLogin/>
</Route>
<!-- -- -->

<AuthRoute path="tasks">
    <Tasks/>
</AuthRoute>
<AuthRoute path="dashboard">
    <Dashboard/>
</AuthRoute>
<AuthRoute path="my-way">
    <MyWay/>
</AuthRoute>
<Route path="signin">
    <AuthRegister/>
</Route>
<Route path="*">
	Route Not Found
</Route>