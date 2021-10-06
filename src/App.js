import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './App.css';
import Grid from '@material-ui/core/Grid';
// @ts-ignore
import Logo from './Assets/utqLogo.png';
// @ts-ignore
import { Button, Typography, Progress } from 'antd';
import S1FirstAndLastName from './components/FirstAndLastName';
import S2EmailAndPhoneNumber from './components/EmailAndPhoneNumber';
import S3BusinessNameAndWebsite from './components/BusinessNameAndWebsite';
// @ts-ignore
import StepWizard from 'react-step-wizard';
import { PhoneOutlined } from '@ant-design/icons';
import S4AddressAndCity from './components/AddressAndCity';
import S5StateAndZip from './components/StateAndZip';
import S6BusinessTypeAndEIN from './components/BusinessTypeAndEIN';
import S7BusinessProfessionAndYears from './components/BusinessProfessionAndYears';
import S8BusinessRevenueAndNoOfEmployees from './components/BusinessRevenueAndNoOfEmployees';
import Employees from './components/NumberOfEmployees';
import S9Final from './components/Final.jsx';
import LandingPage from './LandingPage';
import CoverageType from './components/CoverageType';

class App extends Component {
	state = {
		route: '/',
		routes: ['/step1', '/step2', '/step3', '/step4', '/step5', '/step6', '/step7', '/step8', '/step9', '/thank-you-commercial'],
		postData: {
			//extra entries
			lp_campaign_id: '615be8c259dd2',
			lp_campaign_key: 'tYkyZJwLxPB3FDTHnQX9',
			lp_s1: '12',
			lp_s2: '13',
			gclid: '',
			TCPA_Consent: 'Yes',
			TCPA_Language:
				'By clicking Get My Quote I provide my electronic signature and express written consent to telemarketing calls, text messages, emails, and postal mail from this Web site, our marketing and re-marketing network, and up to eight insurance companies or their affiliates or representatives at the phone number (including wireless number), email address, and postal address provided by me. I consent to calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automatic Telephone Dialing System or prerecorded or artificial voices. I consent that my signature is not a condition of purchasing any property, goods, or services and that I may revoke my consent at any time.',
			trusted_form_cert_id: '',
			jornaya_lead_id: '',
			// Redirect_URL: "",
			Landing_Page: 'usatruckingquotes.com',
			IP_Address: '',
			//s1 form fields
			first_name: '',
			last_name: '',
			//S2 form fields
			phone_home: '',
			email_address: '',
			//s3 form fields
			legal_business_name: '',
			business_website: '',
			//s4 form fields
			address: '',
			city: '',
			//s5 form fields
			state: '',
			zip_code: '',
			//s6 form fields
			business_structure: '',
			ein: '',
			EIN_Number: '',
			//s7 form fields
			business_profession: '',
			year_business_founded: '',
			// s8 form fields
			annual_revenue_over_next_12_months: '',
			number_of_employees: '',
			coverage_type: '',
		},
	};

	copyValuesToPostData2 = () => {
		var tempArray = {
			email: this.state.postData.email_address,
			phone: this.state.postData.phone_home,
			address: this.state.postData.address,
			zip: this.state.postData.zip_code,
		};
		this.setState({ postData2: tempArray });
		window.MediaAlphaExchange = {
			data: {
				zip: '98052',
			},
			placement_id: '4yclnD1Pz-JicFFmiW0DhV7a86VXHw',
			sub_1: 'test sub id',
			type: 'ad_unit',
			version: 17,
		};
		window.MediaAlphaExchange__load('target');
		return this.state.postData2;
	};
	componentDidMount() {
		if (this.state.first_name === '' || this.state.last_name === '') {
			this.props.history.push('/calculate');
		}
		if (window.location.pathname !== '/') {
			this.setState({ route: '' });
		}
		console.log(this.state);
		window.addEventListener('popstate', (event) => {
			console.log(event);
			if (window.location.pathname === '/') {
				this.props.history.push('/');
				this.setState({ route: '/' });
			}
		});
	}




	componentDidUpdate = () => {

	};

	// componentDidMount = () => {
	// 	var str = window.location.href;

	// 		if (str.includes('utm_medium=facebook'))
	// 			this.setState({
	// 				postData: {
	// 					lp_s1: 103,
	// 					lp_s2: 103

	// 				}
	// 			})

	// 			if(str.includes('utm_medium=bing'))
	// 				this.setState({
	// 					postData: {
	// 						lp_s1: 108,
	// 						lp_s2: 108
	// 					}
	// 				})

