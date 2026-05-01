import { Box,Grid,Container } from '@mui/material';
import "./Products.css"
import DATA_CATEGORY_PRODUCT from '../../data/dtProductsCategory'
import ProductCard from '../../forms/CustomCard/ProductCard';
import DATA_PRODUCT from '../../data/dtProduct';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import CustomSlider from '../../forms/CustomSlider/CustomSlider';
import DATA_COLOR from '../../data/dtColor';
import DATA_SIZE from '../../data/dtSize';
import DATA_BRAND from '../../data/dtBrand';
import { useState } from 'react';

const Product = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);

    const [selectedBrand, setSelectedBrand] = useState('');
    const addBrand = (id) => {
        if(selectedBrand === ''){
            setSelectedBrand('brand=' + id);
        } else {
            setSelectedBrand(selectedBrand + ',' + id);
        }
    }

    const [selectedIdCategory, setSelectedIdCategory] = useState(''); 
    const addIdCategory = (id) => {
        setSelectedIdCategory('id_category=' + id);
    }

    const [selectedColor, setSelectedColor] = useState(''); 
    const addColor = (id) => {
        setSelectedColor('color=' + id);
    }

    const [selectedSize, setSelectedSize] = useState(''); 
    const addSize = (id) => {
        if(selectedBrand === ''){
            setSelectedSize('size=' + id);
        } else {
            setSelectedSize(selectedSize + ',' + id);
        }
    }

    const query = selectedIdCategory 
    + selectedColor 
    + selectedSize 
    + selectedBrand 
    || '';

    console.log(query);

    // const handleUpdateQuery = (slug) => 
    //     setSearchParams({ slug: slug });
    // }
    
    return(
        <div className='product-container'>
            <Grid container spacing={0}>
                <Grid size={{ xs: 12, md: 3 }}>
                    <Box>
                        <Container>
                            {
                                DATA_CATEGORY_PRODUCT.map((item, index) => {
                                        return(
                                            <div key={index}>
                                                <h3>{item.category_name}</h3>
                                                {
                                                    item.information.map((info)=>{
                                                        return(
                                                            <Link to={'/admin/products?id_category=' + info.id} style={{ textDecoration: 'none', color: 'black' }} key={info.id}>
                                                                <div onClick={() => addIdCategory(info.id)} key={info.id}>{info.name}</div>
                                                            </Link>
                                                        );
                                                    })
                                                }
                                            </div>
                                        );
                                })
                            }
                        </Container>

                        
                    </Box>

                    <Box sx={
                        {marginTop: '40px',width: '100%'}
                    }
                    >
                        <Container>
                            <h3>Price</h3>
                            <CustomSlider />
                        </Container>
                    </Box>

                    <Box sx={
                        {marginTop: '40px',width: '100%'}
                    }
                    >
                        <Container>
                            <h3>Color</h3>
                            {
                                DATA_COLOR.map((color, index) => (
                                <Box
                                    onClick={() => addColor(color.id)}
                                    sx={{
                                    cursor: 'pointer',
                                    backgroundColor: color.name.toLowerCase(),
                                    textAlign: 'left',
                                    display: 'inline-flex',
                                    border: '1px solid black',
                                    padding: '10px 10px',
                                    marginBottom: '2px',
                                    marginRight: '5px',
                                    '& > :not(style)': {
                                        m: 1,
                                        width: 128,
                                        height: 128,
                                    },
                                    }}
                                >
                                </Box>))
                            }
                        </Container>
                    </Box>

                    <Box sx={
                        {marginTop: '40px',width: '100%'}
                    }>
                        <Container>
                            <h3>Size</h3>
                            {
                                DATA_SIZE.map((size, index) => (
                                    <Box
                                        onClick={() => addSize(size.id)}
                                        sx={{
                                            textAlign: 'left',
                                            display: 'inline-flex',
                                            border: '1px solid black',
                                            padding: '10px 10px',
                                            marginBottom: '5px',
                                            marginRight: '5px',
                                            '& > :not(style)': {
                                                m: 1,
                                                width: 128,
                                                height: 128,
                                                    },
                                        }}
                                    >
                                        {size.name}
                                    </Box>
                                ))
                            }
                        </Container>
                    </Box>
                    
                    <Box sx={
                        {marginTop: '40px',width: '100%'}
                    }>
                        <Container>
                            <h3>Brand</h3>
                            {
                                DATA_BRAND.map((brand, index) => (
                                        <div style={
                                                {"display": 'block'}}>
                                    <input type="checkbox" style={{display: 'inline-block'}} width={20} height={20} id={brand.id} name={brand.name} value={brand.name} 
                                            onChange={(e) => addBrand(brand.id)}/>
                                    <Box
                                        
                                        sx={{
                                            textAlign: 'left',
                                            display: 'inline-block',
                                            padding: '10px 10px',
                                            marginBottom: '5px',
                                            marginRight: '5px',
                                            '& > :not(style)': {
                                                m: 1,
                                                width: 128,
                                                height: 128,
                                                    },
                                        }}
                                    >
                                        
                                        {brand.name}
                                    </Box>
                                    </div>
                                ))
                            }
                        </Container>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 9 }}>
                    <Box>
                        <Container>
                            <Grid container spacing={2}>
                                {
                                    query === '' ? 
                                    DATA_PRODUCT.map((item) => {
                                        return(
                                            <Grid size={{ xs: 12, md: 4 }} key={item.id}>
                                                <ProductCard id_category={item.id_category}
                                                            slug={item.slug} 
                                                            name={item.name} 
                                                            img_src={item.img_src} 
                                                            price={item.price} 
                                                            isPublic={item.isPublic}
                                                            sizes={item.sizes}
                                                            colors={item.colors} />
                                            </Grid>
                                        );
                                    })
                                    :
                                    DATA_PRODUCT.filter((item) => (
                                            item.id_category === parseInt(selectedIdCategory.split('=')[1]) ||
                                            item.colors.includes(parseInt(selectedColor.split('=')[1])) ||
                                            item.sizes.includes(parseInt(selectedSize.split('=')[1])) ||
                                            item.brands === parseInt(selectedBrand.split('=')[1])
                                        ))
                                        .map((item) => {
                                        return(
                                            <Grid size={{ xs: 12, md: 4 }} key={item.id}>
                                                <ProductCard id_category={item.id_category}
                                                            slug={item.slug} 
                                                            name={item.name} 
                                                            img_src={item.img_src} 
                                                            price={item.price} 
                                                            isPublic={item.isPublic}
                                                            sizes={item.sizes}
                                                            colors={item.colors} />
                                            </Grid>
                                        );
                                    })
                                }
                            </Grid>
                        </Container>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default Product;