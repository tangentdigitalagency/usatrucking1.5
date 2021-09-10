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

    let type = values.target.dataset.value; 
    this.props.setBusinessType(values.currentTarget.dataset.value);
    console.log("Success:", type);
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
              <h3>Business Type</h3>
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

<Button size="large" name="business_structure" className="chooseButton" id="Individual / Sole Proprietor" data-value="Individual / Sole Proprietor" value={"Individual / Sole Proprietor"} onClick={(values) => this.onFinish(values)}>Individual / Sole Proprietor</Button>

<Button size="large" name="business_structure" className="chooseButton" id="Joint Venture" data-value="Joint Venture" value={"Joint Venture"} onClick={(values) => this.onFinish(values)}>Joint Venture</Button>

<Button size="large" name="business_structure" className="chooseButton" id="LLC" data-value="LLC" value={"LLC"} onClick={(values) => this.onFinish(values)}>LLC</Button>


<Button size="large" name="business_structure" className="chooseButton" id="Partnership" data-value="Partnership" value={"Partnership"} onClick={(values) => this.onFinish(values)}>Partnership</Button>

<Button size="large" name="business_structure" className="chooseButton" id="Trust" data-value="Trust" value={"Trust"} onClick={(values) => this.onFinish(values)}>Trust</Button>


<Button size="large" name="business_structure" className="chooseButton" id="Corporation/other" data-value="Corporation/other" value={"Corporation/other"} onClick={(values) => this.onFinish(values)}>Corporation / other</Button>
              </Form.Item>
              {/* <Link to="step7"> */}
            
              {/* </Link> */}
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(S6BusinessTypeAndEIN);
