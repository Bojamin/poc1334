<?php
ob_start();
?>
<body>
    
</body>
<?php
$content = ob_get_clean();
require_once("template.php");
?>