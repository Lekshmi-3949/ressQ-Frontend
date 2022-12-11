import * as React from 'react';
import './DropdownDis.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { flexbox } from '@mui/system';

const DropdownDis = (props) => {
    //const districts=["None","Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"]
    //const[district,setdistrict]= React.useState('')

  return (
    <div >
      <FormControl sx={{ m: 1, minWidth: 120}} size="small">
      <InputLabel id="demo-select-small" style={{fontSize : 12 , fontWeight : 500}}>District</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={props.district}
          onChange={(e)=>{props.setdistrict(e.target.value)}}
          autoWidth
          label="Districts"
        >
            {props.districts.map((item,index)=>{
                        return(<MenuItem value={item} key={index}>{item} </MenuItem>)
                        })
            } 


          

        </Select>
      </FormControl>
    </div>
  )
}

export default DropdownDis