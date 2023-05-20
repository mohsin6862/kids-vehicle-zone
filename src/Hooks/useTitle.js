import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
     document.title = ` ${title}- kids-Vehicle-Zone`
    },[title])
}
export default useTitle;