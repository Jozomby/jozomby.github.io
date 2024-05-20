import { Button } from "@mui/material";
import { memo, useState } from "react";
import { Tree } from "./images/tree";
import Goose from "./images/goose.png";

export const GanderReveal = memo(() => {
    const [stage, setStage] = useState("peeking")
    const [ganderClassName, setGanderClassName] = useState("gander-1")
    const [waiting, setWaiting] = useState(false)
    const stageToButtonText = (stageName) => {
        const options = {
            peeking: "What is that?",
            partial: "Is it a goose?",
            reveal: "No, it's a gander!",
        }
        return options[stageName]
    }
    const handleButtonClick = (stage) => {
        setWaiting(true)
        if (stage === "peeking") {
            setGanderClassName("gander-2")
        } else if (stage === "partial") {
            setGanderClassName("gander-3")
        } else {
            setGanderClassName("gander-4")
        }
        const timeoutAmount = stage !== "reveal" ? 1500 : 0
        setTimeout(() => {
            setWaiting(false)
            if (stage === "peeking") {
                setStage("partial")
            } else if (stage === "partial") {
                setStage("reveal")
            } else if (stage === "reveal") {
                setStage("final")
            }
        }, timeoutAmount)
    }
    return (
        <div className="content">
            <div className="animation-container">
                <div className={ganderClassName}>
                    <img src={Goose} />
                </div>
                <div className="tree">
                    <Tree/>
                </div>
                { !waiting && stage !== "final" && (
                    <Button
                        variant="outlined"
                        onClick={() => handleButtonClick(stage)}
                        className="border-blink"
                    >
                        {stageToButtonText(stage)}
                    </Button>
                )}
                {
                    !waiting && stage === "final" && (
                        <div className="announcement">
                            <p>Daniel and Erin are excited to announce baby #2, coming this November!</p>
                            <p>#gander-reveal</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
})