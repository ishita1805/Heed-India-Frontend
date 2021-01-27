import React, { useState, useRef } from 'react';
import 'react-quill/dist/quill.snow.css';
import './createBlog.css'
import ReactHtmlParser from 'react-html-parser'
import Button from "../../components/button/Button"
import ReactQuill, { Quill } from 'react-quill';
import { ImageResize } from 'quill-image-resize-module';
import '../../components/inputBox/inputbox.css'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import uri from '../../uri'
/*import {cloudinary} from 'cloudinary'
cloudinary.config({
  cloud_name:"dtmhqs3e0",
  api_key:"323497653845991",
api_secret:"WDDW2x_CkmXKZ3AyWOEPoA5cfHg"
})*/
Quill.register('modules/imageResize', ImageResize);


const Admin = () => {
    const [addData,setAddData] = useState(null);
    const [showData,setShowData] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const [contentError,setContentError] = useState(false);
    const buttonRef = useRef();

    const handleChange = (value)=>{
      if(value !== '' || value !== '<p><br></p>') setContentError(false);
        setAddData(value);
    }
  
    const modules = {
      
        toolbar: [
          [{ 'header': [1, 2, 3,false, 4, 5, 6] }, { 'font': [] }],
          [{size: ['small', false, 'large', 'huge' ]}],
          ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
          [{'list': 'ordered'}, {'list': 'bullet'}, 
            {'indent': '-1'}, {'indent': '+1'}],
          [{ 'script': 'sub'}, { 'script': 'super' }],  
          [{ 'color': [] }, { 'background': [] }],  
          [{ 'align': [] }],
          [{ 'direction': 'rtl' }],  
          ['link', 'image', 'video'],
          ['clean'],
         
        ],
        clipboard: {
          matchVisual: true,
        },
        imageResize: {
          parchment: Quill.import('parchment')
        } 
      }

    const formats = [
        'header', 'font', 'size', 
        'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
        'list', 'bullet', 'indent',
        'script',
        'color','background',
        'align',
        'direction',
        'link', 'image', 'video'
      ]

      const onSubmit =(data)=>{

       const formData = new FormData();

       formData.append('thumbnail',data.thumbnail[0])
       formData.append('title',data.title)
       formData.append('subtitle',data.subtitle)
       formData.append('author',data.author)
       formData.append('date',data.date)
       formData.append('link',data.link)
       formData.append('banner',data.banner[0])

        //  axios request comes here .. data & addData needs to be sent 
        axios.post('http://localhost:3001/blogs/addblog',formData)
        .then(res => 
          {
            console.log('success');
  
          })
        .catch(err => { console.log(err)});
       // console.log(blog);
       console.log(data)
        console.log(addData);
    }

    const blogHandler = ()=>{
      if(!addData || addData === '<p><br></p>') setContentError(true);
      else buttonRef.current.click();
    }


    return (
        <div className="in-body padding-t-12">
            <div className="start ckeditor">
                <h1>Create A Blog</h1>
                <h3>Add Blog Meta data here</h3>
                {errors.title?<p className="error-text">Error: Title is require</p>:null}
                {errors.subtitle?<p className="error-text">Error: Subtitle is require</p>:null}
                {errors.date?<p className="error-text">Error: Date is require</p>:null}
                {errors.author?<p className="error-text">Error: Author is require</p>:null} 
                {errors.link?<p className="error-text">Error: Insagram Link is require</p>:null}
                {errors.thumbnail?<p className="error-text">Error: Thumbnail is require</p>:null}
                {errors.banner?<p className="error-text">Error: Banner image is require</p>:null}
                {contentError?<p className="error-text">Error: Blog content is require</p>:null}
                <form className='row-wrap-meta-createBlog' onSubmit={handleSubmit(onSubmit)}>
                  <input name="title" className='input m-r-input' placeholder="Title" ref={register({ required: true })}/>
                  <input name="subtitle" className='input m-r-input' placeholder="Subtitle" ref={register({ required: true })}/>
                  <input name="date" type="date" className='input m-r-input' placeholder="Date" ref={register({ required: true })}/>
                  <input name="author" className='input m-r-input' placeholder="Author Name" ref={register({ required: true })}/>
                  <input name="link" className='input m-r-input' placeholder="Instagram Link" ref={register({ required: true })}/>
                  <input name="thumbnail" type='file' ref={register({ required: true })}/>
                  <input name="banner" type='file' ref={register({ required: true })}/>
                  <button style={{display:'none'}} ref={buttonRef}>Click</button>
                </form>
                <h3>Add content for your blog here</h3>
                <ReactQuill 
                theme="snow"
                value={addData}
                onChange={handleChange} 
                modules={modules}
                formats={formats}
                />
                <div className="row">
                  <Button 
                  onClick={()=>setShowData(!showData)}
                  label={showData?"Hide Preview":"Show Content Preview"}
                  className="primary"
                  />
                  <p>&emsp;</p>
                  <Button 
                  onClick={blogHandler}
                  label='+ Create Blog'
                  className="success"
                  />
                </div>
             </div>

           <div className="ql-editor width-blog">
               {showData?ReactHtmlParser(addData):null}
           </div>
        </div>
    )
}




export default Admin
