document.addEventListener("DOMContentLoaded", () => {
  // ==================== PARÁMETROS Y DATOS SIMULADOS ====================
  const PARAMETROS = {
    umbral_stock_bajo: 10,
    metodos_pago_permitidos: ["Efectivo", "Transferencia"],
  };

  let catalogoProductos = [
    {
      id: "PRD-01",
      nombre: "Café molido 500 gr (Libra)",
      precio: 36000,
      stock: 45,
    },
    { id: "PRD-02", nombre: "Torta chocolate", precio: 5000, stock: 10 },
    { id: "PRD-03", nombre: "Empanada", precio: 7000, stock: 2 },
    { id: "PRD-04", nombre: "Gaseosa", precio: 4000, stock: 0 },
  ];

  let movimientosFinancieros = [
    {
      fecha: "20/11",
      tipo: "Ingreso",
      concepto: "Café molido 500 gr x5",
      valor: 180000,
      estado: "Registrada",
    },
    {
      fecha: "20/11",
      tipo: "Ingreso",
      concepto: "Venta Empanadas x2",
      valor: 7000,
      estado: "Anulada",
    },
    {
      fecha: "21/11",
      tipo: "Egreso",
      concepto: "Compra fruta",
      valor: 45000,
      estado: "Registrada",
    },
    {
      fecha: "21/11",
      tipo: "Ingreso",
      concepto: "Venta Torta chocolate",
      valor: 5000,
      estado: "Registrada",
    },
    {
      fecha: "22/11",
      tipo: "Egreso",
      concepto: "Bolsas",
      valor: 30000,
      estado: "Registrada",
    },
  ];

  const formatoCOP = (valor) => "$ " + valor.toLocaleString("es-CO");

  const btnMenu = document.getElementById("btn-menu");
  const navDrawer = document.getElementById("nav-drawer");
  const navItems = document.querySelectorAll(".nav-item");
  const screens = document.querySelectorAll(".screen");
  const sessionRole = document.getElementById("session-role");

  const rolesPorPantalla = {
    "screen-p02": "Rol: Cajera_01",
    "screen-p04": "Rol: Jefe_Admin",
    "screen-p10": "Rol: Asesora_Fin",
  };

  btnMenu.addEventListener("click", () => {
    navDrawer.classList.toggle("hidden");
  });

  function cambiarPantalla(targetId) {
    screens.forEach((s) => s.classList.add("hidden"));
    const pantallaActiva = document.getElementById(targetId);
    if (pantallaActiva) pantallaActiva.classList.remove("hidden");

    navItems.forEach((item) => {
      item.classList.toggle("active", item.dataset.target === targetId);
    });

    if (sessionRole) sessionRole.textContent = rolesPorPantalla[targetId] || "";
    if (navDrawer) navDrawer.classList.add("hidden");

    if (targetId === "screen-p04") renderizarInventario(catalogoProductos);
    if (targetId === "screen-p10") renderizarReporte();
  }

  navItems.forEach((btn) => {
    btn.addEventListener("click", () => cambiarPantalla(btn.dataset.target));
  });

  const selectProducto = document.getElementById("producto");
  const inputPrecio = document.getElementById("precio_unitario");
  const inputCantidad = document.getElementById("cantidad");
  const selectMetodo = document.getElementById("metodo_pago");
  const totalVentaEl = document.getElementById("total-venta");
  const btnConfirmar = document.getElementById("btn-confirmar-venta");
  const btnLimpiar = document.getElementById("btn-limpiar-venta");
  const bannerP02 = document.getElementById("p02-banner");

  function cargarSelectProductos() {
    const seleccionActual = selectProducto.value;
    selectProducto.innerHTML = '<option value="">Elija un producto...</option>';

    catalogoProductos.forEach((prod) => {
      const opt = document.createElement("option");
      opt.value = prod.id;
      if (prod.stock === 0) {
        opt.textContent = `${prod.nombre} (Agotado)`;
        opt.disabled = true;
      } else {
        opt.textContent = `${prod.nombre} (Disp: ${prod.stock})`;
      }
      selectProducto.appendChild(opt);
    });

    selectProducto.value = seleccionActual;
  }

  function mostrarBannerP02(tipo, titulo, detalle) {
    bannerP02.className = `alert-banner alert-${tipo}`;
    const icono = tipo === "success" ? "✓" : "✕";
    bannerP02.innerHTML = `<strong>${icono}</strong><div><strong>${titulo}</strong><br>${detalle}</div>`;
    bannerP02.classList.remove("hidden");
  }

  function actualizarCalculosYBoton() {
    const prod = catalogoProductos.find((p) => p.id === selectProducto.value);
    const cant = parseInt(inputCantidad.value.trim(), 10);

    if (prod) {
      inputPrecio.value = formatoCOP(prod.precio);
      totalVentaEl.textContent =
        !isNaN(cant) && cant > 0 ? formatoCOP(prod.precio * cant) : "$ 0";
    } else {
      inputPrecio.value = "$ 0";
      totalVentaEl.textContent = "$ 0";
    }

    const regexEnteroPositivo = /^[1-9][0-9]*$/;
    const camposCompletos =
      prod !== undefined &&
      regexEnteroPositivo.test(inputCantidad.value.trim()) &&
      PARAMETROS.metodos_pago_permitidos.includes(selectMetodo.value);

    btnConfirmar.Kontaktdaten = !camposCompletos;
    btnConfirmar.disabled = !camposCompletos;
  }

  selectProducto.addEventListener("change", () => {
    document.getElementById("err-producto").textContent = "";
    bannerSymmetric = bannerP02.classList.add("hidden");
    actualizarCalculosYBoton();
  });

  inputCantidad.addEventListener("input", () => {
    document.getElementById("err-cantidad").textContent = "";
    bannerP02.classList.add("hidden");
    actualizarCalculosYBoton();
  });

  selectMetodo.addEventListener("change", () => {
    document.getElementById("err-metodo").textContent = "";
    actualizarCalculosYBoton();
  });

  document.getElementById("form-venta").addEventListener("submit", (e) => {
    e.preventDefault();

    const cantRaw = inputCantidad.value.trim();
    const prod = catalogoProductos.find((p) => p.id === selectProducto.value);
    const cant = parseInt(cantRaw, 10);

    if (!prod) return;

    // Validación RF-002: Stock disponible (incluye stock 0 o cantidad mayor al stock)
    if (prod.stock <= 0 || cant > prod.stock) {
      mostrarBannerP02(
        "error",
        "M-02: Stock insuficiente",
        `Solicitaste ${cant} unidades de ${prod.nombre}, pero hay ${prod.stock} disponibles.`,
      );
      inputCantidad.focus();
      return;
    }

    prod.stock -= cant;
    const valorTotal = prod.precio * cant;
    const nombreCorto = prod.nombre.split(" ")[0];

    movimientosFinancieros.unshift({
      fecha: "22/11",
      tipo: "Ingreso",
      concepto: `Venta ${nombreCorto} x${cant}`,
      valor: valorTotal,
      estado: "Registrada",
    });

    limpiarFormularioVenta(false);
    cargarSelectProductos();
    mostrarBannerP02(
      "success",
      "M-01: Venta registrada",
      `Venta por ${formatoCOP(valorTotal)} guardada. Inventario actualizado.`,
    );
  });

  function limpiarFormularioVenta(ocultarBanner = true) {
    selectProducto.value = "";
    inputPrecio.value = "$ 0";
    inputCantidad.value = "";
    selectMetodo.value = "";
    totalVentaEl.textContent = "$ 0";
    btnConfirmar.disabled = true;
    if (ocultarBanner) bannerP02.classList.add("hidden");
  }

  btnLimpiar.addEventListener("click", () => limpiarFormularioVenta(true));

  const inputFiltro = document.getElementById("filtro_producto");
  const btnFiltrar = document.getElementById("btn-filtrar");
  const tbodyInventario = document.getElementById("tbody-inventario");
  const errFiltro = document.getElementById("err-filtro");

  function renderizarInventario(lista) {
    tbodyInventario.innerHTML = "";

    if (lista.length === 0) {
      tbodyInventario.innerHTML = `<tr><td colspan="3" style="text-align:center; color:#64748B;">No se encontraron productos con ese criterio.</td></tr>`;
      return;
    }

    lista.forEach((prod) => {
      const tr = document.createElement("tr");
      if (prod.stock <= PARAMETROS.umbral_stock_bajo) {
        tr.classList.add("row-low-stock");
      }
      tr.innerHTML = `
        <td>${prod.nombre} ${prod.stock <= 10 ? "(!)" : ""}</td>
        <td class="num">${formatoCOP(prod.precio)}</td>
        <td class="num">${prod.stock}</td>
      `;
      tbodyInventario.appendChild(tr);
    });
  }

  btnFiltrar.addEventListener("click", () => {
    const texto = inputFiltro.value.trim().replace(/\s+/g, " ");
    inputFiltro.value = texto;
    errFiltro.textContent = "";

    if (texto === "") {
      renderizarInventario(catalogoProductos);
      return;
    }

    const regexFiltro = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s\-]{1,50}$/;
    if (!regexFiltro.test(texto)) {
      errFiltro.textContent =
        "Ingrese solo letras o números (máximo 50 caracteres).";
      return;
    }

    const normalizar = (str) =>
      str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    const filtrados = catalogoProductos.filter((p) =>
      normalizar(p.nombre).includes(normalizar(texto)),
    );
    renderizarInventario(filtrados);
  });

  function renderizarReporte() {
    let totalIngresos = 0;
    let totalEgresos = 0;
    const tbody = document.getElementById("tbody-movimientos");
    if (!tbody) return;
    tbody.innerHTML = "";

    movimientosFinancieros.forEach((mov) => {
      if (mov.tipo === "Ingreso" && mov.estado === "Registrada") {
        totalIngresos += Number(mov.valor);
      } else if (mov.tipo === "Egreso" && mov.estado === "Registrada") {
        totalEgresos += Number(mov.valor);
      }

      const tr = document.createElement("tr");
      if (mov.estado === "Anulada") tr.classList.add("row-anulada");

      tr.innerHTML = `
      <td>${mov.fecha}</td>
      <td>${mov.tipo}</td>
      <td>${mov.concepto} ${mov.estado === "Anulada" ? "(Anulada)" : ""}</td>
      <td class="num">${formatoCOP(mov.valor)}</td>
    `;
      tbody.appendChild(tr);
    });

    const balance = totalIngresos - totalEgresos;

    document.getElementById("kpi-ingresos").textContent =
      formatoCOP(totalIngresos);
    document.getElementById("kpi-egresos").textContent =
      formatoCOP(totalEgresos);

    const kpiBalanceEl = document.getElementById("kpi-balance");
    kpiBalanceEl.textContent =
      (balance < 0 ? "- " : "") + formatoCOP(Math.abs(balance));
    kpiBalanceEl.style.color = balance < 0 ? "#C0392B" : "#0A3D62";

    const maxVal = Math.max(totalIngresos, totalEgresos, 1);
    const altIn = Math.max(Math.round((totalIngresos / maxVal) * 90), 4);
    const altOut = Math.max(Math.round((totalEgresos / maxVal) * 90), 4);

    document.getElementById("chart-bars").innerHTML = `
    <div class="bar-pair">
      <div class="bar-in" style="height: ${altIn}px;" title="Ingresos: ${formatoCOP(totalIngresos)}"></div>
      <div class="bar-out" style="height: ${altOut}px;" title="Egresos: ${formatoCOP(totalEgresos)}"></div>
    </div>
  `;
  }
});
