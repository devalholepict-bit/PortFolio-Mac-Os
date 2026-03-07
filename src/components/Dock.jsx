import React from 'react'

import "./dock.scss"

const Dock = () => {
  return (
  <footer className='dock'>
    <div className="icon github" data-label="Github"><img src="/public/doc-icons/github.svg" alt="" /></div>

    <div className="icon note" data-label="Note"><img src="/public/doc-icons/note.svg" alt="" /></div>

     <div className="icon pdf " data-label="PDF"><img src="/public/doc-icons/pdf.svg" alt="" /></div>
    
      <div className="icon calender" data-label="Calendar"><img src="/public/doc-icons/calender.svg" alt="" /></div>

       <div className="icon spotify" data-label="Spotify"><img src="/public/doc-icons/spotify.svg" alt="" /></div>

        <div className="icon mail" data-label="Mail"><img src="/public/doc-icons/mail.svg" alt="" /></div>

        <div className="icon link" data-label="Link"><img src="/public/doc-icons/link.svg" alt="" /></div>

        <div className="icon cli" data-label="CLI"><img src="/public/doc-icons/cli.svg" alt="" /></div>

        
    




  </footer>
  )
}

export default Dock
