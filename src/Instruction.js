import React from 'react'
import { Link } from 'react-router-dom'


const Instructions = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between',
            backgroundImage:'url("https://w0.peakpx.com/wallpaper/789/999/HD-wallpaper-color-palette-abstract.jpg")',
            backgroundSize:'cover',height: 60, paddingRight: '50px', paddingLeft: '300px' }}>
                <p>GENERAL INSTRUCTIONS</p>
                <p>Default language:<b>English</b></p>
            </div>

            <p style={{ textAlign: 'center', fontFamily:'Outfit' }}><b>Please read the instructions carefully</b></p>

            {/* general instructions */}
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <p style={{ textDecoration: 'Underline',fontFamily:'Outfit' }}><b>General Instructions:</b></p>
                <p style={{fontFamily:'Poppins'}}>1. The total duration for gate mock exam is 1 hour 30 minutes(90 minutes).<br />
                    2. The clock will be set at the server. The countdown timer in the top right comer of
                    screen wit display the remaining time available for you to complete the
                    examination When the timer reaches zero, the examination will end by thert.
                    You will not be required to end or submit your examination.<br />
                    3. The Questions Parette displayed on the nont side of screen will show the status of each
                    question using one of the following symbols:</p>
                <p style={{ textAlign: 'center',fontFamily:'Poppins' }}>1. <img src="/" alt="green" style={{ marginLeft: '10px' }} />
                    You have answered the question.</p>
                <p style={{ textAlign: 'center',fontFamily:'Poppins' }}>2. <img src="/" alt="red" style={{ marginLeft: '10px' }} />
                    You have not answered the question.</p>
                <p style={{ textAlign: 'center',fontFamily:'Poppins' }}>3. <img src="/" alt="grey" style={{ marginLeft: '10px' }} />
                    You have marked the question for later to answer.</p>
            </div>

            {/* Navigate instructions */}
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <p style={{ textDecoration: 'Underline',fontFamily:'Outfit'}}><b>Navigating to a questions:</b></p>
                <p style={{fontFamily:'Poppins'}}>4. To answer a question, do the following:</p>
                <p style={{fontFamily:'Poppins'}}>a. Click on the question number in the Question Palette of your screen to go to that numbered question directly.
                    Note that using this option does NOT save your answer to the current question.<br />
                    b. Click on Save & Next to save your answer for the current question and then go to the next question. <br />
                    c. Click on Mark for Review & Next to save your answer for
                    the current question, mark it for review, and then go to the next question.<br /></p>
            </div>

            {/* Answering questions*/}
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <p style={{ textDecoration: 'Underline',fontFamily:'Outfit' }}><b>Answering a question:</b></p>
                <p style={{ textDecoration: 'Underline',fontFamily:'Outfit' }}>5. Procedure for answering a multiple choice type question:</p>
                <p style={{fontFamily:'Poppins'}}>
                    a. To select you answer, click on the button of one of the options.<br />
                    b. To deselect your chosen answer, click on the button of the chosen option again or click on the Clear Response button.<br />
                    c. To change your chosen answer, click on the button of another option.<br />
                    d. To save your answer, you MUST click on the Save & Next button.<br />
                    e To mark the question for review, click on the Mark for Review & Next button.<br />
                </p>
                <p style={{ textDecoration: 'Underline',fontFamily:'Outfit' }}>6. Procedure for answering a multiple choice type question:</p>
                <p style={{fontFamily:'Poppins'}}>
                    a. Review the question and make sure you understand what information is required to fill in the blank.<br />
                    b. Type your answer directly into the blank space provided.<br />
                    c. Review your entered answer for accuracy and completeness. You can edit your response within the blank space.<br />
                    d. If there is a "Save & Next" button or similar, click on it to ensure your answer is recorded.<br />
                    e. If there's an option to mark the question for review, you can use it if you want to revisit the question later.<br />
                </p>
            </div>

            {/* Navigating sections*/}
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <p style={{ textDecoration: 'Underline',fontFamily:'Outfit' }}><b>Navigating through sections:</b></p>
                <p style={{fontFamily:'Poppins'}}>
                    7. Sections in this question paper are displayed on the top bar of the screen. Questions in a section
                    can be viewed by click on the section name. The section you are currently viewing is highlighted.<br />
                    8.After click the Save & Next button on the last question for a section,
                    you will automatically be taken to the first question of the next section<br />
                    9. You can shuffle between sections and questions anything during the examination as per your convenience only
                    during the time stipulated.<br />
                    10. Candidate can view the corresponding section summery as part of the legend that appears in every section
                    above the question palette.<br />
                </p>
            </div>
            <div style={{ maxWidth: '1200px', margin: '0 auto',fontFamily:'Outfit' }}>
                <hr />
                <label>
                    <input type='checkbox' />
                    I confirm that I have carefully read and understood the instructions for fill-in-the-blank questions.
                    I will enter my responses directly into the provided blank spaces, review my answers for accuracy, save each response using the
                    'Save & Next' button, and, if needed, use the 'Mark for Review' option before navigating to the next question.
                    I acknowledge the importance of saving my answers before proceeding. <b>I am ready to begin the test.</b>
                </label>
                <hr />

                <button style={{
                    backgroundColor: '#0A1D44', border: 'none', borderRadius: '5px', color: 'white', height: '40px', width: '140px',
                    marginTop: '20px', marginBottom: '30px',cursor:'pointer'
                }}><Link to='/question' style={{color:'white',textDecoration:'none'}}>PROCEED</Link>
                    </button>
            </div>

        </div>
    )
}

export default Instructions
