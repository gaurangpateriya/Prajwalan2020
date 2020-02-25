import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import twitter from './media/twitter.png'
import Facebook from './media/facebook.png'
import google from './media/google-plus.png'
import insta from './media/insta.png'
import ShareIcon from '@material-ui/icons/Share';
import './share.css'
  export default class Share extends React.Component{

    render() {
        return (
            <div className="share-button">
            <div className="share-button__back">
              <a className="share__link" href="#" title="twitter">
                  <img src={twitter} className="share__icon share__icon--twitter" style={{color:'white'}}/>
              
          </a>
          <a className="share__link " href="#" title="facebook">
          <img src={Facebook} className="share__icon share__icon--facebook" style={{color:'white'}}/>
          </a>
          <a className="share__link" href="#" title="google plus">
         <img src={google} className="share__icon share__icon--google" style={{color:'white'}}/>
          </a>
          <a className="share__link" href="#" title="dribbble">
          <img src={insta} className="share__icon share__icon--dribbble" style={{color:'white'}}/>
           </a>
            </div>
            <div className="share-button__front">
              <p className="share-button__text"><div> <IconButton style={{color:'white'}}><ShareIcon/></IconButton>Share</div></p>
            </div>
          </div>
        )
      }
  }