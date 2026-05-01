import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const CustomCard = ({ key, url, title }) => {
  return (
    <Card sx={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
     }}>
      <CardMedia
      component="img"
        sx={{ 
          height: 400
        }}
        image= {url}
        title={title}
        alt={title}
      />
      <CardContent
        sx={
          {
            textAlign:'left'
          }
        }
      >
        <Typography gutterBottom variant="h5" component="div">
          <h3>{title}</h3>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
