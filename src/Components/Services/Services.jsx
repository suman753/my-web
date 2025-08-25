import React from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'


const Services = () => {
  return (
        <div id='services' className="services">
            <div className="services-title">
                <h1>My Services</h1>
            </div>
            <div className="services-container">
                {Services_Data.map((services,index)=>{
                    return <div key={index} className="services-format">
                        <h3>{services.s_no}</h3>
                        <h2>{services.s_name}</h2>
                        <p>{services.s_desc}</p>
                        <div className="services-readmore">
                            <a href={services.s_link}><p>Read More</p></a>
                            <img src={arrow_icon} alt="" />

                        </div>
                    </div>
                })}
            </div>
        </div>
      
 
  )
}

export default Services
