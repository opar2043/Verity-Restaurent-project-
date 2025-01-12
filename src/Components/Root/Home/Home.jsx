
import Banner from "./Banner"
import Item from "./Item"
import Cover from "../../Shared/Cover"
import imgFeature from '../../../assets/assets/home/featured.jpg'
import Review from "./Review"
const Home = () => {
  return (
    <div>
       <Banner></Banner>
       <Item></Item>
      <Cover img={imgFeature} head={'Lets"s Teaste Our Item!'}></Cover>
      <Review></Review>

    </div>
  )
}

export default Home