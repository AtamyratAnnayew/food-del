import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu flex flex-col gap-[50px] text-white'>
      <h2 className='font-inter font-medium text-[50px] leading-[70px] text-center'>Iň Oňat & Yakymly Menýu</h2>
      <div className="explore-menu-list flex flex-row gap-7 justify-around cursor-pointer font-inter font-normal text-[18px] leading-[30px] tracking-normal text-center">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name ? "Hemmesi" :item.menu_name)} 
                  key={index} 
                  className={`explore-menu-list-item ${category === item.menu_name ? " border-b-white rounded-b-lg border-b-[4px] pb-[8px]" : ""}`}>
                    
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
    </div>
  ) 
}

export default ExploreMenu
