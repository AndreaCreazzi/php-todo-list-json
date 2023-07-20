<?php

// preparazione database
$database_path = __DIR__ . '/../../database/list.json';

$json_data = file_get_contents($database_path);

$list = json_decode($json_data, true);

// API completo
$newlist = $_POST['list'] ?? null;
if ($newlist) {
    $list[] = $newlist;

    $json_list = json_encode($list);
    file_put_contents($database_path, $json_list);

    echo $newlist;
} else {
    header('Content_Type: application/json');

    echo json_encode($list);
};
