<?php
 if (isset($_REQUEST) && isset($_REQUEST['login']) && isset($_REQUEST['passw']))
 {
  if ($_REQUEST['login'] == 'demo' && $_REQUEST['passw'] == 'demo') { echo '{ok}'; }
   else { echo '{err}'; }
 } else { echo '{require}'; }
 exit;
?>