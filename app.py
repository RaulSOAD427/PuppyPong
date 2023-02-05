from fastapi import FastAPI, Request, Form
from fastapi.responses import Response
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles 
from fastapi.responses import RedirectResponse
import uvicorn
from urllib.request import urlopen
import json

app = FastAPI()

app.mount("/public", StaticFiles(directory="public"), name="public")

@app.get("/", response_class=HTMLResponse)
def get_html() -> HTMLResponse:
    with open("index.html") as html:
        return HTMLResponse(content=html.read())

@app.get("/puppy_pong", response_class=HTMLResponse)
def get_html() -> HTMLResponse:
    with open("puppy_pong.html") as html:
        return HTMLResponse(content=html.read())

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=6545)