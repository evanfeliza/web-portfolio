const Loading = () => {
    return (
        <div className={`fixed bg-base-100 h-full w-full flex items-center justify-center z-50 transition-transform duration-500`}>
            <span className='loader'></span>
        </div>
    )
}

export default Loading