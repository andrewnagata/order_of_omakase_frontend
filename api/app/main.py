from typing import Optional

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
import json

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost/api",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api")
def read_root():
    return {"Hello": "Omakase is here"}

@app.get("/signatures/{address}")
def read_item(address: str):
    _dir = os.path.dirname(__file__)
    rel_path = "signatures.json"
    abs_file_path = os.path.join(_dir, rel_path)
    
    f = open(abs_file_path)
    data = json.load(f)

    try:
        _signature = data[address.lower()]
    except:
        # Signature not found
        _signature = "0x00"

    return _signature
