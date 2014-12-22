(function() {
app.controller(
				"FaeezController",
				function($scope) {

					$scope.predev = false;

					$scope.selectSubscriber = function(selectedSubscriber) {
						$scope.s.id = selectedSubscriber.id;
						$scope.s.grp = selectedSubscriber.grp;
						$scope.s.corp = selectedSubscriber.corp;
						$scope.s.srn = selectedSubscriber.srn;
						$scope.s.owner = selectedSubscriber.owner;
						$scope.s.caller = selectedSubscriber.caller;

						var id = this.sub.no;
						$('#sub_'+id).removeClass("redText");
						$('#sub_'+id).addClass("greyText");
						
					}
					
					$scope.deleteSub = function() {
						var id = this.sub.no;
//						Thread.sleep(1000);
//						$timeout(function(){var j=true;}, 3000); 
						var i = $scope.subscribers.indexOf(this.sub);
						console.log('i = ' + i);
						$('#sub_'+id).fadeOut('slow');
						if(i != -1) {
							$scope.subscribers.splice(i, 1);
						}
						
						localStorage.setItem("list_subs",  JSON.stringify($scope.subscribers));
					}
					
					$scope.addSub = function(new_sub) {
						if( isRealValue(new_sub) ){
							var last_element = $scope.subscribers[$scope.subscribers.length - 1];
							new_sub.no = last_element.no + 1;
							new_sub.srn = '';
							console.log(new_sub.no);
							$scope.subscribers.push(new_sub);
							localStorage.setItem("list_subs",  JSON.stringify($scope.subscribers));
							$scope.new_sub = {};
						}
					}
					
					function isRealValue(obj){
						 return obj && obj !== "null" && obj!== "undefined";
						}
					var endPoint = "<div>  <h2>REST Endpoints for Service Monitoring</h2>  <br> <p>Following are some of the endpoints:</p> <ul>   <li><a href=\"http://despkt5c.adhcscint.net:9082/caportal/caep/claims?subscriberId=0000000001658640&grpNumber=000021234&corp=IL&callingApplication=ICI&fromDate=01/01/1900\" target=\"_blank\">Find Claims</a></li>   <li><a href=\"http://despkt5c.adhcscint.net:9082/caportal/caep/claims/0201306050T47610X?corp=IL\" target=\"_blank\">Get Claim Details</a></li>   <li><a href=\"http://despkt5c.adhcscint.net:9082/caportal/caep/members?subscriberId=000928017839&grpNumber=MB2004&corp=MT1&callingApplication=ICI&fromDate=01/01/1900\" target=\"_blank\">Get Member Information </a></li> <li><a href=\"http://despkt5c.adhcscint.net:9082/caportal/caep/dashboard/activityCodes\" target=\"_blank\">Get Activity Codes </a></li> <li><a href=\"http://despkt5c.adhcscint.net:9082/caportal/caep/srhistory/activities?operatorId=I259857&srNumber=1-131304901\" target=\"_blank\">Get Notes from Dashboard</a></li> </ul>    <br> <button id='chooseButton' class='btn btn-primary' ng-click='chosen()'><span class='glyphicon glyphicon-hand-left'></span>   Go Back!</button> </div>" 
					
							
					var front = document.getElementById('mainPanel'), back_content = endPoint, back

					$scope.switchEnv = function() {
						$scope.buttonText = "Test REST services";
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
					$scope.buttonText = "Test REST services";
					
					var storedData = localStorage.getItem("list_subs");
					if (storedData) {
						$scope.subscribers = JSON.parse(storedData);
					} else {
					
							$scope.subscribers = [ {
								no : 1,
								id : '000848809266',
								grp : '000099562',
								corp : 'IL',
								srn : ''
							}, {
								no : 2,
								id : '000001658640',
								grp : '000021234',
								corp : 'IL',
								srn : ''
							}, {
								no : 3,
								id : '000845391798',
								grp : '000099311',
								corp : 'TX',
								srn : ''
							}, {
								no : 4,
								id : '000800138446',
								grp : '000091774',
								corp : 'OK',
								srn : ''
							}, {
								no : 5,
								id : '000800177375',
								grp : '000091774',
								corp : 'OK',
								srn : ''
							}, {
								no : 6,
								id : '000834844080',
								grp : '000092682',
								corp : 'TX',
								srn : ''
							}, {
								no : 7,
								id : '000837423223',
								grp : '000091068',
								corp : 'TX',
								srn : ''
							}, {
								no : 8,
								id : '000832753959',
								grp : '000096975',
								corp : 'TX',
								srn : ''
							}, {
								no : 9,
								id : '000840507673',
								grp : '00009599A',
								corp : 'TX',
								srn : ''
							}, {
								no : 10,
								id : '000840691303',
								grp : '000091774',
								corp : 'OK',
								srn : ''
							}, {
								no : 11,
								id : '000844141174',
								grp : '000099311',
								corp : 'TX',
								srn : ''
							}, {
								no : 12,
								id : '000836305928',
								grp : '000096975',
								corp : 'TX',
								srn : ''
							}, {
								no : 13,
								id : '000836842450',
								grp : '000096975',
								corp : 'TX',
								srn : ''
							}, {
								no : 14,
								id : '000832753959',
								grp : '000096975',
								corp : 'TX',
								srn : ''
							}, {
								no : 15,
								id : '000928017839',
								grp : 'MB2004',
								corp : 'MT1',
								srn : ''
							}, {
								no : 16,
								id : '000928017259',
								grp : 'MB1008',
								corp : 'MT1',
								srn : ''
							}, {
								no : 17,
								id : '000928019517',
								grp : 'MS2007',
								corp : 'MT1',
								srn : ''
							}, {
								no : 18,
								id : '000928018081',
								grp : 'MB2004',
								corp : 'MT1',
								srn : ''
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
					//$("#freak").animate({fontSize:"3em"});

					$('#showDataButton')
							.click(
									function() {

										$(this)
												.text(
														function(i, text) {
															return text === "Hide Subscribers" ? "Show Subscribers"
																	: "Hide Subscribers";
														})

										$('#demo').slideToggle("slow");
									})

					/*$('.panel').click(function() {
						$(this).addClass("panel panel-danger");

					});
					$('.panel').blur(function() {
						alert("Handler for .blur() called.");
						$(this).toggleClass("panel panel-danger");
						//$(this).addClass("panel panel-danger");

					});*/

					$('.btn-toggle').click(function() {
						$(this).find('.btn').toggleClass('active');
						$(this).find('.btn').toggleClass('btn-primary');
						$(this).find('.btn').toggleClass('btn-default');
					});

					$('#localOn').click(function() {
						local = true;
					});
					$('#SitOn').click(function() {
						sit = true;
					});
					$('#PredevOn').click(function() {
						predev = true;
					});
					$('#UatOn').click(function() {
						uat = true;
					});
					$('#localOff').click(function() {
						local = false;
					});
					$('#SitOff').click(function() {
						sit = false;
					});
					$('#PredevOff').click(function() {
						predev = false;
					});
					$('#UatOff').click(function() {
						uat = false;
					});

					$('#launchButton')
							.click(
									function() {
										var sub = $('#ipSub').val();
										var grp = $('#grpField').val();
										var corp = $('#corpField').val();
										var srn = $('#ipSrn').val();
										var errorShown = false;

										if (!$('#ipOwner').val()) {
											$('#ipOwner').val('I332930')
										}
										if (!$('#ipCaller').val()) {
											$('#ipCaller').val('Tony Montana')
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
												var element = $('#hiddenEnv');
											else
												var element = $('#hidden');
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
											window.open(localUrl);
										if (predev)
											window.open(predevUrl);
										if (sit)
											window.open(sitUrl);
										if (uat)
											window.open(uatUrl);
									});

				})

				}); // end of controller
				

				
})();

