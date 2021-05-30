/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{ useEffect, useState, useRef } from 'react'
import './content.css'
import EditComp from '../../../components/adminEditComp/EditComp'


const Content = () => {
    return (
        <div className="arrange-left">
           <h1>Edit Website Content</h1>

           <EditComp 
           heading='Home'
           title={true}
           alert={true}
           img={true}
           subtitle={true}
           hashtag={true}
           paras={false}
           cards={false}
           logos={false}
           editor={false}
           stats={false}
           id='609c2a8b05752e403ccd44ef'
          />

           <EditComp 
           heading='Who We Are'
           title={true}
           alert={false}
           img={true}
           subtitle={false}
           hashtag={false}
           paras={true}
           cards={true}
           logos={true}
           editor={false}
           stats={true}
           id='609c2b89a0996a0bec3f4a45'
           />

           <EditComp 
           heading='Sports'
           title={true}
           alert={false}
           img={false}
           subtitle={true}
           hashtag={true}
           paras={false}
           cards={true}
           logos={false}
           editor={true}
           stats={false}
           id='609c2bc1a0996a0bec3f4a46'
          
           />

           <EditComp 
           heading='Events'
           title={true}
           alert={false}
           img={true}
           subtitle={true}
           hashtag={false}
           paras={false}
           cards={false}
           logos={false}
           editor={false}
           stats={false}
           id='609c2be2a0996a0bec3f4a47'
           />

           <EditComp 
           heading='Initiatives'
           title={true}
           alert={false}
           img={true}
           subtitle={true}
           hashtag={true}
           paras={false}
           cards={true}
           logos={false}
           editor={false}
           stats={false}
           id='609c2c12a0996a0bec3f4a48'
           />

           <EditComp 
           heading='Our Mission'
           title={true}
           alert={false}
           img={false}
           subtitle={true}
           hashtag={true}
           paras={true}
           cards={true}
           logos={false}
           editor={false}
           stats={false}
          id='609c2cbea0996a0bec3f4a49'
          />

          <EditComp 
           heading='People Behind'
           title={true}
           alert={false}
           img={true}
           subtitle={false}
           hashtag={false}
           paras={false}
           cards={true}
           logos={false}
           editor={true}
           stats={false}
          id='60b271d93444a0ac2489cd89'
          />

        <EditComp 
           heading='Tournaments'
           title={true}
           alert={false}
           img={true}
           subtitle={false}
           hashtag={false}
           paras={true}
           cards={false}
           logos={false}
           editor={true}
           stats={false}
          id='60b33ebf71eae12e80e12768'
          />
        </div>
    )
}

export default Content
