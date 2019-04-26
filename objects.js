var playlist = {eminem: 'real slim'};

function updatePlaylist(playlistObj, name, title){
  playlistObj['name'] = title;
  return playlistObj
}

function removeFromPlaylist(playlistObj, name){
  delete playlistObj['name']
  return playlistObj;
}