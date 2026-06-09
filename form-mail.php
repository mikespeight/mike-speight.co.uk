<!doctype html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <!--<meta name="viewport" content="width=device-width, initial-scale=1.0">-->
    <meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=yes" name="viewport">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Mike Speight | Senior IT Consultant & Agile Delivery Professional</title>
    <meta name="description" content="Contact Mike Speight regarding IT consultancy, Agile delivery, Scrum, UX/UI architecture, SEO, digital strategy and contract or consultancy opportunities.">

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
<body class="update">

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
        <section class="main" id="contactContent">
            

            <?php
            ini_set('display_errors', 1);
            ini_set('display_startup_errors', 1);
            error_reporting(E_ALL);

           use PHPMailer\PHPMailer\PHPMailer;
           use PHPMailer\PHPMailer\Exception;

           require 'scripts/PHPMailer/src/Exception.php';
           require 'scripts/PHPMailer/src/PHPMailer.php';
           require 'scripts/PHPMailer/src/SMTP.php';

           /* echo "form-mail.php loaded<br>";
           echo "PHPMailer files loaded<br>"; */

           $config = require __DIR__ . '/Private/mail-config.php';

           /* echo "mail-config.php loaded<br>"; */

            if(isset($_POST['email'])) {
                 
               $email_to = "info@mike-speight.co.uk";
                 
                $email_subject = "On-line contact form submission from mike-speight.co.uk";
                 
                 
                function died($error) {
                    // your error code can go here
                    echo "<p>We are very sorry, but there were error(s) found with the form you submitted.</p> ";
                    echo "<p>These errors appear below.</p><br />";
                    echo $error."<br /><br />";
                    echo "<p>Please go back and fix these errors.</p><br />";
                    echo "<a class='backBtn' href='contact.html'>Back</a>";
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

                $email_exp = '/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/';

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
                 
                 
            // create PHPMailer email
            $mail = new PHPMailer(true);

            try {

                // SMTP configuration
                $mail->isSMTP();
                $mail->Host       = 'smtp.hostinger.com';
                $mail->SMTPAuth   = true;
                $mail->Username = $config['smtp_user'];
                $mail->Password = $config['smtp_pass'];
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
                $mail->Port       = 587;

                // Sender & recipient
                $mail->setFrom('info@mike-speight.co.uk', 'Mike Speight Website');
                $mail->addAddress('info@mike-speight.co.uk');

                // Reply-to visitor
                $mail->addReplyTo($email_from, $first_name . ' ' . $last_name);

                // Content
                $mail->isHTML(false);
                $mail->Subject = $email_subject;
                $mail->Body    = $email_message;

                $mail->send();

            } catch (Exception $e) {

                echo "<h3>Mail sending failed</h3>";
                echo "<p>Mailer Error: {$mail->ErrorInfo}</p>";
                exit;
            }
            ?>

            <?php 
              if ($reason == "downloadCV") {
                  echo "<h3>Thank you. Your CV download is ready.</h3>";
                  echo "<p>You can download my latest CV using the link below.</p>";
                  echo "<p><a class='button' href='documents/mike-speight-cv.pdf' target='_blank'>Download Mike Speight CV</a></p>";
              } elseif ($reason == "consultancy") {
                  echo "<p>Thank you for your consultancy enquiry. I will review your message and respond as soon as possible.</p>";
              } elseif ($reason == "agile") {
                  echo "<p>Thank you for your enquiry regarding project delivery or Agile support. I will review your message and respond as soon as possible.</p>";
              } elseif ($reason == "contract") {
                  echo "<p>Thank you for your contract or freelance enquiry. I will review the details and respond as soon as possible.</p>";
              } elseif ($reason == "general") {
                  echo "<p>Thank you for your message. I will respond as soon as possible.</p>";
              } else {
                  echo "<p>Thank you for your enquiry. I will respond as soon as possible.</p>";
              }
            ?>

             
            <!-- place your own success html below -->
             
            <!--<p>Thank you for contacting us. We will be in touch with you very soon.</p>-->
            <ul>
              <li class="button-row">
                <a id="backBtn" class="backBtn" href="contact.html">
                  <i class="icon icon-backward"></i>Back
                </a>
              </li>
            </ul>

            
        </section>
        <section id="social-links">
            <ul>
                <li>
                    <a href="https://twitter.com/Mike_Speight" target="_blank" title="Visit me on Twitter" class="twitter"><h4>Twitter</h4>
                        <span><i class="icon-social icon-twitter"></i></span></a>
                </li>

                <li>
                    <a href="https://www.facebook.com/mike.speight.14" target="_blank" title="Visit me on Facebook" class="facebook"><h4>facebook</h4>
                        <span><i class="icon-social icon-facebook"></i></span></a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/mikespeight/" target="_blank" title="Visit me on Linkedin" class="linkedin"><h4>linkedin</h4>
                        <span><i class="icon-social icon-linkedin"></i></span></a>
                </li>

                <li>
                    <a href="https://www.instagram.com/mikespeight3453/" target="_blank" title="Visit my Instagram profile" class="instagram"><h4>Instagram</h4>
                        <span><i class="icon-social icon-instagram"></i></span></a>
                </li>

                <li>
                    <a href="mailto:info@mike-speight.co.uk?subject=enquiry from mike-speight.co.uk website" class="mail"><h4>mail</h4>
                        <span><i class="icon-social icon-envelope"></i></span></a>
                </li>
            </ul>
        </section>
        <footer>
            <p>Mike Speight - <span>Senior IT Consultant & Digital Delivery Professional</span> - &copy; <span id="copy" style="font-size:100%; color: #333;"></span> mike-speight.co.uk</p>
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
 

