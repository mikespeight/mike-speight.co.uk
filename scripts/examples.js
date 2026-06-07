"use strict"

var Portfolio = Portfolio || {};

Portfolio = {

	extend: function( name, obj ) {
		if (this[name] === undefined) {
			this[name] = obj;
		}
	}
};
window.Portfolio = Portfolio;
var port = Portfolio;

port.data = {};

var getexampledata = function() {
	port.data.examples = [
		{
			"name":"mtivity",
			"images":[
				"mtivity-screen-1.jpg",
				"mtivity-screen-2.jpg",
				"mtivity-screen-3.jpg",
				"mtivity-screen-4.jpg",
				"mtivity-screen-5.jpg",
				"mtivity-screen-6.jpg",
				"mtivity-screen-7.jpg"
			],
			"info":{
				"date":"Released: July 2018 – December 2019",
				"name":"Mitivity",
				"url":"https://www.mtivity.com/",
				"description":"Senior User Interface/User Experience Developer and UX Designer/Architect, for this internationally based company.",
				"working for":"Mtivity",
				"front end technologies used":"HTML5, CSS/CSS3, Responsive Design/Media Queries, jQuery, Angular, SASS, Gulp, FontAwesome 5, Bower, Bootstrap 4.",
				"back end technologies used":"ruby, asp.net, java(jsp), intersystems cache ",
				"CMS":"NA",
				"additional information":"To work remotely with their Marketing Acceleration Platform, to augment and generally improve the existing UI and to develop the UI/UX for new modules to be included in the platform. These include a module to add the facility for the user to visually see the details in their accounts via a dashboard that allows the inclusion of many types of charts, also modules for Guided Buying, Supplier Relationship Management etc. ",
				"free text":""
			}
		},
		{
			"name":"boc",
			"images":[
				"boc-screen-1.jpg",
				"boc-screen-2.jpg",
				"boc-screen-3.jpg",
				"boc-screen-4.jpg",
				"boc-screen-5.jpg",
				"boc-screen-6.jpg",
				"boc-screen-7.jpg"
			],
			"info":{
				"date":"Released: October 2018 – January 2019",
				"name":"London Borough of Culture",
				"url":"https://wfculture19.co.uk/",
				"description":"Senior Front End/UI and UX Architect, for this large local authority.",
				"working for":"London Borough of Waltham Forest",
				"front end technologies used":"HTML5, CSS/CSS3, Responsive Design/Media Queries, jQuery, Angular, LESS, Gulp, FontAwesome, Bower, Bootstrap3.",
				"back end technologies used":"PHP",
				"CMS":"Drupal 8",
				"additional information":"A one page campaign website to showcase Waltham Forest Council’s bid to become London’s first Borough of Culture and encourage people to pledge their support. After Waltham Forest was successfully named Borough of Culture 2019, the website was updated to showcase our work towards organising London Borough of Culture 2019. launch website to promote the London Borough of Waltham Forest being the first Borough of Culture.",
				"free text":""
			}
		},
		{
			"name":"weddings",
			"images":[
				"weddings-screen-1.jpg",
				"weddings-screen-2.jpg",
				"weddings-screen-3.jpg",
				"weddings-screen-4.jpg",
				"weddings-screen-5.jpg",
				"weddings-screen-6.jpg",
				"weddings-screen-7.jpg"
			],
			"info":{
				"date":"Completed June 2018 not released yet",
				"name":"Marry Me London",
				"url":"",
				"description":"Senior Front End/UI and UX Architect, for this large local authority.",
				"working for":"London Borough of Waltham Forest",
				"front end technologies used":"HTML5, CSS/CSS3, Responsive Design/Media Queries, jQuery, Angular, LESS, Gulp, FontAwesome, Bower, Bootstrap3.",
				"back end technologies used":"PHP",
				"CMS":"Drupal 8",
				"additional information":"The Marry Me website uses beautiful photography and content to promote the marriage and civil partnership services Waltham Forest Council offers and its venues.",
				"free text":""
			}
		},
		{
			"name":"elp",
			"images":[
				"elp-screen-1.jpg",
				"elp-screen-2.jpg",
				"elp-screen-3.jpg",
				"elp-screen-4.jpg",
				"elp-screen-5.jpg",
				"elp-screen-6.jpg"
			],
			"info":{
				"date":"Released August 2018",
				"name":"Eastern Legal Partnership",
				"url":"https://www.easternlegalpartnership.co.uk/",
				"description":"Senior Front End/UI and UX Architect, for this large local authority.",
				"working for":"London Borough of Waltham Forest",
				"front end technologies used":"HTML5, CSS/CSS3, Responsive Design/Media Queries, jQuery, Angular, LESS, Gulp, FontAwesome, Bower, Bootstrap3.",
				"back end technologies used":"PHP",
				"CMS":"Drupal 8",
				"additional information":"A corporate website to market and promote Waltham Forest Council’s legal services to other public bodies, in order to bring in a new income to the council.",
				"free text":""
			}
		},
		{
			"name":"wetlands",
			"images":[
				"wetlands-screen-1.jpg",
				"wetlands-screen-2.jpg",
				"wetlands-screen-3.jpg",
				"wetlands-screen-4.jpg",
				"wetlands-screen-5.jpg",
				"wetlands-screen-6.jpg"
			],
			"info":{
				"date":"Released October 2017",
				"name":"Walthamstow Wetlands",
				"url":"https://walthamstowwetlands.com/",
				"description":"Senior Front End/UI and UX Architect, for this large local authority.",
				"working for":"London Borough of Waltham Forest",
				"front end technologies used":"HTML5, CSS/CSS3, Responsive Design/Media Queries, jQuery, Angular, LESS, Gulp, FontAwesome, Bower, Bootstrap3.",
				"back end technologies used":"PHP",
				"CMS":"Drupal 8",
				"additional information":"I was engaged to be the senior Front-End, UX/UI Developer to a small team, who were tasked with creating a number of websites for the Local Authorities departments, who were commercialising their services to the general public. Including this brand new website to promote the newly opened Walthamstow Wetlands to the public and share activities, events and updates about the venue. Working the vast majority of the time remotely, this was one of approx. 15 websites produced in just over 2 years.",
				"free text":""
			}
		},
		{
				"name":"lbc",
				"images":[
					"lbc-screen-1.jpg",
					"lbc-screen-2.jpg",
					"lbc-screen-3.jpg",
					"lbc-screen-4.jpg",
					"lbc-screen-5.jpg",
					"lbc-screen-6.jpg"
				],
				"info":{
						"date":"May 2016 – May 2017",
						"name":"London Borough of Croydon",
						"url":"https://my.croydon.gov.uk/",
						"description":"Senior Front End/UI and UX Architect, for this large local authority.",
						"working for":"London Borough of Croydon",
						"front end technologies used":"HTML5, CSS/CSS3, Responsive Design/Media Queries, jQuery, Angular, LESS, Gulp, FontAwesome, Bower, Jasmine, Twitter Bootstrap3.",
						"back end technologies used":".net",
						"CMS":"",
						"additional information":"My role on this project was to Introduce and set up new technologies and methods of working to the front end stack, and to implement new page designs. I was also tasked with updating the mark-up to HTML5, adding new features and designing new functionality, to improve the user experience. We were working in an Agile environment in this large local authority.",
						"free text":""
				}
		},
		{
				"name":"ford",
				"images":[
						"ford-screen-1.jpg",
						"ford-screen-2.jpg",
						"ford-screen-3.jpg",
						"ford-screen-4.jpg",
						"ford-screen-mob-1.jpg",
						"ford-screen-mob-2.jpg",
						"ford-screen-mob-3.jpg",
						"ford-screen-mob-4.jpg"
				],
				"info":{
						"date":"Aug 2015 - May 2016",
						"name":"Ford",
						"url":"http://www.ford.co.uk",
						"description":"Senior User Interface Developer, for this Major car manufacturer.",
						"working for":"Cognifide",
						"front end technologies used":"HTML5, CSS/CSS3, Responsive Design/Media Queries, Object Orientated JavaScript, Angular, Modernizr, Require JS, SASS, FontAwesome, Foundation, Grunt, AEM (Adobe Experience Manager).",
						"back end technologies used":"Java",
						"CMS":"AEM (Adobe Experience Manager)",
						"additional information":"I was engaged by this major car manufacturer to, add new pages, features and functionality to this site as part of the europe wide re-launch/re-brand of their websites. All work was carried to strict Agile methodology",
						"free text":""
				}
		},
		{
				"name":"telegraph",
				"images":[
					"telegraph-screen-1.jpg",
					"telegraph-screen-2.jpg",
					"telegraph-screen-mob-1.jpg",
					"telegraph-screen-mob-2.jpg",
					"telegraph-screen-mob-3.jpg",
					"telegraph-screen-mob-4.jpg"
				],
				"info":{
						"date":"June 2015 - Aug 2015",
						"name":"Telegraph.co.uk",
						"url":"http://www.telegraph.co.uk/lifestyle/",
						"description":"Senior User Interface Developer, for this major on-line newspaper site.",
						"working for":"Cognifide",
						"front end technologies used":"HTML5, CSS/CSS3, Responsive Design/Media Queries, Object Orientated JavaScript, Angular, Modernizr, SASS, FontAwesome, Gulp, AEM (Adobe Experience Manager).",
						"back end technologies used":"Java",
						"CMS":"AEM (Adobe Experience Manager)",
						"additional information":"This assignment entailed; working in an agile environment, producing new pages, features and functionality, as part of the re-launch/re-brand of this major on-line newspaper. ",
						"free text":""
				}
		},
		{
				"name":"bidonthis",
				"images":[
						"bidonthis-screen-1.jpg",
						"bidonthis-screen-2.jpg"
				],
				"info":{
						"date":"Jan 2015 - May 2015",
						"name":"Bid on This",
						"url":"http://www.bidonthis.co.uk",
						"description":"Senior User Interface Developer, Scrum Master, for this new start-up, on-line auction site.",
						"working for":"Bid on This",
						"front end technologies used":"HTML5, CSS/CSS3, Responsive Design/Media Queries, Object Orientated JavaScript, Angular, SASS, Compass, FontAwesome, Grunt, Bower, Jasmine, Twitter Bootstrap3 WordPress.",
						"back end technologies used":"PHP, Mongo",
						"CMS":"Wordpress",
						"additional information":"This start-up on-line auction site engaged me as a senior front end developer. My duties included producing new adaptive layouts and styling to the main pages of the site including all user interactions, I was also asked to use my design/UX knowledge to introduce a consistent look and feel between the web application and the WordPress CMS. In addition, I was tasked with acting as scrum master on the project, mentoring and assisting the business team introduce agile techniques",
						"free text":""
				}
		},
		{
				"name":"market",
				"images":[
						"market-screen-1.jpg",
						"market-screen-2.jpg",
						"market-screen-3.jpg",
						"market-screen-4.jpg"
				],
				"info":{
						"date":"Sept 2014 - Dec 2014",
						"name":"Everything5pounds.com</br>Market.com",
						"url":"https://www.everything5pounds.com/",
						"description":"Senior User Interface Developer for this On-line e-commerce site for the owners of Camden Market",
						"working for":"Born Group",
						"front end technologies used":"HTML5, CSS3, jQuery, Modernizer.",
						"back end technologies used":"Java, JSP, Hybris.",
						"CMS":"Hybris",
						"additional information":"I was contracted by Born Group to act as the senior front end developer, on this project for the owners of Camden Market. The task was to re-skin and put a new Hybris back end on to their existing c-commerce site http://www.everything5pounds.com and to create a new and responsive sister site that used the same catalogue http://www.market.com. My responsibilities included, producing standard and responsive Page layouts and styling for all major pages, styling for the menu systems both mobile, desktop and to provide help, support and guidance to junior members of the team and back end developers",
						"free text":""
				}
		},
		{
				"name":"Hotels4u",
				"images":[
						"hotels4u-screen-1.jpg",
						"hotels4u-screen-2.png",
						"hotels4u-screen-4.jpg",
						"hotels4u-screen-5.jpg",
						"hotels4u-screen-6.jpg"
				],
				"info":{
						"date":"Mar 2014 – Sept 2014",
						"name":"Hotels4u.com",
						"url":"",
						"description":"Senior User Interface Developer for this On-line hotel booking site owned by the Thomas Cook Group.",
						"working for":"Hotels4u",
						"front end technologies used":"HTML5, CSS/CSS3, Object Orientated JavaScript, , jQuery, Modernizer, AJAX, LESS, Angular, Twitter Bootstrap 3, Responsive design, Media Queries.",
						"back end technologies used":"Microsoft .NET",
						"CMS":"",
						"additional information":"I was engaged by Hotels4u.com, who are part of the Thomas Cook group, to produce the front-end/UI for their new responsive, hotel search and booking, ecommerce site. My responsibilities included, producing all page layouts and styling, including media queries to enable the site to render correctly across a full range of devices, from mobiles in portrait mode, to large desktop displays, also to enable the site to offer different functionality dependant on display size and device.",
						"free text":""
				}
		},
		{
				"name":"pearson",
				"images":[

				],
				"info":{
						"date":"Oct 2013 – Mar 2014",
						"name":"Pearson",
						"url":"http://www.pearson.com",
						"description":"Senior User Interface Developer for this Major global publishing house",
						"working for":"Pearson Education",
						"front end technologies used":"HTML5, CSS/CSS3, Responsive Design/ Media Queries, Object Orientated JavaScript, jQuery, Underscore, AJAX, SASS, FontAwresome, Twitter Bootstrap, XSLT.",
						"back end technologies used":"XML, XOPUS",
						"CMS":"",
						"additional information":"I was contracted by this global publishing company, primarily to build and style the user interface to an XML based Global Content Authoring system. The system was built around the XOPUS XML editor and provided an interface that enabled authors to enter content to be stored in an XML schema that allowed it to be output to be in multiple formats. I also developed the front end to Pearson’s CHORUS (Content Hub, Organise, Re-Use, and Share) Extranet application. ",
						"free text":""
				}
		},
		{
				"name":"loreal",
				"images":[
						"loreal-screen-1.jpg",
						"loreal-screen-2.jpg",
						"loreal-screen-3.jpg",
						"loreal-screen-4.jpg"
				],
				"info":{
						"date":"Aug 2013 – Sept 2013",
						"name":"Loreal",
						"url":"",
						"description":"",
						"working for":"Rumpus Room",
						"front end technologies used":"HTML5, CSS/CSS3, Object Orientated JavaScript, HTML5 Video, jQuery, Modernizer, AJAX, LESS.",
						"back end technologies used":"Django",
						"CMS":"",
						"additional information":"I was engaged by this interactive media/video production agency to build a responsive front end for an interactive web application for L’Oreal advertising campaign for their Studio Line #Txt range that was required to work across a range of devices, with differences in functionality depending on the device being used. The application allowed users to upload a number of images or short videos that are then edited together with various pre-recorded video clips and a sound track, to produce a final video that can then be previewed, added to the site and entered into a competition via social media.",
						"free text":""
				}
		},
		{
				"name":"sportlabs",
				"images":[
						"sportlabs-screen-1.jpg",
						"sportlabs-screen-2.jpg",
						"sportlabs-screen-3.jpg",
						"sportlabs-screen-4.jpg"
				],
				"info":{
						"date":"Jan 2013– July 2013",
						"name":"Sportlabs",
						"url":"http://www.sportlabs.com/",
						"description":"",
						"working for":"Sportlabs",
						"front end technologies used":"HTML5, CSS3, Object Orientated JavaScript, JSON, jQuery, Knockout, Underscore, Parse, AJAX, Umbraco, Agile.",
						"back end technologies used":"ASP.Net, C#, RESTful API",
						"CMS":"",
						"additional information":"Because of my wide range of experience, I was contracted by this small start-up company, who specialise in sports related sites and mobile applications, to provide support in a variety of areas. My primary function was to help develop the web side of a tournament planning application for the Lawn Tennis Association.",
						"free text":""
				}
		},
		{
				"name":"rafclub",
				"images":[
					"rafclub-screen-1.jpg",
					"rafclub-screen-2.jpg",
					"rafclub-screen-3.jpg",
					"rafclub-screen-4.jpg",
					"rafclub-screen-5.jpg"
				],
				"info":{
						"date":"Oct 2012 – Jan 2013",
						"name":"The RAF Club",
						"url":"https://www.rafclub.org.uk/",
						"description":"",
						"working for":"MICROS-Fidelio",
						"front end technologies used":"HTML5, CSS/CSS3, JavaScript, jQuery,  AJAX, Orchard (.net) CMS, LESS, Twitter Bootstrap",
						"back end technologies used":"ASP.Net, C#",
						"CMS":"Orchard.NET",
						"additional information":"While working for Micros Fidelio I also worked with the team producing the New RAF Club Website.",
						"free text":""
				}
		},
		{
				"name":"thorntons",
				"images":[
						"thorntons-screen-1.jpg",
						"thorntons-screen-2.jpg",
						"thorntons-screen-3.jpg",
						"thorntons-screen-4.jpg",
						"thorntons-screen-5.jpg"
				],
				"info":{
						"date":"Oct 2012 – Jan 2013",
						"name":"Thorntons",
						"url":"http://www.thorntons.co.uk/",
						"description":"",
						"working for":"MICROS-Fidelio",
						"front end technologies used":"CSS/CSS3, Object Orientated JavaScript, jQuery, Knockout, Underscore, AJAX, JSON, Twitter Bootstrap.",
						"back end technologies used":"JAVA, JSP",
						"CMS":"Bespoke",
						"additional information":"I worked for this e-commerce solutions vendor, to work on various hospitality, travel and e-commerce retail sites, including <a href='http://www.thorntons.co.uk'>http://www.thorntons.co.uk</a> and <a href='http://scottishpassport.currencyandmore.com'>http://scottishpassport.currencyandmore.com</a> adding new functionality. ",
						"free text":""
				}
		},
		{
				"name":"tesco",
				"images":[

				],
				"info":{
						"date":"Aug 2012 – Oct 2012",
						"name":"Tesco Direct",
						"url":"http://www.tesco.com/direct/",
						"description":"I was engaged by this major retailer, to work as part of a team to add new functionality to enable the introduction of product variants to the <a href='http://www.tesco.com/direct'>http://www.tesco.com/direct</a> product detail and product listing pages. Also to investigate and recommend improvements to working methods and technologies, within UI dept, i.e. the introduction of Q-unit, for JavaScript unit testing",
						"working for":"Tesco",
						"front end technologies used":"XHTML, CSS/CSS3, Object Orientated JavaScript, jQuery, Q-unit JS unit testing, AJAX, Agile.",
						"back end technologies used":"JAVA, JSP",
						"CMS":"ATG",
						"additional information":"",
						"free text":""
				}
		},
		{
				"name":"hhGlobal",
				"images":[

				],
				"info":{
						"date":"Nov 2011– Jul 2012",
						"name":"HH Global<br />HHub",
						"url":"http://www.hhglobal.com/hhub/",
						"description":"",
						"working for":"HH Global",
						"front end technologies used":"XHTML/HTML5, CSS/CSS3, Object Orientated JavaScript, jQuery, AJAX, Agile.",
						"back end technologies used":"ASP.NET MVC 4, Razor View Engine",
						"CMS":"",
						"additional information":"I was engaged by this global print management house primarily to produce the UI and to recommend best practices from a User Experience perspective  to HHUB (A web based brand campaign management tool), and secondly, due to my agile experience to assist the project manager and offer guidance in adopting Agile/Scrum procedures. ",
						"free text":""
				}
		},
		{
				"name":"asos",
				"images":[
						"asos-screen-1.jpg",
						"asos-screen-2.jpg",
						"asos-screen-3.jpg",
						"asos-screen-4.jpg"
				],
				"info":{
						"date":"Sept 2011 – Nov 2011",
						"name":"ASOS",
						"url":"",
						"description":"",
						"working for":"ASOS",
						"front end technologies used":"XHTML/HTML5, CSS/CSS3, JavaScript, jQuery, AJAX.",
						"back end technologies used":"ASP.NET MVC 4, Razor View Engine",
						"CMS":"",
						"additional information":"This was a short term contract for this leading online fashion house. I was tasked with producing their online lookbook that is available to the trade and fashion press to show their up-coming collections, producing the front end and adding functionality to work cross browser and cross platform including iPad",
						"free text":""
				}
		},
		{
				"name":"mwmw",
				"images":[
						"mwmw-screen-1.jpg",
						"mwmw-screen-2.jpg",
						"mwmw-screen-3.jpg",
						"mwmw-screen-4.jpg",
						"mwmw-screen-5.jpg",
						"mwmw-screen-6.jpg",
						"mwmw-screen-7.jpg"
				],
				"info":{
						"date":"Oct 2010 – Sept 2011",
						"name":"BBC<br />Accessibility Help",
						"url":"http://www.bbc.co.uk/accessibility/",
						"description":"",
						"working for":"BBC FM&T",
						"front end technologies used":"Object Orientated JavaScript, JSON, jQuery, AJAX, CSS, XHTML",
						"back end technologies used":"",
						"CMS":"",
						"additional information":"I was working for the BBC's FM&T (Future Media & Technology) division, specifically working on the My Web My Way site <a href='www.bbc.co.uk/accessability'>www.bbc.co.uk/accessability</a>, among my responsibilities were to add functionality to the site, in particular.<ol><li>Object Orientated JavaScript that modifies the DOM and therefore the user experience, according to choices of disability type, operating system and browser, made by the user</li><li>Converting legacy JavaScript that switches stylesheets and text size according to the user’s choices, from the BBC’s Glow JavaScript library to jQuery.</li><li>The addition of a JavaScript client side search functionality.</li><li>The addition of social media sharing tools.</li></ol>I was also part of the remit to prepare the site for migration and to migrate the site on-to the BBC's Web Application Development Platform (Forge).",
						"free text":""
				}
		},
		{
				"name":"macmillan",
				"images":[

				],
				"info":{
						"date":"Oct 2010",
						"name":"Macmillan <br />The Biggest Thank you",
						"url":"http://www.biggestthankyou.org.uk/",
						"description":"",
						"working for":"Wickedweb",
						"front end technologies used":"XHTML, CSS, JavaScript",
						"back end technologies used":"ASP.Net, C#",
						"CMS":"",
						"additional information":"On this short term contract for the Sevenoaks based agency Wickedweb I created the HTML Mock-ups and stylesheets for The Biggest Thank You for Macmillan Cancer Support.",
						"free text":""
				}
		}];

}()
