/* eslint-disable jsx-a11y/media-has-caption */
import React, { useContext, useRef } from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoMdPause, IoMdPlay } from 'react-icons/io'

import Hability from '../../../components/Atoms/Hability'
import Button from '../../../components/Atoms/Button'
import { StoreContext } from '../../../context/store'

import styles from './_.module.scss'

function AboutSection() {
  const audio = useRef(null)
  const { value, setValue } = useContext(StoreContext)
  const descs = [
    {
      subtitle: 'A little description about me, Derek',
      desc: "Greetings! I'm just a man with the desire to never stop learning, that way of thinking has saved me many times in my work and in my personal life, especially in the role of frontend developer because currently I face problems with no apparent solution.",
    },
    {
      subtitle: 'My habilities',
      html: (
        <div className={styles.habilities}>
          <Hability src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" name="JavaScript" qualify={6} />
          <Hability src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" name="HTML5" qualify={7} />
          <Hability src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" name="CSS3" qualify={6} />
          <Hability src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" name="Git" qualify={5} />
          <Hability src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" name="React" qualify={6} />
          <Hability src="https://vuejs.org/images/logo.png" name="Vue.js" qualify={6} />
          <Hability src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png" name="Svelte" qualify={4} />
        </div>
      ),
    },
    {
      subtitle: 'Social media & Contact',
      html: (
        <div className={`${styles['social-media']} flex p-5 text-center`}>
          <a className="flex items-center" href="https://github.com/dereksamuel" target="_blank" rel="noreferrer">
            <IoLogoGithub size={30} />
            <p className="text-sm md:text-base ml-2">Github</p>
          </a>
          <a className="flex items-center" href="https://www.linkedin.com/in/derek-samuel-pa%C3%BAl-pe%C3%B1a-55a7771b7/" target="_blank" rel="noreferrer">
            <IoLogoLinkedin size={30} />
            <p className="text-sm md:text-base ml-2">Linkedin</p>
          </a>
        </div>
      ),
    },
  ]

  const onDownload = () => {
    fetch('smart_ranks.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob)
        const alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'smart_ranks.pdf'
        alink.click()
      })
    })
  }

  const onTogglePlay = async (val) => {
    if (val !== false) {
      audio.current.paused ? await audio.current.play() : audio.current.pause()
    }

    setValue({
      ...value,
      about_me: {
        ...value.about_me,
        play_audio: typeof val === 'boolean' ? val : !value.about_me.play_audio,
      },
    })
  }

  const generateTemplate = (subtitle, desc, html, index) => {
    return (
      <div key={index}>
        <h3 className="text-lg md:text-2xl subtitle pb-2 flex justify-between items-center">
          <strong>{subtitle}</strong>
          {subtitle === 'A little description about me, Derek' && value.mode3dLoading && !value.modelLoading && (
            <Button isSmall isActive={value.about_me.play_audio} onClick={onTogglePlay}>
              {value.about_me.play_audio ? <IoMdPause /> : <IoMdPlay />}
            </Button>
          )}
          {subtitle === 'My habilities' && (
            <Button isSmall theme="secondary" onClick={onDownload}>
              Download Proof
            </Button>
          )}
        </h3>
        <hr />
        {desc ? <p className="pt-2 pb-5 text-sm md:text-base">{desc}</p> : null}
        {html || null}
      </div>
    )
  }

  return (
    <section className={`${styles['about-section']} p-5`}>
      <audio onEnded={() => onTogglePlay(false)} src="/audio/audioAboutMe.mp3" ref={audio} controls></audio>
      {descs.map((desc, index) => generateTemplate(desc.subtitle, desc.desc, desc.html, index))}
    </section>
  )
}

export default AboutSection
