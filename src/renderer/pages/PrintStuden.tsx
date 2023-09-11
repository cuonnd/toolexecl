import { Pagination, PaginationProps } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Utils } from 'renderer/utils/utils';
import { DetailStudent } from './DetailStudent';

type Props = {};

const PrintStuden = (props: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log('parapr', JSON.stringify(location));
  const dataStudent: any = location;

  const { info, classInfo, classKey, excel } = dataStudent.state;
  // console.log(info, classInfo, 'pat2');
  const [current, setCurrent] = useState<any>(0);
  const [isShow, setIsShow] = useState<any>(true);
  const [count, setCount] = useState(1);
  const refCurrent = useRef(0);

  useEffect(() => {
    const handleChange = (event) => {
      console.log(event.key);
      if (event.ctrlKey && event.keyCode === 80) {
        autoPrint();
      } else if (event.key === 'Backspace') {
        navigate(-1);
      } else if (event.key === 'ArrowRight') {
        if (count + 1 === info.length) {
          setCurrent(info.length - 1);
          return;
        } else {
          setCount(count + 1);
          setCurrent(current + 1);
        }
      } else if (event.key === 'ArrowLeft') {
        // setCurrent(current - 1);
        if (count === 1) {
          setCurrent(0);
          return;
        } else {
          setCount(count - 1);
          setCurrent(current - 1);
        }
      } else if (event.key === 'Escape' || event.keyCode === 27) {
        console.log('Close app');
        window.close();
      }
    };
    window.addEventListener('keydown', handleChange);

    return () => {
      window.removeEventListener('keydown', handleChange);
    };
  }, [current]);

  const onChange: PaginationProps['onChange'] = (page) => {
    console.log('on change', page);

    setCurrent(page - 1);
  };

  var x = useRef(info.length);

  function autoPrint() {
    setIsShow(false);

    /* cho current 0 */
    refCurrent.current = 0;
    setCurrent(0);

    /* show => chup=> show =>chup... */
    for (var i = 0; i < info?.length; i++) {
      setTimeout(() => {
        setCurrent(refCurrent.current);
      }, 600 * i);

      setTimeout(() => {
        const name = [info[refCurrent.current]['__EMPTY'], classInfo.className];
        Utils.printPdf(name);
        refCurrent.current = refCurrent.current + 1;
      }, 600 * i + 500);
    }

    setTimeout(() => {
      setIsShow(true);
      Utils.opernFolder();
    }, 700 * info?.length + 600);
  }

  return (
    <div>
      <div>
        {info[current] ? (
          <div>
            <DetailStudent
              info={info[current]}
              classInfo={classInfo}
              classKey={classKey}
              excel={excel}
            />
          </div>
        ) : null}

        {isShow ? (
          <div style={{ marginTop: 50 }}>
            <button
              style={{ margin: 10 }}
              onClick={() => {
                navigate(-1);
              }}
            >
              Trở lại
            </button>
            <button
              style={{ margin: 10 }}
              onClick={() => {
                setIsShow(false);
                Utils.printPdf([info[current].__EMPTY, classInfo.className]);
                setTimeout(() => {
                  setIsShow(true);
                  Utils.opernFolder();
                }, 200);
              }}
            >
              In
            </button>
            <button style={{ margin: 10 }} onClick={autoPrint}>
              In tất cả
            </button>
            <Pagination
              defaultPageSize={1}
              current={current + 1}
              onChange={onChange}
              total={info?.length || 1}
              defaultCurrent={1}
              style={{ margin: 10 }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PrintStuden;
