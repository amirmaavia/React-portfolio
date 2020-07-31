import React from 'react'
import { Grid , Cell } from 'react-mdl'
// import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Home() {
    return (
        <div   data-aos="fade-right" data-aos-duration="3000" data-aos-easing="linear" style={{width: "100%", margin: "auto"   }}>
            <Grid className="grid" data-aos="zoom-out-down" data-aos-duration="10000" data-aos-delay="300" >
                 <Cell  col={6}>
                 
                 </Cell>
                 <Cell col={6}>
                 <div  data-aos="fade-down" data-aos-duration="3000" data-aos-easing="linear" style={{marginTop:"40%",}}>
                     <h1 className="name"><b  data-aos="fade-right" >Hi there!</b></h1>
                     <p><b>My Name is Amir Maavia</b></p>
                     <p><b data-aos="fade-right">I Am Full Stack Web And Application developer <br/>
                     Develop highly interactive Front end / User Interfaces for your web and mobile applications</b></p>
                     <Button  data-aos="fade-right"variant="contained" color="primary">
                         Read More
      </Button>
                     
                   </div>
                   </Cell>
                   
                 
            </Grid>
        </div>
    )
}


export default Home
