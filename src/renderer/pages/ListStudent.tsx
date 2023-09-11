import React, { useState, useEffect } from 'react';
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import Item from 'antd/es/list/Item';
import { Utils } from 'renderer/utils/utils';

export function ListStudent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const listRowExcel = location?.state?.data;
  // console.log('listRowExcel', JSON.stringify(listRowExcel)); // ▶ URLSearchParams {}
  const classKey = location?.state?.class;
  useEffect(() => {
    const handleChange = (event) => {
      console.log(event.key);
      if (event.key === 'Backspace') {
        navigate('/');
      } else if (event.key === 'Escape' || event.keyCode === 27) {
        console.log('Close app');
        window.close();
      }
    };
    window.addEventListener('keydown', handleChange);

    return () => {
      window.removeEventListener('keydown', handleChange);
    };
  }, []);
  let listStudent = [];
  // if (classKey == 'Toeic') {
  //   for (let i = 0; i < listRowExcel.length; i++) {
  //     const info = listRowExcel[i];
  //     if (typeof info['gh'] === 'number' && info['__EMPTY']) {
  //       listStudent.push({ ...info, key: i });
  //     }
  //   }
  // } else {
  //   for (let i = 0; i < listRowExcel.length; i++) {
  //     const info = listRowExcel[i];
  //     if (typeof info['TỔNG KẾT CUỐI KHÓA'] === 'number' && info['__EMPTY']) {
  //       listStudent.push({ ...info, key: i });
  //     }
  //   }
  // }
  for (let i = 0; i < listRowExcel.length; i++) {
    const info = listRowExcel[i];
    if (typeof info['TỔNG KẾT CUỐI KHÓA'] === 'number' && info['__EMPTY']) {
      listStudent.push({ ...info, key: i });
    }
  }

  const classInfo = {
    className: listRowExcel[0]?.['__EMPTY'],
    teacherName: listRowExcel[1]?.['__EMPTY'],
    coso: listRowExcel[2]?.['__EMPTY'],
    anhchiPhuTrach: listRowExcel[3]?.['__EMPTY'],
    startDate: listRowExcel[4]?.['__EMPTY'],
    endDate: listRowExcel[5]?.['__EMPTY'],
    soLuongDatDiem70_100: listRowExcel[28]?.['__EMPTY_1'],
    soLuongDatDiem80_100: listRowExcel[29]?.['__EMPTY_1'],
    soLuongDatDiem85_100: listRowExcel[30]?.['__EMPTY_1'],
  };

  const start = () => {
    console.log(selectedRowKeys, 123);
    const submitList = listStudent.filter((item) => {
      for (let index = 0; index < selectedRowKeys.length; index++) {
        if (selectedRowKeys[index] == item.key) {
          return item.key;
        }
      }
    });

    navigate('/PrintStuden', {
      state: {
        info: submitList,
        classInfo: classInfo,
        classKey: classKey,
        excel: listRowExcel,
      },
    });
    console.log(submitList, 'Pat');

    /* in pdf */
    // setTimeout(() => {
    //   Utils.printPdf();
    // }, 200);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: any = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  const columns = [
    {
      title: 'Tên học sinh   ',
      dataIndex: '__EMPTY',
      key: '__EMPTY',
      render: (text: string) => <div style={{ width: '380px' }}>{text}</div>,
    },
  ];
  console.log(listRowExcel, 'list');
  console.log(classKey, 'classKey');
  const dataSource = {};

  return (
    <div>
      <button
        style={{ margin: 10 }}
        onClick={() => {
          navigate('/');
        }}
      >
        Trở lại
      </button>
      <h2>{'Danh sách học sinh'}</h2>
      <h5>{'Lớp: ' + classInfo.className}</h5>
      <h5>{'Cơ sở: ' + classInfo.coso}</h5>
      <h5>{'Giáo viên: ' + classInfo.teacherName}</h5>
      <h5>{'Điều phối học thuật: ' + classInfo.anhchiPhuTrach}</h5>
      <h5>{'Ngày bắt đầu: ' + Utils.convertDate(classInfo.startDate)}</h5>
      <h5>{'Ngày kết thúc: ' + Utils.convertDate(classInfo.endDate)}</h5>

      <Table
        columns={columns}
        dataSource={listStudent}
        rowSelection={rowSelection}
        pagination={false}
      />
      <br />
      <div style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
        >
          Gửi
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `đã chọn ${selectedRowKeys.length} Học sinh` : ''}
        </span>
      </div>
    </div>
  );
}
