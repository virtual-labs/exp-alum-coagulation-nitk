var tn=0;
var count=0;	
var ccnt=0;	
var xs,ys=0;//graph variable
var runOnce=true;
var enteredDiv=false;
// var t=	[[54.1,18.3,3.8,3.7,8.7,13.3],
		// [44.4,7.0,2.8,3.5,5.1,5.7],	
		// [105,42,20,16,17,26],
		// [45,9.6,4.8,2.2,4.7,14],
		// [60.5,56.0,21.8,12.8,10.2,18.6],
		// [6.7,1.5,0,0.4,1.5,2.1],
		// [36.1,24.6,22.9,23.1,24.5,26.7],
		// [39.9,6.9,2.3,3.7,4.2,5.7],
		// [60.5,56.0,21.8,12.8,10.2,18.6]];
var t=	[[54.1,18.3,3.8,3.9,8.7,13.3],
		[44.4,7.2,3.1,6.3,8.5,9.9],	
		[105,42,20,22,29,36],
		[45,9.6,5.5,11,14.2,16.9],
		[66.4,60.5,21.8,12.8,18.6,43],
		[6.7,1.5,0.4,0.8,1.5,2.1],
		[36.1,24.6,22.9,24.5,26.7,28.5],
		[38.9,6.9,2.3,4.3,4.8,5.7],
		[60.5,15.8,12.8,15.2,23.6,26.8]];
		
var p=Math.floor(Math.random()*(9));//to genearte randon numbers

var ca;
var questions=["Nephelometer has to be calibrated inorder to eliminate or reduce </br>the bias in it's readings over a range for all continuous values.",				
				"What is the chemical formula of Alum used?",
			   "Coagulation is a slow mixing technique which promotes agglomeration </br>and helps the particles to settle down.",
			   "Unit of Turbidity is NTU where NTU stands for"];
var options2=[["True","False"],//true
			  ["XAl(SO<sub>4</sub>)<sub>2</sub>12H<sub>2</sub>O","NaAl(SO<sub>4</sub>)12H<sub>2</sub>O","Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>18H<sub>2</sub>O","None of the above"],//Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>18H<sub>2</sub>O
			  ["True","False"],//true
			  ["Neogenic Turbidity Units","Neophenometeric Turbidity Units","Nephelometric Turbidity Units","Nefermetic Turbidity Units"]];//Nephelometric Turbidity Units

