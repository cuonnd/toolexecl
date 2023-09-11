import React from 'react';

type Props = {
  info: any;
  classKey: any;
};

const Footer = (props: Props) => {
  const { info, classKey } = props;
  let data;
  if (classKey === '4skills') {
    data = info.__EMPTY_30;
  } else if (classKey === 'Toeic') {
    data = info.__EMPTY_22;
    console.log(data, 'Toeiccc');
  } else if (classKey === 'Ielts-ae') {
    data = info.__EMPTY_22;
  } else {
    data = info.__EMPTY_23;
    // console.log(data, 'ppp');
  }
  const convertData = data?.split('\n')?.map((item: any) => {
    return <div style={{ lineHeight: '12px' }}>{item}</div>;
  });
  return (
    <div style={{ letterSpacing: 0.7 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p
          style={{
            letterSpacing: 0.5,
            fontStyle: 'italic',
            fontSize: 6.5,
            textAlign: 'center',
            marginTop: 10,
          }}
        >
          {convertData ?? null}
        </p>
      </div>
    </div>
  );
};

export default Footer;
