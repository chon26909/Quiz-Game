import React from 'react';
import { useDispatch } from 'react-redux';
import { cancelGame } from '../store/slices/gameinit';

const FetchingPage = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <p>Loading...</p>
            <button onClick={() => dispatch(cancelGame())}>Cancel</button>
        </div>
    )
}

export default FetchingPage
