import React from 'react'
import { useState } from 'react'
export default function About(props) {

// let mystyle = {
//     color:"white",
//     backgroundColor : "black",
//     border:"2px solid white"
// }

    return (
        <>
            <div className="container" style={{color:props.mode==="dark"?"grey":"black"}}>
                <h1 classNAme="my-4">About Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item" >
                        <h2 className="accordion-header">
                            <button className="accordion-button" style={{backgroundColor:props.mode==="dark"?"black":"white",color:props.mode==="dark"?"white":"black"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong> Accordion Item #1</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={{color:props.mode==="dark"?"grey":"black"}}>
                            <div style={{backgroundColor:props.mode==="dark"?"black":"white",color:props.mode==="dark"?"white":"black"}} className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button style={{backgroundColor:props.mode==="dark"?"black":"white",color:props.mode==="dark"?"white":"black"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong> Accordion Item #2</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div style={{backgroundColor:props.mode==="dark"?"black":"white",color:props.mode==="dark"?"white":"black"}} className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button style={{backgroundColor:props.mode==="dark"?"black":"white",color:props.mode==="dark"?"white":"black"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong> Accordion Item #3</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div style={{backgroundColor:props.mode==="dark"?"black":"white",color:props.mode==="dark"?"white":"black"}} className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
            
        </>
    )
}
