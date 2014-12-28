(function() {
app.controller(
				"FaeezController",
				function($scope) {

					$scope.predev = false;

					$scope.selectSubscriber = function(selectedSubscriber) {
						$scope.s.id = selectedSubscriber.id;
						$scope.s.grp = selectedSubscriber.grp;
						$scope.s.corp = selectedSubscriber.corp;

						srn = generateSrn;
						$scope.s.srn = generateSrn;
						$('#ipSrn').val(srn);
						
						owner = 'I334143';
						$scope.s.owner = owner;
						$('#ipOwner').val(owner);
						
						caller = 'Donnie Brasco';
						$scope.s.caller = caller;
						$('#ipCaller').val(caller);
						

						var id = this.sub.no;
						$('#sub_'+id).addClass("greyText"); 
						
					}
					
					function generateSrn() {
						srn = 'SR-' +  new Date().getUTCMilliseconds()*1234;
						return srn;
					}
					
					$scope.deleteSub = function() {
						var id = this.sub.no;
						var i = $scope.subscribers.indexOf(this.sub);
						console.log('Subscriber number to be deleted = ' + id);
						console.log('Index of this subscriber in the array = ' + i);
					
						$('#sub_'+id).fadeOut( function() {
							Thread.sleep(1000);
							if(i != -1) {
								$scope.subscribers.splice(i, 1);
							// after splicing the array, update it in localStorage
							localStorage.setItem("list_subs",  JSON.stringify($scope.subscribers));
							}
						});
					}
					

					$scope.myreset = function() {
						$scope.add_new_sub.$setPristine();
						$scope.new_sub = null;
					}
					
					$scope.addSub = function(new_sub) {
						if( isRealValue(new_sub) ){
							var last_element = $scope.subscribers[$scope.subscribers.length - 1];
							new_sub.no = last_element.no + 1;
							new_sub.srn = '';
							$scope.subscribers.push(new_sub);
							localStorage.setItem("list_subs",  JSON.stringify($scope.subscribers));
							new_sub.clicked = true;
							$scope.add_new_sub.$setPristine();
							$scope.new_sub = null;
						}
					}
					
					$scope.hoverIn = function(sub){
						sub.clicked = false;
					};

					$scope.hoverOut = function(sub){
						//sub.clicked = false;
					};
					
					// validate object is not null or undefined.
					function isRealValue(obj){
						 return obj && obj !== "null" && obj!== "undefined";
						}
					
					
					// You just need this function to implement flippant, plus js/flippant.min.js and css/flippant.css
					$scope.switchEnv = function() {
						// This is the complete html for the back page
						var endPoint = "<div>  <h2>REST Endpoints for Service Monitoring</h2>  <br> <p>Following are some of the endpoints:</p> <ul>   <li><a href=\"http://despkt5c.adhcscint.net:9082/caportal/caep/claims?subscriberId=0000000001658640&grpNumber=000021234&corp=IL&callingApplication=ICI&fromDate=01/01/1900\" target=\"_blank\">Find Claims</a></li>   <li><a href=\"http://despkt5c.adhcscint.net:9082/caportal/caep/claims/0201306050T47610X?corp=IL\" target=\"_blank\">Get Claim Details</a></li>   <li><a href=\"http://despkt5c.adhcscint.net:9082/caportal/caep/members?subscriberId=000928017839&grpNumber=MB2004&corp=MT1&callingApplication=ICI&fromDate=01/01/1900\" target=\"_blank\">Get Member Information </a></li> <li><a href=\"http://despkt5c.adhcscint.net:9082/caportal/caep/dashboard/activityCodes\" target=\"_blank\">Get Activity Codes </a></li> <li><a href=\"http://despkt5c.adhcscint.net:9082/caportal/caep/srhistory/activities?operatorId=I259857&srNumber=1-131304901\" target=\"_blank\">Get Notes from Dashboard</a></li> </ul>    <br> <button id='chooseButton' class='btn btn-primary' ng-click='chosen()'><span class='glyphicon glyphicon-hand-left'></span>   Go Back!</button> </div>" 
						var front = document.getElementById('mainPanel'), back_content = endPoint, back
						back = flippant.flip(front, back_content)
						document.getElementById('chooseButton')
								.addEventListener('click', function(e) {
									back = back.close();
								})
					}

					$scope.s = {
						id : '',
						grp : '',
						corp : '',
						owner : '',
						caller : ''
					};
					
					var storedData = localStorage.getItem("list_subs");
					if (storedData) {
						$scope.subscribers = JSON.parse(storedData);
					} else {
					
							$scope.subscribers = [ {
								no : 1,
								id : '000848809266',
								grp : '000099562',
								corp : 'IL',
								srn : '',
								clicked: false
							}, {
								no : 2,
								id : '000001658640',
								grp : '000021234',
								corp : 'IL',
								srn : '',
								clicked: false
							}, {
								no : 3,
								id : '000845391798',
								grp : '000099311',
								corp : 'TX',
								srn : '',
								clicked: false
							}, {
								no : 4,
								id : '000800138446',
								grp : '000091774',
								corp : 'OK',
								srn : '',
								clicked: false
									
							}, {
								no : 5,
								id : '000800177375',
								grp : '000091774',
								corp : 'OK',
								srn : '',
								clicked: false
							}, {
								no : 6,
								id : '000834844080',
								grp : '000092682',
								corp : 'TX',
								srn : '',
								clicked: false
							}, {
								no : 7,
								id : '000837423223',
								grp : '000091068',
								corp : 'TX',
								srn : '',
								clicked: false
							}, {
								no : 8,
								id : '000832753959',
								grp : '000096975',
								corp : 'TX',
								srn : '',
								clicked: false
							}, {
								no : 9,
								id : '000840507673',
								grp : '00009599A',
								corp : 'TX',
								srn : '',
								clicked: false
							}, {
								no : 10,
								id : '000840691303',
								grp : '000091774',
								corp : 'OK',
								srn : '',
								clicked: false
							}, {
								no : 11,
								id : '000844141174',
								grp : '000099311',
								corp : 'TX',
								srn : '',
								clicked: false
							}, {
								no : 12,
								id : '000836305928',
								grp : '000096975',
								corp : 'TX',
								srn : '',
								clicked: false
							}, {
								no : 13,
								id : '000836842450',
								grp : '000096975',
								corp : 'TX',
								srn : '',
								clicked: false
							}, {
								no : 14,
								id : '000832753959',
								grp : '000096975',
								corp : 'TX',
								srn : '',
								clicked: false
							}, {
								no : 15,
								id : '000928017839',
								grp : 'MB2004',
								corp : 'MT1',
								srn : '',
								clicked: false
							}, {
								no : 16,
								id : '000928017259',
								grp : 'MB1008',
								corp : 'MT1',
								srn : '',
								clicked: false
							}, {
								no : 17,
								id : '000928019517',
								grp : 'MS2007',
								corp : 'MT1',
								srn : '',
								clicked: false
							}, {
								no : 18,
								id : '000928018081',
								grp : 'MB2004',
								corp : 'MT1',
								srn : '',
								clicked: false
							} ];
							
							localStorage.setItem("list_subs",  JSON.stringify($scope.subscribers));
					}

					
	$(document)
		.ready(
				function() {
					var local = false;
					var predev = false;
					var uat = false;
					var sit = false;

					$('#showDataButton')
							.click(
									function() {

										$(this)
												.text(
														function(i, text) {
															return text === "Hide Subscribers" ? "Show Subscribers"
																	: "Hide Subscribers";
														})

										$('#mainRightPanel').slideToggle("slow");
									})

					$('.btn-toggle').click(function() {
						$(this).find('.btn').toggleClass('active');
						$(this).find('.btn').toggleClass('btn-primary');
						$(this).find('.btn').toggleClass('btn-default');
					});

					$('#launchButton')
							.click(
									function() {
										var sub = $('#ipSub').val();
										var grp = $('#grpField').val();
										var corp = $('#corpField').val();
										var srn = $('#ipSrn').val();
										var errorShown = false;

										
										var localOnClass = $('#localOn').attr('class');
										if(localOnClass.indexOf("active") > -1) {
											local = true;
										} else {
											local = false;
										}
										
										var predevOnClass = $('#PredevOn').attr('class');
										if(predevOnClass.indexOf("active") > -1) {
											predev = true;
										} else {
											predev = false;
										}
										
										var uatOnClass = $('#UatOn').attr('class');
										if(uatOnClass.indexOf("active") > -1) {
											uat = true;
										} else {
											uat = false;
										}
										
										var sitOnClass = $('#SitOn').attr('class');
										if(sitOnClass.indexOf("active") > -1) {
											sit = true;
										} else {
											sit = false;
										}
										
										
										if (!$('#ipOwner').val()) {
											$('#ipOwner').val('I334143')
										}
										if (!$('#ipCaller').val()) {
											$('#ipCaller').val('Donnie Brasco')
										}
										if (!$('#ipSrn').val()) {
											srn = generateSrn;
											$('#ipSrn').val(srn)
										}
										if (!$('#ipSub').val()) {
											if (!errorShown)
												showError();
											local = predev = sit = uat = false;
										}
										if (!$('#grpField').val()) {
											if (!errorShown)
												showError();
											local = predev = sit = uat = false;
										}
										if (!$('#corpField').val()) {
											if (!errorShown)
												showError();
											local = predev = sit = uat = false;
										}

										if (!local && !predev && !sit && !uat) {
											if (!errorShown)
												showError(true);
										}

										function showError(env) {
											if (env)
												var element = $('#compulsoryEnv');
											else
												var element = $('#compulsoryParams');
											
											var timesRun = 0;
											var interval = setInterval(
													function() {
														timesRun += 1;
														if (timesRun === 6) {
															clearInterval(interval);
														}
														element
																.slideToggle("slow");
													}, 100);
											errorShown = true;
										}
										var owner = $('#ipOwner').val();
										var caller = $('#ipCaller').val();
										var appendString = "&NONHCSCIDNum="
												+ sub + "&GroupNum=" + grp
												+ "&HCSCSRPearlCode=" + corp
												+ "&SRNumber=" + srn
												+ "&Owner=" + owner
												+ "&InquirerName=" + caller;
										sitUrl = "https://caportal-sit.test.fyiblue.com/wps/myportal/caportal/?uri=deeplink2%3AClaims&HCSCIRISSyncRegion=MT&TopicDescription=CLAIM&InquiryReasonDescription=STATUS&EmployeeCostCenter=488&GroupCostCenter=488&PatientName=&SectionNum=00020"
												+ appendString;
										predevUrl = "http://despkt5c.adhcscint.net:10039/wps/mypoc/caportal?uri=deeplink2%3AClaims&HCSCIRISSyncRegion=MT&TopicDescription=CLAIM&InquiryReasonDescription=STATUS&EmployeeCostCenter=488&GroupCostCenter=488&PatientName=&SectionNum=00020"
												+ appendString;
										uatUrl = "http://caportal-uat.test.fyiblue.com/wps/mypoc/caportal/?uri=deeplink2%3AClaims&HCSCIRISSyncRegion=MT&TopicDescription=CLAIM&InquiryReasonDescription=STATUS&EmployeeCostCenter=488&GroupCostCenter=488&PatientName=&SectionNum=00020"
												+ appendString;
										localUrl = "http://localhost:10039/wps/mypoc/caportal/?uri=deeplink2%3AClaims&HCSCIRISSyncRegion=MT&TopicDescription=CLAIM&InquiryReasonDescription=STATUS&EmployeeCostCenter=488&GroupCostCenter=488&PatientName=&SectionNum=00020"
												+ appendString;
										console
												.log('Predev URL = '
														+ predevUrl);
										console.log('SIT URL = ' + sitUrl);
										console.log('UAT URL = ' + uatUrl);

										if (local)
											OpenInNewTab(localUrl);
										if (predev)
											OpenInNewTab(predevUrl);
										if (sit)
											OpenInNewTab(sitUrl);
										if (uat)
											OpenInNewTab(uatUrl);
									});

				})
				
										function OpenInNewTab(url) {
											var win = window.open(url, '_blank');
											win.focus();
										}

				}); // end of controller
				
})();

