import HeroSecData from "../Utils/constant/data"
import Button from "./Common/Button"

const HeroSection = () => {
    const {tittle , discription , heading} = HeroSecData
  return (
    <div className="sm:pl-10 flex justify-center items-center gap-12 flex-wrap p-16">
      <div className="sm:pl-10 w-[500px] flex justify-center items-start flex-col md:pl-2 ">
        <h1 className="text-5xl pb-8">{tittle} <span className="text-primary">{heading}</span></h1>
        <p className="w-[400px] text-lg pb-8">{discription}</p>

        <Button data="Order Now"/>

      </div>
      <div>
        <img className="h-[300px] w-[350px] rounded-3xl border-2 border-primary mt-4" src="./assets/imgs/foodImg.jpg" alt="" />
      </div>
    </div>
  )
}

export default HeroSection
