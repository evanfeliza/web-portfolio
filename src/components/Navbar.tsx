import React, { useState } from 'react'
import { motion as m, useScroll } from 'framer-motion';
import { Button, Drawer, Space, Switch } from 'antd';
import { SwitchChangeEventHandler } from 'antd/es/switch';
import { GithubOutlined, LinkedinOutlined, MenuOutlined } from '@ant-design/icons';


const useOpenDrawerNavbar = ({ checked, navigations, onClick }: {
  checked: boolean, navigations: {
    label: string;
    component: React.JSX.Element;
  }[];
  onClick: SwitchChangeEventHandler;
}) => {
  const [openDrawer, setOpenDrawer] = useState<boolean | undefined>(false)

  return {
    open: ({ isOpen }: { isOpen: boolean }) => setOpenDrawer(isOpen),
    modal: <Drawer
      placement="right"
      open={openDrawer}
      closable={false}
      onClose={() => setOpenDrawer(false)}
      className='dark:bg-black dark:text-white dark:ring-[1px] dark:ring-white'
      key="right"
    >
      <ul className=' flex flex-col gap-5 justify-center divide-slate-500 dark:divide-white list-outside'>
        {navigations?.map((navigation, index) =>

          <m.li
            key={index} className='flex items-center gap-2 cursor-pointer'>
            <m.span
              whileHover={{
                translateY: -3,
              }}
              whileTap={{ scale: 1.1 }}
            >{navigation.component}</m.span>{navigation.label}
          </m.li>

        )}


        <div className='space-x-5'>
          <Switch
            className='mx-auto'
            checked={checked}
            checkedChildren="🌙"
            unCheckedChildren="☀️"
            onClick={onClick}
          />
          <Button type='text' icon={<GithubOutlined />} />
          <Button type='text' icon={<LinkedinOutlined />} />
        </div>
      </ul>



    </Drawer>
  }
}

const Navbar = ({ checked, navigations, logo, navBrand, onClick }: {
  checked: boolean;
  logo: React.JSX.Element;
  navBrand: string;
  navigations: {
    label: string;
    component: React.JSX.Element;
  }[];
  onClick: SwitchChangeEventHandler;
}) => {
  const { scrollYProgress } = useScroll()
  const { open: openSidebar, modal: openSidebarModal } = useOpenDrawerNavbar({ checked, navigations, onClick })

  return (

    <nav className=' fixed w-full px-10 py-2 bg-white text-black dark:bg-black dark:text-white shadow-sm z-50'>
      {openSidebarModal}
      <div className="flex max-w-[62rem] mx-auto justify-between items-center ">
        <div className='flex items-center gap-2'>
          {logo}
          <strong className="cursor-pointer">{navBrand}</strong>
        </div>
        <div className='hidden md:block'>
          <ul className='list-none flex gap-2 divide-x-[1px] divide-slate-500 dark:divide-white'>
            {navigations?.map((navigation, index) =>
              <Space
                key={index}
              >
                <m.li
                  className='cursor-pointer'>
                  <m.span
                    className='mr-2'
                    whileHover={{
                      translateY: -3,
                    }}
                    whileTap={{ scale: 1.1 }}
                  >{navigation.component}</m.span>{navigation.label}
                </m.li>
              </Space>)}
            <Space>
              <Switch
                checked={checked}
                checkedChildren="🌙"
                unCheckedChildren="☀️"
                onClick={onClick}
              />
            </Space>

          </ul>

        </div>
        <Space className='md:hidden' >
          <Button icon={<MenuOutlined />}
            onClick={() => openSidebar({ isOpen: true })}
            className='dark:bg-black dark:text-white'
          />
        </Space>
      </div>
      <m.div className="absolute bottom-0 left-0 h-[2px] bg-black origin-[0%] dark:bg-white z-50 w-full" style={{ scaleX: scrollYProgress }} />

    </nav >


  )
}

export default Navbar
