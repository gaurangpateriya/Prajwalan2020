import React from 'react';
import styled, { css, keyframes, useTheme } from 'styled-components/macro';
import { Transition } from 'react-transition-group';
import { AnimFade, rgba, sectionPadding } from '../../utils/style';
import DecoderText from './DecoderText';
import Svg from './Svg';
import { reflow } from '../../utils/transition';
import prerender from '../../utils/prerender';
function test(show12) {
  return(show12?<div>hello</div>:null)
}
var show1=false

class Intro extends React.Component {
  state={
    show:false
  }
  change=()=>{
    show1=!show1
  }
  Disp=()=>{
    this.toggle(this.change)
   return test(show1)
  }
  toggle= (callback)=> {
    setTimeout(function () {
        callback();
    }, 1000);
}

  render(){
  const { id, sectionRef, scrollIndicatorHidden, ...rest } = this.props;
  const titleId = `${id}-title`;
  const {show} = this.state
  return (
    <IntroContent
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
    >
      <Transition
        appear={!prerender}
        in={!prerender}
        timeout={3000}
        onEnter={reflow}
      >
        {status => (
          <React.Fragment>
            <IntroText>
            <IntroName status={status} id={titleId}>
                <DecoderText text=" Prajwalan 20" start={!prerender} offset={120} />
              </IntroName>
              <IntroTitle>
                <IntroTitleLabel> 7th - 8th March.</IntroTitleLabel>
                <IntroTitleRow aria-hidden prerender={prerender}>
                <Transition
                    appear
                    onEnter={reflow}
                   >
                  <IntroTitleWord status={status} delay="0.2s">
                  7th - 8th March
                      </IntroTitleWord>
                      </Transition>
                </IntroTitleRow>
                <IntroTitleRow>
                  <Transition
                    appear
                    timeout={{ enter: 3000, exit: 2000 }}
                    onEnter={reflow}
                  >
                    <IntroTitleWord
                      aria-hidden
                      secondary
                      delay="0.5s"
                      status={status}
                    >
                        EVENTS
                     
                    </IntroTitleWord>
                  </Transition>
                </IntroTitleRow>
              </IntroTitle>
             
            </IntroText>
          
          </React.Fragment>
        )}
      </Transition>
    </IntroContent>
  );}
}

const IntroContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  outline: none;
  padding:20px;
  float:left
`;

const IntroText = styled.header`
  max-width: 400px;
  width: 100%;
  position: relative;
  top: -20px;
  @media (min-width: ${props => props.theme.desktop}px) {
    max-width: 920px;
  }

  @media (max-width: ${props => props.theme.mobile}px) {
    top: -30px;
  }

  @media ${props => props.theme.mobileLS} {
    top: -16px;
  }
`;

const IntroName = styled.h1`
  text-transform: uppercase;
  font-size: 35px;
  letter-spacing: 0.1em;
  color: ${props => rgba(props.theme.colorText, 0.8)};
  margin-bottom: 35px;
  margin-top: 0;
  font-weight: 500;
  margin-left:auto;
  margin-right:auto;
  line-height: 1;
  margin-top: 30px;
  font-family: 'Proza Libre', sans-serif;
  opacity: 0;
  width:auto;
  ${props => props.status === 'entering' && css`
    animation: ${css`${AnimFade} 0.6s ease 0.2s forwards`};
  `}

  ${props => props.status === 'entered' && css`
    opacity: 1;
  `}

  @media (min-width: ${props => props.theme.desktop}px) {
    font-size: 19px;
    margin-bottom: 30px;
  }

  @media (max-width: ${props => props.theme.tablet}px) {
    font-size: 17px;
    margin-bottom: 25px;
  }

  @media (max-width: ${props => props.theme.mobile}px) {
    margin-bottom: 14px;
    letter-spacing: 0.1em;
    white-space: nowrap;
    overflow: hidden;
  }

  @media ${props => props.theme.mobileLS} {
    margin-bottom: 13px;
    margin-top: 20px;
  }
`;

const IntroTitle = styled.h2`
left:0%;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin: 0;
  letter-spacing: -0.005em;
  font-weight: ${props => props.theme.id === 'light' ? 600 : 500};

  @media (min-width: ${props => props.theme.desktop}px) {
    font-size: 20px;
  }

  @media (max-width: 860px) {
    font-size: 13px;
  }

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const IntroTitleLabel = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  position: absolute;
`;

const IntroTitleRow = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  ${props => props.prerender && css`
    opacity: 0;
  `}
`;

