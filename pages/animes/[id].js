import { data } from '../../src/data';

const SingleAnime = ({ anime }) => {

    return (
        <div>
            { anime.title}
        </div>
    )
}

export default SingleAnime

export const getServerSideProps = async (ctx) => {

    const anime = data.find(anime => anime.id.toString() === ctx.query.id);

    return { props: { anime } };
}