function validateAnswer(qn,ans,left,top)
{
	 $("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
  
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}


var audio1=new Audio("images/jar appatus 30s.mp3");
audio1.loop=true;

function navNext()
{
	for(temp=0;temp<=12;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

$(function()
{
	$('input').on('input', function() {
		this.value = this.value.match(/\d*(\.\d*)?/)[0];
	});
});

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}

function showIncubatorKnob()
{
     if (document.getElementById('11-2').style.visibility=="hidden")
         document.getElementById('11-2').style.visibility="visible";
     else
         document.getElementById('11-2').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

function drops()
{
	$("#drop2-1").animate({"position":"absolute","top":"400px"});
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function magic()
{
	if(simsubscreennum==1)
	{
		setTimeout(function()
		{
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:615px; top:255px; height:30px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
			document.getElementById("arrow1").style.msTransform="rotate(270deg)";
			document.getElementById("arrow1").style.transform="rotate(270deg)";
			document.getElementById("1-1").onclick=function()
			{
				myStopFunction();
				document.getElementById("1-1").onclick="";
				document.getElementById("1-1").style.visibility="hidden";
				document.getElementById("1-2").style.visibility="visible";
				document.getElementById("1-2").style.animation="removeBodCap1 1s forwards";
				setTimeout(function()
				{
					document.getElementById("1-2").style.visibility="hidden";
					document.getElementById("1-3").style.visibility="visible";
					document.getElementById("1-3").style.animation="removeBodCap2 1.5s forwards";
					setTimeout(function()
					{
						document.getElementById("1-3").style.visibility="hidden";
						document.getElementById("1-7").style.visibility="visible";
						myInt=setInterval(function(){animatearrow();},500);
						document.getElementById("arrow1").style="visibility:visible; position:absolute; left:540px; top:390px; height:35px; z-index:10;";
						document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
						document.getElementById("arrow1").style.msTransform="rotate(180deg)";
						document.getElementById("arrow1").style.transform="rotate(180deg)";
						document.getElementById("1-4").onclick=function()
						{
							myStopFunction();
							document.getElementById("1-4").onclick="";
							document.getElementById("1-6").onclick="";
							step1();
						}
						document.getElementById("1-6").onclick=function()
						{
							myStopFunction();
							document.getElementById("1-6").onclick="";
							document.getElementById("1-4").onclick="";
							step1();
						}	
					},1500);
				},1000);
			}
		},500);
	}
	
	if(simsubscreennum==2)
	{
		document.getElementById("1-15").style.visibility="hidden";
		
		setTimeout(function()
		{
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:590px; top:296px; height:25px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			document.getElementById("arrow1").style.msTransform="rotate(180deg)";
			document.getElementById("arrow1").style.transform="rotate(180deg)";
			$("#2-71").click(function()
			{
				myStopFunction();
				$("#2-71").css({"visibility":"hidden"});
				$("#2-72").css({"visibility":"visible"});
				$("#2-72").animate({"position":"absolute","top":"198px"},250,
					function()
					{
						$("#2-72").animate({"position":"absolute","left":"610px","top":"347px"},750,
							function()
							{
								$("#2-72").css({"visibility":"hidden"});
								$("#2-73").css({"visibility":"visible"});
								$("#2-91").fadeIn(500,
									function()
									{
										$("#p2-1").css({"visibility":"visible"});
										myInt=setInterval(function(){animatearrow();},500);
										document.getElementById("arrow1").style="visibility:visible; position:absolute; left:570px; top:100px; height:35px; z-index:10;";
										document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
										document.getElementById("arrow1").style.msTransform="rotate(180deg)";
										document.getElementById("arrow1").style.transform="rotate(180deg)";
										$("#2-91").click(function()
										{
											myStopFunction();
											$("#p2-1").css({"visibility":"hidden"});
											$("#2-91").css({"visibility":"hidden"});
											$("#2-92").css({"visibility":"visible"});
											$("#2-92").animate({"position":"absolute","top":"140px"},1000,
												function()
												{
													$("#p2-2").css({"visibility":"visible"});
													$("#2-93").css({"visibility":"visible"});
													$("#2-94").css({"visibility":"visible"});
													$("#2-95").css({"visibility":"visible"});
													myInt=setInterval(function(){animatearrow();},500);
													document.getElementById("arrow1").style="visibility:visible; position:absolute; left:315px; top:249px; height:25px; z-index:10;";
													document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
													document.getElementById("arrow1").style.msTransform="rotate(180deg)";
													document.getElementById("arrow1").style.transform="rotate(180deg)";
													$("#2-94").click(function()
													{
														myStopFunction();
														$("#2-94").off("click");
														$("#2-93").css({"visibility":"hidden"});
														$("#2-94").css({"visibility":"hidden"});
														$("#2-95").css({"visibility":"hidden"});
														$("#p2-2").css({"visibility":"hidden"});
														$("#2-96").css({"visibility":"visible"});
														$("#2-81").animate({"position":"absolute","top":"360px"},1500);
														$("#2-96").animate({"position":"absolute","top":"265px"},1500,
															function()
															{
																$("#2-97").css({"visibility":"visible"});
																$("#2-92").css({"visibility":"hidden"});
																$("#2-96").css({"visibility":"hidden"});
																$("#2-97").animate({"position":"absolute","top":"40px"},1000,
																	function()
																	{
																		myInt=setInterval(function(){animatearrow();},500);
																		document.getElementById("arrow1").style="visibility:visible; position:absolute; left:590px; top:200px; height:30px; z-index:10;";
																		document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
																		document.getElementById("arrow1").style.msTransform="rotate(180deg)";
																		document.getElementById("arrow1").style.transform="rotate(180deg)";
																		$("#2-97").click(function()
																		{
																			myStopFunction();
																			$("#2-97").animate({"position":"absolute","left":"115px","top":"100px"},2000,
																				function()
																				{
																					myInt=setInterval(function(){animatearrow();},500);
																					document.getElementById("arrow1").style="visibility:visible; position:absolute; left:685px; top:400px; height:25px; z-index:10;";
																					document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
																					document.getElementById("arrow1").style.msTransform="rotate(270deg)";
																					document.getElementById("arrow1").style.transform="rotate(270deg)";
																					$("#2-73").click(function()
																					{
																						myStopFunction();
																						$("#2-73").css({"visibility":"hidden"});
																						$("#2-72").css({"visibility":"visible","position":"absolute","left":"610px","top":"347px"});
																						$("#2-72").animate({"position":"absolute","left":"542px","top":"190.5px"},750,
																							function()
																							{
																								$("#2-72").animate({"position":"absolute","top":"210.5px"},500,
																									function()
																									{
																										$("#2-72").css({"visibility":"hidden"});
																										$("#2-71").css({"visibility":"visible"});
																										$("#2-71").off("click");
																										setTimeout(function()
																										{
																											$("#p2-4").css({"visibility":"visible"});
																											$("#p2-3").css({"visibility":"visible"});
																											addAlum();
																										},500);
																									}
																								);
																							}
																						);
																					});
																				}
																			);
																		});
																	}
																);
															}
														);
													});
												}
											);
										});
									} 
								);
							}
						);
					}
				);
			});
		},500);
	}
	
	if(simsubscreennum==3)
	{
		document.getElementById("p2-3").style.visibility="hidden";
		//lowerRod();
		//setRPM1();
		setTimeout(function()
		{
			document.getElementById("p3-4").style.visibility="visible";
			$("#beaker").fadeIn(600);
			setTimeout(function()
			{
				document.getElementById("container").style.visibility="visible";
				document.getElementById("p3-4").style.visibility="visible";
				myInt=setInterval(function(){animatearrow();},500);
				document.getElementById("arrow1").style="visibility:visible; position:absolute; left:660px; top:420px; height:35px; z-index:10;";
				document.getElementById("arrow1").style.WebkitTransform="rotate(0deg)";
				document.getElementById("arrow1").style.msTransform="rotate(0deg)";
				document.getElementById("arrow1").style.transform="rotate(0deg)";
				document.getElementById("beaker").onclick=function()
				{
					dragDropBeaker();
				}
			},500);
		},300);
	}
	
	if(simsubscreennum==4)
	{
		for(i=1;i<=6;i++)
		{
			document.getElementById("3-2"+i).style.visibility="hidden";
			document.getElementById("3-4"+i).style.visibility="hidden";
			document.getElementById("3-5"+i).style.visibility="hidden";
			document.getElementById("3-3"+i).style.visibility="hidden";
			document.getElementById("3-37"+i).style.visibility="hidden";
		}
		document.getElementById("para3-2").style.visibility="hidden";
		document.getElementById("3-5b").style.visibility="hidden";
		document.getElementById("3-5s").style.visibility="hidden";
		document.getElementById("3-7").style.visibility="hidden";
		document.getElementById("3-57").style.visibility="hidden";
		document.getElementById("3-58w").style.visibility="hidden";
		document.getElementById("3-58").style.visibility="hidden";
		for(i=1;i<=4;i++)
		{
			document.getElementById("p3-5"+i).style.visibility="hidden";
		}
		
		setTimeout(function()
		{
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:55px; top:200px; height:35px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			document.getElementById("arrow1").style.msTransform="rotate(180deg)";
			document.getElementById("arrow1").style.transform="rotate(180deg)";
			document.getElementById("4-21").onclick=function()
			{
				myStopFunction();
				document.getElementById("4-21").onclick="";
				document.getElementById("4-21").style.visibility="hidden";
				document.getElementById("4-11").style.visibility="hidden";
				document.getElementById("4-41").style.visibility="visible";
				$("#4-41").animate({"position":"absolute","top":"250px"},750,
				function()
				{
					document.getElementById("4-41").style.visibility="hidden";
					document.getElementById("4-42").style.visibility="visible";
					document.getElementById("4-43").style.visibility="visible";
				    $("#4-31").animate({"position":"absolute","top":"370px"},1000,
					function()
					{
						document.getElementById("4-42").style.visibility="hidden";
						document.getElementById("4-43").style.visibility="hidden";
						document.getElementById("4-21").onclick="";
						document.getElementById("4-41").style.visibility="visible";
						$("#4-41").animate({"position":"absolute","top":"135px"},750,
						function()
						{
							document.getElementById("4-21").style.visibility="visible";
							document.getElementById("4-11").style.visibility="visible";
							$("#4-11").css({"position":"absolute","left":"55px;","top":"188px"});
							document.getElementById("4-41").style.visibility="hidden";
							setTimeout(function()
							{
								myInt=setInterval(function(){animatearrow();},500);
								document.getElementById("arrow1").style="visibility:visible; position:absolute; left:137.5px; top:440px; height:25px; z-index:10;";
								document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
								document.getElementById("arrow1").style.msTransform="rotate(270deg)";
								document.getElementById("arrow1").style.transform="rotate(270deg)";
								document.getElementById("4-51").onclick=function()
								{
									myStopFunction();
									document.getElementById("4-51").onclick="";
									$("#4-51").animate({"position":"absolute","left":"53px","top":"335px"},750,
									function()
									{
										$("#4-51").animate({"position":"absolute","left":"53px","top":"350px"},250,
										function()
										{
											$("#p4-1").fadeIn(500,
											function()
											{
												document.getElementById("btn4-1").onclick=function()
												{
													document.getElementById("btn4-1").onclick="";
													document.getElementById("p4-1").style.visibility="hidden";
													setTimeout(function()
													{
														for(i=2;i<=6;i++)
														{
															document.getElementById("4-6"+i).style.visibility="visible";
															document.getElementById("4-7"+i).style.visibility="visible";
															document.getElementById("4-1"+i).style.visibility="hidden";
															document.getElementById("4-2"+i).style.visibility="hidden";
															$("#4-3"+i).animate({"position":"absolute","top":"370px"},2000);
														}
														setTimeout(function()
														{
																for(i=2;i<=6;i++)
																{
																	document.getElementById("4-1"+i).style.visibility="visible";
																	document.getElementById("4-2"+i).style.visibility="visible";
																	document.getElementById("4-6"+i).style.visibility="hidden";
																	document.getElementById("4-7"+i).style.visibility="hidden";
																	//lower the level of solutions in beaker using jquery
																	// var pos=document.getElementById("4-1"+i);
																	// var topVal = parseInt(pos.style.top);
																	// pos.style.top = (topVal + 1.85) + "px";
																	// var val=pos.style.top;
																	// alert(val);
																	// $("#4-1"+i).css({"position":"absolute","top":val+"px"});
																}
																$("#4-12").css({"position":"absolute","top":"188px"});
																$("#4-13").css({"position":"absolute","top":"187px"});
																$("#4-14").css({"position":"absolute","top":"186px"});
																$("#4-15").css({"position":"absolute","top":"185px"});
																$("#4-16").css({"position":"absolute","top":"184px"});

																	setTimeout(function()
																	{
																		$("#4-52").animate({"position":"absolute","left":"155px","top":"335px"},750,
																		function()
																		{
																			$("#4-52").animate({"position":"absolute","left":"155px","top":"350px"},250);
																		});
																		$("#4-53").animate({"position":"absolute","left":"258px","top":"335px"},750,
																		function()
																		{
																			$("#4-53").animate({"position":"absolute","left":"258px","top":"350px"},250);
																		});	
																		$("#4-54").animate({"position":"absolute","left":"360px","top":"335px"},750,
																		function()
																		{
																			$("#4-54").animate({"position":"absolute","left":"360px","top":"350px"},250);
																		});
																		$("#4-55").animate({"position":"absolute","left":"463px","top":"335px"},750,
																		function()
																		{
																			$("#4-55").animate({"position":"absolute","left":"463px","top":"350px"},250);
																		});
																		$("#4-56").animate({"position":"absolute","left":"565px","top":"335px"},750,
																		function()
																		{
																			$("#4-56").animate({"position":"absolute","left":"565px","top":"350px"},250,
																			function()
																			{
																				document.getElementById("nextButton").style.visibility="visible";
																			}
																			);
																		});
																	},250);								
														},2000);
													},500);
												}
											}
											);
										}
										);
									}
									);
								}
							},500);
						}
						);
					}
					);
				}
				);
			}
		},500);
	}
	
		
	if(simsubscreennum==5)
	{
		for(i=1;i<=6;i++)
		{
			document.getElementById("4-1"+i).style.visibility="hidden";
			document.getElementById("4-2"+i).style.visibility="hidden";
			document.getElementById("4-3"+i).style.visibility="hidden";
			document.getElementById("4-5"+i).style.visibility="hidden";
		}
		$("#5-1").fadeIn(2000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	
	if(simsubscreennum==6)
	{
		tn=8;
		setTimeout(function()
		{
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:108px; top:421px; height:35px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			document.getElementById("arrow1").style.msTransform="rotate(180deg)";
			document.getElementById("arrow1").style.transform="rotate(180deg)";
			$("#8-10").on('click',function()
 			{
 				myStopFunction();
				document.getElementById("8-10").onclick="";
				//$("#8-10").css({"transform":"rotate(180deg)"});
				$("#8-19").css({"visibility":"visible"});
				$("#8-11").css({"visibility":"visible"});
				$("#8-12").css({"visibility":"visible"});
				tn=8;
				step8and9and10and11();
			});
		},500);
	}
	
	if(simsubscreennum==7)
	{
		document.getElementById("8-1").style.visibility="hidden";
		document.getElementById("8-18").style.visibility="hidden";
		document.getElementById("8-11").style.visibility="hidden";
		document.getElementById("8-12").style.visibility="hidden";
		document.getElementById("8-16").style.visibility="hidden";
		document.getElementById("8-17").style.visibility="hidden";
		document.getElementById("8-19").style.visibility="hidden";
		tn=9;
		step8and9and10and11();
	}
	
	if(simsubscreennum==8)
	{
		document.getElementById("9-16").style.visibility="hidden";
		//document.getElementById("9-17").style.visibility="hidden";
		document.getElementById("9-18").style.visibility="hidden";
		document.getElementById("9-11").style.visibility="hidden";
		$("#p9-1").fadeIn(1000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},1000);
	}
	if(simsubscreennum==9)
	{
		document.getElementById("nextButton").style.visibility="hidden";
		tn=10;
		step8and9and10and11();
	}
	if(simsubscreennum==10)
	{
		document.getElementById("10-1").style.visibility="hidden";
		document.getElementById("10-18").style.visibility="hidden";
		document.getElementById("10-11").style.visibility="hidden";
		document.getElementById("10-12").style.visibility="hidden";
		document.getElementById("10-16").style.visibility="hidden";
		document.getElementById("10-17").style.visibility="hidden";
		document.getElementById("10-19").style.visibility="hidden";
		for(i=0;i<=5;i++)
		{
			$("#10-2"+i).css({"visibility":"hidden"});
			$("#p10-3"+i).css({"visibility":"hidden"});
		}
		var j=1;
		for(i=0;i<=5;i++)
		{
			document.getElementById("r"+i+"-1").innerHTML=i;
			document.getElementById("r"+i+"-2").innerHTML=i;
			//document.getElementById("r"+i+"-3").innerHTML=i*10;
			document.getElementById("r"+i+"-4").innerHTML=t[p][i];
		}
		document.getElementById("result").onclick=function()
		{
			document.getElementById("result").style.visibility="hidden";
			document.getElementById("p11").style.visibility="hidden";
			document.getElementById("hint").style.visibility="hidden";
			for(i=0;i<=5;i++)
			{
			document.getElementById("r"+i+"-3").innerHTML=i*10;
			}
			document.getElementById("nextButton").style.visibility="visible";
		}
	}
	if(simsubscreennum==11)
	{
		  if(p==0)
		  {
			xs=23.8;
			ys=2.57;
		  }
		  if(p==1)
		  {
			xs=15.2;
			ys=2.59;
		  }
		  if(p==2)
		  {
			xs=22.5;
			ys=18.62;
		  }
		  if(p==3)
		  {
			xs=15.4;
			ys=4.91;
		  }
		  if(p==4)
		  {
			xs=31.5;
			ys=12.63;
		  }
		  if(p==5)
		  {
			xs=21.2;
			ys=0.374;
		  }
		  if(p==6)
		  {
			xs=17;
			ys=22.8;
		  }  
		  if(p==7)
		  {
			xs=16;
			ys=2.36;
		  }
		  if(p==8)
		  {
			ys=11.3;
			xs=14.2;
		  }
		 
		  function displayGraph()
		{
			var chart = new CanvasJS.Chart("chartContainer",
			{      
			zoomEnabled: true,
			zoomType: "xy",
		 
			 axisX: {
				title:"Optimum alum dosage (mg/l)",
				titleFontSize:16,
				interval: 10,
				intervalType: "Number"
			  },
			  axisY :{
				title:"Turbidity (mg/l)",
				titleFontSize:16,
				includeZero: false
			  },
			  data: [
			  {      
				type: "spline",  
				indexLabelFontColor: "orangered",      
				dataPoints: type1DataPoints(),
				cursor: "pointer"
			  },
			  {        
				type: "line",
				lineDashType: "dash",
				dataPoints: [
				{ x:0, y: ys },
				{ x:xs, y: ys },
				{ x:xs, y: 0 }
				]
			  }
			 ]
			});
			chart.render();
		}
		function type1DataPoints(){
			var dataPoints = [];
			var h;
			dataPoints.push({x: 0 , y: t[p][0]});
			for(var w = 1; w <= 5 ; w ++){
				h = t[p][w];
				dataPoints.push({x: w*10 , y: h});
			}
			return dataPoints
		}	
		document.getElementById('g').onclick=function() 
		{ 
			document.getElementById('chartContainer').style.visibility="visible";
			displayGraph();
			if(ccnt==0)
			{
				document.getElementById("q11").style.visibility="visible";
			}
			ccnt++;
		}
		document.getElementById("check1").onclick=function()
	{
		// if(!document.getElementById("wa").value  || !document.getElementById("wa").value!=" " || !document.getElementById("tw").value  || !document.getElementById("tw").value!=" ")
		if(!document.getElementById("wa").value  || !document.getElementById("wa").value!=" " )
		{
			alert("Enter the value to proceed ");
		}
		else
		{
			n1 = document.getElementById("wa").value;
			// n2 = document.getElementById("tw").value;
				
			if(Math.round(n1) == Math.round(xs))
			{
				document.getElementById("check1").style.visibility="hidden";
				document.getElementById("r1").style.visibility="visible";
				document.getElementById("result1").style.visibility="hidden";
				document.getElementById("w1").style.visibility="hidden";
				document.getElementById("w1").style.visibility="hidden";
				document.getElementById("wa").style="border:none; background-color:white; color:black; width:65px;"
				document.getElementById("wa").disabled="true";
				document.getElementById("nextButton").style.visibility="visible";
			}
			// if(Math.round(n2) == Math.round(ys))
			// {
				// document.getElementById("check1").style.visibility="hidden";
				// document.getElementById("r2").style.visibility="visible";
				// document.getElementById("result1").style.visibility="hidden";
				// document.getElementById("w2").style.visibility="hidden";
				// document.getElementById("tw").style="border:none; background-color:white; color:black;"
				// document.getElementById("tw").disabled="true";
			// }
			else if(Math.round(n1) != Math.round(xs))
			{
				// document.getElementById("result1").style.visibility="visible";
				document.getElementById("check1").style.visibility="visible";
				document.getElementById("w1").style.visibility="visible";
			}
			// else if(Math.round(n2) != Math.round(ys))
			// {
				// // document.getElementById("result1").style.visibility="visible";
				// document.getElementById("check1").style.visibility="visible";
				// document.getElementById("w2").style.visibility="visible";
			// }
		}	
	}
	}
	if(simsubscreennum==12)
	{
		document.getElementById("check1").style.visibility="hidden";
		document.getElementById("q11").style.visibility="hidden";
		document.getElementById('chartContainer').style.visibility="hidden";
		document.getElementById("r1").style.visibility="hidden";
		document.getElementById("w1").style.visibility="hidden";
		document.getElementById("q1").innerHTML="What is the optimum quantity of alum required for</br> the given sample with turbidity "+ys+"NTU?";
		document.getElementById("a1").innerHTML=xs+"mg/l";
		document.getElementById("a2").innerHTML=xs+2.5+"mg/l";
		document.getElementById("a3").innerHTML=xs+5+"mg/l";
		document.getElementById("a4").innerHTML=xs+7.5+"mg/l";
	}
}

function step1()
{
	document.getElementById("1-4").onclick="";
	document.getElementById("1-6").onclick="";
	document.getElementById("1-8").style.visibility="visible";
	document.getElementById("1-4").style.visibility="hidden";
	document.getElementById("1-6").style.visibility="hidden";
	document.getElementById("1-5").style.visibility="hidden";
	$("#1-4").css({"visibility":"hidden"});
	$("#1-5").css({"visibility":"hidden"});
	$("#1-6").css({"visibility":"hidden"});
	$("#1-8").css({"visibility":"visible"});
	
		$("#1-8").animate({"position":"absolute","left":"380px","top":"110px"},1000,
			function()
			{
				$("#1-8").css({"transform":"rotate(-90deg)"},1000);
				setTimeout(function()
				{
					$("#1-10c").fadeIn(100,
					function()
					{
						document.getElementById("1-10a").style.animation="addWaterSample 4s forwards";
						setTimeout(function()
						{
							document.getElementById("1-8").style.visibility="hidden";
							document.getElementById("1-11").style.visibility="visible";
							$("#1-11").css({"transform":"rotate(-90deg)"},1000);
							$("#1-10c").fadeOut(100,
							function()
							{
								$("#1-11").css({"transform":"rotate(0deg)"},1000);
								setTimeout(function()
								{
									$("#1-11").animate({"position":"absolute","left":"544px","top":"260px"},1500,
									function()
									{
										document.getElementById("1-4").style.visibility="visible";
										document.getElementById("1-6").style.visibility="visible";
										document.getElementById("1-5").style.visibility="visible";
										$("#1-5").animate({"position":"absolute","left":"545px","top":"343px"},10);
										document.getElementById("1-11").style.visibility="hidden";
										myInt=setInterval(function(){animatearrow();},500);
										document.getElementById("arrow1").style="visibility:visible; position:absolute; left:675px; top:395px; height:35px; z-index:10;";
										document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
										document.getElementById("arrow1").style.msTransform="rotate(270deg)";
										document.getElementById("arrow1").style.transform="rotate(270deg)";
										document.getElementById("1-7").onclick=function()
										{
											myStopFunction();
											document.getElementById("1-7").onclick="";
											document.getElementById("1-7").style.visibility="hidden";
											document.getElementById("1-3").style.visibility="visible";
											document.getElementById("1-3").style.animation="insertBodCap2 1.5s forwards";
											setTimeout(function()
											{
												document.getElementById("1-3").style.visibility="hidden";
												document.getElementById("1-2").style.visibility="visible";
												document.getElementById("1-2").style.animation="insertBodCap1 0.5s forwards";
												setTimeout(function()
												{
													document.getElementById("1-2").style.visibility="hidden";
													document.getElementById("1-1").style.visibility="visible";
													$("#1-12").fadeIn(500);
													myInt=setInterval(function(){animatearrow();},500);
													document.getElementById("arrow1").style="visibility:visible; position:absolute; left:440px; top:370px; height:35px; z-index:10;";
													document.getElementById("arrow1").style.WebkitTransform="rotate(0deg)";
													document.getElementById("arrow1").style.msTransform="rotate(0deg)";
													document.getElementById("arrow1").style.transform="rotate(0deg)";
													document.getElementById("1-9").onclick=function()
													{
														myStopFunction();
														document.getElementById("1-9").onclick="";
														$("#1-9").animate({"position":"absolute","left":"180px","top":"190px"},500);
														$("#1-10b").animate({"position":"absolute","left":"200px","top":"230px"},500,
														function()
														{
															$("#1-9").css({"transform":"rotate(-90deg)"},500);
															document.getElementById("1-10b").style.visibility="hidden";
															document.getElementById("1-10d").style.visibility="visible";
															setTimeout(function()
															{
																document.getElementById("1-10e").style.visibility="visible";
																setTimeout(function()
																{
																	$("#1-14").animate({"position":"absolute","top":"394px"},1000,
																	function(){
																		$("#1-10e").hide(1);
																		$("#1-9").css({"transform":"rotate(0deg)"},500);
																		setTimeout(function()
																		{
																			$("#1-9").hide(500);
																		},500);
																	}
																	);
																	setTimeout(function()
																	{
																		$("#1-10d").hide(500);
																		setTimeout(function()
																		{
																			document.getElementById("1-10a").style.visibility="visible";
																			document.getElementById("popups1").style="visibility:visible; position:absolute; left:100px; top:150px; width:auto;";
																		},750);
																	},900);
																},250);
															},250);
														}
														);
													}
												},500);
											},1500);
										}
									}
									);
								},1100);		
							});
						},2800);
					});
				},1000);
			}
		);
}

function addAlum()
{
	$("#2-92").css({"visibility":"visible","position":"absolute","left":"115px","top":"100px"});
	$("#2-96").css({"visibility":"visible","position":"absolute","left":"130px","top":"225px"});//solution grey
	$("#2-97").css({"visibility":"hidden"});
	$("#2-81").css({"visibility":"hidden"});
	$("#2-82").css({"visibility":"hidden"});
	$("#2-71").css({"visibility":"hidden"});
	$("#2-93").css({"visibility":"visible","position":"absolute","left":"550px","top":"100px"});
	$("#2-94").css({"visibility":"visible","position":"absolute","left":"602px","top":"208px"});
	$("#2-95").css({"visibility":"visible","position":"absolute","left":"614px","top":"220px"});
	// 0.5ml beaker2
	myInt=setInterval(function(){animatearrow();},500);
	document.getElementById("arrow1").style="visibility:visible; position:absolute; left:655px; top:280px; height:25px; z-index:10;";
	document.getElementById("arrow1").style.WebkitTransform="rotate(90deg)";
	document.getElementById("arrow1").style.msTransform="rotate(90deg)";
	document.getElementById("arrow1").style.transform="rotate(90deg)";
	$("#2-95").click(function()
	{
		myStopFunction();
		$("#2-95").off("click");
		$("#p2-4").css({"visibility":"hidden"});
		document.getElementById("p2-3").innerHTML="";
		document.getElementById("p2-3").innerHTML="0ml&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1ml";
		$("#drop2-1").css({"visibility":"visible","position":"absolute","left":"131px","top":"325px"});
		document.getElementById("drop2-1").style.animation="drop1 0.75s 2";
		setTimeout(function()
		{
			$("#2-21").css({"position":"absolute","top":"383px"});
			$("#2-96").css({"position":"absolute","top":"228px"});
			$("#drop2-1").css({"visibility":"hidden"});
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:115px; top:160px; height:30px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			document.getElementById("arrow1").style.msTransform="rotate(180deg)";
			document.getElementById("arrow1").style.transform="rotate(180deg)";
			$("#2-92").click(function()
			{
				myStopFunction();
				$("#2-92").off("click");
				$("#2-92").animate({"position":"absolute","left":"195px","top":"100px"},500);
				$("#2-96").animate({"position":"absolute","left":"210px","top":"228px"},500,
					function()
					{
						// 1ml beaker3
						myInt=setInterval(function(){animatearrow();},500);
						document.getElementById("arrow1").style="visibility:visible; position:absolute; left:655px; top:280px; height:25px; z-index:10;";
						document.getElementById("arrow1").style.WebkitTransform="rotate(90deg)";
						document.getElementById("arrow1").style.msTransform="rotate(90deg)";
						document.getElementById("arrow1").style.transform="rotate(90deg)";
						$("#2-95").click(function()
						{
							myStopFunction();
							$("#2-95").off("click");
							document.getElementById("p2-3").innerHTML="";
							document.getElementById("p2-3").innerHTML="0ml&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1ml&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2ml";
							$("#drop2-2").css({"visibility":"visible","position":"absolute","left":"211px","top":"325px"});
							document.getElementById("drop2-2").style.animation="drop1 0.75s 4";
							setTimeout(function()
							{
								$("#2-31").css({"position":"absolute","top":"382px"});
								$("#2-96").css({"position":"absolute","top":"234px"});
								$("#drop2-2").css({"visibility":"hidden"});
								myInt=setInterval(function(){animatearrow();},500);
								document.getElementById("arrow1").style="visibility:visible; position:absolute; left:195px; top:160px; height:30px; z-index:10;";
								document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
								document.getElementById("arrow1").style.msTransform="rotate(180deg)";
								document.getElementById("arrow1").style.transform="rotate(180deg)";
								$("#2-92").click(function()
								{
									myStopFunction();
									$("#2-92").off("click");
									$("#2-92").animate({"position":"absolute","left":"275px","top":"100px"},500);
									$("#2-96").animate({"position":"absolute","left":"290px","top":"234px"},500,
										function()
										{
											// 1.5ml beaker4
											myInt=setInterval(function(){animatearrow();},500);
											document.getElementById("arrow1").style="visibility:visible; position:absolute; left:655px; top:280px; height:25px; z-index:10;";
											document.getElementById("arrow1").style.WebkitTransform="rotate(90deg)";
											document.getElementById("arrow1").style.msTransform="rotate(90deg)";
											document.getElementById("arrow1").style.transform="rotate(90deg)";
											$("#2-95").click(function()
											{
												myStopFunction();
												$("#2-95").off("click");
												document.getElementById("p2-3").innerHTML="";
												document.getElementById("p2-3").innerHTML="0ml&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1ml&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2ml&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3ml";
												$("#2-96").animate({"position":"absolute","top":"243px"},3000);
												$("#drop2-3").css({"visibility":"visible","position":"absolute","left":"291px","top":"325px"});
												document.getElementById("drop2-3").style.animation="drop1 0.75s 6";
												setTimeout(function()
												{
													$("#2-41").css({"position":"absolute","top":"381px"});
													$("#2-96").css({"position":"absolute","top":"243px"});
													$("#drop2-3").css({"visibility":"hidden"});
													myInt=setInterval(function(){animatearrow();},500);
													document.getElementById("arrow1").style="visibility:visible; position:absolute; left:265px; top:160px; height:30px; z-index:10;";
													document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
													document.getElementById("arrow1").style.msTransform="rotate(180deg)";
													document.getElementById("arrow1").style.transform="rotate(180deg)";
													$("#2-92").click(function()
													{
														myStopFunction();
														$("#2-92").off("click");
														$("#2-92").animate({"position":"absolute","left":"355px","top":"100px"},500);
														$("#2-96").animate({"position":"absolute","left":"370px","top":"255px"},500,
															function()
															{
																// 2ml beaker5
																myInt=setInterval(function(){animatearrow();},500);
																document.getElementById("arrow1").style="visibility:visible; position:absolute; left:655px; top:280px; height:25px; z-index:10;";
																document.getElementById("arrow1").style.WebkitTransform="rotate(90deg)";
																document.getElementById("arrow1").style.msTransform="rotate(90deg)";
																document.getElementById("arrow1").style.transform="rotate(90deg)";
																$("#2-95").click(function()
																{
																	myStopFunction();
																	$("#2-95").off("click");
																	document.getElementById("p2-3").innerHTML="";
																	document.getElementById("p2-3").innerHTML="0ml&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1ml&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2ml&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3ml&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4ml";
																	$("#2-96").animate({"position":"absolute","top":"255px"},6000);
																	$("#drop2-4").css({"visibility":"visible","position":"absolute","left":"371px","top":"325px"});
																	document.getElementById("drop2-4").style.animation="drop1 0.75s 8";
																	setTimeout(function()
																	{
																		$("#2-51").css({"position":"absolute","top":"380px"});
																		$("#2-96").css({"position":"absolute","top":"255px"});
																		$("#drop2-4").css({"visibility":"hidden"});
																		myInt=setInterval(function(){animatearrow();},500);
																		document.getElementById("arrow1").style="visibility:visible; position:absolute; left:365px; top:160px; height:30px; z-index:10;";
																		document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
																		document.getElementById("arrow1").style.msTransform="rotate(180deg)";
																		document.getElementById("arrow1").style.transform="rotate(180deg)";
																		$("#2-92").click(function()
																		{
																			myStopFunction();
																			$("#2-92").off("click");
																			$("#2-92").animate({"position":"absolute","left":"435px","top":"100px"},500);
																			$("#2-96").animate({"position":"absolute","left":"450px","top":"255px"},500,
																				function()
																				{
																					// 2.5ml beaker6
																					myInt=setInterval(function(){animatearrow();},500);
																					document.getElementById("arrow1").style="visibility:visible; position:absolute; left:655px; top:280px; height:25px; z-index:10;";
																					document.getElementById("arrow1").style.WebkitTransform="rotate(90deg)";
																					document.getElementById("arrow1").style.msTransform="rotate(90deg)";
																					document.getElementById("arrow1").style.transform="rotate(90deg)";
																					$("#2-95").click(function()
																					{
																						myStopFunction();
																						$("#2-95").off("click");
																						document.getElementById("p2-3").innerHTML="";
																						document.getElementById("p2-3").innerHTML="0ml&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1ml&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2ml&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3ml&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp4ml&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5ml";
																						$("#2-96").animate({"position":"absolute","top":"270px"},6000);
																						$("#drop2-5").css({"visibility":"visible","position":"absolute","left":"451px","top":"325px"});
																						document.getElementById("drop2-5").style.animation="drop1 0.75s 10";
																						setTimeout(function()
																						{
																							$("#2-61").css({"position":"absolute","top":"379px"});
																							$("#2-96").css({"position":"absolute","top":"270px"});
																							$("#drop2-5").css({"visibility":"hidden"});
																							setTimeout(function()
																							{
																								$("#2-93").css({"visibility":"hidden"});
																								$("#2-94").css({"visibility":"hidden"});
																								$("#2-95").css({"visibility":"hidden"});
																								$("#2-96").css({"visibility":"hidden"});
																								$("#2-92").hide(1000,
																									function(){
																										//document.getElementById("nextButton").style.visibility="visible";
																										validateAnswer(3,2,"200px","150px");
																									}
																								);
                                                            								},500);
																						},7500);
																					});
																				}
																			);
																		});
																	},6000);
																});
															}
														);
													});
												},4500);
											});
										}
									);
								});
							},3000);
						});
					}
				);
			});
		},1500);
	});
}

function dragDropBeaker()
{
	myStopFunction();
	$("#beaker").animate({"position":"absolute","left":"22.5px", "top":"245px"},750,
	function()
	{
		document.getElementById("3-21").style.visibility="visible";
		document.getElementById("3-41").style.visibility="visible";
		document.getElementById("container").style.visibility="hidden";
		document.getElementById("beaker").style.visibility="hidden";
		setTimeout(function()
		{
			$("#p3-1").fadeIn(10);
			confirMessage();
		},500);
	});
}

function confirMessage()
{
	document.getElementById("b3-1").onclick=function()
	{
		$("#p3-1").fadeOut(10);
		document.getElementById("p3-4").style.visibility="hidden";
		for(var i=1;i<=6;i++)
		{
			document.getElementById("3-2"+i).style.visibility="visible";
			document.getElementById("3-4"+i).style.visibility="visible";
		}
		setTimeout(function()
		{
			lowerRod();
		},300);
	}
}
function lowerRod()
{
	setTimeout(function()
	{
	// document.getElementById("p3-4").style.visibility="hidden";
	// document.getElementById("p3-2").style.visibility="visible";
		myInt=setInterval(function(){animatearrow();},500);
		document.getElementById("arrow1").style="visibility:visible; position:absolute; left:77.5px; top:150px; height:30px; z-index:10;";
		document.getElementById("arrow1").style.WebkitTransform="rotate(230deg)";
		document.getElementById("arrow1").style.msTransform="rotate(230deg)";
		document.getElementById("arrow1").style.transform="rotate(230deg)";
		document.getElementById("3-371").onclick=function()
		{
			myStopFunction();
			document.getElementById("3-371").onclick="";
			document.getElementById("3-371").style.visibility="hidden";
			$("#3-31").animate({"position":"absolute","top":"100px"},750,
				function()
				{
					// document.getElementById("p3-3").style.visibility="visible";
					r=confirm("Similarly lower all the stirrer");
					if(r)
					{
						//document.getElementById("p3-4").style.visibility="hidden";
						for(var i=1;i<=6;i++)
						{
							$("#3-3"+i).animate({"position":"absolute","top":"100px"},750);
							$("#3-37"+i).css({"visibility":"hidden"});
						}
					}
					else
					{
						for(var i=1;i<=6;i++)
						{
							$("#3-3"+i).animate({"position":"absolute","top":"100px"},750);
							$("#3-37"+i).css({"visibility":"hidden"});
						}
					}
					
					setTimeout(function()
					{
						setRPM1();
					},400);
				}
			);
		}
	},800);
}

// canvas3
function setRPM1()
{
	setTimeout(function()
	{
		myInt=setInterval(function(){animatearrow();},500);
		document.getElementById("arrow1").style="visibility:visible; position:absolute; left:325px; top:415px; height:30px; z-index:10;";
		document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
		document.getElementById("arrow1").style.msTransform="rotate(180deg)";
		document.getElementById("arrow1").style.transform="rotate(180deg)";
		document.getElementById("3-5").onclick=function()
		{
			myStopFunction();
			document.getElementById("3-5").onclick="";
			document.getElementById("3-5").style.visibility="hidden";
			document.getElementById("3-5b").style.visibility="visible";
			document.getElementById("3-51").style.visibility="visible";
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:540px; top:437px; height:30px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(90deg)";
			document.getElementById("arrow1").style.msTransform="rotate(90deg)";
			document.getElementById("arrow1").style.transform="rotate(90deg)";
			document.getElementById("3-51").onclick=function()
			{
				myStopFunction();
				document.getElementById("3-51").onclick="";
				$("#3-51").css({"transform":"rotateX(180deg)"});
				for(i=2;i<=8;i++)
				{
					document.getElementById("3-5"+i).style.visibility="visible";
					document.getElementById("3-5s").style.visibility="visible";
				}
				document.getElementById("3-58w").style.visibility="visible";
				for(i=1;i<=4;i++)
				{
					document.getElementById("p3-5"+i).style.visibility="visible";
				}
				setTimeout(function()
				{
					myInt=setInterval(function(){animatearrow();},500);
					document.getElementById("arrow1").style="visibility:visible; position:absolute; left:740px; top:430px; height:30px; z-index:10;";
					document.getElementById("arrow1").style.WebkitTransform="rotate(90deg)";
					document.getElementById("arrow1").style.msTransform="rotate(90deg)";
					document.getElementById("arrow1").style.transform="rotate(90deg)";
					document.getElementById("3-58").onclick=function()
					{
						myStopFunction();
						document.getElementById("3-58").onclick="";
						document.getElementById("3-58").style.WebkitTransform="rotate(60deg)";
						document.getElementById("3-58").style.msTransform="rotate(60deg)";
						document.getElementById("3-58").style.transform="rotate(60deg)";
						document.getElementById("p3-52").innerHTML="1 0 0";
						document.getElementById("p3-54").innerHTML="100";
						// document.getElementById("3-59").style.visibility="visible";
					
						setTimeout(function()
						{
							myInt=setInterval(function(){animatearrow();},500);
							document.getElementById("arrow1").style="visibility:visible; position:absolute; left:640px; top:390px; height:30px; z-index:10;";
							document.getElementById("arrow1").style.WebkitTransform="rotate(50deg)";
							document.getElementById("arrow1").style.msTransform="rotate(50deg)";
							document.getElementById("arrow1").style.transform="rotate(50deg)";
							document.getElementById("3-56").onclick=function()
							{
								myStopFunction();
								document.getElementById("3-56").onclick="";
								document.getElementById("p3-51").innerHTML="0 1";
								document.getElementById("p3-53").innerHTML="01";
								document.getElementById("3-31").style.animation="rotateStirrer 20s forwards";
								document.getElementById("3-32").style.animation="rotateStirrer 20s forwards";
								document.getElementById("3-33").style.animation="rotateStirrer 20s forwards";
								document.getElementById("3-34").style.animation="rotateStirrer 20s forwards";
								document.getElementById("3-35").style.animation="rotateStirrer 20s forwards";
								document.getElementById("3-36").style.animation="rotateStirrer 20s forwards";
								var audio=new Audio("images/jar appatus 14s.mp3"); 
								audio.play(); 
								//document.getElementById("nextButton").style.visibility="visible";
								setTimeout(function()
								{
									document.getElementById("p3-51").innerHTML="0 0";
									document.getElementById("p3-53").innerHTML="00";
									myInt=setInterval(function(){animatearrow();},500);
									document.getElementById("arrow1").style="visibility:visible; position:absolute; left:740px; top:430px; height:30px; z-index:10;";
									document.getElementById("arrow1").style.WebkitTransform="rotate(90deg)";
									document.getElementById("arrow1").style.msTransform="rotate(90deg)";
									document.getElementById("arrow1").style.transform="rotate(90deg)";
									document.getElementById("3-58").onclick=function()
									{
										myStopFunction();
										document.getElementById("3-58").onclick="";
										document.getElementById("3-58").style.WebkitTransform="rotate(10deg)";
										document.getElementById("3-58").style.msTransform="rotate(10deg)";
										document.getElementById("3-58").style.transform="rotate(10deg)";
										document.getElementById("p3-52").innerHTML="&nbsp;  3 0";
										document.getElementById("p3-54").innerHTML="30";
										for(i=1;i<=6;i++)
										{
											document.getElementById("3-3"+i).style.animation="";
										}
										setTimeout(function()
										{
											myInt=setInterval(function(){animatearrow();},500);
											document.getElementById("arrow1").style="visibility:visible; position:absolute; left:640px; top:362px; height:30px; z-index:10;";
											document.getElementById("arrow1").style.WebkitTransform="rotate(50deg)";
											document.getElementById("arrow1").style.msTransform="rotate(50deg)";
											document.getElementById("arrow1").style.transform="rotate(50deg)";
											document.getElementById("3-54").onclick=function()
											{
												myStopFunction();
												document.getElementById("3-54").onclick="";
												document.getElementById("p3-51").innerHTML="2 0";
												document.getElementById("p3-53").innerHTML="20";
												document.getElementById("3-31").style.animation="rotateStirrer 50s forwards";
												document.getElementById("3-32").style.animation="rotateStirrer 50s forwards";
												document.getElementById("3-33").style.animation="rotateStirrer 50s forwards";
												document.getElementById("3-34").style.animation="rotateStirrer 50s forwards";
												document.getElementById("3-35").style.animation="rotateStirrer 50s forwards";
												document.getElementById("3-36").style.animation="rotateStirrer 50s forwards";
										
												audio1.play(); 
												setTimeout(function()
												{
													document.getElementById("3-58").style.WebkitTransform="rotate(0deg)";
													document.getElementById("3-58").style.msTransform="rotate(0deg)";
													document.getElementById("3-58").style.transform="rotate(0deg)";
													document.getElementById("p3-52").innerHTML="0 0 0";
													document.getElementById("p3-54").innerHTML="000";
													document.getElementById("p3-51").innerHTML="0 0";
													document.getElementById("p3-53").innerHTML="00";
													audio1.pause();
													for(i=1;i<=6;i++)
													{
														document.getElementById("3-3"+i).style.animation="";
													}
													myInt=setInterval(function(){animatearrow();},500);
													document.getElementById("arrow1").style="visibility:visible; position:absolute; left:540px; top:437px; height:30px; z-index:10;";
													document.getElementById("arrow1").style.WebkitTransform="rotate(90deg)";
													document.getElementById("arrow1").style.msTransform="rotate(90deg)";
													document.getElementById("arrow1").style.transform="rotate(90deg)";
													document.getElementById("3-51").onclick=function()
													{
														myStopFunction();
														document.getElementById("3-51").onclick="";
														for(i=1;i<=8;i++)
														{
														 document.getElementById("3-5"+i).style.visibility="hidden";
														}
														document.getElementById("3-5s").style.visibility="hidden";
														document.getElementById("3-5b").style.visibility="hidden";
														document.getElementById("3-58w").style.visibility="hidden";
														//document.getElementById("nextButton").style.visibility="visible";
														for(i=1;i<=4;i++)
														{
														 document.getElementById("p3-5"+i).style.visibility="hidden";
														}
														document.getElementById("3-6").style.visibility="visible";
														myInt=setInterval(function(){animatearrow();},500);
														document.getElementById("arrow1").style="visibility:visible; position:absolute; left:77.5px; top:150px; height:30px; z-index:10;";
														document.getElementById("arrow1").style.WebkitTransform="rotate(230deg)";
														document.getElementById("arrow1").style.msTransform="rotate(230deg)";
														document.getElementById("arrow1").style.transform="rotate(230deg)";
														document.getElementById("3-6").onclick=function()
														{
															myStopFunction();
															document.getElementById("3-6").onclick="";
															document.getElementById("3-6").style.visibility="hidden";
															$("#3-31").animate({"position":"absolute","top":"30px"},750,
																function()
																{
																	myInt=setInterval(function(){animatearrow();},500);
																	document.getElementById("arrow1").style="visibility:visible; position:absolute; left:45px; top:305px; height:30px; z-index:10;";
																	document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
																	document.getElementById("arrow1").style.msTransform="rotate(180deg)";
																	document.getElementById("arrow1").style.transform="rotate(180deg)";
																	document.getElementById("3-21").onclick=function()
																	{
																		myStopFunction();
																		document.getElementById("3-21").onclick="";
																		document.getElementById("3-21").style.visibility="hidden";
																		document.getElementById("3-41").style.visibility="hidden";
																		document.getElementById("3-27").style.visibility="visible";
																		document.getElementById("para3-2").style.visibility="visible";
																		$("#3-27").animate({"position":"absolute","top":"440px"},850,
																		function()
																		{
																			document.getElementById("3-27").style.visibility="hidden";
																			document.getElementById("3-371").style.visibility="visible";
																			setTimeout(function()
																			{
																				if(confirm("Similarly take out remaining beakers from the stirrer"))
																				{
																					for(i=2;i<=6;i++)
																					{
																						$("#3-3"+i).css({"position":"absolute","top":"30px"});
																						document.getElementById("3-2"+i).style.visibility="hidden";
																						document.getElementById("3-4"+i).style.visibility="hidden";
																						document.getElementById("3-37"+i).style.visibility="visible";
																					}
																					document.getElementById("3-7").style.visibility="visible";
																					document.getElementById("nextButton").style.visibility="visible";
																				}
																				else
																				{
																					for(i=2;i<=6;i++)
																					{
																						$("#3-3"+i).css({"position":"absolute","top":"30px"});
																						document.getElementById("3-2"+i).style.visibility="hidden";
																						document.getElementById("3-4"+i).style.visibility="hidden";
																						document.getElementById("3-37"+i).style.visibility="visible";
																					}
																					document.getElementById("3-7").style.visibility="visible";
																					document.getElementById("nextButton").style.visibility="visible";
																				}
																			},250);
																		}
																		);
																	}
																}
															);
														}
													}
												},34700);
											}
										},250);
									}
								},12000);
							}
						},500);
					}
				},500);
			}
		}
	},500);
}

function step8and9and10and11()
{
	document.getElementById("nextButton").style.visibility="hidden";
	setTimeout(function()
	{
		myInt=setInterval(function(){animatearrow();},500);
		document.getElementById("arrow1").style="visibility:visible; position:absolute; left:192px; top:265px; height:35px; z-index:10;";
		document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
		document.getElementById("arrow1").style.msTransform="rotate(180deg)";
		document.getElementById("arrow1").style.transform="rotate(180deg)";
		$("#"+tn+"-2").on('click',function()
		{
			myStopFunction();
			document.getElementById(tn+"-2").onclick="";
			$("#"+tn+"-2").css({"visibility":"hidden"});
			$("#"+tn+"-3").css({"visibility":"visible"});
			$("#"+tn+"-3").animate({"position":"absolute","top":"150px"},250,
			function()
			{
				$("#"+tn+"-3").animate({"position":"absolute","left":"300px","top":"370px"},1500,
				function()
				{
					$("#"+tn+"-3").css({"visibility":"hidden"});
					$("#"+tn+"-4").css({"visibility":"visible"});
					setTimeout(function()
					{
						myInt=setInterval(function(){animatearrow();},500);
						document.getElementById("arrow1").style="visibility:visible; position:absolute; left:490px; top:430px; height:35px; z-index:10;";
						document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
						document.getElementById("arrow1").style.msTransform="rotate(180deg)";
						document.getElementById("arrow1").style.transform="rotate(180deg)";
						$("#"+tn+"-6").on('click',function()
						{
							myStopFunction();
							document.getElementById(tn+"-6").onclick="";
							$("#"+tn+"-6").css({"visibility":"hidden"});
							$("#"+tn+"-7").css({"visibility":"visible"});
							$("#"+tn+"-7").animate({"position":"absolute","left":"180px","top":"75px"},2000,
							function()
							{
								$("#"+tn+"-7").animate({"position":"absolute","top":"180px"},1000,
								function()
								{
									$("#"+tn+"-7").css({"visibility":"hidden"});
									$("#"+tn+"-8").css({"visibility":"visible"});
									if(tn==8)
									{
										document.getElementById(tn+"-12").innerHTML="0.030";
									}
									if(tn==9)
									{
										document.getElementById(tn+"-12").innerHTML="97.00";
									}
									setTimeout(function()
									{
										myInt=setInterval(function(){animatearrow();},500);
										document.getElementById("arrow1").style="visibility:visible; position:absolute; left:320px; top:465px; height:35px; z-index:10;";
										document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
										document.getElementById("arrow1").style.msTransform="rotate(180deg)";
										document.getElementById("arrow1").style.transform="rotate(180deg)";
										$("#"+tn+"-4").on('click',function()
										{
											myStopFunction();
											document.getElementById(tn+"-4").onclick="";
											$("#"+tn+"-4").css({"visibility":"hidden"});
											$("#"+tn+"-3").css({"visibility":"visible"});
											$("#"+tn+"-3").animate({"position":"absolute","left":"180px","top":"130px"},1500,
												function()
												{
													$("#"+tn+"-3").animate({"position":"absolute","top":"155px"},650,
														function()
														{
															$("#"+tn+"-3").css({"visibility":"hidden"});
															$("#"+tn+"-9").css({"visibility":"visible"});
															if(tn==8)
															{
																setToZero();
															}
															if(tn==9)
															{
																setToHundred();
															}
															if(tn==10)
															{
																document.getElementById(tn+"-12").innerHTML=t[p][0];
																setTimeout(function()
																{
																	removeTubeFromMeter();
																},750);
															}
															if(tn==11)
															{
																document.getElementById(tn+"-12").innerHTML="0.020";
																setTimeout(function()
																{
																	removeTubeFromMeter();
																},750);
															}
														}
													);
												}
											);
										});
									},500);
								}
							);
						});
					});
				},500);
			});
		  });
		});
	},500);	
}

function setToZero()
{
	myInt=setInterval(function(){animatearrow();},500);
	document.getElementById("arrow1").style="position:absolute; left:228px; top:422px; height:30px; z-index:10px; visibility:visible;";
	document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
	document.getElementById("arrow1").style.msTransform="rotate(180deg)";
	document.getElementById("arrow1").style.transform="rotate(180deg)";
	$("#8-13").on('click',function()
	{
		myStopFunction();
		document.getElementById("8-13").onclick="";
		$("#8-13").css({"visibility":"hidden"});
		$("#8-14").css({"visibility":"visible"});
		setTimeout(function()
		{
			document.getElementById("8-12").innerHTML="0.000";
			$("#8-14").css({"visibility":"hidden"});
			$("#8-15").css({"visibility":"visible"});
			setTimeout(function()
			{
				$("#8-15").css({"visibility":"hidden"});
				removeTubeFromMeter();
			},750);
		},250);
	});
}

function setToHundred()
{
	myInt=setInterval(function(){animatearrow();},500);
	document.getElementById("arrow1").style="position:absolute; left:225px; top:352px; height:30px; z-index:10px; visibility:visible;";
	document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
	document.getElementById("arrow1").style.msTransform="rotate(180deg)";
	document.getElementById("arrow1").style.transform="rotate(180deg)";
	$("#9-13").on('click',function()
	{
		myStopFunction();
		document.getElementById("9-13").onclick="";
		$("#9-13").css({"visibility":"hidden"});
		$("#9-14").css({"visibility":"visible"});
		setTimeout(function()
		{
			document.getElementById("9-12").innerHTML="100.00";
			$("#9-14").css({"visibility":"hidden"});
			$("#9-15").css({"visibility":"visible"});
			setTimeout(function()
			{
				$("#9-15").css({"visibility":"hidden"});
				removeTubeFromMeter();
			},750);
		},250);
	});
}

function removeTubeFromMeter()
{
	myInt=setInterval(function(){animatearrow();},500);
	document.getElementById("arrow1").style="visibility:visible; position:absolute; left:192px; top:265px; height:35px; z-index:10;";
	document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
	document.getElementById("arrow1").style.msTransform="rotate(180deg)";
	document.getElementById("arrow1").style.transform="rotate(180deg)";
	$("#"+tn+"-9").on('click',function()
	{
		myStopFunction();
		document.getElementById(tn+"-9").onclick="";
		$("#"+tn+"-9").css({"visibility":"hidden"});
		$("#"+tn+"-3").css({"visibility":"visible"});
		$("#"+tn+"-3").animate({"position":"absolute","top":"150px"},250,
		function()
		{
			$("#"+tn+"-3").animate({"position":"absolute","left":"300px","top":"370px"},1500,
			function()
			{
				$("#"+tn+"-3").css({"visibility":"hidden"});
				$("#"+tn+"-17").css({"visibility":"visible"});
				setTimeout(function()
				{
					myInt=setInterval(function(){animatearrow();},500);
					document.getElementById("arrow1").style="visibility:visible; position:absolute; left:245px; top:225px; height:35px; z-index:10;";
					document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
					document.getElementById("arrow1").style.msTransform="rotate(270deg)";
					document.getElementById("arrow1").style.transform="rotate(270deg)";
					$("#"+tn+"-8").on('click',function()
					{
						myStopFunction();
						document.getElementById(tn+"-8").onclick="";
						$("#"+tn+"-8").css({"visibility":"hidden"});
						$("#"+tn+"-7").css({"visibility":"visible"});
						$("#"+tn+"-7").animate({"position":"absolute","top":"80px"},650,
						function()
						{
							$("#"+tn+"-7").animate({"position":"absolute","left":"482.5px","top":"315px"},1500,
							function()
							{
								$("#"+tn+"-7").css({"visibility":"hidden"});
								$("#"+tn+"-18").css({"visibility":"visible"});
								setTimeout(function()
								{
									myInt=setInterval(function(){animatearrow();},500);
									document.getElementById("arrow1").style="visibility:visible; position:absolute; left:320px; top:460px; height:35px; z-index:10;";
									document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
									document.getElementById("arrow1").style.msTransform="rotate(180deg)";
									document.getElementById("arrow1").style.transform="rotate(180deg)";
									$("#"+tn+"-17").click(function()
									{
										myStopFunction();
										$("#"+tn+"-17").click(function(){});
										$("#"+tn+"-17").css({"visibility":"hidden"});
										$("#"+tn+"-3").css({"visibility":"visible"});
										$("#"+tn+"-3").animate({"position":"absolute","left":"180px","top":"130px"},1500,
											function(){
												$("#"+tn+"-3").animate({"position":"absolute","top":"155px"},300,
													function()
													{
														$("#"+tn+"-3").css({"visibility":"hidden"});
														$("#"+tn+"-16").css({"visibility":"visible"});
														if(tn==9)
														{
															validateAnswer(0,0,"150px","100px");
														}
														if(tn==10)
														{
															$("#db").fadeIn(500);
														}
														if(tn==8 || tn==11)
														{
															document.getElementById("nextButton").style.visibility="visible";
														}
													}
												);
											}
										);
									});
								},500);
							}
							);
						}
						);
					});
				},500);
			});	
		});
	});
}

function dispTurb()
{
	$("#db").css({"visibility":"hidden"});
	$("#10-18").css({"visibility":"hidden"});
	for(i=0;i<=5;i++)
	{
		$("#10-2"+i).css({"visibility":"visible"});
		$("#p10-3"+i).css({"visibility":"visible"});
		document.getElementById("p10-3"+i).innerHTML=t[p][i]+" </br>NTU";
	}
	//document.getElementById("nextButton").style.visibility="visible";
	validateAnswer(2,0,"150px","100px");
}

function checkInference()
{
	var str;
	document.getElementById("ans").style.visibility="visible";
	if($("input[name='inf']:checked").val()==1)
	{
		document.getElementById("ans").innerHTML="Correct answer!";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Answer is "+xs+"mg/l";
	}

	setTimeout(function()
	{
		document.getElementById("inference").style.visibility="hidden";
		document.getElementById("infAns").innerHTML="The optimum quantity of Alum required for the given sample with turbidity "+ys+"NTU is "+xs+"mg/l.";
		$("#infAns").fadeIn(750);
	},1000);
}
