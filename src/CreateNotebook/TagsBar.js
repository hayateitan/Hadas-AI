import React from 'react'
import './Tagsbar.css'
import {Form} from 'react-bootstrap'

const TagsBar = (props) => {

    const [tags, setTags] = React.useState(props.tags);

    const removeTags = indexToRemove => {
        setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };

    const addTags = event => {
        if (event.target.value.length > 1) {
            setTags([...tags, event.target.value]);
            props.selectedTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };

    return (
        <>
       
            <Form.Label id="labelcreatenotebooktagsbar">Tags:</Form.Label>
                <div className="tags-input">
                    <ul id="tags">
                        {tags.map((tag, index) => (
                            <li key={index} className="tag">
                                <span className='tag-title'>{tag}</span>
                                <span className='tag-close-icon'
                                    onClick={() => removeTags(index)}
                                >
                                    x
                                </span>
                            </li>
                        ))}
                    </ul>
                    <input
                        type="text"
                        onKeyUp={event => event.keyCode === 32 ? addTags(event) : null}
                        placeholder="Type here..."
                    />
                </div>
           
        </>



    );
};


export default TagsBar




