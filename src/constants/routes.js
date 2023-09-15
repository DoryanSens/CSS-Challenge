import Error404Page from "../pages/Error404Page";
import ChallengePage from "../pages/ChallengePage";
import Home from "../pages/Home";

const routes = [
    {
        title : "Home",
        path : "/",
        element : <Home />,
        component : Home, 
        exact : true,
    },
    {
        title : "Challenges",
        path : "/Challenge/:Id",
        element : <ChallengePage/>,
        component : ChallengePage, 
        exact : true,
    },
    {
        title : "page 404",
        path : "*",
        element : <Error404Page />,
        component : Error404Page, 
        exact : false,
    }
]


export default routes;