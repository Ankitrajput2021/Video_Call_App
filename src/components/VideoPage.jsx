import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';
import { APP_ID, SERVER_SECRET } from './Constants';

const VideoPage = () => {
  const { id } = useParams();
  const roomID = id;
  const meetingRef = useRef(null);

  useEffect(() => {
    const myMeeting = async (element) => {
      try {
        // Generate Kit Token
        const appID = APP_ID;
        const serverSecret = SERVER_SECRET;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Ankit");

        // Log the generated kit token for debugging
        console.log('Generated Kit Token:', kitToken);
        
        // Create instance object from Kit Token
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        // Start the call
        zp.joinRoom({
          container: element,
          sharedLinks: [
            {
              name: 'Personal link',
              url: `${window.location.protocol}//${window.location.host}${window.location.pathname}`,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
          },
        });
      } catch (error) {
        console.error('Error joining the room:', error);
      }
    };

    if (meetingRef.current) {
      myMeeting(meetingRef.current);
    }
  }, [roomID]);

  return (
    <div ref={meetingRef} style={{ width: '100%', height: '100vh' }}></div>
  );
};

export default VideoPage;
