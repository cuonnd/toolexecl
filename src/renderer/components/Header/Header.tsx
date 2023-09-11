import React from 'react';
const Skills = ({ text }) => {
  return (
    <div style={{ flex: 1 }}>
      <p
        style={{
          border: 'solid 3px rgb(206, 33, 39)',
          padding: 4,
          marginTop: '13px',
          color: 'rgb(206, 33, 39)',
          textAlign: 'center',
          textTransform: 'uppercase',
          borderRadius: 10,
        }}
      >
        {text}
      </p>
    </div>
  );
};

const Header = ({ classKey }) => {
  console.log('key', classKey);
  return (
    <div
      style={{
        width: '595px',
        margin: '0 auto',
      }}
    >
      <div
        style={{ display: 'flex', justifyContent: 'space-around' }}
        className=""
      >
        <div style={{ flex: 2 }}>
          <img
            className="logo"
            src={require('../../../../assets/logo.png')}
            alt=""
            style={{ width: '91px', height: '75px', marginLeft: '55px' }}
          />
        </div>
        <div style={{ flex: 4, display: 'flex' }}>
          <div
            style={{
              width: ' 1px',
              height: '56px',
              borderRight: 'solid 4px #2E3192',
            }}
          ></div>
          <div style={{ marginTop: '12px', marginLeft: 2 }}>
            <span style={{ fontWeight: '900', color: '#263192', fontSize: 19 }}>
              STUDENT PERFORMANCE REPORT
            </span>
            <br />
            <span
              style={{
                fontWeight: '600',
                color: '#263192',
                fontSize: 17,
                marginTop: 10,
              }}
            >
              BÁO CÁO KẾT QUẢ HỌC TẬP
            </span>
          </div>
        </div>
        {classKey === '4skills' ? (
          <Skills text={'4skills'} />
        ) : classKey === 'Toeic' ? (
          <Skills text={'Toeic'} />
        ) : classKey === 'Ielts-ae' ? (
          <Skills text={'Ielts'} />
        ) : <Skills text={'Ielts'} />}
      </div>
    </div>
  );
};

export default Header;
