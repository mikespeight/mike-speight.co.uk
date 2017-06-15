<!doctype html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <!--<meta name="viewport" content="width=device-width, initial-scale=1.0">-->
    <meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=yes" name="viewport">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mike Speight, frontend/UI Developer, On-Line Portfolio</title>
    <meta name="description " content="This is the on-line portfolio of Mike Speight,
    Mike is a freelance Frontend/UI Developer and Web Consultant based in Lingfield,
    Surrey in the South east of England.">

    <link type="image/x-icon" href="assets/images/favicon.ico?" rel="icon">

    <!-- Google webmaster tools meta tag DO NOT REMOVE -->
    <meta name="google-site-verification" content="DFziy1QnQYQdvfn4rC4yOmOuS1_naBC15bHg29oLLJ8" />

    <link href="css/mike-speight.css" rel="stylesheet" />
    <link href="css/animate.css" rel="stylesheet" />
    <link href="css/flexslider.css" rel="stylesheet" />
    <link href="css/jquery.sidr.light.css" rel="stylesheet" />

    <script type="text/javascript" src="scripts/jquery-1.10.2.js"></script>
    <script type="text/javascript" src="scripts/jquery-ui-1.10.2/jquery-ui-1.10.2.custom.js"></script>
    <script type="text/javascript" src="scripts/jquery.sidr.js"></script>
    <script type="text/javascript" src="scripts/jquery.flexslider.js"></script>
    <script type="text/javascript" src="scripts/underscore-min.js"></script>
    <script type="text/javascript" src="scripts/modernizr-latest-development.js"></script>
    <script type="text/javascript" src="scripts/online-portfolio.js"></script>

</head>
<body>

