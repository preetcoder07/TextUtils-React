import { useState } from 'react'//useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. 
import React from 'react'



export default function Form(props) {
    const upper_case = () => {
        setText(text.toUpperCase());
        props.showalert("Converted into uppercase !", "success");

    }

    const change_value = (event) => {
        setText(event.target.value);        //it allow to change values in th etext area

    }

    const lower_case = () => {
        setText(text.toLowerCase());
        props.showalert("Converted into lowercase !", "success");

    }

    const clear_text = () => {
        setText("");
        props.showalert("Text Cleared !", "success");

    }

    const mutliply_text = () => {
        setText(text.concat(text));
        props.showalert("Texthas been multiplied !", "success");

    }

    const text_copy = () => {
        navigator.clipboard.writeText(text);
        props.showalert("Text copied !", "success");

    }

    const [text, setText] = useState("Enter your text here... ") // we need to change setText value in order to change the text value 

    return (
        <>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }} >  {/*my-3 means 3 px space in y axis */}
                <div className="mb-4">{/* mb-4 means margin botton */}
                    <h3>TextUtils : Word counter, Character counter , Text copy</h3>
                    <textarea className="form-control" value={text} id="my_box" rows="8" onChange={change_value} style={{ backgroundColor: props.mode === "dark" ? "#3a5fa9" : "white", color: props.mode === "dark" ? "white" : "black", border: "2px solid white" }} ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-3  my-2" onClick={upper_case} >UpperCase</button>   {/*disabled = {text.length === 0} means if there is no word in text area then these buttons were disabled */}
                <button disabled={text.length === 0} className="btn btn-secondary mx-2 my-2" onClick={lower_case}>LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-success mx-2 my-2" onClick={clear_text}>Clear</button>
                <button disabled={text.length === 0} className="btn btn-danger mx-2 my-2" onClick={mutliply_text}>multiply</button>
                <button disabled={text.length === 0} id='my_box' className="btn btn-info mx-2 my-2" onClick={text_copy}>Copy</button>
            </div>

            <div className="container my-2" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1>your text summary </h1>
                {/*text.split(" ").length is used to count total words*/}
                {/* filter function will take a element do not return element when its length is zero {this will avoid word count = 1 when our text area is empty}  */}
                <p>There are total <b>{text.length} characters</b> or <b>{text.split("/\s+/").filter((element) => { return element.length !== 0 }).length} words</b></p>  {/* text.split("/\s+/") in which s means it will include Whitespaces or new line and + means more than one time*/}
                <p>It will take <b>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length * 60} seconds</b> to read</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>

            <div className="container mt-5  mb-5">
                <h2 style={{ color: props.mode === "dark" ? "white" : "black"}}>Follow me on :</h2>
                <a href="https://www.instagram.com/preet_gusain200_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className='' style={{ textDecoration: 'none', color: props.mode === "dark" ? "white" : "black" }}><strong>Instagram</strong></a>
                <a href="www.linkedin.com/in/preet-gusain-986b022a5" className='mx-3' style={{ textDecoration: 'none', color: props.mode === "dark" ? "white" : "black" }}><strong>LinkedIn</strong></a>
                <a href="#" className='mx-3' style={{ textDecoration: 'none', color: props.mode === "dark" ? "white" : "black" }}><strong>Github</strong></a>
            </div>
        </>
    )
}
