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
      p1: `Athletics is an outdoor sport, and encourages children to get out and play, and stay physically active.
      It establishes a strong ground for the child to develop interest in other sports and even opens up
      newer avenues. The most common types of athletics competitions are track and field, road running,
      cross country running, and race walking.`,
      p2: `Important qualities include concentration, decision-making
      skills, dedication, eye-hand coordination, stamina, and the ability to work well as a team player. We
      have been training close to 100 kids and hoping to increase our athletics community in the coming
      times. With HEED India trustees themselves running marathons and understanding the importance of
      athletics, what can be a better way to introduce the same to children`,
      p3: `“I know what I can do, so it doesn’t bother me what other people think, or their opinion on the
      situation’ – Usain Bolt`,
      img: athletics,
      set: 1,
    },
    {
      heading: 'Taekwondo',
      p1: `Taekwondo is a Korean martial art characterized by punching and kicking techniques, with emphasis
      on head-height kicks, jumping spinning kicks, and fast kicking techniques. Sounds interesting? This 
      sport is not just about physical training but mind training as well. It allows to kick and punch under
      controlled conditions.`,
      p2: `Besides this, the sport teaches self-confidence and self-esteem, improves
      flexibility, agility, reflexes, concentration, greater self-discipline, and leadership skills. At HEED India,
      we believe that every girl child should take up a self-defence skill so that she can kick and punch if a
      situation arises to protect herself. Being aware of your surroundings, blocking and staying balanced
      and more importantly getting out of someone’s grip is an important skill for women to know. We at
      HEED India are proud to have trained close to 161 kids and our numbers are only growing.
      `,
      p3: `“I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one
      kick 10,000 times” – Bruce Lee`,
      img: taekwondo,
      set: 2,
    },
    {
      heading: "Boxing",
      p1: `Boxing is an art of attack and defence with the fists, and is practiced as a sport. Also known as “the
      sweet science”, it utilizes head movements, footwork and punches, to form a very efficient striking
      system and an effective method for self-defence. Benefits of boxing include an improved hand-eye
      coordination, strengthening the upper body, boosting endurance, refining posture and enhancing
      balance.`,
      p2: `If one watches the game closely it’s all about the exact calculations behind every move that
      a skilled boxer makes. The boxers seem more like they’re studying one another than fighting. In all
      you get only three minutes each in a total of 12 rounds to perform. One of the best reasons to train in
      boxing is that you will always be learning. The more you spar and train, the more you stand and fight.
      Studies have shown that children from weaker economic backgrounds have high energy levels, but
      unfortunately, tend to spend most of it in unproductive ways. They are either into drug addiction,
      physical abuse or waste of energy. To give a direction and help channelize their energy in a positive
      manner, HEED India chose to promote Boxing. HEED India has touched the lives of 179 students so far`,
      p3: `After all, “To be a great champion, you must believe you are the best. If you’re not, pretend you are”
      – Muhammad Ali`,
      img: boxing,
      set: 1,         
    },
    {
      heading: "Kabaddi",
      p1: `Kabaddi is a sport that requires one to run, kick and dodge the opponents. It also needs one to move
      and think at the same time quickly. These skills help players enhance their proactiveness, presence of
      mind, multi-tasking abilities, team spirit and crisis management capability. Kabaddi is one of the few
      sports that combines elements of yoga with strenuous physical activity. The player has to enter the
      opponent’s court chanting the word “Kabaddi” while holding his breath, till he/she doesn’t return to
      the home court.`,
      p2: `This is known as ‘Cant’, which is closely related to “Pranayama” of yoga. The game
      calls for agility, good lung capacity, muscular co-ordination, presence of mind and quick responses.
      HEED India wanted to include a team sport, and chose Kabaddi which requires a minimum of ten
      players. HEED India has been training 470 students and hoping to reach out to many more children in
      the coming years.`,
      p3: `“I strongly believe that Kabaddi is the most athletic sport of all, for it requires all aspects of physical
      and mental conditioning to get results” – Abhishek Bachchan`,
      img: kabaddi,
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
        </div>
    )
}

export default Sports
