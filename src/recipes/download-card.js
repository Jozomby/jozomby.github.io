import { memo } from "react";
import { Button } from "@mui/material"
import "./download-card.css"

export const DownloadCard = memo(() => {
    return (
        <div className={"download-card"}>
            <img src="https://jozomby-public.s3.us-east-1.amazonaws.com/recipes/cover-thumbnail.jpg" />
            <div className={"download-content"}>
                <p>Get the free cookbook!</p>
                <div className={"download-buttons"}>
                    <Button
                        className={"button-primary"}
                        variant="outlined"
                        sx={{
                            color: '#333 !important',
                            borderColor: '#333 !important',
                            textDecoration: 'none',
                            '&:hover': {
                                color: '#333 !important',
                                borderColor: '#333 !important',
                                backgroundColor: 'rgba(51, 51, 51, 0.04) !important',
                            },
                            '&:visited': {
                                color: '#333 !important',
                                borderColor: '#333 !important',
                            }
                        }}
                        component="a"
                        href={"https://jozomby-public.s3.us-east-1.amazonaws.com/recipes/The+Unofficial+Stormlight+Archive+Cookbook+Print+Files.zip"}
                        download={"The Unofficial Stormlight Archive Cookbook Print Files.zip"}
                    >
                        Download print files (1.4 GB)
                    </Button>
                    <Button
                        className={"button-primary"}
                        variant="contained"
                        sx={{
                            color: 'white !important',
                            backgroundColor: '#333 !important',
                            textDecoration: 'none',
                            '&:hover': {
                                color: 'white !important',
                                backgroundColor: '#000 !important',
                            },
                            '&:visited': {
                                color: 'white !important',
                                backgroundColor: '#000 !important',
                            },
                        }}
                        component="a"
                        href={"https://jozomby-public.s3.us-east-1.amazonaws.com/recipes/The+Unofficial+Stormlight+Archive+Cookbook.pdf"}
                        download={"The Unofficial Stormight Archive Cookbook.pdf"}
                    >
                        Download ebook (PDF)
                    </Button>
                </div>
            </div>
        </div>
    )
})