const AnimTextReveal = props => keyframes`
  0% { color: ${rgba(props.theme.colorTitle, 0)}; }
  50% { color: ${rgba(props.theme.colorTitle, 0)}; }
  60% { color: ${rgba(props.theme.colorTitle, props.secondary ? 0.8 : 1)}; }
  100% { color: ${rgba(props.theme.colorTitle, props.secondary ? 0.8 : 1)}; }
`;

const AnimTextRevealMask = keyframes`
  0% {
    opacity: 1;
    transform: scaleX(0);
    transform-origin: left;
  }
  50% {
    opacity: 1;
    transform: scaleX(1);
    transform-origin: left;
  }
  51% {
    opacity: 1;
    transform: scaleX(1);
    transform-origin: right;
  }
  100% {
    opacity: 1;
    transform: scaleX(0);
    transform-origin: right;
  }
`;

const IntroTitleWord = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 26px;
  line-height: 1;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  font-size: 30px;
  margin-left:auto;
  margin-right:auto;
  animation-timing-function: ${props => props.theme.curveFastoutSlowin};
  color: ${props => rgba(props.theme.colorTitle, 0)};
  transition: opacity 0.5s ease 0.4s;
  @media (min-width: ${props => props.theme.desktop}px) {
    font-size: 14px;
    margin-bottom: 25px;
  }

  @media (max-width: ${props => props.theme.tablet}px) {
    font-size: 14px;
    margin-bottom: 20px;
  }

  @media (max-width: ${props => props.theme.mobile}px) {
    margin-bottom: 10px;
    letter-spacing: 0.1em;
    white-space: nowrap;
    overflow: hidden;
  }

  @media ${props => props.theme.mobileLS} {
    margin-bottom: 13px;
    margin-top: 10px;
  }
  ${props => props.status === 'entering' && css`
    animation-name: ${AnimTextReveal(props)};
  `}

  ${props => props.status === 'entered' && css`
    color: ${rgba(props.theme.colorTitle, props.secondary ? 0.8 : 1)};
  `}

  ${props => props.status === 'exiting' && css`
    color: ${rgba(props.theme.colorTitle, props.secondary ? 0.8 : 1)};
    opacity: 0;
    position: absolute;
    top: 0;
    z-index: 0;
  `}

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colorAccent};
    opacity: 0;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ${props => props.theme.curveFastoutSlowin};
    transform-origin: left;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;

    ${props => props.status === 'entering' && css`
      animation-name: ${AnimTextRevealMask};
    `}

    ${props => props.status === 'entered' && css`
      opacity: 1;
      transform: scaleX(0);
      transform-origin: right;
    `}
  }

  ${props => props.delay && css`
    animation-delay: ${props.delay};

    &::after {
      animation-delay: ${props.delay};
    }
  `}
`;

const AnimScrollIndicator = keyframes`
  0% {
    transform: translate3d(-1px, 0, 0);
    opacity: 0;
  }
  20% {
    transform: translate3d(-1px, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(-1px, 8px, 0);
    opacity: 0;
  }
`;

const ScrollIndicator = styled.div`
  border: 2px solid ${props => rgba(props.theme.colorText, 0.4)};
  border-radius: 20px;
  width: 26px;
  height: 38px;
  position: fixed;
  bottom: 64px;
  transition-property: opacity, transform;
  transition-duration: 0.6s;
  transition-timing-function: ease;
  opacity: ${props => props.status === 'entered' && !props.isHidden ? 1 : 0};
  transform: translate3d(0, ${props => props.isHidden ? '20px' : 0}, 0);

  &::before {
    content: '';
    height: 7px;
    width: 2px;
    background: ${props => rgba(props.theme.colorText, 0.4)};
    border-radius: 4px;
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-1px);
    animation: ${css`${AnimScrollIndicator} 2s ease infinite`};
  }

  @media ${props => props.theme.mobileLS} {
    display: none;
  }
`;

const AnimMobileScrollIndicator = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const MobileScrollIndicator = styled.div`
  position: fixed;
  bottom: 20px;
  opacity: ${props => props.status === 'entered' && !props.isHidden ? 1 : 0};
  transform: translate3d(0, ${props => props.isHidden ? '20px' : 0}, 0);
  animation-name: ${AnimMobileScrollIndicator};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  transition-property: opacity, transform;
  transition-timing-function: cubic-bezier(.8,.1,.27,1);
  transition-duration: 0.4s;

  @media ${props => props.theme.mobileLS}px {
    display: none;
  }

  svg {
    stroke: ${props => rgba(props.theme.colorText, 0.5)};
  }
`;

const MemoizedScrollIndicator = React.memo(ScrollIndicator);
const MemoizedMobileScrollIndicator = React.memo(MobileScrollIndicator);

export default Intro;
