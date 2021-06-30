import React from 'react'
import Coin from './../coin.gif'
import Firebase from './../firebase.png'

export default function Home() {
    return (
        <>
            <div style={{
                textAlign: "center", 
                position: "relative",
                top: "-30px"
            }}> 
                
                <img src={Coin} alt="Coin Animated" height= "250px"/>
                <p
                    style={{
                        color: "white",
                        fontFamily: "Source Code Pro, monospace",
                        fontSize: "50px",
                        fontWeight: "bold",
                        position: "relative",
                        top: "-95px"
                    }}
                >Calin Coins</p>
                <p
                    style={{
                        color: "white",
                        fontFamily: "Source Code Pro, monospace",
                        fontStyle: "italic",
                        position: "relative",
                        top: "-130px"
                    }}
                >The Future of Money</p>
                <div style={{
                    position: "relative",
                    top: "-100px"
                }}>
                    <iframe src="https://free.timeanddate.com/countdown/i7vfxjy9/n5305/cf12/cm0/cu4/ct0/cs0/ca0/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fs200/szw320/szh135/iso2021-08-01T00:00:00" allowtransparency="true" frameborder="0" width="178" height="55"></iframe>
                </div>
            </div>

            <br />
            <br />
            <div style={{textAlign: "center"}}>
            <p
                    style={{
                        color: "gray",
                        fontFamily: "Source Code Pro, monospace",
                        fontStyle: "italic",
                        position: "relative",
                        top: "-130px"
                    }}
                >- 4 July: Reveal How the Currency will work</p>
            <p
                    style={{
                        color: "gray",
                        fontFamily: "Source Code Pro, monospace",
                        fontStyle: "italic",
                        position: "relative",
                        top: "-130px"
                    }}
                >- 1 August: The Launch of the Currency</p>
            </div>
            <br />

            <h1 style={{
                textAlign: "center",
                color: "white",
                fontFamily: "monospace",
                fontSize: "35px"
            }}>Parteners</h1>

            <br />
            <br />

            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>

            <a target="_blank" href="https://firebase.google.com/"
                style= {{
                    marginLeft: "25px",
                    marginRight: "25px"
                }}
            >

                <img src={Firebase} />
            </a>

            <a target="_blank" href="https://www.digitalocean.com/" style={{
                marginLeft: "25px",
                marginRight: "25px"
            }}>
                <img src={"https://iconape.com/wp-content/files/qy/351309/png/digital-ocean-logo.png"} />
            </a>

            </div>
        </>
    )
}
