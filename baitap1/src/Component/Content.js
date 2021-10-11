import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function Content(props) {
    const history = useHistory();
    const info = props.info;
    return (
        <div className="section">
            <div className="Container">
                <form noValidate id="detailsForm">
                    <div className="grid">
                        <div className="grid_block">
                            <label>
                                <div className="field-label">
                                    Name*
                                </div>
                                <div className="field-value">
                                    {info.name}
                                </div>
                            </label>

                        </div>
                        <div className="grid_block">
                            <label>
                                <div className="field-label">
                                    Email*
                                </div>
                                <div className="field-value">
                                    {info.email}
                                </div>
                            </label>

                        </div>
                        <div className="grid_block">
                            <label>
                                <div className="field-label">
                                    Contact*
                                </div>
                                <div className="field-value">
                                    {info.contact}
                                </div>
                            </label>

                        </div>
                        <div className="grid_block">
                            <label>
                                <div className="field-label">
                                    Gender*
                                </div>
                                <div className="field-value">
                                    {info.gender}
                                </div>
                            </label>

                        </div>
                        <div className="grid_block_full">
                            <label>
                                <div className="field-label">
                                    Notes*
                                </div>
                                <div className="field-value">
                                    {info.note}
                                </div>
                            </label>

                        </div>
                        <div className="grid_block_full ta-c">
                            <button type="button" className="button secondary" onClick={()=> history.push('/edit')}  >
                                Edit
                            </button>

                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Content
