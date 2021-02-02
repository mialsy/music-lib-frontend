/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import { Drawer } from 'antd';

const ShowSongDescription = (props) => {
    const [visible, setVisible] = useState(false);
  
    const showDrawer = () => {
        console.log(props.song);
        setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };
  
    return (
      <>
        <a onClick={showDrawer} key={props.song}>
          details
        </a>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </>
    );
  };

export default ShowSongDescription;