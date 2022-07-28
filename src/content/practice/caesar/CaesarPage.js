import React, {useState} from 'react';
import axios from "axios";
import {CopyToClipboard} from "react-copy-to-clipboard/src";

function CaesarPage(props) {

    const [text, setText] = useState("")
    const [key, setKey] = useState("")
    const [result, setResult] = useState("")

    const [detext, setDeText] = useState("")
    const [dekey, setDeKey] = useState("")
    const [deresult, setDeResult] = useState("")

    function cipherCaesar(e) {
        let caesar = {
            text: text,
            key: key
        }
        console.log(caesar)
        axios.post("http://localhost:8080/practice/caesar", caesar)
            .then(response => {
                console.log(response.data)
                setResult(response.data)
            })
            .catch(error => console.log(error))
    }

    function decipherCaesar(e) {
        let decaesar = {
            text: detext,
            key: dekey
        }
        console.log(decaesar)
        axios.post("http://localhost:8080/practice/decaesar", decaesar)
            .then(response => {
                console.log(response.data)
                setDeResult(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <h1 className="text-center">Шифр цезаря</h1>

            <h5>Зашифрование текста</h5>
            <div className="crypto_form">
                <form>
                    <div className="row-cols-3 d-flex">
                        <div className="form-group col-sm">
                            <label htmlFor="text" className="mb-3">Введите текст для шифрования:</label>
                            <textarea className="form-control" id="text" name="text" rows="5"
                                      placeholder="Текст, который вы хотети спрятать"
                                      value={text}
                                      onChange={(e) => setText(e.target.value)}></textarea>
                        </div>
                        <div className="form-group" style={{marginLeft: "20px"}}>
                            <label htmlFor="key" className="mb-3">Ключ, например "самосвал":</label>
                            <input type="text" className="form-control" id="key" name="key" aria-describedby="emailHelp"
                                   placeholder="Введите ключ в виде текста"
                                   value={key}
                                   onChange={(e) => setKey(e.target.value)}/>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <button type="button" className="btn btn-primary" onClick={(e) => cipherCaesar(e)}>Вычислить
                        </button>
                    </div>
                </form>
                <div className="row-cols-6 d-flex mt-4 mb-3">
                    <div className="form-group col-sm">
                        <label htmlFor="q1" className="mb-3">Зашифрованный текст:</label>
                        <textarea className="form-control" id="q1" name="text" rows="3"
                                  defaultValue={result} disabled></textarea>
                    </div>
                    <div className="mt-5 text-center">
                        <CopyToClipboard text={result}>
                            <button id="myExample" className="btn btn-primary clipboard"
                                    data-mdb-clipboard-target="#copy-target-4">
                                Копировать
                            </button>
                        </CopyToClipboard>
                    </div>
                </div>
            </div>


            <h5>Расшифрование текста</h5>
            <div className="crypto_form">
                <form>
                    <div className="row-cols-3 d-flex">
                        <div className="form-group col-sm">
                            <label htmlFor="text" className="mb-3">Введите текст для расшифрования:</label>
                            <textarea className="form-control" id="text" name="text" rows="5"
                                      placeholder="Текст, который вы хотети спрятать"
                                      value={detext}
                                      onChange={(e) => setDeText(e.target.value)}></textarea>
                        </div>
                        <div className="form-group" style={{marginLeft: "20px"}}>
                            <label htmlFor="key" className="mb-3">Ключ:</label>
                            <input type="text" className="form-control" id="key" name="key" aria-describedby="emailHelp"
                                   placeholder="Введите ключ в виде текста"
                                   value={dekey}
                                   onChange={(e) => setDeKey(e.target.value)}/>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <button type="button" className="btn btn-primary" onClick={(e) => decipherCaesar(e)}>Расшифровать
                        </button>
                    </div>
                </form>
                <div>
                    <div className="form-group mt-4 mb-3">
                        <label htmlFor="q1" className="mb-3">Расшифрованный текст:</label>
                        <textarea className="form-control" id="q1" name="text" rows="3"
                                  defaultValue={deresult} disabled></textarea>
                    </div>

                    <CopyToClipboard text={result}>
                        <div className="mt-4 text-center">
                            <button id="myExample" className="btn btn-primary clipboard"
                                    data-mdb-clipboard-target="#copy-target-4">
                                Копировать
                            </button>
                        </div>
                    </CopyToClipboard>
                </div>
            </div>
        </div>
    );
}

export default CaesarPage;