'use client'

import { useEffect } from 'react';
import { checkCookie, deleteCookie } from './checkCookie';

export default function Chat() {

    useEffect(() => {
        checkCookie()
    }, [])

    return (
        <div className="chat__wrapper">
            <h1>welcome to our chat page</h1>
        </div>
    )
}