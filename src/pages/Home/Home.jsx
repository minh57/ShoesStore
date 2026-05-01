import Carousel from '../../components/Carousel/Carousel';
import Slider from '../../components/Slider/Slider';
import  Counter  from '../../features/counter/Counter';

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Slider />
            <Carousel />
            <Counter />
        </div>
    )
}