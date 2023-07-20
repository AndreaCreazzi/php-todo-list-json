<?php

// Dati

$database_path = __DIR__ . '/../../database/list.json';

$json_data = file_get_contents($database_path);

$list = json_decode($json_data, true);

header('Content_Type: application/json');

echo json_encode($list);
