<?php
// reference the Dompdf namespace
require_once 'dompdf/autoload.inc.php';

use Dompdf\Dompdf;

if (!empty($_POST['pdf'])) {
$text = $_POST['pdf'];
    // instantiate and use the dompdf class
    $dompdf = new Dompdf();
    $dompdf->loadHtml($text);
    
    // (Optional) Setup the paper size and orientation
    //$dompdf->setPaper('A4', 'landscape');
    
    // Render the HTML as PDF
    $dompdf->render();
    
    // Output the generated PDF to Browser
    $dompdf->stream('file.pdf', array('Attachment'=>0));
}