	// 		if  (str.includes('utm_medium=adwords'))
	// 			this.setState({
	// 				postData: {

	// 					lp_s1: 101,
	// 					lp_s2: 101
	// 				}
	// 			})

	// 		if (str.includes('/'))
	// 			this.setState({ 
	// 				postData: {
	// 					lp_s1: 13,
	// 					lp_s2: 13
	// 				}
	// 			})
	// 	};

	changeRoute = () => {
		this.setState({
			route: '',
		});
	};

	render() {
		// console.log(this.props);
		return this.state.route === '/' && this.state.routes.indexOf(window.location.pathname) === -1 ? (
			<Route exact path='/' render={(props) => <LandingPage 
				changeRoute={this.changeRoute} 
				{...props} 
				zip_code={this.state.postData.zip_code}

				setBusinessZip={(v) => {
					this.setState({
						postData: {
							...this.state.postData,
							zip_code: v,
						},
					});
				}}

			/>
			} />
		) : (
			<div
				className='container-fluid'
				style={{
					minHeight: '100vh',
					backgroundColor: '#f7f7f7',
					overflow: 'hidden',
				}}>
				<header className='navbar navbar-expand flex-column flex-md-row bd-navbar'>
					<div className='container'>
						<img
							// @ts-ignore
							src={require('./Assets/utqLogo.png')}
							className='m-4'
							width='200px'
							alt=''
						/>
						<ul className='nav nav-fill '>
							<li className='nav-item'>
								<Button
									type='primary'
									size='middle'
									icon={
										<PhoneOutlined
											// @ts-ignore
											rotate='90'
										/>
									}
									href={'tel:+18554344762'}>
									(855) 434-4762
								</Button>
							</li>
						</ul>
					</div>
				</header>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<Switch>

								<Route path='/step1'>
									<S3BusinessNameAndWebsite
										legal_business_name={this.state.postData.legal_business_name}
										business_website={this.state.postData.business_website}
										setBusinessName={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													legal_business_name: v,
												},
											});
										}}
										setBusinessWebsite={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													business_website: v,
												},
											});
										}}
									/>
								</Route>
								<Route exact path='/step2'>
									<CoverageType
										coverage_type={this.state.postData.coverage_type}

										setCoverageType={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													coverage_type: v,
												},
											});

											console.log(v)
										}} />
								</Route>
								<Route path='/step3'>
									<S6BusinessTypeAndEIN
										business_structure={this.state.postData.business_structure}
										ein={this.state.postData.ein}
										setBusinessType={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													business_structure: v,
												},
											});
										}}
										setEIN={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													ein: v,
												},
											});
										}}
									/>
								</Route>
								<Route path='/step4'>
									<S7BusinessProfessionAndYears
										business_profession={this.state.postData.business_profession}
										year_business_founded={this.state.postData.year_business_founded}
										setBusinessProfession={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													business_profession: v,
												},
											});
										}}
										setyear_business_founded={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													year_business_founded: v,
												},
											});
										}}
									/>
								</Route>
								<Route path='/step5'>
									<S8BusinessRevenueAndNoOfEmployees
										annual_revenue_over_next_12_months={this.state.postData.annual_revenue_over_next_12_months}
										setRevenue={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													annual_revenue_over_next_12_months: v,
												},
											});
										}}

									/>
								</Route>

								<Route path='/step6'>
									<Employees
										number_of_employees={this.state.postData.number_of_employees}

										setNumberOfEmployees={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													number_of_employees: v,
												},
											});
										}}
									/>

								</Route>



								<Route path='/step7'>
									<S4AddressAndCity
										address={this.state.postData.address}
										city={this.state.postData.city}
										setBusinessAddress={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													address: v,
												},
											});
										}}
										// setBusinessCity={(v) => {
										// 	this.setState({
										// 		postData: {
										// 			...this.state.postData,
													
										// 		},
										// 	});
										// }}
									/>
								</Route>
								{/* <Route path='/step8'>
									<S5StateAndZip
										state={this.state.postData.state}
										setBusinessState={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													state: v,
												},
											});
										}}
									
									/>
								</Route> */}


								<Route exact path='/step8'>
									<S1FirstAndLastName
										props={this.props}
										first_name={this.state.postData.first_name}
										last_name={this.state.postData.last_name}
										setFirstName={(v) => {
											console.log(document.getElementById('leadid_token').value);
											console.log(document.getElementsByTagName('script')[0].src);
											this.setState({
												postData: {
													...this.state.postData,
													gclid: document.getElementById('gclid_field').value,
													jornaya_lead_id: document.getElementById('leadid_token').value,
													trusted_form_cert_id: document.getElementById('trusted_form_cert_id_0').value,
												},
											});
											console.log(document.getElementById('trusted_form_cert_id_0'));
											console.log(document.getElementById('gclid_field').value);
											this.setState({
												postData: {
													...this.state.postData,
													first_name: v,
												},
											});
										}}
										setLastName={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													last_name: v,
												},
											});
										}}
									/>
								</Route>
								<Route path='/step9'>
									<S2EmailAndPhoneNumber
										email_address={this.state.postData.email_address}
										phone_home={this.state.postData.phone_home}
										callMediaAlpha={this.callMediaAlpha}

										setBusinessEmail={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													email_address: v,
												},
											});
										}}
										setBusinessPhone={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													phone_home: v,
												},
											});
										}}
										postData={this.state.postData}

									/>
								</Route>




								<Route path='/thank-you-commercial'>
									<S9Final postData2={this.state.postData} />
								</Route>
							</Switch>

							{/* </StepWizard> */}
						</div>
					</div>
				</div>

				<Grid container xs={12} align='center' style={{ justifyContent: 'center' }}>
					<Grid container xs={8} style={{ justifyContent: 'center' }}>
						<Grid item xs={12}>
							<Typography style={{ fontWeight: 700, lineHeight: 1.5 }}>Providers Include:</Typography>
						</Grid>
						<Grid item lg={2} xs={12} style={{ marginTop: '1rem' }}>
							<img
								width='80%'
								height='auto'
								object-fit='fit'
								alt='missing'
								// @ts-ignore
								src={require('./Assets/1.png')}
							/>
						</Grid>
						<Grid item lg={2} xs={12} style={{ marginTop: '1rem' }}>
							<img
								width='80%'
								height='auto'
								object-fit='fit'
								alt='missing'
								// @ts-ignore
								src={require('./Assets/2.png')}
							/>
						</Grid>
						<Grid item lg={2} xs={12} style={{ marginTop: '1rem' }}>
							<img
								width='80%'
								height='auto'
								object-fit='fit'
								alt='missing'
								// @ts-ignore
								src={require('./Assets/3.png')}
							/>
						</Grid>
						<Grid item lg={2} xs={12} style={{ marginTop: '0rem' }}>
							<img
								width='80%'
								height='auto'
								alt='missing'
								// @ts-ignore
								src={require('./Assets/4.png')}
							/>
						</Grid>
						<Grid item lg={2} xs={12} style={{ marginTop: '1rem' }}>
							<img
								width='80%'
								height='auto'
								object-fit='fit'
								alt='missing'
								// @ts-ignore
								src={require('./Assets/5.png')}
							/>
						</Grid>
					</Grid>
					<Grid container xs={10} style={{ paddingBottom: '1rem', marginTop: '1rem' }}>
						<Grid item lg={3} xs={12} style={{ alignSelf: 'flex-end' }}>
							<Typography style={{ fontSize: '15px', color: 'rgb(166, 166, 166)' }}>2021 USA Trucking Quotes</Typography>
						</Grid>
						<Grid item lg={6} xs={false} />
						<Grid container lg={3} xs={12}>
							<Grid item lg={4} xs={12} style={{ alignSelf: 'center', marginTop: '1rem' }}>
								<Typography
									style={{
										fontSize: '15px',
										color: 'rgb(166, 166, 166)',
										fontWeight: 600,
									}}>
									<a
										href='https://quotehound.com/'
										// @ts-ignore
										style={{ color: 'rgb(166,166,166)', fontWeight: '400' }}>
										Visit Us
									</a>
								</Typography>
							</Grid>
							<Grid item lg={4} xs={12} style={{ alignSelf: 'center', marginTop: '1rem' }}>
								<Typography style={{ fontSize: '15px', color: 'rgb(166, 166, 166)' }}>
									<a
										href='https://quotehound.com/privacy-policy'
										// @ts-ignore
										style={{ color: 'rgb(166,166,166)', fontWeight: '400' }}>
										Privacy Policy
									</a>
								</Typography>
							</Grid>
							<Grid item lg={4} xs={12} style={{ alignSelf: 'center', marginTop: '1rem' }}>
								<Typography
									style={{
										fontSize: '15px',
										color: 'rgb(166, 166, 166)',
										fontWeight: 600,
									}}>
									<a
										href='https://quotehound.com/terms-conditions'
										// @ts-ignore
										style={{ color: 'rgb(166,166,166)', fontWeight: '400' }}>
										Terms & Conditions
									</a>
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withRouter(App);
