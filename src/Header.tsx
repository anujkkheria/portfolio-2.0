import React from 'react'
import {Menu} from '@mui/icons-material'
import Logo from './assets/Free_Sample_By_Wix.jpg'
import { AppBar,IconButton } from '@mui/material'
const Header:React.FC = () => {
  return (
    <AppBar sx={{display:'flex',flexDirection:"row",justifyContent:"space-between",alignContent:'center', height:45, backgroundColor:"#010101"}}>
        <img src={Logo} alt="Logo" width={"15%"} height={'20%'} className='self-center'/>
       <IconButton>
        <Menu sx={{fill:"#F6F6f6"}} />
        </IconButton> 
        </AppBar>
  )
}

export default Header