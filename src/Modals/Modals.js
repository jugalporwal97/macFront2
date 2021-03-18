import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

export default function Modals(props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [val, setval] = React.useState(props.data);

  console.log(`MOdalprops.data`, props.data);

  const handleClickOpen = () => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (v, e) => {
    let temp = e.target.value;
    setval((old) => {
      return { ...old, [v]: temp };
    });
  };
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen()}>{props.name}</Button>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Update</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            s
          >
            {Object.entries(val).map(([k, v]) => {
              return props.editable.includes(k) ? (
                <TextField
                  key={k}
                  variant="outlined"
                  margin="normal"
                  inputProps={{
                    style: { margin: "10px" },
                  }}
                  value={v}
                  onChange={(e) => handleClick(k, e)}
                />
              ) : null;
            })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => props.onhandleUpdate(val.id, val)}
            color="primary"
          >
            {/* <Button  color="primary"> */}
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
