import { useRef } from 'react';

export default function scrollSection() {
    const nosotrxs = useRef(null);


    function handleScrollToNosotrxs() {
        nosotrxs.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }
}