<div id="page-wrapper">
    <div id="top-menu-bar">
        <nav>
            <a href="./" class="logo"><span class="first">mike-</span><span class="second">speight</span><span class="third">.co.uk</span></a>
            <ul class="main-nav">
                <li class="menu-item">
                    <span><a href="index.html">Home</a></span>
                </li>
                <li class="menu-item">
                    <span><a href="portfolio.html">Portfolio</a></span>
                </li>
                <li class="menu-item">
                    <span><a href="about.html">About</a></span>
                </li>
                <li class="menu-item">
                    <span><a href="contact.html">Contact</a></span>
                </li>
            </ul>
        </nav>
    </div>
    <div id="fixed-menu">
        <nav>
            <a href="./" class="logo"><span class="first">mike-</span><span class="second">speight</span><span class="third">.co.uk</span></a>
                <span id="menu-switch"><a><i class="icon icon-reorder"></i></a></span>
            <ul class="main-nav">
                <li class="menu-item">
                    <span><a href="index.html">Home</a></span>
                </li>
                <li class="menu-item">
                    <span><a href="portfolio.html">Portfolio</a></span>
                </li>
                <li class="menu-item">
                    <span><a href="about.html">About</a></span>
                </li>
                <li class="menu-item">
                    <span><a href="contact.html">Contact</a></span>
                </li>
            </ul>
        </nav>
        <nav id="mobile">
            <ul class="mobile-nav">
                <li class="menu-item">
                    <span><a href="index.html">Home</a></span>
                </li>
                <li class="menu-item">
                    <span><a href="portfolio.html">Portfolio</a></span>
                </li>
                <li class="menu-item">
                    <span><a href="about.html">About</a></span>
                </li>
                <li class="menu-item">
                    <span><a href="contact.html">Contact</a></span>
                </li>
            </ul>
        </nav>
    </div>

    <section id="container">
        <section id="contactContent">
            

            <?php
            if(isset($_POST['email'])) {
                 
                // CHANGE THE TWO LINES BELOW
                $email_to = "info@mike-speight.co.uk";
                 
                $email_subject = "On-line portfolio contact form submission";
                 
                 
                function died($error) {
                    // your error code can go here
                    echo "<p>We are very sorry, but there were error(s) found with the form you submitted.</p> ";
                    echo "<p>These errors appear below.</p><br />";
                    echo $error."<br /><br />";
                    echo "<p>Please go back and fix these errors.</p><br />";
                    echo "<a class='backBtn' href='#'>Back</a>";
                    die();
                }
                 
                // validation expected data exists
                if(!isset($_POST['first-name']) || !isset($_POST['last-name']) || !isset($_POST['email']) || !isset($_POST['reason'])) {
                    died('We are sorry, but there appears to be a problem with the form you submitted.');       
                }
                 
                $first_name = $_POST['first-name']; // required
                $last_name = $_POST['last-name']; // required
                $company = $_POST['company']; // not required
                $telephone = $_POST['telephone']; // not required
                $email_from = $_POST['email']; // required
                $reason = $_POST['reason']; // required
                $comments = $_POST['free-text']; // not required
                 
                $error_message = "";

                $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

                if(!preg_match($email_exp,$email_from)) {
                  $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
                }

                $string_exp = "/^[A-Za-z .'-]+$/";

                if(!preg_match($string_exp,$first_name)) {
                  $error_message .= 'The First Name you entered does not appear to be valid.<br />';
                }

                if(!preg_match($string_exp,$last_name)) {
                  $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
                }

                if(strlen($error_message) > 0) {
                  died($error_message);
                }
                $email_message = "Form details below.\n\n";
                 
                function clean_string($string) {
                  $bad = array("content-type","bcc:","to:","cc:","href");
                  return str_replace($bad,"",$string);
                }
                 
                $email_message .= "First Name: ".clean_string($first_name)."\n";
                $email_message .= "Last Name: ".clean_string($last_name)."\n";
                $email_message .= "Company: ".clean_string($company)."\n";
                $email_message .= "Telephone: ".clean_string($telephone)."\n";
                $email_message .= "Email: ".clean_string($email_from)."\n";
                $email_message .= "Reason: ".clean_string($reason)."\n";
                $email_message .= "Free text: ".clean_string($comments)."\n";
                 
                 
            // create email headers
            $headers = 'From: '.$email_from."\r\n".
            'Reply-To: '.$email_from."\r\n" .
            'X-Mailer: PHP/' . phpversion();
            @mail($email_to, $email_subject, $email_message, $headers);  
            ?>

            <?php 
              if($reason == "downloadCV"){
                ?>
                <h3>Download CV</h3>
                <div id="download">
                    <a class="pdf" href="documents/Mike Speight CV 2017-v1.pdf">Latest CV in PDF format</a><br />
                    <a class="doc" href="documents/Mike Speight CV 2017-v1.docx">Latest CV in Word format</a>
                </div>
                <?php
              }
              elseif($reason == "availability"){
                ?>
                <h3>availability for contracts</h3>
                <p>Date when next avsailable for contract work: Imediate</p>
                <p>Notice period required before I can be available: N/A</p>
                <!--<p>I will contact you using the details you entered in the contact form, just as soon as I possibly can.</p>-->
                <?php
              }
              elseif($reason == "contract"){
                ?>
                <h3>specific contract requirement</h3>
                <p>I will contact you using the details you entered in the contact form, just as soon as I possibly can.</p>
                <p></p>
                <?php
              }
              else{
                ?>
                <h3>consultancy services</h3>
                <p>I will contact you using the details you entered in the contact form, just as soon as I possibly can.</p>
                <p></p>
                <?php
              }
            ?>

             
            <!-- place your own success html below -->
             
            <!--<p>Thank you for contacting us. We will be in touch with you very soon.</p>-->
            <ul>
              <li class="button-row">
                <button id="backBtn" class="backBtn"><i class="icon icon-backward"></i>Back</button>
              </li>
            </ul>

            
        </section>
        <section id="social-links">
            <ul>
                <li>
                    <a href="https://twitter.com/Mike_Speight" class="twitter"><h4>Twitter</h4>
                        <span><i class="icon-social icon-twitter"></i></span></a>
                </li>
                <li>
                    <a href="https://www.facebook.com/mike.speight.14" class="facebook"><h4>facebook</h4>
                        <span><i class="icon-social icon-facebook"></i></span></a>
                </li>
                <li>
                    <a href="http://www.linkedin.com/profile/view?id=19273800" class="linkedin"><h4>linkedin</h4>
                        <span><i class="icon-social icon-linkedin"></i></span></a>
                </li>

                <li>
                    <a href="https://plus.google.com/u/0/+MikeSpeight" class="google-plus"><h4>google plus</h4>
                        <span><i class="icon-social icon-google-plus"></i></span></a>
                </li>

                <li>
                    <a href="mailto:info@mike-speight.co.uk?subject=enquiry from portfolio" class="mail"><h4>mail</h4>
                        <span><i class="icon-social icon-envelope"></i></span></a>
                </li>
            </ul>
        </section>
        <footer>
            <p>Mike Speight's - <span>On-line Portfolio</span> - &copy; 2014 mike-speight.co.uk</p>
        </footer>
    </section>
</div>
<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-8402917-5', 'mike-speight.co.uk');
    ga('send', 'pageview');

</script>

</body>
</html>
<?php
}
die();
?>
 

