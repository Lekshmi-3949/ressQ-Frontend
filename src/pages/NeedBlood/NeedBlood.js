import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import './NeedBlood.css'



const NeedBlood = () => {
  return (
    <MainLayout>
              <div className='need_blood_container'>
      <div className="need_blood_title">
        Need Blood?
      </div>      
      <div className="need_blood_searchBox">
        <div className="need_blood_bGroups">
            <div className="need_blood_bgicon">

            </div>
            {/*<input type="" className="need_blood_bgroup" />*/}
            
            <select value="lop"  className="need_blood_bgroup">
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            


        </div>
        <div className="need_blood_location">
            <div className="need_blood_locicon">

            </div>

            <select value="kol"  className="need_blood_loc">
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>

        </div>
        <div className="need_blood_searchbtn"><input type="submit" value="Submit" /></div>
      </div>
      <div className="need_blood_filter">

      </div>
      <div className="need_blood_records">

      </div>





        
    </div>
    </MainLayout>
  )
}

export default NeedBlood



