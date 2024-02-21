import React from 'react'
import { useState } from 'react';

import './Questionpage.css';

const Questionpage = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { id: 'A', value: '25' },
        { id: 'B', value: '42' },
        { id: 'C', value: '17' },
        { id: 'D', value: '31' },
    ];
    const handleOptionSelect = (optionId) => {
        setSelectedOption(optionId);
    };

    return (
        <div style={{ display: 'flex',width:'100vw',height:'100vh'}}>
            {/* left side */}
            <div className="left-column">
                <img src='' alt='logo'></img>
                <h1 style={{ color: '#2068DE', fontSize: '25px' }}>GATE MOCK</h1>
                <p style={{ fontSize: '13px', color: 'gray',fontFamily:'Poppins',overflow:'hidden' }}>Your one-stop portal for GATE, Aptitude, and Core tests.
                    Comprehensive evaluations for knowledge, aptitude, and core competencies.
                    Unlock insights into your overall proficiency and readiness.</p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <hr style={{ flex: 1, marginRight: '10px' }} />
                    <p style={{ color: 'gray',fontFamily:'Outfit' }}>QUESTIONS</p>
                    <hr style={{ flex: 1, marginLeft: '10px' }} />
                </div>
                {/* question number
                <div style={{display:'flex',flexWrap:'nowrap'}}>
                    <div style={{backgroundColor: '#f1f1f1', width:'30px',margin: '10px',textAlign: 'center',lineHeight:'45px',fontSize:'25px'}}>1</div>
                    <div style={{backgroundColor: '#f1f1f1', width:'30px',margin: '10px',textAlign: 'center',lineHeight:'45px',fontSize:'25px'}}>2</div>
                    <div style={{backgroundColor: '#f1f1f1', width:'30px',margin: '10px',textAlign: 'center',lineHeight:'45px',fontSize:'25px'}}>3</div>
                    <div style={{backgroundColor: '#f1f1f1', width:'30px',margin: '10px',textAlign: 'center',lineHeight:'45px',fontSize:'25px'}}>4</div>
                    <div style={{backgroundColor: '#f1f1f1', width:'30px',margin: '10px',textAlign: 'center',lineHeight:'45px',fontSize:'25px'}}>5</div>
                    <div style={{backgroundColor: '#f1f1f1', width:'30px',margin: '10px',textAlign: 'center',lineHeight:'45px',fontSize:'25px'}}>6</div>
                </div> */}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '10px' }}>
                    {Array.from({ length: 30 }, (_, index) => (
                        <button style={{fontFamily:'Outfit'}} key={index} className="button"> {index + 1}</button>
                    ))}
                </div>
                <hr></hr>

                {/* notice */}
                <h1 style={{ color: 'black', fontSize: '25px' }}>Status:</h1>

                <div style={{ display: 'flex', flexDirection:'column',rowGap:'5px' }}>
                    <div style={{display:'flex',columnGap:'10px'}}>
                        <div style={{ backgroundColor: '#5ab75b', width: '20px', height: '20px' }}></div>
                        <p style={{ margin: '0', fontSize: '18px' }}>- Answered.</p>
                    </div>
                    <div style={{display:'flex',columnGap:'10px'}}>
                        <div style={{ backgroundColor: '#e10000', width: '20px', height: '20px' }}></div>
                        <p style={{ margin: '0', fontSize: '17px' }}>- Not Answered.</p>
                    </div>
                    <div style={{display:'flex',columnGap:'10px'}}>
                        <div style={{ backgroundColor: 'grey', width: '20px', height: '20px' }}></div>
                        <p style={{ margin: '0', fontSize: '17px' }}>- Deferred.</p>
                    </div>
                </div>
            </div>



            {/* right side */}
            <div className="right-column">
                <div style={{ maxWidth: '1000px', margin: '0 auto',marginTop:'80px' }}>
                    <p style={{ textAlign: 'center',color:'white',fontFamily:'Outfit' }}>1 | 30</p>
                    <p style={{ paddingLeft: '40px', paddingRight: '40px', textAlign: 'center',color:'white',fontFamily:'Poppins' }}>Alice and Bob are working on a project where they need to exchange information in a binary format.
                        Alice sends a binary number, 110101, to Bob and asks him to convert it to its hexadecimal equivalent.
                        Bob, being a bit puzzled, decides to first convert it to decimal and then to hexadecimal.
                        What is the correct hexadecimal representation of the binary number Alice sent?</p>
                    <div style={{display:'flex',flexDirection: 'column', alignItems: 'center',marginTop:'50px'}}>
                    {options.map((option) => (
                        <button className='optionbar' for={`option${option.id}`} key={option.id}>
                            <input
                                type="radio"
                                id={`option${option.id}`}
                                name="options"
                                checked={selectedOption === option.id}
                                onChange={() => handleOptionSelect(option.id)}
                            />
                            <label  style={{fontFamily:'Outfit',fontSize:'20px'}}htmlFor={`option${option.id}`}>{` ${option.value}`}</label>
                        </button>
                    ))}

                    </div>
                </div>
                <div>
                    <button>Clear Response</button>
                    <button>Mark for Review & Next</button>
                    <button>Save & Next</button>
                </div>
                <button>Submit</button>
            </div>
        </div>
    );
};

export default Questionpage
