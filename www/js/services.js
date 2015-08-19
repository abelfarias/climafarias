angular.module('starter.services', [])

.factory('Unidades', function() {
	var unidades = 'metric';
  return {
    set: function(unidad) {
      unidades = unidad;
    },
    get: function() {
      return unidades;
    }
  };
})
.factory('Ciudad', function() {
	var unidades = 'cancun';
  return {
    set: function(unidad) {
      unidades = unidad;
    },
    get: function() {
      return unidades;
    }
  };
})
.factory('Cantidad', function() {
	var unidades = '1';
  return {
    set: function(unidad) {
      unidades = unidad;
    },
    get: function() {
      return unidades;
    }
  };
});
