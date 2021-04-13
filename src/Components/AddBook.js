import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button, ButtonGroup, Chip, FormHelperText, Paper} from "@material-ui/core";
import uuid from 'react-uuid'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '40%',
        margin: '5% auto',
        boxShadow: '0px 0px 10px gray',
        borderRadius: '6px',
        padding: '20px',


    },
    divStyle: {
        margin: '25px 20px'
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    pap: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        boxShadow: '0px 0px 0px gray',
        margin: '5% auto',


    },
}));

const AddBook = () => {
    const classes = useStyles();

    const [chipData, setChipData] = React.useState([]);
    const [cat, setCat] = React.useState(null);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const addCategory = () => {
        if(chipData.length <4){
            setChipData([...chipData, {key: uuid(), label: cat}]);
        }
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <h3 style={{textAlign: 'center'}}>Add Book</h3>

            <div className={classes.divStyle}>

                <TextField id="filled-basic"
                           variant="outlined"
                           type="file"
                           placeholder="Book Image"
                           fullWidth/>
            </div>


            <div className={classes.divStyle}>

                <TextField id="filled-basic"
                           variant="outlined"
                           label="Name"
                           placeholder="Book Name"
                           fullWidth/>
            </div>
            <div className={classes.divStyle}>

                <TextField id="filled-basic"
                           variant="outlined"
                           label="Link"
                           placeholder="Book Link"
                           fullWidth/>
            </div>
            <div className={classes.divStyle}>
                <TextField id="filled-basic"
                           variant="outlined"
                           label="Snapshot"
                           placeholder="Book Snapshot"
                           fullWidth/>
            </div>

            {/* category*/}
            {
                chipData.length == 0 ? null :
                    <>
                        <Paper component="ul" className={classes.pap}>
                            {chipData.map((data) => {

                                return (
                                    <li key={data.key}>
                                        <Chip
                                            label={data.label}
                                            onDelete={handleDelete(data)}
                                            className={classes.chip}
                                        />
                                    </li>
                                );
                            })}

                        </Paper>
                    </>
            }

            <div className={classes.divStyle}>
                <TextField id="filled-basic"
                           variant="outlined"
                           label="Category"
                           placeholder="Book Category"
                           fullWidth
                           onChange={({target}) => setCat(target.value)}
                           onKeyPress={event => event.key === 'Enter' ? addCategory(event) : null}
                />
                <FormHelperText id="my-helper-text">Only 4 category</FormHelperText>

            </div>

            <br></br>

            {/* category*/}

            <ButtonGroup disableElevation variant="contained" color="primary">
                <Button size="large" variant="contained">Add</Button>
            </ButtonGroup>
        </form>
    );
}
export default AddBook;
