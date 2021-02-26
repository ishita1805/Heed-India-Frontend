import React, {useEffect} from 'react'
import './sports.css'
import Background from '../../components/bgVid/SportsBackgroundVid'
import Card from '../../components/cardSports/cardSports'
import athletics from '../../assets/athletics.jpg'
import wrestling from '../../assets/wrestling.jpg'
import boxing from '../../assets/boxing.jpg'
import taekwondo from '../../assets/taekwondo.jpg'
import kabaddi from '../../assets/kabaddi.jpg'

const Sports = () => {
  const data = [
    {
      heading: 'Athletics',
      p1: 'In the year 2019-2020, HEED India touched the lives of 88 students, with 2 coaches training them across 2 centers.',
      p2: 'Competitive running, jumping, throwing and walking are all grouped under Athletics. All these being outdoor sports, encourage the child to get outdoors, and stay physically active. It establishes a strong ground for the child to develop interest in other sports and even opens up newer avenues. Having realized the multiple benefits, HEED India decided to include Athletics in its mandate.',
      p3: 'Athletic contests in running, walking, jumping and throwing are among the oldest of all sports and their roots are prehistoric. Athletics events were depicted in the Ancient Egyptian tombs in Saqqara, with illustrations of running at the Heb Sed festival and high jumping appearing in tombs from as early as  2250 BC.',
      img: athletics,
      set: 1,
    },
    {
      heading: 'Taekwondo',
      p1: 'In the year 2019-2020, HEED India touched the lives of 161 students, with one coach training them across 3 centers.',
      p2: 'Thanks to the many atrocities meted out to women in India, safeguarding them has become a major priority. The privileged section of women feels safe, with a pepper spray tucked away in their bags. But how many women can really afford these? Training them in Taekwondo seems to be the perfect solution, as a means of self-defense. This being the need-of-the-hour, prompted HEED India to strategize and start training sessions across Mumbai.',
      p3: 'This art of self-defense that originated in Korea is recognized as one of the oldest forms of martial arts in the world, going back over 2,000 years. The name was selected for its appropriate description of the art: Tae (foot), Kwon (hand), Do (art). One of the earliest clues of Taekwondo’s existence is a mural painted on the wall of a tomb that was built in the Korean kingdom of Koguryo, between 37 BC and 66 AD.',
      img: taekwondo,
      set: 2,
    },
    {
      heading: 'Wrestling',
      p1: 'In the year 2019-2020, HEED India touched the lives of 266 students, with 4 coaches training them across 5 centers.',
      p2: 'Akhada/Kushti have their roots in history since time immemorial. As an NGO, HEED India deems it a responsibility to make sure that every citizen, especially the future of India, remembers its history not only through theory, but by experiencing it physically. Besides, Wrestling helps one build strong muscular and skeletal structure, if trained from childhood. Wrestling gained immense popularity when the film ‘Dangal’ featured the lives of the Phogat sisters, who went on to revolutionalise wrestling as a sport.',
      p3: 'Wrestling represents one of the oldest forms of combat. The origins of wrestling go back 15,000 years through cave drawings. Literary references to it occur as early as the Old Testament and the ancient Indian Vedas. Indian epics Ramayana and Mahabharata contain references to martial arts including wrestling.',
      img: wrestling,
      set: 1,
    },
    {
      heading: "Boxing",
      p1: "In the year 2019-2020, HEED India touched the lives of 179 students, with 5 coaches training them across 7 centers.",
      p2: "Studies have shown that children from weaker economic backgrounds have high energy levels, but unfortunately, tend to spend most of it in unproductive ways. To give a direction and help channelize their energy in a positive manner, HEED India chose to promote Boxing as yet another sport. Boxing being a high intensity activity, consumes a lot of excess energy that these kids possess.  It helps them steer their emotions, and focus on the sport, rather than any negative activity." ,
      p3: "The earliest known depiction of boxing comes from a Sumerian relief in Iraq from the 3rd millennium BC. Various types of boxing existed in ancient India too. The earliest references to ‘musti-yuddha’ come from classic Vedic epics such as the Ramayana and Rig Veda. The Mahabharata describes two combatants boxing with clenched fists and fighting with kicks, finger strikes, knee strikes and headbutts.",
      img: boxing,
      set: 2,         
    },
    {
      heading: "Kabaddi",
      p1: "In the year 2019-2020, HEED India touched the lives of 470 students, with 3 coaches training them across 5 centers.",
      p2: "Team spirit, speed, agility, multi-tasking and enhancing one’s presence of mind are some of the key benefits of ‘Kabaddi’. Although it is a gully sport, thanks to organizations like HEED India, Kabaddi has now become a competitive sport, with professional-level tournaments being held regularly. Children from challenging backgrounds are hand-picked and trained by HEED India’s coaches, readying them for professional participation.",
      p3: "Although unverified, theories from various sources state that kabaddi originated from the ancient Indian Vedic period. India has been credited with having helped to popularize kabaddi as a competitive sport, with the first organized competitions occurring in the 1920s.",
      img: kabaddi,
      set: 1,
                
    }
  ]
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className = "sports-main">
            <Background/>
            {data.map((item)=>(
               <Card 
               heading={item.heading}
               p1={item.p1}
               p2={item.p2}
               p3={item.p3}
               set= {item.set}
               img={item.img}/>
            ))}
           
           
           
            

            {/* 
          
               
               
          
                header = "Kabaddi"
                para1 = "In the year 2019-2020, HEED India touched the lives of 470 students, with 3 coaches training them across 5 centers."
                para2 = "Team spirit, speed, agility, multi-tasking and enhancing one’s presence of mind are some of the key benefits of ‘Kabaddi’. Although it is a gully sport, thanks to organizations like HEED India, Kabaddi has now become a competitive sport, with professional-level tournaments being held regularly. Children from challenging backgrounds are hand-picked and trained by HEED India’s coaches, readying them for professional participation."
                para3 = "Although unverified, theories from various sources state that kabaddi originated from the ancient Indian Vedic period. India has been credited with having helped to popularize kabaddi as a competitive sport, with the first organized competitions occurring in the 1920s."
                />
                <ICard
                className = "card-sport-img-3"
                img = {kabaddi}
                />
            </div>
          </div> */}
        </div>
    )
}

export default Sports
