import { useEffect, useState } from "react"

export default function PopUp(props) {
    const [visible, setVisible] = useState(true)

    const divStyle = {
        position: "fixed",
        backgroundColor: "#222222",
        width: "60%",
        height: "60%",
        top: "20%",
        left: "20%",
        padding: "1em"
    }

    const closeBtnStyle = {
        position: "absolute",
        right: "0px",
        top: "0px",
        width: "25px",
        height: "25px",
        color: "white",
        backgroundColor: "none",
        background: "transparent",
        border: "none",
        fontSize: "1.5rem",
        margin: ".20rem"
    }

    const textStyle = {
        color: "white",
        fontSize: "1rem"
    }

    const topBarStyle = {
        backgroundColor: "darkgreen", 
        width: "100%", 
        height: "40px",
        position: "absolute",
        top: 0,
        left: 0
    }

    useEffect(() => {
        if(!visible) {
            document.getElementById("pop-up").style.display = "none"
        }
    }, [visible])

    return (
        <div style={divStyle} id="pop-up">
            <div style={topBarStyle}>
                <button style={closeBtnStyle} onClick={() => {setVisible(false)}}>x</button>
            </div>
            
            <h1 style={{color: "white", marginTop: "2rem"}}>
                Estacionamento Central
            </h1>
            
            <p style={textStyle}>
                Data: Amanhã, 09:00 - 11:00
            </p>
            <p style={textStyle}>
                Local: Av. Principal, 456
            </p>
            <br/>
            <p style={textStyle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque incidunt eaque, accusamus atque quod cupiditate, corrupti reprehenderit culpa quisquam beatae, doloremque nobis dignissimos alias commodi error? Quaerat blanditiis velit dicta.</p>
        </div>
    )
}