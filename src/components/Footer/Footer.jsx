import Container from '@mui/material/Container'; 
import { Box,Grid } from '@mui/material';
import "./Footer.css"
import DATA_FOOTER from '../../data/dtFooter'

const Footer = () => {
    return(
        <div className ='footer'>
            <Container className='footer-container'>
                <Box >
                    <Grid container spacing={3}>
                        {
                            DATA_FOOTER.map((item,index)=>{
                                return(
                                    <Grid size ={{ xs: 12, md: 4 }}>
                                        {item.title}
                                        {
                                            item.information.map((info)=>{
                                                return(
                                                    <ul>
                                                        <li><a href={info.url}>{info.name}</a></li>
                                                    </ul>
                                                );
                                            })
                                        }
                                    </Grid>
                                );
                            })
                        }
                    </Grid>
                </Box>
            </Container>

            <div className='footer-end'>hi</div>
        </div>
    );
}

export default Footer