import React, {useEffect} from 'react'
import Background from '../../components/bgVid/BackgroundVideo'
import './mission.css'
import imgone from '../../assets/missionimg.jpg'
import Card from '../../components/cardMission/cardsMission'
import sponsorAChild from '../../assets/sponsorAChild.png'
import donate from '../../assets/donateIcon.png'
import give from '../../assets/give.png'
import volunteer from '../../assets/volunteer.png'
import prog from '../../assets/sponsorAProg.png'

const Mission = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      const data = [
        {
          heading: 'Sponsor a Child',
          para: 'We at Heed India promote and encourage sports, to enhance the physical, mental and of an individual. Support our efforts by sponsoring the needs of at least one child, and help the child stay healthy.',
          url: sponsorAChild,
          color:'blue-icon'
        },
        {
          heading: 'Make A Donation',
          para: 'The programmes we undertake to bring about that small change, need a constant flow of funds. By making a donation, you lessen the stress on us, thereby helping us move ahead with no roadblocks.',
          url: donate,
          color:'green-icon'
        },
        {
          heading: 'Give Little of You',
          para:'One of the most gratifying acts of reaching out involves volunteering one’s time. After all, time is money. If there is a talent you wish to share, we’ll be more than happy to welcome you in our fold.',
          url: give,
          color:'purple-icon'
        },
        {
          heading: 'Volunteer',
          para: 'We invite corporates and foundations to partner with us by either donating sports kits for our beneficiaries, or by promoting employee giving or by sponsoring our events.',
          url: volunteer,
          color:'red-icon'
        },
        {
          heading: 'Sponsor a Programme',
          para: 'We invite corporations and foundations to join our efforts as partners by donating direct gifts, promoting employee giving or supporting a worthy cause - there can be a role for everyone.',
          url: prog,
          color:'orange-icon'
        }
      ]
    return (
        <div>
            <Background/>

            <div className="abt-sec abt-white">
               <div className="about-row-in">
                <h2>Our Mission</h2>
                <p>
                Every drop makes an ocean. HEED India is one such passion-driven venture that is 
                working towards bringing about that small change to steadily reduce suffering. Join us 
                and be the one to lend the helping hand, the one to change people's lives forever, to 
                put a smile on someone's face and to make the world a safer place!
                </p>
                <p>
                Giving to charity is neither a charitable or a generous act, it is our duty - something 
                we owe to the society. So join us in our endeavour and experience how gratifying, 
                enriching and enjoyable it is. Join us and revel in the Helper's High
                </p>
               </div>
               <div className="about-row-in">
                    <img className="iframe-abt" src= {imgone} alt="missionImage"></img>
               </div>
           </div>

          <div className="mission-2">
              <h2>Be A Part Of Our Mission</h2>
            <div className="grid-mission">
               { data.map((item)=>(
                 <Card
                 heading={item.heading}
                 para={item.para}
                 img={item.url}
                 color={item.color}
                 />
               ))}
            </div>
          </div>
        </div>
    )
}

export default Mission
