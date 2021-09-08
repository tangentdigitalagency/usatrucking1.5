import React, { Component } from "react";
import { Form, Button, Select, Progress } from "antd";
import CommonComponents from "./CommonComponents";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import {Link,withRouter} from "react-router-dom"; 
import { ArrowLeftOutlined } from '@ant-design/icons';
const {Option}=Select;
class S6BusinessTypeAndEIN extends Component {
  onFinish = (values) => {
    // this.props.nextStep();
    this.props.setBusinessType(values.business_structure);
    console.log("Success:", values);
    this.props.history.push("/step4")
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  }; 
  render() {
    return (
      <div className="card shadow-lg" style={{ borderRadius: "25px" }}>
        <Progress percent={20} status="active" showInfo={true} className="pbar"/>

        <CommonComponents
          currentStep={this.props.currentStep}
          totalSteps={this.props.totalSteps}
          previousStep={this.props.previousStep}
        />
         <div className="p-2">
           <Link to="/step2" >
                    <Button type="primary" shape="circle"  >
                        <ArrowLeftOutlined className="anticon" />
                    </Button>
                    </Link>
                </div>
        <div className="d-flex" style={{ minHeight: "60vh" }}>
          <div
            className="card-body d-xl-flex justify-content-center align-items-center"
            align="center"
            style={{ paddingTop: "0px" }}
          >
            <Form
              name="basic"
              className="mywidth"
              onFinish={this.onFinish}
              initialValues={{
                business_structure: this.props.business_structure,
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3>How’s your business structured?</h3>
              <br />
              <h5>Business Type</h5>
              <Form.Item
                name="business_structure"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Select Anyone Option",
                  }
                ]}
              >
                <Select name="business_structure" size="large">
                  <Option value="">What Is your Business Type?</Option>
                  <Option name="" value="Individual / Sole Proprietor">Individual / Sole Proprieter</Option>
                  <Option name="" value="Joint Venture">Joint Venture</Option>
                  <Option name="" value="LLC">LLC</Option>
                  <Option name="" value="Partnership">Partnership</Option>
                  <Option name="" value="Trust">Trust</Option>
                  <Option name="" value="Corporation / Other">Corporation/other</Option>
                </Select>
              </Form.Item>
              {/* <Link to="step7"> */}
              <Form.Item>
                <Button type="primary" htmlType="submit" block size="large">
                  Next
                </Button>
              </Form.Item>
              {/* </Link> */}
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(S6BusinessTypeAndEIN);
