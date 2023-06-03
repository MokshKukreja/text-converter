import React from 'react'
import { useState } from 'react'

function TextForm(props) {

    const [text, setText] = useState("")
    const [wordCount, setWordCount] = useState(0)


    const handleChange = (e)=>{
        const inputText = e.target.value;
        setText(inputText);
        const words = inputText.trim().split(' ');
        const filteredWords = words.filter((word) => word !== '');
        setWordCount(filteredWords.length);
    }

    const Uppercase = ()=>{
        setText(text.toUpperCase())
        props.alert("Converted to Uppercase","success")
    }
    const LowerCase = ()=>{
        setText(text.toLowerCase())
        props.alert("Converted to Lowercase","success")
    }
    const ClearText = ()=>{
        setText("")
        setWordCount(0)
        props.alert("Text is cleared","success")
    }
    return (
        <>
        <div className='container'>
            <div className="mt-5">
                <textarea className="form-control" onChange={handleChange} value={text} placeholder="Enter Text here" rows="10" ></textarea>
            </div>
            <button type="button" onClick={Uppercase} className={`btn  ml-0`} style={{backgroundColor:props.color,color:props.color==="#303030"?"white":"#303030"}}>Convert to Uppercase</button>
            <button type="button" onClick={LowerCase} className="btn m-2 " style={{backgroundColor:props.color,color:props.color==="#303030"?"white":"#303030"}}>Convert to LowerCase</button>
            <button type="button" onClick={ClearText} className="btn m-0.75 " style={{backgroundColor:props.color,color:props.color==="#303030"?"white":"#303030"}}>Clear Text</button>
        </div>
        <div className='container my-3'>
            <p style={{color:props.color}}>{wordCount} words and {text.length} characters</p>
        </div>
        </>
    )
}

export default TextForm