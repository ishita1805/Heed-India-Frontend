import React, {useState, useEffect} from 'react'
import Background from '../../components/bgVid/BackgroundVideo'
import './mission.css'
import imgone from '../../assets/missionimg.jpg'
import Card from '../../components/cardMission/cardsMission'
import axios from 'axios'
import url from '../../url'
import AOS from 'aos';
import ReactHtmlParser from 'react-html-parser'
import 'aos/dist/aos.css';

const Mission = () => {
  const [content,setContent] = useState({
      cards:[{
          title:'',
          description:'',
          media:'',
      }],
      title:'',
      subtitle:'',
      hashtag:'',
      media:'',
  });
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.post(`${url}/page/get`, { id: '609c2cbea0996a0bec3f4a49' })
        .then((resp) => { 
            console.log(resp.data.resp);
            setContent(resp.data.resp);
         })
        .catch((e) => { console.log(e); })
        AOS.init({
          duration: 400,
          easing: 'ease-in-out-sine',
        });
      }, [])

      const array = [
          'green-icon',
          'purple-icon',
          'orange-icon',
          'blue-icon',
      ]

    return (
        <div>
            <Background hashtag={content.hashtag.split(' ')} title={content.title} subtitle={content.subtitle}/>

            <div className="abt-sec abt-white">
               <div data-aos='fade-up' className="about-row-in">
                  {ReactHtmlParser(content.para)}
               </div>
               <div className="about-row-in" data-aos='fade-up'>
                    <img className="iframe-abt" src= {imgone} alt="missionImage"></img>
               </div>
           </div>

          <div className="mission-2">
              <h2>Be A Part Of Our Mission</h2>
            <div className="grid-mission">
               { content.cards.map((item,index)=>{
                let col;
                if(array[index]) col=array[index];
                else col=array[index%array.length];
                 return <Card
                 heading={item.title}
                 para={item.description}
                 img={item.media}
                 color={col}
                 />
              })}
            </div>
          </div>
        </div>
    )
}

export default Mission
