import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

    function Users() {
    
    /*const Users = () => {
        const [first_name, setName] = useState("");
        const [last_name, setLastname] = useState("");
        const [age, setAge] = useState("");
    */
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        age: ''
    })

    const handleSubmit = (event: any) => {
        event.preventDefault()
        axios.post('http://localhost:8000/api/users', {})
        .then(response => console.log('User submitted', response))
        //log('Post submitted succesfully', response))
        .catch(error => console.log('Error submitting post', error))
    };

    const handleInput = (event: any) => {
        setUser({...user, [event.target.name]: event.target.value})
    }
    
    return (
        <>
            <Container maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        mt: 20,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "primary.dark" }}>
                        <LockOutlined />
                    </Avatar>
                    <Typography variant="h5">Submit user</Typography>
                    <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    name="first_name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    autoFocus
                                    //value={first_name}
                                    onChange={handleInput} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="last_name"
                                    required
                                    fullWidth
                                    id="lastname"
                                    label="Lastname"
                                    //value={last_name}
                                    onChange={handleInput} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="age"
                                    required
                                    fullWidth
                                    label="Age"
                                    type="age"
                                    id="age"
                                    //value={age}
                                    onChange={handleInput} />
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/login">Already have an account?</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default Users;