import Item from 'antd/es/list/Item';
import { useEffect, useState } from 'react';
import {
  MemoryRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { SHEET_1 } from './mock-data';
import { DetailStudent } from './pages/DetailStudent';
import { ListStudent } from './pages/ListStudent';
import PrintStuden from './pages/PrintStuden';

function Hello() {
  const navigate = useNavigate();
  const [keyy, setKeyy] = useState('');
  window.electron.ipcRenderer.on('on-excel-data', async (data) => {
    // console.log('arg', data?.[0],data[1]);
    gotoListStudent(data?.[0], data?.[1], keyy);
  });

  useEffect(() => {
    // gotoListStudent(SHEET_1, []);
    const handleEsc = (event) => {
      if (event.key === 'Escape' || event.keyCode === 27) {
        console.log('Close app');
        window.close();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  function gotoListStudent(data, data2, key) {
    navigate('/ListStudent', {
      state: { data: data, dataChuyenCan: data2, class: key },
    });
  }
  const listCate = [
    {
      name: '4SKILLS',
      key: '4skills',
    },
    {
      name: 'IELTS',
      key: 'Ielts',
    },
    {
      name: 'TOEIC',
      key: 'Toeic',
    },
  ];
  const listIelts = [
    {
      name: 'AE',
      key: 'Ielts-ae',
    },
    {
      name: 'FO & IN',
      key: 'Ielts-fo-in',
    },
  ];
  const [show, setShow] = useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>Jaxtina English</h1>

      <div className="Hello">
        <div>{`Mời bạn chọn lớp`}</div>
        <div>
          {listCate.map((Item, index) => (
            <button
              key={index}
              style={{ margin: 10 }}
              type="button"
              onMouseDown={async () => {
                if (Item.key == 'Ielts') {
                  setShow(true);
                } else {
                  setKeyy(Item.key);
                  window.electron.ipcRenderer.sendMessage('open-dialog', [
                    'ping',
                  ]);
                }
              }}
            >
              {Item.name}
            </button>
          ))}
        </div>
      </div>
      {show ? (
        <div
          style={{
            position: 'absolute',
            top: '45%',
            width: '100%',
            height: '230px',
            border: 'solid 1px black',
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '2px 2px 2px 2px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'self-start',
              paddingTop: '20px',
              textAlign: 'center',
            }}
          >
            {listIelts.map((Item, index) => (
              <button
                key={index}
                style={{ margin: 10 }}
                type="button"
                onMouseDown={async () => {
                  setKeyy(Item.key);
                  window.electron.ipcRenderer.sendMessage('open-dialog', [
                    'ping',
                  ]);
                }}
              >
                {Item.name}
              </button>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '70px',
            }}
          >
            <button
              onClick={() => {
                setShow(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/ListStudent" element={<ListStudent />} />
        <Route path="/PrintStuden" element={<PrintStuden />} />
      </Routes>
    </Router>
  );
}
