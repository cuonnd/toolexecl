import React from 'react';
import { Utils } from '../../../renderer/utils/utils';

type Props = {
  info: any;
  classInfo: any;
  classKey: any;
};

const Sidebar = (props: Props) => {
  const { info } = props;
  const { classInfo } = props;
  const { classKey } = props;

  let diemManh;
  let diemCancaiThien;
  let phuongPhap;
  // console.log(info, classKey, 'info sidebar');

  if (classKey === '4skills') {
    diemManh = info.__EMPTY_25;
    diemCancaiThien = info.__EMPTY_26;
    phuongPhap = info.__EMPTY_27;
  } else if (classKey === 'Toeic') {
    diemManh = info.__EMPTY_17;
    diemCancaiThien = info.__EMPTY_18;
    phuongPhap = info.__EMPTY_19;
  } else if (classKey === 'Ielts-ae') {
    diemManh = info.__EMPTY_17;
    diemCancaiThien = info.__EMPTY_18;
    phuongPhap = info.__EMPTY_19;
  } else {
    diemManh = info.__EMPTY_18;
    diemCancaiThien = info.__EMPTY_19;
    phuongPhap = info.__EMPTY_20;
  }
  const text = diemManh?.split('\n')?.map((item: any) => {
    return <div style={{ lineHeight: '15px' }}>{item}</div>;
  });
  const text2 = diemCancaiThien?.split('\n')?.map((item: any) => {
    return <div style={{ lineHeight: '15px' }}>{item}</div>;
  });
  const _empty24 = phuongPhap?.split('\n')?.map((item: any) => {
    return <div style={{ lineHeight: '15px' }}>{item}</div>;
  });
  function renderRow(key, value) {
    return (
      <div style={{ marginBottom: -3 }}>
        <div style={{ flexDirection: 'column' }}>
          <div>
            <span
              style={{
                fontSize: 8,
                fontWeight: 'normal',
              }}
            >
              <i>{key}</i>
            </span>
          </div>
          <div style={{ marginTop: -5 }}>
            <span style={{ fontSize: 10, fontWeight: 'bold' }}>{value}</span>
          </div>
        </div>
      </div>
    );
  }

  function renderComment(title1?: any, title2?: any, comment?: any) {
    return (
      <div style={{ marginBottom: 10 }}>
        <span
          style={{
            fontSize: 10,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              color: 'blue',
              border: 'solid 1px white',
              fontWeight: 'bold',
              borderRadius: 5,
              padding: 3,
            }}
          >
            {title1}
            <br />
            <i style={{ fontWeight: 'normal' }}>{title2}</i>
          </div>
        </span>
        <div style={{ textAlign: 'justify', lineHeight: 1, paddingTop: 3 }}>
          <span style={{ fontSize: 9, textAlign: 'justify' }}>{comment}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: '244px',
        backgroundColor: '#2E3192',
        height: '820px',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          // top: '190px',
          width: '241px',
          // height: '810px',
          position: 'absolute',
          opacity: 0.2,
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        <img
          style={{
            marginLeft: -285,
            width: (770 * 800) / 533 + 'px',
            height: '820px',
          }}
          src={require('../../assets/imgae/screen.jpg')}
          alt=""
        />
      </div>
      <div style={{ marginRight: '2px', marginLeft: '20px' }}>
        {/* name */}
        <div style={{ marginTop: '24px', marginBottom: '0px' }}>
          <p
            style={{
              fontSize: 14,
              fontWeight: '900',
            }}
          >
            {String(info?.__EMPTY).toUpperCase()}
          </p>
        </div>

        {/* key */}
        {renderRow('Class / Lớp', classInfo?.className)}
        {renderRow('Teacher name / Tên giáo viên', classInfo?.teacherName)}
        {renderRow(
          'Academic Coordinator / Điều phối học thuật phụ trách',
          classInfo?.anhchiPhuTrach
        )}
        {renderRow('Branch / Cơ sở', classInfo.coso)}
        {renderRow(
          'Start date / Ngày bắt đầu',
          // Utils.getDate(classInfo.startDate)
          Utils.convertDate(classInfo.startDate)
        )}
        {renderRow(
          'End date / Ngày kết thúc',
          Utils.convertDate(classInfo.endDate)
        )}
      </div>

      {/* title teacher */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 20,
          backgroundColor: '#CD2027',
          height: '38px',
          width: '222px',
          marginRight: '14px',
          justifyContent: 'space-evenly',
        }}
      >
        <div style={{ marginBottom: 15 }}>
          <img
            style={{ width: 40, height: 40 }}
            src={require('../../assets/imgae/teacher.jpg')}
          />
        </div>

        <div
          style={{
            textAlign: 'center',
            margin: 3,
            lineHeight: '12px',
            marginTop: '2px',
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 'bold',
            }}
          >
            TEACHER'S COMMENTS
          </span>
          <br />
          <span
            style={{
              fontSize: 9,
              fontWeight: 'revert',
              marginBottom: '10px',
            }}
          >
            NHẬN XÉT CỦA GIÁO VIÊN
          </span>
        </div>
      </div>
      {/* ssssss */}
      <div
        style={{ marginRight: '20px', marginLeft: '20px', marginTop: '10px' }}
      >
        {renderComment('Strengths', 'Điểm mạnh', text)}
        {renderComment('Needs', 'Điểm cần cải thiện', text2)}
        {renderComment('Suggestions', 'Gợi ý', _empty24)}
      </div>
    </div>
  );
};

export default Sidebar;
