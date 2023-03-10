import Link from 'next/link'
import { useState, useEffect } from 'react'
import { routes } from './routes'

// Hook
// Reference: https://stackoverflow.com/questions/63406435/how-to-detect-window-size-in-next-js-ssr-using-react-hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

export function Navigator({ page }) {
    const [list, setList] = useState(null)
    const size = useWindowSize();
    return (
        <>
            <div className="navigator">
                <ul className="pc-navigator-list">
                    <li>
                        Head Picture
                    </li>

                    {
                        Object.keys(routes).map((key, value) => (
                            <li key={key} className={page == key ? 'disabled' : ''}>
                                <Link href={{
                                    pathname: '/', query: {
                                        page:
                                            key
                                    }
                                }}>
                                    {routes[key]['name']}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <span className='mb-navigator-list'>
                    <a id="mb-expand-btn" onClick={() => setList(true)}>
                        <div className='line'>
                        </div>
                        <div className='line'>
                        </div>
                        <div className='line'>
                        </div>
                    </a>
                    <span id='mb-logo'>
                        Keming
                    </span>
                    <div id="mb-list" className={list == null ? '' : list && size.width <= 1000 ? 'fade-in' : 'fade-out'}>
                        <span id="close-btn"><a onClick={() => setList(false)}>X</a></span>
                        <ul>
                            {
                                Object.keys(routes).map((key, value) => (
                                    <li key={key} className={page == key ? 'disabled' : ''}>
                                        <Link href={{
                                            pathname: '/', query: {
                                                page:
                                                    key
                                            }
                                        }} onClick={() => setList(false)}>
                                            {routes[key]['name']}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </span>

            </div>
            <div className="gradual-change-color"></div>
        </>
    )
}