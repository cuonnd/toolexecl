import React from 'react';
type Props = {
  newKey?: any;
  src: any;
  title: any;
  text: any;
  score: any;
};
export const Result = (prop: Props) => {
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          width: 100,
          height: 60,
          backgroundColor: '#ce2127',
          textAlign: 'center',
          color: '#fff0ea',
          borderRadius: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          lineHeight: 1.4,
        }}
      >
        <h3
          style={{
            textTransform: 'uppercase',
            fontSize: 9,
            letterSpacing: 0.5,
          }}
        >
          {prop.title}
        </h3>
        <p style={{ fontSize: 8 }}>
          <i>{prop.text}</i>
        </p>
        <p
          style={{
            fontSize: 9,
            textTransform: 'uppercase',
            fontWeight: 'bold',
            letterSpacing: 0.5,
            width: 80,
          }}
        >
          {prop.newKey == `check` ? prop.score?.toFixed(1) : prop.score}
        </p>
      </div>
      <img
        src={prop.src}
        style={{
          position: 'absolute',
          width: 30,
          height: 30,
          top: -10,
          right: -15,
        }}
      />
    </div>
  );
};
