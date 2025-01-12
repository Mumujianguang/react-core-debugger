import * as React from 'react'
import { useEffect } from 'react';

interface IProps {
    callback?: Function
}

export default function App(props: IProps) {
    useEffect(() => {
        console.log('props callback has changed', props.callback)
        props.callback?.()
    }, [props.callback])
  
    return (
        <div className="App">
            app
        </div>
    );
}
