import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';


function Edit(props) {
    const info = props.info;
    const onSave = props.onSave;
    const history = useHistory();
    const [updateInfo, setUpdateInfo] = useState({
        name: info.name,
        email: info.email,
        contact:info.contact,
        gender:info.gender,
        note:info.note
    })
    const changeHandler = (e) =>{
        console.log(updateInfo)
        setUpdateInfo({...updateInfo,[e.target.name]: e.target.value})
    }
    const save = (e) =>{
        e.preventDefault();
        onSave(updateInfo);
        history.push('/')
    }
    useEffect(() => {
        console.log("check: ", updateInfo);
        
      }, [updateInfo]);
    return (
        <div className="section">
            <div className="Container">
                <form noValidate id="detailsForm" onSubmit={save}>
                    <div className="grid">
                        <div className="grid_block">
                            <label>
                                <div className="field-label">
                                    Name*
                                </div>
                                <input type="text" className="field" name="name" value={updateInfo.name} onChange={changeHandler} required></input>
                            </label>

                        </div>
                        <div className="grid_block">
                            <label>
                                <div className="field-label">
                                    Email*
                                </div>
                                <input type="email" className="field" name="email" value={updateInfo.email} onChange={changeHandler} required></input>
                            </label>

                        </div>
                        <div className="grid_block">
                            <label>
                                <div className="field-label">
                                    Contact*
                                </div>
                                <input type="text" className="field" name="contact" value={updateInfo.contact} onChange={changeHandler} required></input>
                            </label>

                        </div>
                        <div className="grid_block">
                            <label>
                                <div className="field-label">
                                    Gender*
                                </div>
                                <select className="field" name="gender" value={updateInfo.gender} onChange={changeHandler} required>
                                        <option value="">- Select -</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                        <option value="I do not wish to say">I do not wish to say</option>
                                </select>
                            </label>

                        </div>
                        <div className="grid_block_full">
                            <label>
                                <div className="field-label">
                                    Notes*
                                </div>
                                <textarea name="note" className="field" value={updateInfo.note} onChange={changeHandler} required></textarea>
                            </label>

                        </div>
                        <div className="grid_block_full ta-c">
                            <button type="submit" className="button secondary">
                                Save
                            </button>

                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Edit
