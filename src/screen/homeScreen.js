import React, { useState } from "react";
import ImageContainer from "../components/imageContainer";
import NavigationBar from "../components/navigationBar";
import { Modal, Form, Input, Button, Upload } from "antd";
import "./homeScreen.css";
import { UploadOutlined } from "@ant-design/icons";
import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";

function HomeScreen(props) {
  const [addPhotoModal, setAddPhotoModal] = useState(false);
  const showAddPhotoModal = () => {
    console.log("HEllo from the modal");
    setAddPhotoModal((prev) => !prev);
  };
  return (
    <>
      <NavigationBar showAddPhotoModal={showAddPhotoModal} />
      <ImageContainer />
      <Modal
        className="add-photo-modal"
        okText="Submit"
        visible={addPhotoModal}
        footer={false}
        closable={false}
      >
        <h2>Add a new photo</h2>
        <Form layout="vertical">
          <Form.Item label="Label" required>
            <Input
              style={{ height: "50px", borderRadius: "10px" }}
              placeholder="Label"
            />
          </Form.Item>
          <Form.Item label="Photo URL" required >
            <Upload {...props } showUploadList={false} beforeUpload={()=>{
              return false
            }} >
              <Button style={{width: "100%"}} icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            className="button-controller"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button onClick={showAddPhotoModal} type="text">Cancel</Button>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default HomeScreen;
