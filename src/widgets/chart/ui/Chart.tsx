import { Track } from '../../../feature/track/ui/Track';
import { useGetTopTracksQuery } from '../../../shared/api/baseLastFm';

import { Title } from '../../../shared/ui';
import { song_list } from '../../../songs/song';
import styled from './Chart.module.scss'


export const Chart = () => {
    const { data: headers } = useGetTopTracksQuery()
    console.log(headers);
    

    return (
        <section className={styled.chart}>
            <Title level={3} fontSize={28} fontWeight={500}>Чарт Моя Музыка</Title>
            {/* {results.map((track, i) => (
                <Track title={track.name} artistName={track} i={i} key={i} fileUrl={track.url}/>
            ))} */}
            {/* <Track/> */}
        </section>
    );
};

