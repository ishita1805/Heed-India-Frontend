import React, {useEffect} from 'react'
import './sports.css'
import Header from '../../components/header/Header'
import Background from '../../components/bgVid/SportsBackgroundVid'
import Card from '../../components/cardSports/cardSports'
import ICard from '../../components/icardSports/icardSports'
import sport1 from '../../assets/delhi.png'
import sport2 from '../../assets/delhi.png'
import sport3 from '../../assets/delhi.png'

const Sports = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className = "sports-main">
            <Background/>

            <div className = "card-sport-1">
            <div className = "card-sport-info-1">
                <Card
                className = "card-sport-text-1"
                header = "Sport-1"
                para1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                para2 = "Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                />
                <ICard
                className = "card-sport-img-1"
                img = {sport1}
                />
              </div>
          </div>
          <div className = "card-sport-2">
            <div className = "card-sport-info-2">
                <ICard
                className = "card-sport-img-2"
                img = {sport2}
                />
                <Card
                className = "card-sport-text-2"
                header = "Sport-2"
                para1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                para2 = "Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                />
            </div>
          </div>
          <div className = "card-sport-3">
            <div className = "card-sport-info-3">
                <Card
                className = "card-sport-text-3"
                header = "Sport-3"
                para1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                para2 = "Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                />
                <ICard
                className = "card-sport-img-3"
                img = {sport3}
                />
            </div>
          </div>
        </div>
    )
}

export default Sports
