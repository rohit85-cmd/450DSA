import React,{useState} from 'react'
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import { Box, Zoom } from "@material-ui/core";

function NavigateTop() {

    const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);


    return (
        <Box >
            <Zoom in={true} style={{ transitionDelay: true ? '500ms' : '0ms', position:"fixed",
          right: 10,bottom: 15 }}>
            <Fab color="secondary" variant="circular" >
                <NavigationIcon sx={{ mr: 1 }} onClick={scrollToTop}  />
            </Fab>
        </Zoom>
        </Box>
    )
}

export default NavigateTop