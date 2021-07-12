import React from 'react';
import { Stack, PrimaryButton, Image, IImageStyles } from '@fluentui/react';
import { VideoCameraEmphasisIcon } from '@fluentui/react-icons-northstar';
import homeimgSVG from '../assets/homeimg.svg';
import {
    imgStyle,
  containerTokens,
  headerStyle,
  upperStackTokens,
  videoCameraIconStyle,
  buttonStyle,
  upperStackStyle,
} from './styles/HomeScreen.styles';


export interface HomeScreenProps {
    startCallHandler(): void;
}

const imageStyleProps: IImageStyles = {
  image: {
    height: '100%',
    width: '100%'
  },
  root: {}
};



export default (props: HomeScreenProps): JSX.Element => {
    const imageProps = { src: homeimgSVG.toString() };
  const headerTitle = 'Meet and Greet Now at a click';
  const startCallButtonText = 'Start a call';
    return (


      <Stack horizontal horizontalAlign="center" verticalAlign="center" tokens={containerTokens}>
            <Stack className={upperStackStyle} tokens={upperStackTokens}>
                <div className={headerStyle}>{headerTitle}</div>     

        <PrimaryButton className={buttonStyle} onClick={props.startCallHandler}>
          <VideoCameraEmphasisIcon className={videoCameraIconStyle} size="medium" />
          {startCallButtonText}
        </PrimaryButton>
          </Stack>
      <Image
        alt="Meet & Greet"
        className={imgStyle}
        styles={imageStyleProps}
        {...imageProps}
            />
           
    </Stack>
  );
};
