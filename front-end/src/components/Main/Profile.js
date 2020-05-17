import React, {useState} from 'react';
import './Profile.css';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import {makeStyles} from "@material-ui/core/styles";
import MyNavBar from "./MyNavBar";
import MyDrawer from "./MyDrawer";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function Profile() {
    const classes = useStyles();
    const [state, setState] = useState({
        profilePicture: null,
        firstName: "",
        lastName: "",
        email: "",
    });

    const ProfileImage = (props) => {
        return(
            <img src={props.src} alt="bruh" className="profile-image"/>
        )
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <MyNavBar/>
            <MyDrawer/>
            <form>
                <div>
                    <h1>Profile</h1>
                    <div className="pfp">
                        <h3>Profile Picture</h3>
                        <ProfileImage src="https://townsquare.media/site/252/files/2019/09/oli-london-jimin.jpg?w=980&q=75" alt="bruh"/>
                    </div>

                    <div className="description">
                        <h3>First Name: </h3>
                        <h3 id="firstName">Oli</h3>
                        <br />
                        <h3>Last Name: </h3>
                        <h3 id="lastName">London</h3>
                        <br />
                        <h3>Email Address: </h3>
                        <h3 id="email">oli.london@oliayoh.com</h3>
                        <br />
                    </div>
                </div>
            </form>
        </div>
    );
}