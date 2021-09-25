import React from 'react'

const Form = () => {
    return (
        <div className="form-container">
            <div className="circle">
                {/* grey */}
            </div>

            <h2>
                Recharge and pay bills <i className="fa fa-arrow"></i>
            </h2>

            <form >
                <input type="text" name="name" placeholder="Name" className="input1"/>
                <input type="text" name="ph-number" placeholder="Number" className="input2"/>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form
