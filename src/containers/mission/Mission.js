import React, {useEffect} from 'react'
import Background from '../../components/bgVid/BackgroundVideo'
import './mission.css'
import imgone from '../../assets/about-bg-1.jpeg'
import Card from '../../components/cardMission/cardsMission'

const Mission = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      const data = [
        {
          heading: 'Sponsor a child',
          para: 'We urgently need your support to help needy children receive good education, health and nutrition. Sponsor a child for one of more of his/her needs. Sponsor a child NOW!​',
        },
        {
          heading: 'Make A Donation',
          para: 'Your donation will help provide critical support to all beneficiaries of the programmes we undertake. Donate for a cause NOW! spread smiles and joy',
        },
        {
          heading: 'Sponsor a Programme',
          para:' Your donation will ensure that our projects create the most impact. Your money will be utilised in areas that you will feel most strongly about.',
        },
        {
          heading: 'Volunteer',
          para: 'Volunteer your time for a cause of your liking. If you would like to bring a group of friends, family or colleagues, reach out to us and we will work with you and your ideas to make a social impact.',
        },
        {
          heading: 'Sponsor a child',
          para: 'We invite corporations and foundations to join our efforts as partners by donating direct gifts, promoting employee giving or supporting a worthy cause - there can be a role for everyone.',
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
                 />
               ))}
            </div>
          </div>
        </div>
    )
}

export default Mission



//     <div>
//         <br/>    
//         <div className = "ini-main">
//         <BackgroundVideo id = "myVideo"/>
//             <h1 className = "videoText">
//                 Our Mission
//             </h1>
//         </div>
       

//         {/* <div className="abt-sec abt-white">
//                <div className="about-row-in">
//                 <h1 id="imageTextHead">Our Mission</h1>
//                 <p className="imageTextOne">
//                 Every drop makes an ocean. HEED India is one such passion-driven venture that is 
//                 working towards bringing about that small change to steadily reduce suffering. Join us 
//                 and be the one to lend the helping hand, the one to change people's lives forever, to 
//                 put a smile on someone's face and to make the world a safer place!
//                 </p>
//                 <p className="imageTextTwo">
//                 Giving to charity is neither a charitable or a generous act, it is our duty - something 
//                 we owe to the society. So join us in our endeavour and experience how gratifying, 
//                 enriching and enjoyable it is. Join us and revel in the Helper's High
//                 </p>
//                </div>
//                <div>
//                <img className="missionImage" src= {imgone} alt="missionImage"></img>
//                <br/>
//                </div>
//            </div> */}
//             <div className = "bottomHeadingBG"> 
//             <div>
//                 <h1 className = "bottomHeading">
//                     Be a Part of Our Mission
//                 </h1>
//             </div>
//             <div>
//             <div className="mission-row">
//             <div>
//                 <CircularIcons/>
//                 <h2 className = "sponsorChildFirst">
//                     Sponsor a child
//                 </h2>
//                 <p  className = "sponsorChildFirstPara">
              
//                 </p>
//                 </div>
//                 <div>
//                 <CircularIcons/>
//                     <h2 className= "donation">
//                     Make A Donation
//                     </h2>
//                     <p className = "donationPara">
//                     Your donation will help provide critical support 
//                     to all beneficiaries of the programmes we 
//                     undertake.
//                     </p>
//                 </div>
//                 <div>
//                 <CircularIcons/>
//                 <h2 className = "sponsorProg">
//                     Sponsor a Programme
//                 </h2>
//                     <p className = "sponsorProgPara">
//                     Your donation will ensure that our projects 
//                     create the most impact. Your money will be 
//                     utilised in areas that you will feel most strongly 
//                     about.
//                     </p>
//                 </div>
//                 <div>
//                     <CircularIcons/>
//                     <h2 className = "volunteer">
//                         Volunteer
//                     </h2>
//                     <p className = "volunteerPara">
//                     Volunteer your time for a cause of your liking. If 
//                     you would like to bring a group of friends, family 
//                     or colleagues, reach out to us and 
//                     we will work with you and your ideas to make a 
//                     social impact. We can also help you create your 
//                     perfect ser-vacation; a vacation with a focus on 
//                     service.
//                     </p>
//                 </div>
//                 <div>
//                 <CircularIcons/>
//                     <h2 className = "sponsorChild">
//                         Sponsor a child
//                     </h2>
//                     <p className = "sponsorChildPara">
//                     Our youth and family development programmes 
//                     offer opportunities for corporations and 
//                     foundations to make a difference in the lives of 
//                     children and their families. We invite corporations 
//                     and foundations to join our efforts as partners by 
//                     donating direct gifts, promoting employee giving 
//                     or supporting a worthy cause - there can be a 
//                     role for everyone.
//                     </p>
//                 </div>
//                 </div>
//             </div>
//         </div>
// </div>

