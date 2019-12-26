import React, {useEffect, useContext} from 'react'
import axios from 'axios'
import {context} from '../context'
import {testAction} from '../actions/bmsAction'
const Test = () => {
    const { state:mydata, testdispatch } = useContext(context);
        useEffect (() => {
                axios.get('http://localhost:3001/getAllEvents').then(response => {
                const data = JSON.parse(response.data);
                // const uniqueGenre = getAllGenres(data[1]);
                    // testdispatch();
                    testdispatch(testAction(data))
            });
        },[])
        console.log(mydata);
    return <div>test</div>
}

export default Test;