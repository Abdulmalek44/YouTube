import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { useState } from "react";

const WorngMessage = () => {

    const [open, setOpen] = useState(true);


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ background: '#383838', color: "#fff" }}>
                    {"Network Error"}
                </DialogTitle>

                <DialogContent sx={{ background: '#383838', }}>
                    <DialogContentText id="alert-dialog-description" sx={{ background: '#383838', color: "#fff" }}>
                        Sorry, Access Restricted Access to this application from your country is restricted.
                        Please consider using a VPN to access YouTube videos.
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ background: '#383838', color: "#fff" }}>
                    <Button sx={{ color: "#fff" }} onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}


export default WorngMessage
