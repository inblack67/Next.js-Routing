import Link from 'next/link';
import { data } from '../../src/data';
import Model from 'react-modal';
import { useRouter } from 'next/router';
import { useState } from 'react';

Model.setAppElement('#__next');

const Animes = () => {

    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    const onOpen = e => {
        setIsOpen(true);
    }

    return (
        <div>
            <ul>
                {data.map(anime => <li key={anime.id}>
                    <Link href={`/animes`} as={`/animes/${anime.id}`}>
                        <a onClick={onOpen}>
                            {anime.title}
                        </a>
                    </Link>
                </li>)}
            </ul>
            <Model isOpen={isOpen}>
                <div>Modal is here</div>
            </Model>
        </div>
    )
}

export default Animes
