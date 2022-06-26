import React, { useState } from "react";
import ImageContainer from "../components/imageContainer";
import NavigationBar from "../components/navigationBar";
import { Modal, Form, Input, Button, Upload, message, Spin } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import "./homeScreen.css";

function HomeScreen(props) {
  const [addPhotoModal, setAddPhotoModal] = useState(false);
  const [photoUploadLoading, setPhotoUploadLoading] = useState(false);

  const showAddPhotoModal = () => {
    setAddPhotoModal((prev) => !prev);
  };

  const onFinish = async (value) => {
    console.log("values", value);
    if (value.label === "" || value.image === "") {
      message.error("Please fill the required fields");
      return;
    }
    const data = new FormData();
    data.append("label", value.label);
    data.append("picture", value.image.file);
    setPhotoUploadLoading(true);
    try {
      await axios.post("https://my-unsplash-at.herokuapp.com/upload-picture", data);
      showAddPhotoModal();
      message.success("Your photo has been uploaded!");
      setPhotoUploadLoading(false);
    } catch (error) {
      message.error("Error uploading the picture");
      setPhotoUploadLoading(false);
      showAddPhotoModal();
    }
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
        {!photoUploadLoading ? (
          <>
            <h2>Add a new photo</h2>
            <Form
              layout="vertical"
              onFinish={onFinish}
              initialValues={{ label: "", image: "" }}
            >
              <Form.Item label="Label" name="label" required>
                <Input
                  style={{ height: "50px", borderRadius: "10px" }}
                  placeholder="Label"
                />
              </Form.Item>
              <Form.Item name="image" label="Photo URL" required>
                <Upload
                  {...props}
                  showUploadList={false}
                  beforeUpload={() => {
                    return false;
                  }}
                >
                  <Button style={{ width: "100%" }} icon={<UploadOutlined />} />
                </Upload>
              </Form.Item>
              <Form.Item
                className="button-controller"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button onClick={showAddPhotoModal} type="text">
                  Cancel
                </Button>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </>
        ) : (
          <Spin className="spin-container" size="large" />
        )}
      </Modal>
    </>
  );
}

export default HomeScreen;
