import { useState } from 'react'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import MapSection from '../../components/Map/MapSection';
import Statistics from '../../components/Statistics/Statistics';
import AddAccount from '../../components/AddAccount/AddAccount';
import UsersComment from '../../components/UsersComment/UsersComment';

const Home = () => {
    const [category, setCategory] = useState("Hemmesi");
  return (
    <div className=''>
      <Header/>
      <About/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <Statistics/>
      <UsersComment/>
      <AddAccount/>
      <MapSection/>
    </div>
  )
}

export default Home
