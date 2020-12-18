import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import './admin.css'
import ReactHtmlParser from 'react-html-parser'
import Button from "../../components/button/Button"
import ReactQuill, { Quill } from 'react-quill';
import { ImageResize } from 'quill-image-resize-module';
Quill.register('modules/imageResize', ImageResize);




const Admin = () => {
    const [addData,setAddData] = useState(null);
    const [showData,setShowData] = useState(false);

    const handleChange = (value)=>{
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

    return (
        <div className="in-body">
            <div className="start ckeditor">
                <h1>This is the admin page</h1>
                <h3>You can create a blog here</h3>
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
                label={showData?"Hide Preview":"Show Preview"}
                className="primary"
                />
                <p>&emsp;</p>
                 <Button 
                onClick={()=>alert("this function will bind the data to backend")}
                label="+ Create Blog"
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
