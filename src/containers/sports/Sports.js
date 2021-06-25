import React, {useState,useEffect} from 'react'
import './sports.css'
import '../mission/mission.css'
import Background from '../../components/bgVid/SportsBackgroundVid'
import Card from '../../components/cardSports/cardSports'
import axios from 'axios'
import url from '../../url'

const Sports = () => {
  const [content,setContent] = useState({
    cards:[],
    title:'',
    subtitle:'',
    hashtag:'',
});

    useEffect(() => {
        window.scrollTo(0, 0)
        axios.post(`${url}/page/get`, { id: '609c2bc1a0996a0bec3f4a46' })
        .then((resp) => { 
            console.log(resp.data.resp);
            setContent(resp.data.resp);
         })
        .catch((e) => { console.log(e); })
      }, [])
    return (
        <div className = "sports-main">
            <Background
            title={content.title}
            subtitle={content.subtitle}
            hashtag={content.hashtag.split(' ')}/>
            {content.cards.map((item,index)=>(
               <Card 
               heading={item.title}
               content={item.description}
               set= {(index+1)%2}
               img={item.media}/>
            ))}
        </div>
    )
}

export default Sports
