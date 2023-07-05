
import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const TextForm = (props) => {

    const [text, setText] = useState("Type your text");

    const [speakToogle, setSpeak] = useState(false);

    const handleOnChange = (e) => {
        setText(e.target.value);

    }

    const converToUppercase = () => {
        setText(text.toUpperCase());
    }
    const convertToLowercase = () => {
        setText(text.toLocaleLowerCase())
    }

    const copythis = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to Clipboard', 'info')
    }

    const converToTitleCase = () => {

    }




    const converToCaptalize = () => {
        let v = text.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );

        setText(v);
    }


    const speakIt = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        console.log(text);
        if (!speakToogle) {
            window.speechSynthesis.speak(msg);
            setSpeak(true)

            //count length of text
            const mintuesToReadAWords = text.split(' ').length * (0.008) //0.008 mins per word to read 




            setTimeout(function () {
                setSpeak(false)
            }, mintuesToReadAWords * 60000);

        }
        else {
            window.speechSynthesis.cancel()
            setSpeak(false)
        }

    }


    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h4>{props.title}</h4>
                <button className="btn btn-secondary mt-2" onClick={copythis}> Copy to Clipboard</button>
                <button className="btn btn-secondary mt-2  mx-2" onClick={speakIt}>{!speakToogle ? 'Speak it' : 'Stop Speaking'}</button>

                <div className="form-floating">
                    <textarea className={`form-control bg-${props.mode} bg-opacity-10`}
                        value={text}
                        onChange={handleOnChange}
                        id="floatingTextarea2"
                        style={{
                            border: "1px solid",
                            color: props.mode === 'light' ? 'black' : 'white',
                            height: "200px"
                        }}
                    ></textarea>
                    <label htmlFor="floatingTextarea2">{props.label}</label>
                </div>


                <button className="btn btn-primary mt-2" onClick={converToUppercase}>Convert to Uppercase</button>
                <button className="btn btn-primary mt-2 mx-2" onClick={convertToLowercase}>Convert to Lowercase</button>


                <button className="btn btn-primary mt-2 mx-2" onClick={converToCaptalize}>Captalize it</button>
                <button className="btn btn-primary mt-2 mx-2" onClick={converToTitleCase}>Title Case</button>

                <div className="mt-4">
                    <h4>Text Summary</h4>
                    <p>
                        {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters
                    </p>
                </div>

            </div>
        </>
    )
}

TextForm.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    title: "Type Text",
    label: "Type Text"
}
