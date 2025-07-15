<template>
  <ul class="menu bg-base-200 rounded-box w-56">
    <li><a @click="console.log('Proyectos')">Proyectos</a></li>
    <li>
      <details close>
        <summary>Seguridad</summary>
        <ul>
          <li><a @click="console.log('Rutas')">Rutas</a></li>
          <li><a @click="console.log('Permisos')">Permisos</a></li>
          <li>
            <details open>
              <summary>Admin</summary>
              <ul>
                <li><a @click="console.log('Roles')">Roles</a></li>
                <li><a @click="console.log('Scopes')">Scopes</a></li>
                <li><a @click="console.log('Usuarios')">Usuarios</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </details>
    </li>
    <li><a @click="console.log('Sistema')">Sistema</a></li>
  </ul>
</template>
