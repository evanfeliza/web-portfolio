import React from 'react'
import Logo from './Logo'
import { Button, Space } from 'antd'
import { DownloadOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

const Hero = () => {
    return (
        <div className="max-w-[62rem] px-10 py-5 mx-auto h-100">
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <h1 className='text-8xl'>Hi, I'm Evan.👋🏻</h1>
                    <p className='text-4xl'>
                        I am a <strong>front-end developer</strong>🚀 passionate for creating user experiences in the <strong>web</strong>.
                    </p>

                </div>
                <div className="h-full w-full"><Logo type="avatar" /> <div className="grid grid-cols-2 gap-3">
                    <Button type='primary' icon={<DownloadOutlined />} className='dark:ring-[0.5px] dark:ring-white' >Download My CV</Button>
                    <div className="flex items-center justify-center gap-5">
                        <Button type='text' icon={<GithubOutlined />} />
                        <Button type='text' icon={<LinkedinOutlined />} />
                    </div>
                </div></div>
            </div>
        </div>
    )
}

export default Hero