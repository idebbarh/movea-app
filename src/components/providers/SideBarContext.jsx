import React,{createContext, useState} from 'react'

const SideBarContext = createContext();

export function SideBarProvider({children}) {
    const [isShowingSideBar,setIsShowingSideBar] = useState(false);
    console.log(isShowingSideBar)
  return (
    <SideBarContext.Provider value={{isShowingSideBar,setIsShowingSideBar}}>
        {children}
    </SideBarContext.Provider>
  )
}

export default SideBarContext