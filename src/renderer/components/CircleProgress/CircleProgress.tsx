import React from 'react';
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';

export const CircleProgress = ({ data }) => {
  console.log('data', data);

  function renderCircleProgress(value, title, subTitle, day, total) {
    return (
      <div style={{ textAlign: 'center', height: '86px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <CircularProgressbarWithChildren
            value={value}
            styles={buildStyles({
              rotation: 1.2,
              textColor: '#09161e',
              textSize: 11,
              pathColor: '#cf2123',
              trailColor: '#2e3192',
            })}
            strokeWidth={20}
          >
            <span style={{ fontSize: 10, fontWeight: '900' }}>
              {value + '%'}
            </span>
          </CircularProgressbarWithChildren>
        </div>
        <div style={{ display: 'block' }}>
          <div
            style={{
              textTransform: 'uppercase',
              fontSize: 9,
              fontWeight: '900',
            }}
          >
            {title}
          </div>
          <p
            style={{
              textTransform: 'uppercase',
              fontSize: 5,
              fontWeight: '600',
            }}
          >
            {subTitle}
          </p>
          <p style={{ fontSize: 10 }}>{day + '/' + total}</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <div>
          {renderCircleProgress(
            data.attendance,
            'Attendance',
            'Chuyên cần',
            data.day,
            data.total
          )}
        </div>
        <div>
          {renderCircleProgress(
            data.homework,
            'Active learning',
            'Học tập chủ động',
            '',
            ''
          )}
        </div>
      </div>
    </div>
  );
};
