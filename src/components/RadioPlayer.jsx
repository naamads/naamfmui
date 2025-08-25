import React, { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import toast from 'react-hot-toast'
import "../styles/Radioplayer.scss"

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)

  const streamUrl = "https://centova.aarenworld.com/proxy/894tamilfm/stream" 

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const togglePlay = async () => {
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
        toast.success('Radio paused')
      } else {
        await audioRef.current.play()
        setIsPlaying(true)
        toast.success('Now playing Naam FM')
      }
    } catch (error) {
      console.error('Audio play error:', error)
      toast.error('Unable to play radio stream')
    }
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : newVolume
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (audioRef.current) {
      audioRef.current.volume = !isMuted ? 0 : volume
    }
  }

  return (
    <section className="radio-player">
      <div className="container">
        <div className="player-container">
          
          <div className="now-playing">
            <h3>Now Playing</h3>
            <p>Naam FM - Your Local Voice</p>
            <p>Live Radio Stream</p>
          </div>

          <div className="player-controls">
            <button 
              className="play-btn"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause radio' : 'Play radio'}
            >
              {isPlaying ? <Pause size={32} /> : <Play size={32} fill="currentColor" />}
            </button>
          </div>

          <div className="volume-control">
            <button onClick={toggleMute} aria-label={isMuted ? 'Unmute' : 'Mute'}>
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
              aria-label="Volume control"
            />
          </div>

          <audio
            ref={audioRef}
            src={streamUrl}
            preload="none"
            onError={() => toast.error('Radio stream unavailable')}
          />
        </div>
      </div>
    </section>
  )
}

export default RadioPlayer
