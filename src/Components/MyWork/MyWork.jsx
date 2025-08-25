import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return<div key={index} className="mywork-format">
                    <a href={work.w_link}>
                        <img key={index} src={work.w_img} alt="" />
                    </a>
                    
                    <h4>{work.w_name}</h4>
                    </div> 
                
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
      
    </div>
  )
}

export default MyWork
