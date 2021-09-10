import React, { Component } from "react";
import { Form, Button, Input, Progress, InputNumber, Select  } from "antd";
import CommonComponents from "./CommonComponents";
import Axios from "axios";
import XMLParser from 'react-xml-parser';
import ProgressLottie from './ProgressLottie';
import {Link,withRouter} from "react-router-dom"; 
import { ArrowLeftOutlined } from '@ant-design/icons';

class Employees extends Component {

    onFinish = (values) => {

        let numb = values.currentTarget.dataset.value;

        this.props.setNumberOfEmployees(numb);
        this.props.history.push("/step7")
      };

    render(){
        return(
<div className="card shadow-lg" style={{ borderRadius: "25px" }}>
       <Progress percent={50} status="active" showInfo={true} className="pbar"/>

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
            style={{ paddingTop: "0px" }}
          >
              <React.Fragment>
                  <Form
                    name="basic"
                    className="mywidth"
                    onFinish={this.onFinish}
                    initialValues={{
                      number_of_employees: this.props.number_of_employees
                    }}
                  >

                   
                    <h5>
                      Number Of Employees
                    </h5>
                    <Form.Item
                      name="number_of_employees"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please Enter Your Number Of Employees",
                        }
                      ]}
                    >

<Button size="large" name="number_of_employees" className="chooseButton" id="10" data-value="10" value={"10"} onClick={(values) => this.onFinish(values)}>1-10</Button>

<Button size="large" name="number_of_employees" className="chooseButton" id="20" data-value="20" value={"20"} onClick={(values) => this.onFinish(values)}>11-50</Button>

<Button size="large" name="number_of_employees" className="chooseButton" id="50" data-value="50" value={"50"} onClick={(values) => this.onFinish(values)}>51-100</Button>

<Button size="large" name="number_of_employees" className="chooseButton" id="75" data-value="75" value={"75"} onClick={(values) => this.onFinish(values)}>101-250</Button>


<Button size="large" name="number_of_employees" className="chooseButton" id="100" data-value="100" value={"100"} onClick={(values) => this.onFinish(values)}>251-500</Button>


<Button size="large" name="number_of_employees" className="chooseButton" id="200" data-value="200" value={"200"} onClick={(values) => this.onFinish(values)}>501+</Button>





                    </Form.Item>
                    <Form.Item>
                    </Form.Item>
                    {/* <Link to="step9"> */}
         
                    {/* </Link> */}
                  </Form>
                
              </React.Fragment>
            }
          </div>
        </div>
      </div>
        )
    }


}

export default withRouter(Employees)