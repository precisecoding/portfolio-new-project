import { useState } from "react"
import { validateEmail } from "../utils/helpers"

const Contact = () => {

    const [errorMessage, setErrorMessage] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (errorMessage == ""){
            alert("Form Submited")
        }
    }
    const handleChange = (e) => {
        if (e.target.name == "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid')
            }
            else {
                setErrorMessage("")
            }

        } else {
            if (e.target.value == "") {
                // console.dir(e.target)
                setErrorMessage(e.target.name + ' field is required')
            }
            else {
                setErrorMessage("")
            }
        }
    }
    return (
        <div className="contact">
            <h2>
                Contact Me
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">
                        Name:
                    </label>
                    <input type="text" name="Name" id="name" onBlur={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        Email Address:
                    </label>
                    <input type="email" name="Email" id="email" onBlur={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">
                        Message:
                    </label>
                    <textarea name="message" id="message" onBlur={handleChange}>
                    </textarea>
                </div>
                <div className="form-group">
                    {errorMessage && <p>{errorMessage}</p>}
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact