 import { Box, IconButton } from '@mui/material';
 import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
 import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
 const CustomBox =({key,url,name,onDecreaseClick,onIncreaseClick})=>{
    
    return(
        <div>
            <Box
                sx ={
                    {
                        position: 'relative',
                        width: '100%',
                        overflow: 'hidden',
                    }
                }
            >
                <Box
                    component="img"
                    src = {url}
                    sx ={
                        {
                            height: 800,
                            objectFit: 'contain',
                        }
                    }
                ></Box>
                <IconButton 
                sx ={
                    {
                        position: 'absolute',
                        trasform: 'translateY(-50%)',
                        top: '50%',
                        left: '10px'
                    }
                }
                onClick={onDecreaseClick}>
                    <ArrowBackIosIcon />
                </IconButton>

                <IconButton 
                sx ={
                    {
                        position: 'absolute',
                        trasform: 'translateY(-50%)',
                        top: '50%',
                        right: '10px'
                    }
                }
                onClick={onIncreaseClick}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>
        </div>
    );
 }

 export default CustomBox;