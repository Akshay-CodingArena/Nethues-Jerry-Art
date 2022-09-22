import { useRouter } from "next/router"
export default (context)=>{
    const router = useRouter(context)
    return <h1>HIii {router.query.vendor}</h1>
}