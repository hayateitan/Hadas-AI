

import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './style.css'

export default function Editeur({id}) {

  const editorRef = useRef(null);



  return (

    <div id={"mydiv_"+id} >
      <Editor
        apiKey='9wnzsan1yrwcv5dpqtiwb1wz538yfoegkqhzpijcgqc2z9us' init={{ /* your other settings */ }}
        onInit={(evt, editor) => editorRef.current = editor}
        init={{
          height: 250,
          menubar: false,
          placeholder: "Type here...",
        
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo  formatselect  ' +
            'bold italic backcolor  alignleft aligncenter ' +
            'alignright alignjustify  bullist numlist outdent indent  ',

          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
        }}
      />
      {/* <button onClick={log}>Log editor content</button> */}
    </div>


  );
}


