<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Replace contact@example.com with your real receiving email address
  $receiving_email_address = 'info@meghtree.co.in';

  if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
    include( $php_email_form );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }

  $contact = new PHP_Email_Form;
  $contact->ajax = true;

  $sanitized_name = filter_var(trim($_POST['name'] ?? ''), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
  $sanitized_email = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
  $sanitized_subject = filter_var(trim($_POST['subject'] ?? ''), FILTER_SANITIZE_FULL_SPECIAL_CHARS);

  if (empty($sanitized_name)) {
    die('Name is required.');
  }
  if (!$sanitized_email) {
    die('A valid email address is required.');
  }

  $contact->to = $receiving_email_address;
  $contact->from_name = $sanitized_name;
  $contact->from_email = $sanitized_email;
  $contact->subject = $sanitized_subject;

  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
  /*
  $contact->smtp = array(
    'host' => 'example.com',
    'username' => 'example',
    'password' => 'pass',
    'port' => '587'
  );
  */

  $contact->add_message($sanitized_name, 'From');
  $contact->add_message($sanitized_email, 'Email');
  isset($_POST['phone']) && $contact->add_message(filter_var(trim($_POST['phone']), FILTER_SANITIZE_FULL_SPECIAL_CHARS), 'Phone');
  $contact->add_message(filter_var(trim($_POST['message'] ?? ''), FILTER_SANITIZE_FULL_SPECIAL_CHARS), 'Message', 10);

  echo $contact->send();
?>
