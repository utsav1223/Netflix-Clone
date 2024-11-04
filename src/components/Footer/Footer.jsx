import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <a href="https://www.facebook.com/netflix/" target="_blank"><img src={facebook_icon} alt="" /></a>
        <a href="https://www.instagram.com/netflix_in/" target="_blank"><img src={instagram_icon} alt="" /></a>
        <a href="https://x.com/netflix?mx=2" target="_blank"><img src={twitter_icon} alt="" /></a>
        <a href="https://www.youtube.com/c/Netflix/videos" target="_blank"><img src={youtube_icon} alt="" /></a>
      </div>
      <ul>
        <a href="https://help.netflix.com/en/node/25079" target="_blank"><li>Audio Description</li></a>
        <a href = "https://help.netflix.com/en" target="_blank"><li>Help Centre</li></a>
        <a href = "https://help.netflix.com/en/node/32950" target="_blank"><li>Gift Cards</li></a>
        <a href = "https://media.netflix.com/en/" target="_blank"><li>Media Centre</li></a>
        <a href = "https://ir.netflix.net/financials/quarterly-earnings/default.aspx" target="_blank"><li>Investor Relations</li></a>
        <a href="https://jobs.netflix.com/" target="_blank"><li>Jobs</li></a>
        <a href="https://brand.netflix.com/en/terms/" target="_blank"><li>Terms of Use</li></a>
        <a href="https://help.netflix.com/en/node/100628" target="_blank"><li>Privacy</li></a>
        <a href="https://help.netflix.com/en/node/24852" target="_blank"><li>Legal Notices</li></a>
        <a href="https://help.netflix.com/en/node/124516" target="_blank"><li>Cookie Preferences</li></a>
        <a href="https://ir.netflix.net/ir-overview/profile/default.aspx" target="_blank"><li>Corporate Information</li></a>
        <a href="https://help.netflix.com/en/node/33335" target="_blank"><li>Contact Us</li></a>
      </ul>
      <p className='copyright-text'>© 1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
