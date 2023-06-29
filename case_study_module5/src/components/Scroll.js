import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


export default function Scroll() {
    const [goToTop, setGoToTop] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setGoToTop(window.scrollY >= 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    const pathName = useLocation()
    const handleGoToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    useEffect(() => {
    }, [pathName])
    return (
        <>
            {goToTop && (
                <button style={{
                    position: 'fixed',
                    right: 30,
                    bottom: 30,
                    fontSize:30,
                    width:50,
                    borderRadius:30,
                    backgroundColor: 'white',
                    border:'none',
                    color:'black',
                    zIndex:999
                }}
                    onClick={() => { handleGoToTop() }}
                >
                    <i className='ti-angle-double-up'/>
                </button>
            )}
        </>
    )

}