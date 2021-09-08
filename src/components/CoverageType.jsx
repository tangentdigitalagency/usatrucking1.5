import React, { Component } from "react";
import { Form, Button, Input, Progress, Checkbox } from "antd";
import CommonComponents from "./CommonComponents";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

import '../App.css';
import ArrowLeftOutlined from "@ant-design/icons/lib/icons/ArrowLeftOutlined";

class CoverageType extends Component {

    onFinish = (values) => {

        this.props.history.push("/step3")
    }

    logCover = (values) => {

        let types  = values.join();
        this.props.setCoverageType(values.join());

        console.log("success ", types)

    }

    render() {

        const options = [
            {
                label: 'Commercial Auto', value: 'commercial_auto'
            },
            {
                label: 'General Liability', value: 'general_liability'
            },
            {
                label: 'Professional Liability E&O', value: 'professional_liability_e&o'
            },
            {
                label: 'Property Insurance', value: 'property_insurance'
            },
            {
                label: 'Workers Compensation', value: 'workers_compensation'
            },
            {
                label: 'Other', value: 'other'
            },
        ]

        return (
            <div className="card shadow-lg" style={{ borderRadius: "25px" }}>
                <Progress percent={10} status="active" showInfo={true} className="pbar" />
                <CommonComponents
                    currentStep={this.props.currentStep}
                    totalSteps={this.props.totalSteps}
                    previousStep={this.props.previousStep}
                />
                <div className='p-2'>
					<Link to='/step1'>
						<Button type='primary' shape='circle'>
							<ArrowLeftOutlined className='anticon' />
						</Button>
					</Link>
				</div>

                <div className="d-flex" style={{ minHeight: "60vh" }}>
                    <div className="card-body d-xl-flex justify-content-center align-items-center"
                        align="center"
                        style={{ paddingTop: "0px" }}>
                        <Form
                            name="basic"
                            className="mywidth"
                            onFinish={this.onFinish}>

                            <h3>What kind of coverage are you looking for? </h3>

                            <Form.Item
                                name="coverage_type"
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: "Please choose a coverage type"
                                    }
                                ]}
                            >

                                <Checkbox.Group options={options} data-value={options.values} onChange={this.logCover}  className="e-custom" />


                            </Form.Item>

                            <Form.Item>


                                <Button type="primary" htmlType="submit" block size="large" onClick={this.onFinish}

                                // onClick= {() => this.props.history.push("/step2")}

                                >


                                    Next
                                </Button>


                            </Form.Item>

                        </Form>
                    </div>
                </div>


            </div>
        )

    }


}

export default withRouter(CoverageType)