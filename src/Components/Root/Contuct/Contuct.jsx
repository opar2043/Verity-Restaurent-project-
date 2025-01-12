import Background from "../../Shared/Background"
import contuctImg from '../../../assets/assets/contact/banner.jpg'
import Location from "./Location"
import From from "./From"

const Contuct = () => {
  return (
    <div>
        <Background img={contuctImg} head={'Contuct Us'}></Background>
        <Location></Location>
        <From></From>
    </div>
  )
}

export default Contuct