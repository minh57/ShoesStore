import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import CATEGORY_PRODUCT from '../../data/dtProductsCategory';
import DATA_SIZE from '../../data/dtSize';
import DATA_COLOR from '../../data/dtColor';
import { Box,Paper } from '@mui/material';


const ProductCard = ({ id_category, slug, name, img_src, price, isPublic,sizes,colors }) => {
  const availableSizes = sizes.map(sizeId => DATA_SIZE.find(size => size.id === sizeId)?.name).filter(name => name !== undefined);
  const availableColors = colors.map(colorId => DATA_COLOR.find(color => color.id === colorId)?.name).filter(name => name !== undefined);


  return (
    <Link to={slug} style={{ textDecoration: 'none' }}>
    <Card  sx={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
     }}>
      <CardMedia
      component="img"
        sx={{ 
          height: '100%',
          objectFit: 'contain',
        }}
        image= {img_src}
        title={name}
        alt={name}
      />
      <CardContent
        sx={
          {
            textAlign:'left'
          }
        }
      >
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {
            CATEGORY_PRODUCT.map((item) => {
              if(item.information.some(info => info.id === id_category)){
                return item.category_name + ' / ' + item.information.find(info => info.id === id_category).name;
              }
              return null;
            })
          }
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {
            isPublic > 0 ? <span>{price}</span>
            : <span style={{color: 'red'}}>(Out of Stock)</span>
          }
        </Typography>

        <Box sx={{ marginBottom: '10px' }}>
          {
            availableSizes.map((size, index) => (
            <Box
                sx={{
                  display: 'inline-flex',
                  border: '1px solid black',
                  padding: '5px 10px',
                  marginRight: '5px',
                  '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                  },
                }}
              >
                {size}
            </Box>   
            ))
          }
        </Box>
    
        <Box sx={{ marginBottom: '10px' }}>
          {
            availableColors.map((color, index) => (
            <Box
                sx={{
                  backgroundColor: color.toLowerCase(),
                  display: 'inline-flex',
                  border: '1px solid black',
                  padding: '10px 10px',
                  marginRight: '5px',
                  '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                  },
                }}
              >
                
            </Box>   
            ))
          }
        </Box>
      </CardContent>
    </Card>
    </Link>
  );
}

export default ProductCard;
