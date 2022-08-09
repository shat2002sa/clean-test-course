import HangryHippo from '../HangryHippo';
import style from './Welcome.module.scss';
import { useEffect, useState } from 'react';
import HappyHippo from '../HappyHippo';

export default function Welcome() {
  const [isHangry, setIsHangry] = useState(false);
  useEffect(() => {
    const hangry = setInterval(() => {
      setIsHangry(!isHangry);
    }, 3000);
    return () => clearInterval(hangry);
  }, [isHangry]);

  return (
    <div className={style.wrapper}>
      <h1>Welcome to Hangry Hippo! Hungry? Let's get started!</h1>
      {isHangry ? <HangryHippo size={'40vw'} /> : <HappyHippo size={'40vw'} />}
    </div>
  );
}
