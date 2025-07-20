<?php
header('Content-Type: application/json');

$json = file_get_contents('http://s03.diazol.hu:7162/status-json.xsl');
echo $json;