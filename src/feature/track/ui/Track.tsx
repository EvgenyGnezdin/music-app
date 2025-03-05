import { useEffect, useRef, useState } from 'react';
import styled from './Track.module.scss'
import { track } from './Track.props';

export const Track = ({title, artistName, i, fileUrl}:track) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef<HTMLAudioElement>(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

    useEffect(() => {
        if (audioRef.current) {
          audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
          audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
          audioRef.current.addEventListener('ended', handleEnded);
        }
    
        return () => {
          if (audioRef.current) {
            audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audioRef.current.removeEventListener('ended', handleEnded);
          }
        };
      }, []);
      const handlePlayPause = (e) => {
        e.stopPropagation()
        if (isPlaying) {
          audioRef.current?.pause();
        } else {
          audioRef.current?.play();
        }
        setIsPlaying(!isPlaying);
      };
    
      const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current?.currentTime || 0);
      };
    
      const handleLoadedMetadata = () => {
        setDuration(audioRef.current?.duration || 0);
      };
    
      const handleEnded = () => {
        setIsPlaying(false);
        setCurrentTime(0);
      };
    
      const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = Number(e.target.value);
        if (audioRef.current) {
          audioRef.current.currentTime = time;
          setCurrentTime(time);
        }
      };
    
      const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
          audioRef.current.volume = newVolume;
        }
      };
    
      const handleTrackChange = (index: number) => {
        setCurrentTrackIndex(index);
        setIsPlaying(false);
        setCurrentTime(0);
      };
    
      const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
      };

    return (
        <div className={styled.track} onClick={handlePlayPause}>
            <div className={styled.info}>
                <div className={styled.positionBlock}>
                    <p>{++i}</p>
                </div>
                <div className={styled.imgBlock}>
                    <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOKoon.img" alt="#" />
                    <button>
                      {isPlaying ? 
                        <svg xmlns="http://www.w3.org/2000/svg" className={styled.trackIcon} width="28" height="28" viewBox="0 0 1200 1200">
                          <path fill="#fff" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0M330.835 289.38h181.714v621.24H330.835zm356.616 0h181.714v621.24H687.451z"/>
                        </svg> :
                        <svg className={styled.trackIcon} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16">
                          <path fill="#fff" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                        </svg>
                        }        
                    </button>
                    <audio
                      src={fileUrl}
                      ref={audioRef}
                    />
                </div>            
                <div className={styled.content}>
                    <div>
                        <a href="#" className={styled.nameMusic}>
                            {title}
                        </a>
                    </div>
                    <p>
                        <a href="#" className={styled.name}>
                            {artistName}
                        </a>
                    </p>
                </div>
            </div>
            <div className={styled.rightBlock}>
                <span className={styled.duration}>
                  {formatTime(currentTime)}
                </span>
                <div className={styled.likeBlock}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48">
                        <path fill="none" stroke="#626c77" strokeWidth='4' d="M24 12.124c-1.745-2.892-4.908-4.833-8.532-4.833c-5.505 0-9.968 4.463-9.968 9.968c0 1.258.243 2.457.669 3.566C9.465 30.305 24 40.709 24 40.709s14.535-10.403 17.831-19.884a9.9 9.9 0 0 0 .669-3.566c0-5.505-4.463-9.968-9.968-9.968c-3.624 0-6.787 1.94-8.532 4.833"/>
                        <path fill="none" stroke="#626c77" strokeWidth='4' d="m24 40.709l-2.721-11.667l5.473-5.678l-6.064-5.678L24 12.124"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48">
                        <path fill="none" stroke="#626c77" strokeWidth='4' d="M24 12.124c-1.745-2.892-4.908-4.833-8.532-4.833c-5.505 0-9.968 4.463-9.968 9.968c0 1.258.243 2.457.669 3.566C9.465 30.305 24 40.709 24 40.709s14.535-10.403 17.831-19.884a9.9 9.9 0 0 0 .669-3.566c0-5.505-4.463-9.968-9.968-9.968c-3.624 0-6.787 1.94-8.532 4.833"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

