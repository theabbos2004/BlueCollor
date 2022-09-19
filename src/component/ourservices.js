import React,{useState} from 'react';
import note from "../img/icon/IMAGEnote.svg"
import condition from "../img/icon/IMAGEcondition.svg"
import electrical from "../img/icon/IMAGEelectrical.svg"
import Commercial from "../img/icon/IMAGECommercial.svg"
import security from "../img/icon/IMAGEsecurity.svg"
import settings from "../img/icon/IMAGEsetting.svg"
import house from "../img/icon/IMAGEhouse.svg"
const OurServices = () => {
    const [state, setstate] = useState([
        {
            icon:condition,
            title:"Air condition service",
            main:"Services are able to service your entire electrical infrastructure from Thermal Imaging of your air condition from switch boards.",
        },
        {
            icon:electrical,
            title:"Electrical installation",
            main:"The art electrical installations that provide all the necessary electrical solutions to suit your business, home or industrial premises.",
        },
        {
            icon:Commercial,
            title:"General Builder",
            main:"We provide impeccable safety assessments to both commercial, residential properties. Our adept & knowledgeable electricians.",
        },
        {
            icon:security,
            title:"Security System",
            main:"Utilized for measuring flow, temperature level & pressure in the manufacturing industry array of technology is ensure productivity.",
        },
        {
            icon:settings,
            title:"Service & maintenance",
            main:"Electrical Services are able to service your entire electrical infrastructure from Thermal Imaging of your switch boards.",
        },
        {
            icon:house,
            title:"House Extensions",
            main:"Traditionally, electricity is supplied through overhead network poles, where the cable is connected to your building.",
        },
    ]);
    return (
        <div className='our-services'>
            <div className='container d-flex justify-content-center align-items-center flex-column'>
                <div className='header w-50 d-flex align-items-center justify-content-evenly flex-column'>
                    <p className='shadow align-self-center'>
                        <img src={note}  className="me-2"/>
                        Area Of Service
                    </p>
                    <h1 className='title  my-2'>Our Services</h1>
                    <p  className="text-center text-secondary my-2">
                        We offers a comprehensive range of electrical services for domestic and commercial properties at a reasonable price.
                    </p>    
                </div>
                <div className='body w-100'>
                    {
                        state.map((item,index)=>
                        <div key={index} className="our-services-card d-flex justify-content-evenly flex-column">
                            <div className='icon'>
                                <img src={item.icon}/>
                            </div>
                            <h5>{item.title}</h5>
                            <p className='text-secondary'>{item.main}</p>
                            <button>View more</button>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default OurServices;
