import CustomCard from './../../forms/CustomCard/CustomCard';
import Grid from '@mui/material/Grid';
import {CATEGORY} from '../../data/dtCat';
import Container from '@mui/material/Container';
import './Carousel.css';


export default function Carousel() {

    return (
        <div>
            <Container maxWidth="xl">   
            <div className='carousel-title'>
                <h1 className='half title'>CATEGORY</h1>
            </div>

            <Grid container spacing={2}>
                
                    {
                    CATEGORY.map((item,index) => {
                        return(
                           <Grid size ={{ xs: 12, md: 4 }}> 
                                <CustomCard key={index} url={item.url} title={item.title} />
                            </Grid>
                        )
                    })
                    }
            </Grid>
            </Container>
        </div>
    );
}