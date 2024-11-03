import { useEffect } from 'react';

export const TwitterEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a 
      className="twitter-timeline" 
      href="https://twitter.com/SpaceX?ref_src=twsrc%5Etfw"
      data-tweet-limit="5" 
      data-theme="dark" 
    >
      Tweets by SpaceX
    </a>
  );
};

export default TwitterEmbed;
