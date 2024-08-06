'use client';

import dynamic from 'next/dynamic';
import React from "react";

const Cursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false,
})
const AnimatedCursor = () => {
    return <Cursor
        innerSize={10}
        outerSize={35}
        innerScale={1}
        outerScale={3}
        outerAlpha={0}
        showSystemCursor={false}
        innerStyle={{
            backgroundColor: 'var(--cursor-color)'
        }}
        outerStyle={{
            border: '2px solid var(--cursor-color)'
        }}
    />
}

export default AnimatedCursor