import React from 'react';

export const TitleCustom = ({ src, title, text }) => {
  return (
    <div
      style={{
        backgroundColor: '#2E3192',
        height: 33,
        marginTop: 17,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img
        style={{
          width: 40,
          height: 40,
          marginBottom: 20,
          marginLeft: 10,
          objectFit: 'contain',
        }}
        src={src}
        alt=""
      />
      <div style={{ marginLeft: 10 }}>
        <div
          style={{
            fontSize: 10,
            color: '#fcfcff',
            textTransform: 'uppercase',
            fontWeight: '800',
            letterSpacing: 1,
          }}
        >
          {title}
        </div>
        <p
          style={{
            fontSize: 9,
            textTransform: 'uppercase',
            color: '#fcfcff',
            letterSpacing: 1,
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};
