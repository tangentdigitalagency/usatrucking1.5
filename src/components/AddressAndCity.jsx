import React, { Component } from "react";
import { Form,  Button,Input, Progress} from "antd";
import CommonComponents from "./CommonComponents"; 
import {Link,withRouter} from "react-router-dom"; 
import { ArrowLeftOutlined } from '@ant-design/icons';
class S4AddressAndCity extends Component {
  onFinish = (values) => {
    // this.props.nextStep();
    this.props.setBusinessAddress(values.address);
    this.props.setBusinessCity(values.city);
    console.log("Success:", values);
    this.props.history.push("/step7")
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() { 
    return (
      <div className="card shadow-lg" style={{ borderRadius: "25px" }}>
                <Progress percent={60} status="active" showInfo={true} className="pbar"/>

        <CommonComponents
          currentStep={this.props.currentStep}
          totalSteps={this.props.totalSteps}
          previousStep={this.props.previousStep}
        />
         <div className="p-2">
           <Link to="/step5">
                    <Button  type="primary" shape="circle"  >
                        <ArrowLeftOutlined className="anticon" />
                    </Button>
                    </Link>
                </div>
        <div className="d-flex" style={{ minHeight: "60vh" }}>
          <div
            className="card-body d-xl-flex justify-content-center align-items-center"
            align="center"
            style={{ paddingTop:"0px" }}
          >
            <Form
              name="basic"
              className="mywidth"
              onFinish={this.onFinish}
              initialValues={{
                address: this.props.address,
                city: this.props.city
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3>Where’s your business located?</h3>
              <br />
              <h5>Addess</h5>
              <Form.Item
                name="address"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your Business Address",
                  },
                  {
                      max:100, message:'Max Length Of Business Address Is 100 Characters'
                  }
                ]}
              >
                <Input  
                  size="large"
                  placeholder="Address"
                />
              </Form.Item>
              <h5>City
              </h5>
              <Form.Item
                name="city"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your Business City Name",
                  },
                  {
                    max:100, message:'Max Length Of City Name Is 100 Characters'
                }
                ]}
              >
                <Input  
                  size="large"
                  placeholder="City"
                />
              </Form.Item>
              {/* <Link to="/step5"> */}
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

export default withRouter(S4AddressAndCity);
