import { useRef ,useEffect } from "react"

export const useInterval = (callback:any,delay:any)=>{
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = ()=>{
      savedCallback.current()
    }
  
   if(delay !==null){
   const id = setInterval(tick,delay)
   return ()=>clearInterval(id)
   }
  }, [delay])
  
  
}