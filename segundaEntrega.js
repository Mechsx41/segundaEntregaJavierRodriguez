// Iniciar Sesion
// user = coderuser
// password = 1234

//Array de objetos (productos)
const productos = [
    { nombre: "Manzana", precio: 2 },
    { nombre: "Naranja", precio: 3 },
    { nombre: "Plátano", precio: 1 }
  ];
  
  let dineroUsuario = 10;
  
  // Función para autenticar al usuario
  const autenticarUsuario = () => {
    const user = prompt("Introduce tu nombre de usuario:");
    const password = prompt("Introduce tu contraseña:");
  
    if (user === "coderuser" && password === "1234") {
      return true;
    } else {
      alert("Nombre de usuario o contraseña incorrectos.");
      return false;
    }
  };
  
  const comprarProducto = () => {
    const productoElegido = prompt("¿Qué producto quieres comprar? (Manzana/Naranja/Plátano)");
    const producto = productos.find(p => p.nombre.toLowerCase() === productoElegido.toLowerCase());
  
    if (producto) {
      if (dineroUsuario >= producto.precio) {
        dineroUsuario -= producto.precio;
        alert(`Has comprado una ${producto.nombre}. Te quedan ${dineroUsuario} unidades de dinero.`);
      } else {
        alert("No tienes suficiente dinero para comprar este producto.");
      }
    } else {
      alert("Producto no disponible.");
    }
  };
  
  const verProductos = () => {
    let mensaje = "Productos disponibles:\n";
    productos.forEach(p => {
      mensaje += `${p.nombre} - ${p.precio} unidades de dinero\n`;
    });
    alert(mensaje);
  };
  
  const filtrarProductosPorPrecio = (minPrecio) => {
    const productosFiltrados = productos.filter(p => p.precio >= minPrecio);
    let mensaje = "Productos filtrados:\n";
    productosFiltrados.forEach(p => {
      mensaje += `${p.nombre} - ${p.precio} unidades de dinero\n`;
    });
    alert(mensaje);
  };
  
  const ejecutarSimulador = () => {
    let continuar = true;
  
    while (continuar) {
      const opcion = prompt("Bienvenido a la tienda! \n1. Comprar producto\n2. Ver productos disponibles\n3. Filtrar productos por precio\n4. Salir");
  
      switch (opcion) {
        case "1":
          comprarProducto();
          break;
        case "2":
          verProductos();
          break;
        case "3":
          const minPrecio = parseFloat(prompt("Introduce el precio mínimo para filtrar productos:"));
          if (!isNaN(minPrecio)) {
            filtrarProductosPorPrecio(minPrecio);
          } else {
            alert("Por favor, introduce un número válido.");
          }
          break;
        case "4":
          continuar = false;
          alert("Gracias por visitar la tienda. ¡Hasta luego!");
          break;
        default:
          alert("Opción no válida. Por favor, elige 1, 2, 3 o 4.");
      }
    }
  };
  
  if (autenticarUsuario()) {
    ejecutarSimulador();
  }