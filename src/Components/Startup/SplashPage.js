import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'

import aboutText from './aboutText'
const SplashPage = () => {
    return (
        <div style={style.background}>
            <div className="container-fluid">
                <h1 style={style.title} className="text-center"><span style={style.map}>MAP</span>Maker</h1>
                <div className="container-fluid" style={style.subtitle}>
                    <h4 className="text-center">The Science of <span style={style.MAP}>M</span>eaning <span style={style.MAP}>A</span>nd <span style={style.MAP}>P</span>urpose</h4>
                </div>
                <br />
                <br />
                <ButtonToolbar style={style.buttonCentering} className='text-center'>
                    <Button style={style.button} href='/signup'>Sign Up</Button>
                    <Button style={style.button} href='/login'>Log In</Button>
                </ButtonToolbar>

                <br />
                <div className="container-fluid" style={style.paragraph}>
                    <p style={style.textMargin}>{aboutText}</p>
                </div>
                <br />
            </div>
        </div >
    )
}
//<img className="img-responsive center-block" src="https://scontent-dfw5-2.cdninstagram.com/vp/9f0a7c7aa18b83e0d11bf81408c5cbb3/5CF94F3C/t51.2885-15/sh0.08/e35/s750x750/46038013_203180027229315_5370813539263890085_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com" alt="homepage img" />
const style = {
    title: {
        color: "#29648A",
        fontFamily: "Helvetica",
        fontSize: "5em",
        marginTop: "3%",
        opacity: "0.95",
    },
    map: {
        color: "#25274D",
    },
    MAP: {
        color: "#29648A",
    },
    subtitle: {
        color: "black",
        fontFamily: "Helvetica",
        backgroundColor: "#AAABB8",
        width: "30%",
        borderRadius: "25px",
        opacity: "0.8",
    },
    buttonCentering: {
        display: "flex",
        justifyContent: "center",
    },
    button: {
        borderColor: "black",
        backgroundColor: "#2E9CCA",
        color: "white",
        opacity: "0.8"
    },
    background: {
        backgroundImage: 'url("MAPmaker.jpg")',
        backgroundSize: "cover",
        marginTop: "2%",
        padding: "6px",
        color: "#AAABB8"
    },
    textMargin: {

    },
    header: {
        color: "#EDF5E1",
    },
    paragraph: {
        marginLeft: "15%",
        marginTop: "1em",
        marginRight: "15%",
        marginBottom: "1em",
        backgroundColor: "#AAABB8",
        color: "black",
        borderRadius: "25px",
        padding: "10px",
        opacity: "0.8",
    }
}

export default SplashPage