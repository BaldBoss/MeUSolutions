import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import validation from './validation';

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
    const [erros, setErrors] = useState({})
    const [gotError,setGotError] = useState(false)
    const changeHandler = (e) =>{
        console.log(updateInfo)
        setUpdateInfo({...updateInfo,[e.target.name]: e.target.value})
        setErrors(validation(updateInfo))
    }
    const onblur = () =>{
        setErrors(validation(updateInfo))
    }
    const save = (e) =>{
        e.preventDefault();
        onSave(updateInfo);
        
        if(gotError === false){
            history.push('/')
        }
    }
    useEffect(() => {
        if(Object.keys(erros).length ===0){
            setGotError(false)
            console.log(gotError)
        }else{
            setGotError(true)
        }
        
      }, [erros]);
    useEffect(() => {
        console.log("check: ", updateInfo);
        
      }, [updateInfo]);

    return (
        <div className="main">
            <div className="section">
            <div className="Container">
                <form noValidate id="detailsForm" onSubmit={save}>
                    <div className="grid">
                        <div className="grid_block">
                            <label>
                                <div className="field-label">
                                    Name*
                                </div>
                                <input type="text" className="field" name="name" value={updateInfo.name} onChange={changeHandler} onBlur={onblur}  required></input>
                                {erros.name && <p className="error">{erros.name}</p>}
                            </label>

                        </div>
                        <div className="grid_block">
                            <label>
                                <div className="field-label">
                                    Email*
                                </div>
                                <input type="email" className="field" name="email" value={updateInfo.email} onChange={changeHandler} onBlur={onblur}  required></input>
                                {erros.email && <p className="error">{erros.email}</p>}
                            </label>

                        </div>
                        <div className="grid_block">
                            <label>
                                <div className="field-label">
                                    Contact*
                                </div>
                                <input type="text" className="field" name="contact" value={updateInfo.contact} onChange={changeHandler}  onBlur={onblur}  required></input>
                                {erros.contact && <p className="error">{erros.contact}</p>}
                            </label>

                        </div>
                        <div className="grid_block">
                            <label>
                                <div className="field-label">
                                    Gender*
                                </div>
                                <select className="field" name="gender" value={updateInfo.gender} onChange={changeHandler} onBlur={onblur}  required>
                                        <option value="">- Select -</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                        <option value="I do not wish to say">I do not wish to say</option>
                                </select>
                                {erros.gender && <p className="error">{erros.gender}</p>}
                            </label>

                        </div>
                        <div className="grid_block full">
                            <label>
                                <div className="field-label">
                                    Notes*
                                </div>
                                <textarea name="note" className="field" value={updateInfo.note} onChange={changeHandler}  required></textarea>
                            </label>
                            {erros.note && <p className="error">{erros.note}</p>}
                        </div>
                        <div className="grid_block full ta-c">
                            <button type="submit" className="button secondary">
                                Save
                            </button>

                        </div>
                    </div>
                </form>
            </div>
            
        </div>
        </div>
        
    )
}

export default Edit
