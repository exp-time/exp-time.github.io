$iconsDirectory = 'img/weatherIcons';
$icons = array_diff(scandir($iconsDirectory), array('..', '.')); // Exclude directory pointers
echo json_encode($icons);