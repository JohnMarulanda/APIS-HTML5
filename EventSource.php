<?php
	header('Content-Type: text/event-stream');
	header('Cache-Control: no-cache');

	$time = date('r'); //hora del servidor
	echo "event: personalizado\n";
	echo "data: La hora del servidor es: {$time}\n\n"; //obligatoriamente los event source empiezan por data: y acaban en \n\n
	flush(); //limpiar
?>