import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import BigHeader from './BigHeader';

export default function BasicApp (props) {

    // let wordEmphasizer = '!';
    let [wordEmphasizerState, setWordEmphasizerState] = useState('?')
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: "SET_DIFFICULTY",
            challengeLevel: "EASY",
        })
    }, []);

    function addEmphasis() {
        // setWordEmphasizerState(wordEmphasizerState + '?')
        // wordEmphasizer = wordEmphasizer + '!';
        setWordEmphasizerState(wordEmphasizerState + "!" );

    }

    return (
    <div>
        <BigHeader text={"GoOd lUCk on the quiz" + wordEmphasizerState} ></BigHeader>
        <button onClick={() => addEmphasis()}>Add emphasis</button>
    </div>)
} 