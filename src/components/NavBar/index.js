import React from 'react'
import NavMain from './NavMain'
import NavInput from './NavInput'
import NavCat from './NavCat'
import './index.scss'

export default function Index() {
    return (
        <>
            <div id='head-bg'>
                <a href=""></a>
                <NavMain />
                <NavInput />
                <NavCat />
            </div>
        </>
    )
}
