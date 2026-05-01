import CustomBox from './../../forms/CustomBox/CustomBox';
import {SHOES} from '../../data/dtShoesImage';
import { useState } from 'react';

const Slider = () => {
    const [currentShoes,setCurrentShoes] = useState(0);
    const handleIncreaseShoesState = () =>  {
        setCurrentShoes(currentShoes ===  SHOES.length - 1 ? 0 : currentShoes + 1)
        console.log(currentShoes);
        return SHOES[currentShoes];
    }
    const handleDecreaseShoesState = () =>  {
        setCurrentShoes(currentShoes === 0 ? SHOES.length - 1 : currentShoes - 1)
        console.log(currentShoes);
        return SHOES[currentShoes];
    }
    return(
        <div>
                        <CustomBox key={SHOES[currentShoes].id} 
                                   url={SHOES[currentShoes].url} 
                                   name={SHOES[currentShoes].name}
                                   onDecreaseClick={handleDecreaseShoesState}
                                   onIncreaseClick={handleIncreaseShoesState} />
                    
        </div>
    );
};
export default Slider;