import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

const CommentComp = ({ comment }) => {
    const [show, Setshow] = useState(false)
    const cmt = comment;
    console.log(cmt)

    function showControl() {
        Setshow(!show)
    }



    return (
        <div>
            <div style={{ display: 'flex' }} >
                {!show && (
                    <IconButton aria-label="delete" onClick={showControl} >
                        <OpenInFullIcon fontSize='20' style={{ marginTop: "15px" }} />
                    </IconButton>
                )}
                <div style={{ backgroundColor: "#fff", width: "30px", height: "30px" }}>
                    <Avatar alt="Cindy Baker" src={cmt.author.avatar} />
                </div>
                <h3>{cmt.author.name}</h3>
            </div>
            <div>
                {show && (
                    <div style={{ display: 'flex' }}>
                        <p style={{ marginLeft: "40px", marginTop: "0px" }}>{cmt.text}</p>
                    </div>
                )}

                {show && (
                    <div
                    onClick={showControl}
                    style={{
                        borderLeft: "2px solid grey",
                        position: 'absolute',
                        height: "100vh",
                        marginLeft: "20px",
                        marginTop:"-40px"
                    }}></div>
                )}
                {
                    comment.replies !== undefined && show && (
                        comment.replies.map((cmt) => (
                            <div style={{ marginLeft: "35px" }}>
                                <CommentComp comment={cmt} />
                            </div>
                        ))
                    )
                }
            </div>

        </div>
    )
}

export default CommentComp