// Ejercicio 1

function isEditing(action) {
  return  action === 'edit';
}

function save(user) {
  return true;
}

function crearUsuario(nowUser, action, can) {
  
  if (isEditing(action) && !can) {
    return;
  }

  var a =  Object.assign({}, nowUser);

  if (nowUser.exists) {
    a.languagesl = [ 'es', 'fr', 'en'];
  }

  return save(a);

}

crearUsuario({ exists: false });