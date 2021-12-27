// Ejercicio 1

function isEditing(action) {
  return  action.includes('edit');
}

function save(user) {

  return true;
}

function crearUsuario(nowUser, action, can) {
  
  
  if (action.isEditing() ) {
    if (can === false) {
      return;
    }
  }

  var a =  Object.assign({}, nowUser);

if (nowUser.exists == true ) {
    a = null;

    var l = [ 'es', 'fr', 'en'];
  }

  //asigno la variable l
  a.languages = l;

  const result = this.save(a);
  if (result === true) {
    return false ;
  } else {
    return true;
  }
}

crearUsuario({ exists: false });