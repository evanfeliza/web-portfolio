'use client'
import { ConfigProvider, theme as antdTheme } from 'antd'
import { ThemeProvider, useTheme } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme()

    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: '#0e0e0e',
                colorPrimaryActive: '#0e0e0e'
            },
            algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm
        }}>
            <ThemeProvider attribute='class' enableSystem={false}>
                {children}
            </ThemeProvider>
        </ConfigProvider>)
}