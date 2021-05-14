/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{ useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import placeholder from '../../assets/about-bg-1.jpeg'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import axios from 'axios'
import url from '../../url'

const EditComp = (props) => {
    const fileRef = useRef();
    const [mod, setMod] = useState(false);
    const [id,setId] = useState(props.id);
    const [contentError,setContentError] = useState(false);
    const [contentError2,setContentError2] = useState(false);
    const [comp, setComp] = useState({
        media:'',
        pid:'',
    });
    const [title,setTitle] = useState('');
    const [subtitle,setSubtitle] = useState('');
    const [hashtag,setHashtag] = useState('');
    const { register, handleSubmit, errors  } = useForm();
    const [addData,setAddData] = useState('');
    const [cardsArr, setCardsArr] = useState([]);
    const [cardTitle, setCardTitle] = useState('');
    const [cardData,setCardData] = useState('');
    const [updateCPid,setUpdateCPid] = useState('');
    const cardRef = useRef();
    const [updateCards, setUpdateCards] = useState('');
    const [statsArr, setStatsArr] = useState([]);
    const [statsLabel, setStatsLabel] = useState('')
    const [statsNum, setStatsNum] = useState('')
    const [updateStats, setUpdateStats] = useState('');


    const handleChange = (value)=>{
        if(value !== '' || value !== '<p><br></p>') setContentError(false);
          setAddData(value);
    }

    const handleChangeCard = (value)=>{
        if(value !== '' || value !== '<p><br></p>') setContentError(false);
        setCardData(value);
    }

    const deleteCardHandler = (card_id,card_pid) => {
        let data = {
            _id: card_id,
            pid: card_pid
        }
        axios.post(`${url}/page/deleteCard`, data )
            .then((resp) => { 
                console.log(resp);
             })
            .catch((e) => { console.log(e); })
    }

    const createCardHandler = (e) => {
        e.preventDefault();
        if( cardData=== '' || cardData === '<p><br></p>') setContentError2(true);
        if(!cardRef.current.files[0]) { 
            // to do error check here
        }
        const fd = new FormData();
        fd.append('id', id);
        fd.append('title', cardTitle);
        fd.append('description', cardData);
        fd.append('file', cardRef.current.files[0]);
       
    
        if(!contentError2) {
            axios.post(`${url}/page/createCard`, fd )
            .then((resp) => { 
                console.log(resp);
             })
            .catch((e) => { console.log(e); })
        }
    }

    const updateCardHandler = (e) => {
        e.preventDefault()
        const fd = new FormData();
        fd.append('pid', updateCPid);
        fd.append('title', cardTitle);
        fd.append('_id', updateCards)
        fd.append('description', cardData);

        if(cardRef.current.files[0]) {
            fd.append('file', cardRef.current.files[0]);
        }
        if(!contentError2) {
            axios.post(`${url}/page/updateCard`, fd )
            .then((resp) => { 
                console.log(resp);
             })
            .catch((e) => { console.log(e); })
        }
    }

    const deleteStatsHandler = (stats_id) => {
        axios.post(`${url}/page/deleteStat`, {
            _id: stats_id,
            id,
        })
        .then((resp) => { 
            console.log(resp);
        })
        .catch((e) => { console.log(e); })
    }

    const updateStatsHandler = (e) => {
        let data = {
            label: statsLabel,
            number: parseInt(statsNum),
            _id: updateStats,
        }
        axios.post(`${url}/page/updateStat`, data)
        .then((resp) => { 
            console.log(resp);
        })
        .catch((e) => { console.log(e); })
        e.preventDefault();
    }

    const createStatsHandler = (e) => {
        e.preventDefault();
        axios.post(`${url}/page/createStat`, {
            label: statsLabel,
            number: statsNum,
            id,
        })
        .then((resp) => { 
            console.log(resp.data);
        })
        .catch((e) => { console.log(e); })
    }

    const onSubmit = (data) => {
        // updates: hashtag, background, subtitle, title
        const fd = new FormData();
        fd.append('id', id);
        fd.append('title', data.title);
        fd.append('subtitle', data.subtitle);
        fd.append('hashtag', data.hashtag);
        fd.append('pid', comp.pid);

        if(props.img && fileRef.current.files[0]) {
            fd.append('file',fileRef.current.files[0])
        }
            
        if(props.paras){
            if( addData=== '' || addData === '<p><br></p>') setContentError(true);
            else fd.append('para', addData);
        }
 
        if(!contentError) {
            axios.post(`${url}/page/update`, fd )
            .then((resp) => { 
                console.log(resp);
                // setComp(resp.data.resp[0]);
             })
            .catch((e) => { console.log(e); })
        }
    }

    useEffect(()=>{
        axios.post(`${url}/page/get`, { id })
        .then((resp) => { 
            console.log(resp.data.resp);
            setComp({
                media: resp.data.resp.media,
                pid: resp.data.resp.pid,
            });
            setTitle(resp.data.resp.title)
            setHashtag(resp.data.resp.hashtag)
            setSubtitle(resp.data.resp.subtitle)
            setAddData(resp.data.resp.para)
            setStatsArr(resp.data.resp.stats)
            setCardsArr(resp.data.resp.cards)
         })
        .catch((e) => { console.log(e); })
    },[])

    const modules = {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
        ],
        clipboard: {
          matchVisual: true,
        }
      }

    const formats = [
        'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
      ]

    return (
        <div className='content-div'>
        {
        mod?
        <i className='fa fa-chevron-up mod' onClick={()=>setMod(!mod)}></i>
        :<i className='fa fa-chevron-down mod' onClick={()=>setMod(!mod)}></i>
        }
        <h3>{props.heading}</h3>
       { mod?
       <>
        <form  onSubmit={handleSubmit(onSubmit)}>
            {
                props.title?
                <>
                <label>Title:</label>
                <input 
                placeholder='Title' 
                name='title' 
                value={title} 
                onChange={(e)=>{
                    setTitle(e.target.value);
                }}
                ref={register({ required: true })}/>
                {errors.title?<p className='e-t-admin'>Title is required</p>:null}
                </>:null
            }

            {
                props.subtitle?
                <>
                <label>Subtitle:</label>
                <input
                placeholder='Subtitle' 
                value={subtitle} 
                name='subtitle' 
                onChange={(e)=>{
                    setSubtitle(e.target.value);
                }}
                ref={register({ required: true })}/>
                {errors.subtitle?<p className='e-t-admin'>Subtitle is required</p>:null}
                </>:null
            }

            {
                props.hashtag?
                <>
                <label>Hashtag:</label>
                <input  
                placeholder='Hashtag' 
                value={hashtag} 
                name='hashtag' 
                onChange={(e)=>{
                    setHashtag(e.target.value);
                }}
                ref={register({ required: true })}/>
                {errors.hashtag?<p className='e-t-admin'>Hashtag is required</p>:null}
                </>:null
            }
            {
                props.img?
                <>
                    <label>Current Background:</label>
                    <img src={comp.media} alt='media'/>
                    <input ref={fileRef} type='file'/>
                </>:null
            }
            
            {
                props.paras?
                <>
                <label>Paragraph/s:</label>
                <div className='para-admin-ce'>
                <ReactQuill 
                theme="snow"
                value={addData}
                onChange={handleChange} 
                modules={modules}
                formats={formats}
                />
                </div>
                {contentError?<p className="error-text">Error: Paragraph cannot be empty</p>:null}
                </>:null
            }

            <button type="submit" className='button-style primary'>Update Content</button>

            {
                props.stats?
                <>
                <br/>
                <label>Stats:</label>
                <div className='stats-ce'>
                    <div className='stats-queue'>
                        {
                            statsArr.map((item) =>(
                                <div className='stats-ce-card'>
                                    {item.label}
                                    <span>
                                        <i className='fa fa-pencil' onClick={()=>{setUpdateStats(item._id);setStatsLabel(item.label);setStatsNum(item.number);}}></i>
                                        &ensp;
                                        <i className='fa fa-minus' onClick={()=>deleteStatsHandler(item._id)}></i>
                                    </span>
                                </div>
                            ))
                        }
                        <div className='add-to-queue'>
                            <i className='fa fa-plus' onClick={()=>{setUpdateStats('');setStatsLabel('');setStatsNum('');}} ></i>
                        </div>
                    </div>

                    <div className='form-stats'>
                        {updateStats===''?
                        <label>Create Stats:</label>:
                        <label>Update Stats:</label>}

                        <input  value={statsLabel} onChange={(e)=>setStatsLabel(e.target.value)} placeholder='Label' name='label'/>
                        <input  value={statsNum} onChange={(e)=>setStatsNum(e.target.value)} type='number' placeholder='Number' name='number'/>
                        {
                            updateStats===''?
                            <button  className='button-style success rm-margin-top' onClick={(e)=>createStatsHandler(e)}>Create</button>:
                            <button  className='button-style primary rm-margin-top' onClick={(e)=>updateStatsHandler(e)}>Update</button>
                            
                        }
                    </div>

                </div>
                </>:null
            }

            
            {
                props.cards?
                <>
                <br/>
                <label>Cards:</label>   
                <div className='stats-ce'>
                    <div className='stats-queue'>
                        {
                            cardsArr.map((item) =>(
                                <div className='stats-ce-card'>
                                    {item.title}
                                    <span>
                                        <i className='fa fa-pencil' onClick={()=>{setUpdateCards(item._id);setUpdateCPid(item.pid);setCardData(item.description);setCardTitle(item.title)}}></i>
                                        &ensp;
                                        <i className='fa fa-minus' onClick={()=>deleteCardHandler(item._id,item.pid)}></i>
                                    </span>
                                </div>
                            ))
                        }
                        <div className='add-to-queue'>
                            <i className='fa fa-plus' onClick={()=>{setUpdateCards('');setUpdateCPid('');setCardData('');setCardTitle('')}}></i>
                        </div>
                    </div>

                    <div className='form-stats'>
                        {
                            updateCards===''?
                            <label>Create Card:</label>:
                            <label>Update Card:</label>
                        }
                        <input value={cardTitle} onChange={(e)=>{setCardTitle(e.target.value)}} placeholder='Title' name='title'/>
                        
                        
                        {
                            updateCards===''?null:
                            <>
                            <label>Curent Image:</label>
                            <img alt='media' src={`http://res.cloudinary.com/dtmhqs3e0/image/upload/v1620921987/${updateCPid}.jpg`}/>
                            </>
                        }
                        
                        <input ref={cardRef} type='file'/>
                        <div className='card-admin-ce'>
                        {
                            props.editor?
                            <ReactQuill 
                            theme="snow"
                            value={cardData}
                            onChange={handleChangeCard} 
                            modules={modules}
                            formats={formats}
                            />:
                            <textarea value={cardData} onChange={(e)=>handleChangeCard(e.target.value)}/>

                        }
                        </div>
                        {contentError2?<p className="error-text">Error: Description cannot be empty</p>:null}
                        {
                            updateCards===''?
                            <button onClick={(e)=>{createCardHandler(e)}} className='button-style success rm-margin-top'>Create</button>:
                            <button onClick={(e)=>{updateCardHandler(e)}} className='button-style primary rm-margin-top'>Update</button>
                        }
                        
                    </div>

                </div>
                </>:null
            }

           
        </form>
        <br/>
        <br/>
        </>
        :null}
    </div>
    )
}

export default EditComp
