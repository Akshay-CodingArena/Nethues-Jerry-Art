import Nav from "../components/Nav"
import { useRouter } from "next/router"
import Layout from "../layout"
export default  (context) => {
    const router=useRouter(context)
    console.log(router, router.query, router.query.name)
    const page = router.query.name
    console.log("selected page is ", page)
    return (
        <div>
            <Layout>
            <Nav drawerState={true} activePage={page}/>    
            </Layout>        
        </div>
    );
}

