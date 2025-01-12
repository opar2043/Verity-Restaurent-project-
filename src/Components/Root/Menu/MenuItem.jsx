import Cover from "../../Shared/Cover"
import menuImg from '../../../assets/assets/menu/banner3.jpg'
import Banner from "../Home/Banner"
import MenuCard from "./MenuCard"
import Background from "../../Shared/Background"
import menuImg2 from '../../../assets/assets/shop/banner2.jpg'


const MenuItem = () => {

  return (
    <div>
        <Background img={menuImg2} head={'Welcome to our MenuBar'}></Background>
        <Cover head={'Check Our menu Item'} img={menuImg}></Cover>
         <MenuCard></MenuCard>
    </div>
  )
}

export default MenuItem