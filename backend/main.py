from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import models as model

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextInput(BaseModel):
    input: str

@app.post("/translate")
def translate(data:TextInput):
    translated = model.translator_v1(data.input)
    return translated

@app.post("/evaluate")
def eval(data:TextInput):
    result = model.evaluate_v1(data.input)
    return result